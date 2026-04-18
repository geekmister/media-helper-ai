const UI_TEXT = {
  zh: {
    pageTitle: 'Media Helper AI · 智能评估报告中心',
    brandSubtitle: 'Insight Docs Experience',
    navGuide: '指南',
    navReference: '参考',
    navExamples: '示例',
    navReport: '评估报告',
    navCta: '立即分析',
    langButton: 'EN',
    themeDark: '🌙 深色',
    themeLight: '☀️ 浅色',
    heroPill: 'AI 内容评估工作台',
    heroTitlePrefix: '输入账号与问题数据，',
    heroTitleAccent: '自动生成知乎问题评估报告',
    heroDesc: '现在的完整流程已经升级为：填写账号定位、问题链接、时间与流量数据，后台直接组装提示词并调用模型，最后把结果回填到下方高端报告视图。',
    heroPrimaryCta: '开始分析',
    heroSecondaryCta: '什么是 Media Helper AI?',
    heroGithubCta: 'GitHub',
    totalLabel: '综合评估得分',
    followersLabel: '关注人数',
    viewsLabel: '浏览量',
    heroOverview: '后台能力概览',
    heroEngineTitle: '提示词 + 模型分析引擎',
    heroActionLabel: '推荐动作',
    evaluatorKicker: '智能评估入口',
    evaluatorTitle: '最小核心链路已经打通',
    evaluatorDesc: '用户提交后，后台会直接按你的模板填充提示词，请求大模型接口，让模型自行补全标题与描述，解析结构化 JSON，最后回填到本页的分析报告区。',
    accountPositioningLabel: '账号定位',
    accountPositioningPlaceholder: '例如：程序员 / AI 工程师 / 独立开发者 / 一人 AI 公司',
    defaultAccountPositioning: '程序员 / AI 工程师 / 独立开发者 / 一人 AI 公司',
    questionUrlLabel: '问题链接',
    questionUrlPlaceholder: 'https://www.zhihu.com/question/xxxxxx',
    createdLabel: '问题创建时间',
    followersFormLabel: '关注人数',
    viewsFormLabel: '浏览量',
    submitLabel: '开始分析！',
    formIdle: '提交后会直接调用模型分析，并由模型补全标题与描述后回填下方报告。',
    flowKicker: '后台运算逻辑',
    flowTitle: '这条链路现在如何工作',
    flowStep1: '① 将问题链接、账号定位、创建时间、关注人数、浏览量直接组装进提示词。',
    flowStep2: '② 按你给的请求方式调用大模型接口，请模型自行补全标题、描述并严格输出 JSON 结构结果。',
    flowStep3: '③ 解析 JSON，映射为评分表、结论卡片、元数据和可视化图表，回填到当前页面。',
    reportKicker: '智能生成报告',
    reportSummary: (maxScore, total) => `满分 ${maxScore} 分 ｜ 综合总分 ${total} 分`,
    reportConclusion: (text) => `结论：${text}`,
    recommendLabel: '建议级别',
    scoreWord: 'score',
    scoreDimension: '评估维度',
    scoreValue: '打分',
    scoreComment: '分数评语',
    trafficTitle: '流量增量',
    answerTitle: '是否适合回答',
    metaTitle: '问题元数据',
    metaCreated: (value) => `创建时间：${value}`,
    metaFollowers: (value) => `关注人数：${value}`,
    metaViews: (value) => `总浏览量：${value}`,
    metaQuestionTitle: (value) => `模型补全标题：${value}`,
    metaSourceUrl: '问题来源链接',
    metaQuestionDesc: (value) => `模型补全描述：${value}`,
    metaQuestionDescEmpty: '模型补全描述会展示在这里。',
    capabilitiesKicker: '核心能力',
    capabilitiesTitle: '四个主卡片，延续参考站的展示节奏',
    cap1Title: '链接理解',
    cap1Desc: '把问题链接直接交给模型，让它结合上下文完成判断。',
    cap2Title: '模型评分',
    cap2Desc: '按你的提示词模板请求大模型并拿回结构化结果。',
    cap3Title: '报告回填',
    cap3Desc: '把 JSON 自动解析成高端可视化分析报告。',
    cap4Title: '快速扩展',
    cap4Desc: '后续可继续接入真实账号体系、历史记录和导出能力。',
    siteKicker: '站点结构',
    siteTitle: '文档型信息架构已同步搭建',
    siteSummary: '首页 + 指南页 + 参考页 + 示例页',
    guideCardDesc: '了解报告生成流程与页面组成。',
    referenceCardDesc: '查看字段定义、评分逻辑与组件规范。',
    examplesCardDesc: '查看更多报告版式与内容呈现模板。',
    computing: '后台正在调用模型分析...',
    done: '分析完成，报告已回填到下方页面。',
    doneFallback: '已完成纯前端本地分析；如连接 GMService，可自动切换为实时模型结果。',
    error: '生成失败，请确认 GMService 后台服务与模型配置可用。'
  },
  en: {
    pageTitle: 'Media Helper AI · Smart Evaluation Center',
    brandSubtitle: 'Insight Docs Experience',
    navGuide: 'Guide',
    navReference: 'Reference',
    navExamples: 'Examples',
    navReport: 'Report',
    navCta: 'Analyze Now',
    langButton: '中文',
    themeDark: '🌙 Dark',
    themeLight: '☀️ Light',
    heroPill: 'AI Content Evaluation Workspace',
    heroTitlePrefix: 'Input your account and question data,',
    heroTitleAccent: 'then generate a Zhihu evaluation report automatically',
    heroDesc: 'The full flow now works like this: enter account positioning, question link, time, and traffic data; the backend builds the prompt, calls the model, and fills the report below.',
    heroPrimaryCta: 'Start Analysis',
    heroSecondaryCta: 'What is Media Helper AI?',
    heroGithubCta: 'GitHub',
    totalLabel: 'Overall Score',
    followersLabel: 'Followers',
    viewsLabel: 'Views',
    heroOverview: 'Backend Overview',
    heroEngineTitle: 'Prompt + LLM Engine',
    heroActionLabel: 'Suggested Action',
    evaluatorKicker: 'Evaluation Entry',
    evaluatorTitle: 'The minimal core loop is ready',
    evaluatorDesc: 'After submission, the backend fills your prompt template, asks the model to infer the title and description, parses the structured JSON, and writes the result back into the report section.',
    accountPositioningLabel: 'Account Positioning',
    accountPositioningPlaceholder: 'For example: Programmer / AI Engineer / Indie Developer / Solo AI Founder',
    defaultAccountPositioning: 'Programmer / AI Engineer / Indie Developer / Solo AI Founder',
    questionUrlLabel: 'Question URL',
    questionUrlPlaceholder: 'https://www.zhihu.com/question/xxxxxx',
    createdLabel: 'Question Created Time',
    followersFormLabel: 'Followers',
    viewsFormLabel: 'Views',
    submitLabel: 'Start Analysis!',
    formIdle: 'After submission, the page will call the model directly and fill the report below.',
    flowKicker: 'Backend Logic',
    flowTitle: 'How the flow works now',
    flowStep1: '① Combine the question URL, account positioning, and traffic metrics directly into the prompt.',
    flowStep2: '② Call the LLM endpoint in your request format and ask the model to infer title/description and return strict JSON.',
    flowStep3: '③ Parse the JSON into score tables, conclusion cards, metadata, and charts on this page.',
    reportKicker: 'Generated Report',
    reportSummary: (maxScore, total) => `Max ${maxScore} points ｜ Total ${total} points`,
    reportConclusion: (text) => `Conclusion: ${text}`,
    recommendLabel: 'Recommendation Level',
    scoreWord: 'score',
    scoreDimension: 'Dimension',
    scoreValue: 'Score',
    scoreComment: 'Comment',
    trafficTitle: 'Traffic Growth',
    answerTitle: 'Suitability for Answering',
    metaTitle: 'Question Metadata',
    metaCreated: (value) => `Created: ${value}`,
    metaFollowers: (value) => `Followers: ${value}`,
    metaViews: (value) => `Views: ${value}`,
    metaQuestionTitle: (value) => `Model-inferred Title: ${value}`,
    metaSourceUrl: 'Source Link',
    metaQuestionDesc: (value) => `Model-inferred Description: ${value}`,
    metaQuestionDescEmpty: 'The model-inferred description will appear here.',
    capabilitiesKicker: 'Core Capabilities',
    capabilitiesTitle: 'Four cards continuing the product-site rhythm',
    cap1Title: 'URL Understanding',
    cap1Desc: 'Pass the question URL straight into the model and let it reason with context.',
    cap2Title: 'LLM Scoring',
    cap2Desc: 'Send your prompt template to the model and receive a structured result.',
    cap3Title: 'Report Fillback',
    cap3Desc: 'Parse the JSON and transform it into a premium visual report.',
    cap4Title: 'Fast Expansion',
    cap4Desc: 'This can later grow into account history, exports, and deeper analysis.',
    siteKicker: 'Site Structure',
    siteTitle: 'The documentation-style information architecture is ready',
    siteSummary: 'Homepage + Guide + Reference + Examples',
    guideCardDesc: 'Learn the report flow and page composition.',
    referenceCardDesc: 'Check field definitions, scoring logic, and component rules.',
    examplesCardDesc: 'See more layout patterns and report presentation ideas.',
    computing: 'Calling the model now...',
    done: 'Analysis completed and the report has been filled in below.',
    doneFallback: 'Pure frontend local analysis is complete. Connect GMService to enable live model results.',
    error: 'Generation failed. Please confirm the GMService backend and model configuration are available.'
  }
};

