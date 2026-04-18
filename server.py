from __future__ import annotations

import html
import json
import os
import re
import traceback
import urllib.error
import urllib.request
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
NOW = datetime(2026, 4, 18, 12, 0, 0)
API_URL = 'https://ark.cn-beijing.volces.com/api/v3/responses'


def load_env_file() -> None:
    env_file = ROOT / '.env'
    if not env_file.exists():
        return

    for raw_line in env_file.read_text(encoding='utf-8').splitlines():
        line = raw_line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, value = line.split('=', 1)
        os.environ.setdefault(key.strip(), value.strip())


load_env_file()
DEFAULT_MODEL = os.getenv('ARK_MODEL', 'doubao-seed-2-0-mini-260215')


def clamp(value: float, minimum: int = 1, maximum: int = 10) -> int:
    return max(minimum, min(maximum, round(value)))


def score_followers(value: int) -> int:
    if value < 20:
        return 1
    if value < 50:
        return 3
    if value < 100:
        return 4
    if value < 300:
        return 6
    if value < 1000:
        return 8
    return 10


def score_views(value: int) -> int:
    if value < 300:
        return 1
    if value < 1000:
        return 3
    if value < 3000:
        return 5
    if value < 10000:
        return 7
    if value < 50000:
        return 9
    return 10


def keyword_hits(text: str, keywords: list[str]) -> int:
    lowered = text.lower()
    return sum(1 for keyword in keywords if keyword.lower() in lowered)


def clean_text(value: str) -> str:
    return re.sub(r'\s+', ' ', html.unescape(value or '')).strip()


def shorten(value: Any, limit: int = 120) -> str:
    text = clean_text(str(value))
    if len(text) <= limit:
        return text
    return f"{text[:limit - 3]}..."


def log_event(stage: str, **fields: Any) -> None:
    timestamp = datetime.now().strftime('%H:%M:%S')
    parts = [f'{key}={shorten(value)}' for key, value in fields.items()]
    message = f'[{timestamp}] [{stage}]'
    if parts:
        message = f"{message} {' | '.join(parts)}"
    print(message, flush=True)


def build_question_context(question_url: str, lang: str) -> dict[str, str]:
    source_url = (question_url or '').strip()
    log_event('context.prepare', source_url=source_url or 'N/A', mode='llm-only')

    if lang == 'en':
        return {
            'questionTitle': 'To be inferred by the model',
            'questionDescription': 'The backend will not crawl Zhihu. The model should infer or summarize the question from the URL and the submitted context.',
            'sourceUrl': source_url,
        }

    return {
        'questionTitle': '由模型补全标题',
        'questionDescription': '后端不会抓取知乎内容，标题与描述将交给大模型结合链接和表单上下文自行补全。',
        'sourceUrl': source_url,
    }