const DEFAULT_REPORTS = {
  zh: {
    title: '知乎问题多维度打分评估表',
    total: 36,
    maxScore: 60,
    level: '谨慎投入',
    conclusion: '不适合作为主攻回答题',
    trafficVerdict: '无自然流量增量，问题已过生命周期黄金期，无推荐与搜索增长空间。',
    answerVerdict: '不适合回答，投入产出比偏低，难以获得曝光与涨粉。',
    summary: '系统正在等待真实问题链接与账号定位数据，收到后会自动调用模型并生成完整评估报告。',
    heroAction: '等待数据输入',
    heroBadge: '待分析',
    metadata: {
      createdAt: '2026-01-30 12:39:01',
      followers: 14,
      views: 2243,
      questionTitle: '等待模型补全',
      questionDescription: '模型补全描述会展示在这里。',
      sourceUrl: ''
    },
    metrics: [
      { label: '情绪 / 痛点 / 争议强度', score: 9, comment: '直击程序员职场选择核心痛点，全职独立开发利弊争议鲜明。' },
      { label: '关注者数量 & 活跃度', score: 1, comment: '当前示例的互动基础较弱，活跃度接近停滞。' },
      { label: '搜索流量潜力', score: 7, comment: '关键词具备垂直搜索需求，但实际曝光空间有限。' },
      { label: '赛道竞争饱和度', score: 4, comment: '整体赛道竞争激烈，但单题仍存在局部切入空间。' },
      { label: '赛道与账号匹配度', score: 10, comment: '与程序员 / AI / 独立开发相关账号定位高度契合。' },
      { label: '变现 / 涨粉价值', score: 5, comment: '受众精准，但流量底盘偏小，转化效率仍有限。' }
    ]
  },
  en: {
    title: 'Zhihu Question Multi-factor Evaluation',
    total: 36,
    maxScore: 60,
    level: 'Cautious Investment',
    conclusion: 'Not ideal as a primary answer target',
    trafficVerdict: 'There is no strong natural traffic upside left and recommendation growth is limited.',
    answerVerdict: 'It is not ideal for heavy investment because exposure and follower growth may stay weak.',
    summary: 'The system is waiting for a real question URL and account positioning so it can call the model and produce the final report.',
    heroAction: 'Waiting for your input',
    heroBadge: 'Pending',
    metadata: {
      createdAt: '2026-01-30 12:39:01',
      followers: 14,
      views: 2243,
      questionTitle: 'Waiting for model inference',
      questionDescription: 'The model-inferred description will appear here.',
      sourceUrl: ''
    },
    metrics: [
      { label: 'Emotion / Pain Point / Controversy', score: 9, comment: 'It directly touches a strong developer pain point and invites debate.' },
      { label: 'Followers & Activity', score: 1, comment: 'The current interaction base is weak and near stagnation.' },
      { label: 'Search Traffic Potential', score: 7, comment: 'The keywords have vertical search intent, but overall exposure is still limited.' },
      { label: 'Competition Saturation', score: 4, comment: 'The space is crowded overall, though a single question may still have room.' },
      { label: 'Track-to-Account Fit', score: 10, comment: 'It is highly aligned with programmers, AI, and indie-builder positioning.' },
      { label: 'Monetization / Growth Value', score: 5, comment: 'The audience is precise, but the traffic base is still relatively small.' }
    ]
  }
};

let currentLang = localStorage.getItem('mha-lang') === 'en' ? 'en' : 'zh';
let currentTheme = localStorage.getItem('mha-theme') === 'light' ? 'light' : 'dark';
let currentReport = DEFAULT_REPORTS[currentLang];

function resolveApiBase() {
  const queryBase = new URLSearchParams(window.location.search).get('apiBase');
  const explicitBase = queryBase || window.MHA_API_BASE || localStorage.getItem('mha-api-base');
  const fallbackBase = 'http://127.0.0.1:8000';
  const apiBase = (explicitBase || fallbackBase).trim();
  return apiBase.endsWith('/') ? apiBase.slice(0, -1) : apiBase;
}

function text(key, ...args) {
  const entry = UI_TEXT[currentLang][key];
  return typeof entry === 'function' ? entry(...args) : entry;
}

function setText(id, key, ...args) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text(key, ...args);
  }
}

function setElementText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
  return element;
}

function getFormPayload() {
  return {
    accountPositioning: document.getElementById('accountPositioning')?.value.trim() || '',
    questionUrl: document.getElementById('questionUrl')?.value.trim() || '',
    createdAt: document.getElementById('createdAt')?.value || '',
    followers: Number(document.getElementById('followers')?.value || 0),
    views: Number(document.getElementById('views')?.value || 0),
    lang: currentLang
  };
}