def build_prompt(
    *,
    lang: str,
    account_positioning: str,
    question_url: str,
    created_at: str,
    followers: int,
    views: int,
    details: dict[str, str],
) -> str:
    if lang == 'en':
        return f"""
You must not crawl Zhihu. Infer the title and description only from the URL and form context.
Return final JSON only. No reasoning, no markdown, no extra text.

Account positioning: {account_positioning}
Question URL: {question_url}
Created at: {created_at}
Followers: {followers}
Views: {views}

Output exactly this shape with concise comments:
{{
  "full_score": 60,
  "total_score": 36,
  "evaluation_dimensions": [
    {{"dimension": "Emotion / Pain Point / Controversy", "score": 9, "comment": "short comment"}},
    {{"dimension": "Followers & Activity", "score": 1, "comment": "short comment"}},
    {{"dimension": "Search Traffic Potential", "score": 7, "comment": "short comment"}},
    {{"dimension": "Competition Saturation", "score": 4, "comment": "short comment"}},
    {{"dimension": "Track-to-Account Fit", "score": 10, "comment": "short comment"}},
    {{"dimension": "Monetization / Growth Value", "score": 5, "comment": "short comment"}}
  ],
  "conclusion": {{
    "traffic_growth": "short conclusion",
    "suitability_for_answering": "short conclusion"
  }},
  "metadata": {{
    "created_at": "{created_at}",
    "followers_count": {followers},
    "views_count": {views},
    "question_title": "model-inferred title",
    "question_description": "model-inferred description",
    "source_url": "{question_url}"
  }}
}}
""".strip()

    return f"""
你不能抓取知乎网页内容，只能根据链接和表单上下文做模型推断。
不要输出思考过程，不要输出 markdown，不要添加任何解释，只返回最终 JSON。

账号定位：{account_positioning}
问题链接：{question_url}
创建时间：{created_at}
关注人数：{followers}
浏览量：{views}

请严格输出下面这个 JSON 结构，comment 保持简短：
{{
  "full_score": 60,
  "total_score": 36,
  "evaluation_dimensions": [
    {{"dimension": "情绪 / 痛点 / 争议强度", "score": 9, "comment": "简短评语"}},
    {{"dimension": "关注者数量 & 活跃度", "score": 1, "comment": "简短评语"}},
    {{"dimension": "搜索流量潜力", "score": 7, "comment": "简短评语"}},
    {{"dimension": "赛道竞争饱和度", "score": 4, "comment": "简短评语"}},
    {{"dimension": "赛道与账号匹配度", "score": 10, "comment": "简短评语"}},
    {{"dimension": "变现 / 涨粉价值", "score": 5, "comment": "简短评语"}}
  ],
  "conclusion": {{
    "traffic_growth": "简短结论",
    "suitability_for_answering": "简短结论"
  }},
  "metadata": {{
    "created_at": "{created_at}",
    "followers_count": {followers},
    "views_count": {views},
    "question_title": "模型推断标题",
    "question_description": "模型推断描述",
    "source_url": "{question_url}"
  }}
}}
""".strip()


def extract_response_text(data: dict[str, Any]) -> str:
    if isinstance(data.get('output_text'), str) and data['output_text'].strip():
        return data['output_text'].strip()

    collected: list[str] = []
    for item in data.get('output', []):
        for content in item.get('content', []):
            text = content.get('text')
            if isinstance(text, str) and text.strip():
                collected.append(text.strip())

    if collected:
        return '\n'.join(collected)

    choices = data.get('choices', [])
    if choices:
        message = choices[0].get('message', {})
        content = message.get('content')
        if isinstance(content, str):
            return content.strip()

    raise ValueError('No output text found from LLM response')


def extract_json_block(text: str) -> dict[str, Any]:
    cleaned = re.sub(r'^```(?:json)?|```$', '', text.strip(), flags=re.MULTILINE).strip()
    match = re.search(r'\{.*\}', cleaned, re.DOTALL)
    if not match:
        raise ValueError('No JSON object found in model response')
    return json.loads(match.group(0))


def get_decision(total: int, lang: str) -> tuple[str, str, str]:
    if lang == 'en':
        if total >= 48:
            return 'Highly Recommended', 'High Priority', 'Invest first'
        if total >= 36:
            return 'Cautious Investment', 'Medium-low Priority', 'Use as supporting content'
        return 'Low Priority', 'Low Priority', 'Skip or lower the effort'

    if total >= 48:
        return '强烈推荐', '高优先级', '建议优先投入'
    if total >= 36:
        return '谨慎投入', '中低优先级', '作为补充布局'
    return '低优先级', '低优先级', '建议跳过或降配'


def default_dimension_labels(lang: str) -> list[str]:
    if lang == 'en':
        return [
            'Emotion / Pain Point / Controversy',
            'Followers & Activity',
            'Search Traffic Potential',
            'Competition Saturation',
            'Track-to-Account Fit',
            'Monetization / Growth Value',
        ]
    return [
        '情绪 / 痛点 / 争议强度',
        '关注者数量 & 活跃度',
        '搜索流量潜力',
        '赛道竞争饱和度',
        '赛道与账号匹配度',
        '变现 / 涨粉价值',
    ]