function clampScore(value, min = 1, max = 10) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function scoreFollowers(value) {
  if (value < 20) return 1;
  if (value < 50) return 3;
  if (value < 100) return 4;
  if (value < 300) return 6;
  if (value < 1000) return 8;
  return 10;
}

function scoreViews(value) {
  if (value < 300) return 1;
  if (value < 1000) return 3;
  if (value < 3000) return 5;
  if (value < 10000) return 7;
  if (value < 50000) return 9;
  return 10;
}

function countKeywordHits(textBlob, keywords) {
  const lowered = textBlob.toLowerCase();
  return keywords.reduce((count, keyword) => count + (lowered.includes(keyword.toLowerCase()) ? 1 : 0), 0);
}

function getDecisionMeta(total) {
  if (currentLang === 'en') {
    if (total >= 48) return ['Highly Recommended', 'High Priority', 'Invest first'];
    if (total >= 36) return ['Cautious Investment', 'Medium-low Priority', 'Use as supporting content'];
    return ['Low Priority', 'Low Priority', 'Skip or lower the effort'];
  }

  if (total >= 48) return ['强烈推荐', '高优先级', '建议优先投入'];
  if (total >= 36) return ['谨慎投入', '中低优先级', '作为补充布局'];
  return ['低优先级', '低优先级', '建议跳过或降配'];
}

function formatCreatedAt(value) {
  return (value || '').replace('T', ' ') || new Date().toLocaleString(currentLang === 'en' ? 'en-US' : 'zh-CN', { hour12: false });
}

function buildFrontendFallbackReport(payload) {
  const accountPositioning = payload.accountPositioning || text('defaultAccountPositioning');
  const questionUrl = payload.questionUrl || '';
  const followers = Math.max(0, Number(payload.followers) || 0);
  const views = Math.max(0, Number(payload.views) || 0);
  const textBlob = [accountPositioning, questionUrl].join(' ');
  const followerViewRatio = views / Math.max(followers, 1);

  const emotionWords = ['离职', '独立开发', '一人公司', 'ai', '焦虑', '失业', '值不值得', '要不要', '转型', '创业', 'startup', 'indie', 'solo'];
  const searchWords = ['如何', '怎么', '为什么', 'ai', '程序员', '独立开发', 'how', 'why', 'developer'];
  const fitWords = ['程序员', '开发者', 'ai', '独立开发', '副业', '产品', '工程师', 'developer', 'engineer', 'indie', 'product'];
  const competitionWords = ['ai', '副业', '赚钱', '独立开发', '创业', '程序员', 'startup', 'indie'];

  const emotionScore = clampScore(4 + countKeywordHits(textBlob, emotionWords) * 1.1 + (questionUrl.includes('?') ? 1 : 0));
  const activeScore = clampScore(scoreFollowers(followers) * 0.45 + scoreViews(views) * 0.4 + clampScore(followerViewRatio / 80, 1, 10) * 0.15);
  const searchScore = clampScore(3 + countKeywordHits(textBlob, searchWords) * 1.05);
  const fitScore = clampScore(4 + countKeywordHits(textBlob, fitWords) * 1.1);
  const competitionScore = clampScore(8 - countKeywordHits(textBlob, competitionWords) * 0.8 + (fitScore >= 8 ? 1 : 0));
  const monetizeScore = clampScore(emotionScore * 0.35 + fitScore * 0.35 + activeScore * 0.3);
  const total = emotionScore + activeScore + searchScore + competitionScore + fitScore + monetizeScore;
  const [level, heroBadge, heroAction] = getDecisionMeta(total);

  if (currentLang === 'en') {
    return {
      title: 'Zhihu Question Multi-factor Evaluation',
      total,
      maxScore: 60,
      level,
      conclusion: total >= 36 ? 'Suitable as supporting content, not the main growth target' : 'Not worth heavy investment',
      trafficVerdict: total >= 36 ? 'The topic has some discussion and search potential, but the natural traffic ceiling is moderate.' : 'Traffic upside appears limited in the current state.',
      answerVerdict: total >= 36 ? 'It is usable as supporting content and aligns with the positioning.' : 'It is not ideal as a primary answer target.',
      summary: `The browser has completed a pure frontend local analysis for this topic. Current fit is ${fitScore}/10 and activity is ${activeScore}/10.`,
      heroAction,
      heroBadge,
      metadata: {
        createdAt: formatCreatedAt(payload.createdAt),
        followers,
        views,
        questionTitle: 'Frontend-inferred topic summary',
        questionDescription: 'This result was generated directly in the browser from the submitted link and traffic metrics, with no Python runtime required.',
        sourceUrl: questionUrl
      },
      metrics: [
        { label: 'Emotion / Pain Point / Controversy', score: emotionScore, comment: emotionScore >= 7 ? 'Clear pain point and resonance.' : 'Emotional pull is limited.' },
        { label: 'Followers & Activity', score: activeScore, comment: `The current base is ${activeScore >= 6 ? 'solid' : 'still weak'}.` },
        { label: 'Search Traffic Potential', score: searchScore, comment: searchScore >= 7 ? 'Search intent is visible.' : 'Search demand exists but is moderate.' },
        { label: 'Competition Saturation', score: competitionScore, comment: competitionScore >= 6 ? 'There is still room to enter.' : 'Competition is relatively strong.' },
        { label: 'Track-to-Account Fit', score: fitScore, comment: fitScore >= 7 ? 'Highly aligned with the account.' : 'Alignment is moderate.' },
        { label: 'Monetization / Growth Value', score: monetizeScore, comment: monetizeScore >= 6 ? 'There is some conversion and growth value.' : 'Growth efficiency is limited.' }
      ],
      source: 'frontend'
    };
  }

  return {
    title: '知乎问题多维度打分评估表',
    total,
    maxScore: 60,
    level,
    conclusion: total >= 36 ? '适合作为补充题材，非核心主攻' : '不建议投入过多精力',
    trafficVerdict: total >= 36 ? '当前话题具备一定搜索和讨论空间，但自然流量天花板中等。' : '当前话题的自然流量增长空间较小。',
    answerVerdict: total >= 36 ? '可作为补充题材回答，与账号定位较为贴合。' : '不适合作为重点回答题。',
    summary: `浏览器已完成纯前端本地分析。当前账号匹配度为 ${fitScore}/10，活跃度为 ${activeScore}/10。`,
    heroAction,
    heroBadge,
    metadata: {
      createdAt: formatCreatedAt(payload.createdAt),
      followers,
      views,
      questionTitle: '前端本地推断主题',
      questionDescription: '该结果直接在浏览器端根据链接和流量数据生成，不依赖本项目中的 Python 运行时。',
      sourceUrl: questionUrl
    },
    metrics: [
      { label: '情绪 / 痛点 / 争议强度', score: emotionScore, comment: emotionScore >= 7 ? '痛点感较强，具备共鸣。' : '情绪张力偏弱。' },
      { label: '关注者数量 & 活跃度', score: activeScore, comment: activeScore >= 6 ? '互动基础较好。' : '互动基础仍偏弱。' },
      { label: '搜索流量潜力', score: searchScore, comment: searchScore >= 7 ? '存在一定搜索需求。' : '搜索势能一般。' },
      { label: '赛道竞争饱和度', score: competitionScore, comment: competitionScore >= 6 ? '仍有切入空间。' : '竞争相对较强。' },
      { label: '赛道与账号匹配度', score: fitScore, comment: fitScore >= 7 ? '与账号定位高度契合。' : '贴合度一般。' },
      { label: '变现 / 涨粉价值', score: monetizeScore, comment: monetizeScore >= 6 ? '有一定涨粉承接价值。' : '转化效率有限。' }
    ],
    source: 'frontend'
  };
}