def normalize_metric_item(item: Any, *, index: int, lang: str) -> dict[str, Any]:
    labels = default_dimension_labels(lang)
    fallback_label = labels[index] if index < len(labels) else ('Unknown Dimension' if lang == 'en' else '未知维度')
    default_comment = 'Simplified model output normalized by the system.' if lang == 'en' else '模型返回较简略，系统已自动规范化。'

    if isinstance(item, dict):
        label = str(item.get('dimension') or item.get('label') or item.get('name') or fallback_label).strip() or fallback_label
        score_raw = item.get('score', item.get('value', item.get('rating', 5)))
        try:
            score = clamp(float(score_raw or 0))
        except (TypeError, ValueError):
            score = 5
        comment = str(item.get('comment') or item.get('analysis') or item.get('desc') or default_comment).strip() or default_comment
        return {'label': label, 'score': score, 'comment': comment}

    if isinstance(item, str):
        return {'label': fallback_label, 'score': 5, 'comment': item.strip() or default_comment}

    return {'label': fallback_label, 'score': 5, 'comment': default_comment}


def map_llm_result(raw: dict[str, Any], *, lang: str, details: dict[str, str]) -> dict[str, Any]:
    raw_metrics = raw.get('evaluation_dimensions') or raw.get('dimensions') or raw.get('scores') or []
    metrics = [normalize_metric_item(item, index=index, lang=lang) for index, item in enumerate(raw_metrics)]

    if not metrics:
        raise ValueError('Model response does not contain evaluation dimensions')

    labels = default_dimension_labels(lang)
    while len(metrics) < len(labels):
        metrics.append(normalize_metric_item({}, index=len(metrics), lang=lang))

    metrics = metrics[: len(labels)]

    total = int(raw.get('total_score') or raw.get('total') or raw.get('totalScore') or sum(metric['score'] for metric in metrics))
    full_score = int(raw.get('full_score') or raw.get('max_score') or raw.get('fullScore') or 60)
    level, hero_badge, hero_action = get_decision(total, lang)
    conclusion = raw.get('conclusion', {}) or {}
    if isinstance(conclusion, str):
        conclusion = {
            'traffic_growth': conclusion,
            'suitability_for_answering': conclusion,
        }

    if lang == 'en':
        summary = f'For "{details["questionTitle"]}", the model has completed the structured evaluation and returned {total}/{full_score}.'
        title = 'Zhihu Question Multi-factor Evaluation'
        final_conclusion = conclusion.get('suitability_for_answering', 'No conclusion returned.')
        traffic_verdict = conclusion.get('traffic_growth', 'No traffic verdict returned.')
        answer_verdict = conclusion.get('suitability_for_answering', 'No suitability verdict returned.')
    else:
        summary = f'针对“{details["questionTitle"]}”，模型已经完成结构化分析并返回 {total}/{full_score} 的评分结果。'
        title = '知乎问题多维度打分评估表'
        final_conclusion = conclusion.get('suitability_for_answering', '暂无结论')
        traffic_verdict = conclusion.get('traffic_growth', '暂无流量判断')
        answer_verdict = conclusion.get('suitability_for_answering', '暂无回答建议')

    metadata = raw.get('metadata', {}) or {}
    resolved_title = str(metadata.get('question_title') or metadata.get('title') or metadata.get('questionTitle') or details['questionTitle']).strip() or details['questionTitle']
    resolved_description = str(metadata.get('question_description') or metadata.get('description') or metadata.get('questionDescription') or details['questionDescription']).strip() or details['questionDescription']
    resolved_source_url = str(metadata.get('source_url') or metadata.get('url') or metadata.get('sourceUrl') or details['sourceUrl']).strip()

    if lang == 'en':
        summary = f'For "{resolved_title}", the model has completed the structured evaluation and returned {total}/{full_score}.'
    else:
        summary = f'针对“{resolved_title}”，模型已经完成结构化分析并返回 {total}/{full_score} 的评分结果。'

    return {
        'title': title,
        'total': total,
        'maxScore': full_score,
        'level': level,
        'conclusion': final_conclusion,
        'trafficVerdict': traffic_verdict,
        'answerVerdict': answer_verdict,
        'summary': summary,
        'heroAction': hero_action,
        'heroBadge': hero_badge,
        'metadata': {
            'createdAt': str(metadata.get('created_at') or metadata.get('create_time') or metadata.get('createdAt') or NOW.strftime('%Y-%m-%d %H:%M:%S')),
            'followers': int(metadata.get('followers_count') or metadata.get('follow_count') or metadata.get('followers') or 0),
            'views': int(metadata.get('views_count') or metadata.get('view_count') or metadata.get('views') or 0),
            'questionTitle': resolved_title,
            'questionDescription': resolved_description,
            'sourceUrl': resolved_source_url,
        },
        'metrics': metrics,
        'source': 'llm',
    }


def call_llm(prompt: str) -> dict[str, Any]:
    api_key = os.getenv('ARK_API_KEY', '').strip()
    log_event('llm.prepare', model=DEFAULT_MODEL, prompt_preview=prompt, has_api_key=bool(api_key))
    if not api_key:
        raise RuntimeError('ARK_API_KEY is not configured')

    payload = {
        'model': DEFAULT_MODEL,
        'max_output_tokens': 2200,
        'input': [
            {
                'role': 'user',
                'content': [
                    {
                        'type': 'input_text',
                        'text': prompt,
                    }
                ],
            }
        ],
    }

    request = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}',
        },
        method='POST',
    )

    with urllib.request.urlopen(request, timeout=90) as response:
        raw = json.loads(response.read().decode('utf-8'))

    model_text = extract_response_text(raw)
    log_event('llm.ok', response_preview=model_text)
    return extract_json_block(model_text)


def heuristic_report(payload: dict[str, Any], details: dict[str, str], created_at: datetime, lang: str) -> dict[str, Any]:
    account_positioning = str(payload.get('accountPositioning', '')).strip()
    followers = max(0, int(payload.get('followers', 0) or 0))
    views = max(0, int(payload.get('views', 0) or 0))
    age_days = max(1, (NOW - created_at).days)
    follower_view_ratio = views / max(followers, 1)
    text_blob = ' '.join([account_positioning, details['questionTitle'], details['questionDescription'], details['sourceUrl']])

    emotion_words = ['离职', '独立开发', '一人公司', 'ai', '焦虑', '失业', '值不值得', '要不要', '转型', '创业', 'worth', 'quit', 'startup', 'indie', 'solo']
    search_words = ['如何', '怎么', '为什么', '值不值得', '要不要', '是否', 'ai', '程序员', '独立开发', 'how', 'why', 'should', 'worth', 'developer']
    fit_words = ['程序员', '开发者', 'ai', '独立开发', '副业', '产品', '出海', '工程师', '创业', 'developer', 'engineer', 'indie', 'product']
    competition_words = ['ai', '副业', '赚钱', '独立开发', '创业', '程序员', 'startup', 'indie']

    emotion_score = clamp(4 + keyword_hits(text_blob, emotion_words) * 1.1 + (1 if '？' in text_blob or '?' in text_blob else 0))
    active_score = clamp(score_followers(followers) * 0.45 + score_views(views) * 0.4 + clamp(follower_view_ratio / 80, 1, 10) * 0.15)
    search_score = clamp(3 + keyword_hits(text_blob, search_words) * 1.05)
    fit_score = clamp(4 + keyword_hits(text_blob, fit_words) * 1.1)
    competition_score = clamp(8 - keyword_hits(text_blob, competition_words) * 0.8 + (1 if fit_score >= 8 else 0))
    monetize_score = clamp(emotion_score * 0.35 + fit_score * 0.35 + active_score * 0.3)
    total = emotion_score + active_score + search_score + competition_score + fit_score + monetize_score
    level, hero_badge, hero_action = get_decision(total, lang)

    if lang == 'en':
        freshness_note = 'The topic is still relatively fresh.' if age_days <= 30 else 'The topic is older and its lifecycle bonus is fading.'
        metrics = [
            {'label': 'Emotion / Pain Point / Controversy', 'score': emotion_score, 'comment': 'The topic carries visible tension and emotional resonance.' if emotion_score >= 7 else 'The emotional hook is relatively weak.'},
            {'label': 'Followers & Activity', 'score': active_score, 'comment': f'With {followers} followers and {views} views, the activity base is {"solid" if active_score >= 6 else "weak"}.'},
            {'label': 'Search Traffic Potential', 'score': search_score, 'comment': 'The title and description still show clear search intent.' if search_score >= 7 else 'Search intent exists but may not be strong enough.'},
            {'label': 'Competition Saturation', 'score': competition_score, 'comment': 'There is still some room to enter this topic.' if competition_score >= 6 else 'The topic is highly competitive and needs strong differentiation.'},
            {'label': 'Track-to-Account Fit', 'score': fit_score, 'comment': 'The topic aligns well with the account positioning.' if fit_score >= 7 else 'The alignment is only moderate and may need stronger positioning.'},
            {'label': 'Monetization / Growth Value', 'score': monetize_score, 'comment': 'The audience precision can support growth and conversion.' if monetize_score >= 6 else 'The traffic base limits growth efficiency for now.'},
        ]
        traffic_verdict = 'There is still some search and discussion value, but the natural traffic upside is limited.' if total >= 36 else 'Traffic upside appears limited at the moment.'
        answer_verdict = 'It can work as supporting content, but not as the primary growth target.' if total >= 36 else 'It is not recommended as a deep investment topic.'
        conclusion = 'Good as a supporting topic, but not the main target' if total >= 36 else 'Not worth investing too much time'
        summary = f'Fallback analysis completed for "{details["questionTitle"]}". Account fit is {fit_score}/10 and activity is {active_score}/10. {freshness_note}'
        title = 'Zhihu Question Multi-factor Evaluation'
    else:
        freshness_note = '问题发布时间较新，仍有一定观察窗口。' if age_days <= 30 else '问题发布时间已较久，生命周期红利正在减弱。'
        metrics = [
            {'label': '情绪 / 痛点 / 争议强度', 'score': emotion_score, 'comment': '问题本身具备较强代入感和讨论张力。' if emotion_score >= 7 else '问题的情绪冲突与痛点感偏弱。'},
            {'label': '关注者数量 & 活跃度', 'score': active_score, 'comment': f'当前关注 {followers}、浏览 {views}，互动基础{"较好" if active_score >= 6 else "偏弱"}。'},
            {'label': '搜索流量潜力', 'score': search_score, 'comment': '标题与描述呈现出明确搜索需求。' if search_score >= 7 else '搜索需求存在，但关键词强度仍有限。'},
            {'label': '赛道竞争饱和度', 'score': competition_score, 'comment': '赛道仍有切入空间。' if competition_score >= 6 else '赛道竞争偏强，需要更强差异化表达。'},
            {'label': '赛道与账号匹配度', 'score': fit_score, 'comment': '与当前账号定位较为契合。' if fit_score >= 7 else '与当前账号定位的贴合度一般。'},
            {'label': '变现 / 涨粉价值', 'score': monetize_score, 'comment': '受众精准度较好，具备一定承接价值。' if monetize_score >= 6 else '流量底盘有限，涨粉和变现效率偏低。'},
        ]
        traffic_verdict = '具备一定搜索和讨论空间，但自然流量增量有限。' if total >= 36 else '当前问题的自然流量增长空间较小。'
        answer_verdict = '可作为补充题材回答，但不建议重投入。' if total >= 36 else '不适合作为重点回答题。'
        conclusion = '适合作为补充题材，非核心主攻' if total >= 36 else '不建议投入过多精力'
        summary = f'已为“{details["questionTitle"]}”完成兜底分析。账号匹配度为 {fit_score}/10，当前活跃度为 {active_score}/10。{freshness_note}'
        title = '知乎问题多维度打分评估表'

    return {
        'title': title,
        'total': total,
        'maxScore': 60,
        'level': level,
        'conclusion': conclusion,
        'trafficVerdict': traffic_verdict,
        'answerVerdict': answer_verdict,
        'summary': summary,
        'heroAction': hero_action,
        'heroBadge': hero_badge,
        'metadata': {
            'createdAt': created_at.strftime('%Y-%m-%d %H:%M:%S'),
            'followers': followers,
            'views': views,
            'questionTitle': details['questionTitle'],
            'questionDescription': details['questionDescription'],
            'sourceUrl': details['sourceUrl'],
        },
        'metrics': metrics,
        'source': 'fallback',
    }