function renderMetrics(metrics) {
  const metricList = document.getElementById('metric-list');
  const scoreTableBody = document.getElementById('score-table-body');
  const heroBars = document.getElementById('hero-bars');

  if (metricList) {
    metricList.innerHTML = metrics
      .map(
        (item) => `
          <div>
            <div class="mb-2 flex justify-between text-sm"><span>${item.label}</span><span>${item.score} / 10</span></div>
            <div class="metric-line"><span style="width: ${item.score * 10}%"></span></div>
          </div>
        `
      )
      .join('');
  }

  if (scoreTableBody) {
    scoreTableBody.innerHTML = metrics
      .map(
        (item) => `
          <tr>
            <td class="px-4 py-3">${item.label}</td>
            <td class="px-4 py-3 font-semibold text-white">${item.score}</td>
            <td class="px-4 py-3">${item.comment}</td>
          </tr>
        `
      )
      .join('');
  }

  if (heroBars) {
    heroBars.innerHTML = metrics.map((item) => `<span style="height: ${Math.max(10, item.score * 10)}%"></span>`).join('');
  }
}

function renderReport(report) {
  currentReport = report;
  setText('report-kicker', 'reportKicker');
  setText('recommend-label', 'recommendLabel');
  setText('score-word', 'scoreWord');
  setText('score-th-dimension', 'scoreDimension');
  setText('score-th-score', 'scoreValue');
  setText('score-th-comment', 'scoreComment');
  setText('traffic-title', 'trafficTitle');
  setText('answer-title', 'answerTitle');
  setText('meta-title', 'metaTitle');

  setElementText('report-title', report.title);
  setElementText('report-subtitle', text('reportSummary', report.maxScore, report.total));
  setElementText('report-conclusion-badge', text('reportConclusion', report.conclusion));
  setElementText('score-total', report.total);
  setElementText('recommend-level', report.level);
  setElementText('summary-text', report.summary);
  setElementText('traffic-text', report.trafficVerdict);
  setElementText('answer-text', report.answerVerdict);
  setElementText('meta-created', text('metaCreated', report.metadata.createdAt));
  setElementText('meta-followers', text('metaFollowers', report.metadata.followers));
  setElementText('meta-views', text('metaViews', report.metadata.views));
  setElementText('meta-question-title', text('metaQuestionTitle', report.metadata.questionTitle || '-'));
  setElementText('meta-question-desc', text('metaQuestionDesc', report.metadata.questionDescription || text('metaQuestionDescEmpty')));

  const sourceLink = document.getElementById('meta-source-url');
  if (sourceLink) {
    sourceLink.textContent = text('metaSourceUrl');
    if (report.metadata.sourceUrl) {
      sourceLink.href = report.metadata.sourceUrl;
      sourceLink.style.display = 'inline';
    } else {
      sourceLink.removeAttribute('href');
      sourceLink.style.display = 'none';
    }
  }

  setElementText('headline-total', `${report.total} / ${report.maxScore}`);
  setElementText('headline-followers', String(report.metadata.followers));
  setElementText('headline-views', String(report.metadata.views));
  setElementText('hero-action', report.heroAction);
  setElementText('hero-summary', report.summary);
  setElementText('hero-decision-badge', report.heroBadge);

  const degree = Math.round((report.total / report.maxScore) * 360);
  const scoreRing = document.getElementById('score-ring');
  if (scoreRing) {
    scoreRing.style.background = `conic-gradient(#8b5cf6 0 ${degree}deg, #22c55e ${degree}deg ${Math.min(360, degree + 36)}deg, rgba(255,255,255,0.08) ${Math.min(360, degree + 36)}deg 360deg)`;
  }

  renderMetrics(report.metrics);
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('mha-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    themeButton.textContent = theme === 'dark' ? text('themeDark') : text('themeLight');
  }
}