def evaluate_report(payload: dict[str, Any]) -> dict[str, Any]:
    lang = 'en' if str(payload.get('lang', 'zh')).lower().startswith('en') else 'zh'
    log_event(
        'request.payload',
        lang=lang,
        account_positioning=payload.get('accountPositioning', ''),
        question_url=payload.get('questionUrl', ''),
        created_at=payload.get('createdAt', ''),
        followers=payload.get('followers', 0),
        views=payload.get('views', 0),
    )

    created_raw = str(payload.get('createdAt', '')).strip()
    try:
        created_at = datetime.fromisoformat(created_raw)
    except ValueError:
        created_at = NOW

    details = build_question_context(str(payload.get('questionUrl', '')).strip(), lang)
    prompt = build_prompt(
        lang=lang,
        account_positioning=str(payload.get('accountPositioning', '')).strip() or ('General creator' if lang == 'en' else '通用创作者'),
        question_url=str(payload.get('questionUrl', '')).strip(),
        created_at=created_at.strftime('%Y-%m-%d %H:%M:%S'),
        followers=max(0, int(payload.get('followers', 0) or 0)),
        views=max(0, int(payload.get('views', 0) or 0)),
        details=details,
    )

    try:
        llm_raw = call_llm(prompt)
        report = map_llm_result(llm_raw, lang=lang, details=details)
        log_event('request.done', source=report.get('source'), total=report.get('total'), conclusion=report.get('conclusion'))
        return report
    except Exception as exc:
        log_event('llm.retry', reason=exc)
        retry_prompt = f"{prompt}\n\n再次强调：禁止输出思考过程、解释或 markdown；必须一次性返回合法 JSON，不能缺少 evaluation_dimensions、conclusion、metadata。"
        try:
            llm_raw = call_llm(retry_prompt)
            report = map_llm_result(llm_raw, lang=lang, details=details)
            log_event('request.done', source=report.get('source'), total=report.get('total'), conclusion=report.get('conclusion'))
            return report
        except Exception as retry_exc:
            log_event('llm.fallback', reason=retry_exc)
            report = heuristic_report(payload, details, created_at, lang)
            log_event('request.done', source=report.get('source'), total=report.get('total'), conclusion=report.get('conclusion'))
            return report


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self) -> None:
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.end_headers()

    def do_POST(self) -> None:
        if self.path != '/api/evaluate':
            self.send_error(404, 'Not Found')
            return

        content_length = int(self.headers.get('Content-Length', '0'))
        body = self.rfile.read(content_length)

        try:
            payload = json.loads(body.decode('utf-8') or '{}')
            report = evaluate_report(payload)
        except Exception as exc:
            log_event('request.error', error=exc)
            traceback.print_exc()
            self.send_response(400)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(exc)}, ensure_ascii=False).encode('utf-8'))
            return

        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(json.dumps(report, ensure_ascii=False).encode('utf-8'))


if __name__ == '__main__':
    server = ThreadingHTTPServer(('127.0.0.1', 4173), AppHandler)
    print('Serving Media Helper AI at http://127.0.0.1:4173')
    server.serve_forever()