function applyStaticText() {
  document.title = text('pageTitle');
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';

  setText('brand-subtitle', 'brandSubtitle');
  setText('nav-guide', 'navGuide');
  setText('nav-reference', 'navReference');
  setText('nav-examples', 'navExamples');
  setText('nav-report', 'navReport');
  setText('nav-cta', 'navCta');
  setText('hero-pill', 'heroPill');
  setText('hero-title-prefix', 'heroTitlePrefix');
  setText('hero-title-accent', 'heroTitleAccent');
  setText('hero-desc', 'heroDesc');
  setText('hero-primary-cta', 'heroPrimaryCta');
  setText('hero-secondary-cta', 'heroSecondaryCta');
  setText('hero-github-cta', 'heroGithubCta');
  setText('stat-total-label', 'totalLabel');
  setText('stat-followers-label', 'followersLabel');
  setText('stat-views-label', 'viewsLabel');
  setText('hero-overview', 'heroOverview');
  setText('hero-engine-title', 'heroEngineTitle');
  setText('hero-action-label', 'heroActionLabel');
  setText('evaluator-kicker', 'evaluatorKicker');
  setText('evaluator-title', 'evaluatorTitle');
  setText('evaluator-desc', 'evaluatorDesc');
  setText('label-account-positioning', 'accountPositioningLabel');
  setText('label-question-url', 'questionUrlLabel');
  setText('label-createdAt', 'createdLabel');
  setText('label-followers', 'followersFormLabel');
  setText('label-views', 'viewsFormLabel');
  setText('submit-btn', 'submitLabel');
  setText('form-status', 'formIdle');
  setText('flow-kicker', 'flowKicker');
  setText('flow-title', 'flowTitle');
  setText('flow-step-1', 'flowStep1');
  setText('flow-step-2', 'flowStep2');
  setText('flow-step-3', 'flowStep3');
  setText('capabilities-kicker', 'capabilitiesKicker');
  setText('capabilities-title', 'capabilitiesTitle');
  setText('cap-1-title', 'cap1Title');
  setText('cap-1-desc', 'cap1Desc');
  setText('cap-2-title', 'cap2Title');
  setText('cap-2-desc', 'cap2Desc');
  setText('cap-3-title', 'cap3Title');
  setText('cap-3-desc', 'cap3Desc');
  setText('cap-4-title', 'cap4Title');
  setText('cap-4-desc', 'cap4Desc');
  setText('site-kicker', 'siteKicker');
  setText('site-title', 'siteTitle');
  setText('site-summary', 'siteSummary');
  setText('guide-card-desc', 'guideCardDesc');
  setText('reference-card-desc', 'referenceCardDesc');
  setText('examples-card-desc', 'examplesCardDesc');

  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.textContent = text('langButton');
  }

  const accountPositioning = document.getElementById('accountPositioning');
  if (accountPositioning) {
    accountPositioning.placeholder = text('accountPositioningPlaceholder');
    const knownDefaults = [UI_TEXT.zh.defaultAccountPositioning, UI_TEXT.en.defaultAccountPositioning];
    if (knownDefaults.includes(accountPositioning.value.trim())) {
      accountPositioning.value = text('defaultAccountPositioning');
    }
  }

  const questionUrl = document.getElementById('questionUrl');
  if (questionUrl) {
    questionUrl.placeholder = text('questionUrlPlaceholder');
  }

  applyTheme(currentTheme);
}

async function requestReport(payload) {
  const endpoint = `${resolveApiBase()}/api/evaluate`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Service error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.warn('GMService unavailable, using pure frontend analysis.', error);
    return buildFrontendFallbackReport(payload);
  }
}

async function refreshLocalizedReport(silent = true) {
  const status = document.getElementById('form-status');
  const payload = getFormPayload();

  if (!payload.accountPositioning && !payload.questionUrl) {
    renderReport(DEFAULT_REPORTS[currentLang]);
    if (status) {
      status.textContent = text('formIdle');
    }
    return;
  }

  if (!silent && status) {
    status.textContent = text('computing');
  }

  try {
    const report = await requestReport(payload);
    renderReport(report);
    if (status) {
      status.textContent = silent ? text('formIdle') : (report.source === 'llm' ? text('done') : text('doneFallback'));
    }
  } catch (error) {
    console.error(error);
    if (status) {
      status.textContent = silent ? text('formIdle') : text('error');
    }
  }
}

async function submitEvaluation(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-btn');
  const payload = getFormPayload();
  const loadingMetrics = (DEFAULT_REPORTS[currentLang].metrics || []).map((item) => ({
    ...item,
    score: 0,
    comment: currentLang === 'en' ? 'Waiting for analysis...' : '等待分析结果...'
  }));

  submitButton.disabled = true;
  submitButton.classList.add('opacity-70');
  status.textContent = text('computing');

  renderReport({
    ...DEFAULT_REPORTS[currentLang],
    total: 0,
    level: currentLang === 'en' ? 'Analyzing' : '分析中',
    summary: text('computing'),
    heroAction: text('computing'),
    heroBadge: currentLang === 'en' ? 'Analyzing' : '分析中',
    conclusion: currentLang === 'en' ? 'Generating the latest report for this request.' : '正在生成本次请求的最新报告。',
    trafficVerdict: currentLang === 'en' ? 'Waiting for the model response.' : '正在等待模型返回结果。',
    answerVerdict: currentLang === 'en' ? 'The previous report will be replaced automatically.' : '旧报告将在本次完成后自动覆盖。',
    metadata: {
      createdAt: formatCreatedAt(payload.createdAt),
      followers: payload.followers,
      views: payload.views,
      questionTitle: currentLang === 'en' ? 'Analyzing current request' : '正在分析当前请求',
      questionDescription: currentLang === 'en' ? 'The latest response will appear here shortly.' : '最新返回结果稍后展示在这里。',
      sourceUrl: payload.questionUrl
    },
    metrics: loadingMetrics
  });

  try {
    const report = await requestReport(payload);
    renderReport(report);
    status.textContent = report.source === 'llm' ? text('done') : text('doneFallback');
    document.getElementById('report').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) {
    console.error(error);
    status.textContent = text('error');
  } finally {
    submitButton.disabled = false;
    submitButton.classList.remove('opacity-70');
  }
}

function initHeroModelMotion() {
  const stage = document.getElementById('hero-brand-3d-stage');
  const object = document.getElementById('hero-brand-3d-object');

  if (!stage || !object) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const updateMotion = () => {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    object.style.transform = `rotateX(${(-10 - currentY * 16).toFixed(2)}deg) rotateY(${(10 + currentX * 22).toFixed(2)}deg) scale(1.015)`;
    stage.style.setProperty('--spotlight-x', `${50 + currentX * 14}%`);
    stage.style.setProperty('--spotlight-y', `${26 + currentY * 12}%`);

    requestAnimationFrame(updateMotion);
  };

  const resetMotion = () => {
    targetX = 0;
    targetY = 0;
  };

  const handlePointerMove = (event) => {
    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    targetX = clamp(x, -1, 1);
    targetY = clamp(y, -1, 1);
  };

  if (!prefersReducedMotion) {
    stage.addEventListener('pointermove', handlePointerMove);
    stage.addEventListener('mousemove', handlePointerMove);
    stage.addEventListener('pointerleave', resetMotion);
    stage.addEventListener('mouseleave', resetMotion);
    requestAnimationFrame(updateMotion);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyStaticText();
  renderReport(DEFAULT_REPORTS[currentLang]);
  initHeroModelMotion();

  document.getElementById('evaluation-form').addEventListener('submit', submitEvaluation);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  document.getElementById('lang-toggle').addEventListener('click', async () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('mha-lang', currentLang);
    applyStaticText();
    await refreshLocalizedReport(true);
  });
});
