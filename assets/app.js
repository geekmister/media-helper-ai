const UI_TEXT = {
  zh: {
    pageTitle: 'Media Helper AI · 智能评估报告中心',
    brandTitle: '媒体助手 AI',
    brandSubtitle: 'AI 驱动的内容观察与增长决策体验',
    navGuide: '指南',
    navReference: '参考',
    navExamples: '示例',
    navReport: '评估报告',
    navBlog: '博客',
    navVersion: 'v1.0.0',
    navCta: '立即分析',
    langButton: 'EN',
    themeDark: '🌙 深色',
    themeLight: '☀️ 浅色',
    heroPill: 'AI 驱动的内容观察与增长决策体验',
    heroTitlePrefix: '输入知乎问题元数据，',
    heroTitleAccent: '自动生成知乎问题可答性评估报告',
    heroDesc: '输入账号定位、问题链接、问题创建时间、关注人数、浏览量，AI 会快速给出多维评分、流量判断与回答建议。',
    heroPrimaryCta: '开始分析',
    heroSecondaryCta: '什么是 Media Helper AI?',
    heroGithubCta: 'GitHub',
    totalLabel: '综合评估得分',
    followersLabel: '关注人数',
    viewsLabel: '浏览量',
    heroOverview: '后台能力概览',
    heroEngineTitle: '提示词 + 模型分析引擎',
    heroActionLabel: '推荐动作',
    evaluatorKicker: '智能分析',
    evaluatorTitle: '这个知乎问题，值不值得答？',
    evaluatorDesc: '输入账号定位、问题链接、问题创建时间、关注人数、浏览量，AI 会快速给出多维评分、流量判断与回答建议。',
    accountPositioningLabel: '账号定位',
    accountPositioningPlaceholder: '程序员 / AI 工程师 / 独立开发者 / 一人 AI 公司',
    defaultAccountPositioning: '',
    questionUrlLabel: '问题链接',
    questionUrlPlaceholder: 'https://www.zhihu.com/question/xxxxxx',
    createdLabel: '问题创建时间',
    followersFormLabel: '关注人数',
    viewsFormLabel: '浏览量',
    submitLabel: '生成评估报告',
    formIdle: '填写完成后即可生成报告，AI 会自动补全问题标题与问题描述。',
    flowKicker: '后台运算逻辑',
    flowTitle: 'AI 如何完成这次评估',
    flowStep1: '① 读取问题元数据与账号定位，识别选题方向和内容场景。',
    flowStep2: '② 结合创建时间、关注人数与浏览量，判断话题热度、生命周期和潜在价值。',
    flowStep3: '③ 输出多维评分、结论建议与可视化报告，辅助内容决策。',
    reportKicker: '智能生成报告',
    fakeDataToggle: '开启假数据',
    fakeDataLoaded: '已加载假数据示例，可直接预览报告效果。',
    reportSummary: (maxScore, total) => `满分 ${maxScore} 分 ｜ 综合总分 ${total} 分`,
    reportConclusion: (text) => `结论：${text}`,
    recommendLabel: '建议级别',
    scoreWord: 'score',
    scoreDimension: '评估维度',
    scoreValue: '打分',
    scoreComment: '分数评语',
    trafficTitle: '流量增量',
    answerTitle: '是否适合回答',
    metaTitle: '问题信息',
    metaHelper: '问题标题与问题描述会由 AI 根据链接和上下文自动补全，其余字段来自你的输入。',
    metaCreated: (value) => `问题创建时间：${value}`,
    metaFollowers: (value) => `关注人数：${value}`,
    metaViews: (value) => `浏览量：${value}`,
    metaQuestionTitle: (value) => `问题标题（模型补全）：${value}`,
    metaSourceLabel: '问题链接：',
    metaSourceUrl: '问题来源链接',
    metaSourceUrlEmpty: '-',
    metaDescLabel: '问题描述（模型补全）：',
    metaQuestionDesc: (value) => value,
    metaQuestionDescEmpty: '等待模型补全',
    capabilitiesKicker: '核心能力',
    capabilitiesTitle: '从问题输入到结论输出的一体化分析体验',
    capabilitiesDesc: '围绕内容选题评估场景，Media Helper AI 将问题理解、价值判断、报告呈现与演示体验整合为一个完整工作流。',
    cap1Title: '选题识别',
    cap1Desc: '快速识别一个问题是否值得投入，减少低价值选题带来的时间消耗。',
    cap2Title: '多维评估',
    cap2Desc: '围绕流量、竞争、匹配度与增长潜力输出结构化评分，辅助内容判断。',
    cap3Title: '结论生成',
    cap3Desc: '自动汇总结论建议、问题信息与可视化结果，让报告表达更加清晰直观。',
    cap4Title: '演示扩展',
    cap4Desc: '既适合产品演示与方案汇报，也便于继续接入真实模型能力与后台服务。',
    siteKicker: '站点结构',
    siteTitle: '文档型信息架构已同步搭建',
    siteSummary: '首页 + 指南页 + 参考页 + 示例页',
    guideCardDesc: '了解报告生成流程与页面组成。',
    referenceCardDesc: '查看字段定义、评分逻辑与组件规范。',
    examplesCardDesc: '查看更多报告版式与内容呈现模板。',
    articlesKicker: '最新文章',
    articlesTitle: '从内容洞察到增长决策的最新思考',
    articlesDesc: '探索内容创作规律，挖掘流量增长机会，让每一个选题投入都更具价值。',
    article1Tag: 'Insight',
    article1Title: '如何判断一个知乎问题是否值得回答',
    article1Desc: '从痛点、流量、竞争和账号匹配度四个方向，快速判断内容投入价值。',
    article2Tag: 'Workflow',
    article2Title: 'AI 评估链路如何帮助选题提效',
    article2Desc: '把表单输入、提示词组装和模型判断串联起来，形成可复用的分析闭环。',
    article3Tag: 'Growth',
    article3Title: '从问题分析走向内容增长决策',
    article3Desc: '不止是打分，更帮助你决定该不该投入、怎么回答以及如何放大结果。',
    footerBrand: '媒体助手 AI',
    footerDesc: 'AI 驱动的内容洞察与增长决策工具，帮助你更快判断问题价值。',
    footerLinksTitle: '更多项目',
    footerNavTitle: '导航',
    footerBlog: '博客',
    footerGithub: 'GitHub',
    footerLinkGeekmister: 'Geekmister',
    footerLinkAumoji: 'AUmoji',
    footerLinkIplay: 'IPlay',
    computing: '后台正在调用模型分析...',
    done: '分析完成，报告已回填到下方页面。',
    doneFallback: '已完成纯前端本地分析；如连接 GMService，可自动切换为实时模型结果。',
    error: '生成失败，请确认 GMService 后台服务与模型配置可用。'
  },
  en: {
    pageTitle: 'Media Helper AI · Smart Evaluation Center',
    brandTitle: 'Media Helper AI',
    brandSubtitle: 'AI-Powered Content Insight & Growth Decision Experience',
    navGuide: 'Guide',
    navReference: 'Reference',
    navExamples: 'Examples',
    navReport: 'Report',
    navBlog: 'Blog',
    navVersion: 'v1.0.0',
    navCta: 'Analyze Now',
    langButton: '中文',
    themeDark: '🌙 Dark',
    themeLight: '☀️ Light',
    heroPill: 'AI-Driven Content Insight & Growth Decision Experience',
    heroTitlePrefix: 'Input Zhihu question metadata,',
    heroTitleAccent: 'then generate an answerability evaluation report automatically',
    heroDesc: 'Enter your positioning, question URL, created time, followers, and views, and AI will quickly return scoring, traffic judgment, and an answer recommendation.',
    heroPrimaryCta: 'Start Analysis',
    heroSecondaryCta: 'What is Media Helper AI?',
    heroGithubCta: 'GitHub',
    totalLabel: 'Overall Score',
    followersLabel: 'Followers',
    viewsLabel: 'Views',
    heroOverview: 'Backend Overview',
    heroEngineTitle: 'Prompt + LLM Engine',
    heroActionLabel: 'Suggested Action',
    evaluatorKicker: 'Smart Analysis',
    evaluatorTitle: 'Is this Zhihu question worth answering?',
    evaluatorDesc: 'Enter your positioning, question URL, created time, followers, and views to get scoring, traffic potential, and an answer recommendation.',
    accountPositioningLabel: 'Account Positioning',
    accountPositioningPlaceholder: 'Programmer / AI Engineer / Indie Developer / Solo AI Founder',
    defaultAccountPositioning: '',
    questionUrlLabel: 'Question URL',
    questionUrlPlaceholder: 'https://www.zhihu.com/question/xxxxxx',
    createdLabel: 'Question Created Time',
    followersFormLabel: 'Followers',
    viewsFormLabel: 'Views',
    submitLabel: 'Generate Report',
    formIdle: 'Complete the fields to generate the report. AI will infer the question title and description automatically.',
    flowKicker: 'Backend Logic',
    flowTitle: 'How AI completes this evaluation',
    flowStep1: '① Read the question metadata and account positioning to identify the topic direction and content context.',
    flowStep2: '② Combine created time, followers, and views to judge heat, lifecycle, and potential value.',
    flowStep3: '③ Output multi-factor scores, recommendations, and a visual report to support your content decision.',
    reportKicker: 'Generated Report',
    fakeDataToggle: 'Use demo data',
    fakeDataLoaded: 'Demo data has been loaded for preview.',
    reportSummary: (maxScore, total) => `Max ${maxScore} points ｜ Total ${total} points`,
    reportConclusion: (text) => `Conclusion: ${text}`,
    recommendLabel: 'Recommendation Level',
    scoreWord: 'score',
    scoreDimension: 'Dimension',
    scoreValue: 'Score',
    scoreComment: 'Comment',
    trafficTitle: 'Traffic Growth',
    answerTitle: 'Suitability for Answering',
    metaTitle: 'Question Info',
    metaHelper: 'The question title and description are inferred by AI from the link and context, while the other fields come from your input.',
    metaCreated: (value) => `Created Time: ${value}`,
    metaFollowers: (value) => `Followers: ${value}`,
    metaViews: (value) => `Views: ${value}`,
    metaQuestionTitle: (value) => `Question Title (AI-inferred): ${value}`,
    metaSourceLabel: 'Question Link:',
    metaSourceUrl: 'Source Link',
    metaSourceUrlEmpty: '-',
    metaDescLabel: 'Question Description (AI-inferred):',
    metaQuestionDesc: (value) => value,
    metaQuestionDescEmpty: 'Waiting for model inference',
    capabilitiesKicker: 'Core Capabilities',
    capabilitiesTitle: 'An integrated evaluation flow from question input to final decision',
    capabilitiesDesc: 'Media Helper AI combines topic understanding, value judgment, report rendering, and demo presentation into one streamlined workflow.',
    cap1Title: 'Topic Discovery',
    cap1Desc: 'Quickly identify whether a question is worth investing in and avoid low-value topic waste.',
    cap2Title: 'Multi-factor Scoring',
    cap2Desc: 'Score traffic, competition, fit, and growth potential in a structured and readable way.',
    cap3Title: 'Conclusion Output',
    cap3Desc: 'Automatically generate recommendations, metadata, and visual results for a clearer final report.',
    cap4Title: 'Demo Ready',
    cap4Desc: 'Ideal for product demos and proposals, while remaining easy to connect with real model services later.',
    siteKicker: 'Site Structure',
    siteTitle: 'The documentation-style information architecture is ready',
    siteSummary: 'Homepage + Guide + Reference + Examples',
    guideCardDesc: 'Learn the report flow and page composition.',
    referenceCardDesc: 'Check field definitions, scoring logic, and component rules.',
    examplesCardDesc: 'See more layout patterns and report presentation ideas.',
    articlesKicker: 'Latest Articles',
    articlesTitle: 'Latest thinking on content insight and growth decisions',
    articlesDesc: 'Explore content creation patterns, uncover traffic growth opportunities, and make every topic investment more valuable.',
    article1Tag: 'Insight',
    article1Title: 'How to judge whether a Zhihu question is worth answering',
    article1Desc: 'Quickly evaluate the content opportunity from pain points, traffic, competition, and account fit.',
    article2Tag: 'Workflow',
    article2Title: 'How the AI evaluation loop improves topic selection',
    article2Desc: 'Connect form input, prompt construction, and model reasoning into a reusable analysis workflow.',
    article3Tag: 'Growth',
    article3Title: 'From question analysis to growth decisions',
    article3Desc: 'It is not only about scoring, but also about deciding whether to invest and how to amplify the result.',
    footerBrand: 'Media Helper AI',
    footerDesc: 'An AI content insight and topic evaluation workspace for creators and growth teams, helping you judge question value faster and produce clearer reports.',
    footerBlog: 'Blog',
    footerGithub: 'GitHub',
    footerLinksTitle: 'More Projects',
    footerNavTitle: 'Navigation',
    footerLinkGeekmister: 'Geekmister',
    footerLinkAumoji: 'AUmoji',
    footerLinkIplay: 'IPlay',
    computing: 'Calling the model now...',
    done: 'Analysis completed and the report has been filled in below.',
    doneFallback: 'Pure frontend local analysis is complete. Connect GMService to enable live model results.',
    error: 'Generation failed. Please confirm the GMService backend and model configuration are available.'
  }
};

const DEFAULT_REPORTS = {
  zh: {
    title: '知乎问题选题多维度打分评估表',
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
      questionTitle: '程序员现在还有必要 All in AI 吗？',
      questionDescription: '问题聚焦在程序员转型 AI 的投入产出比，讨论方向包括职业机会、学习成本、行业趋势以及普通开发者是否应该尽早布局。',
      sourceUrl: 'https://www.zhihu.com/question/xxxxxx'
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
      questionTitle: 'Is it still worth it for developers to go all in on AI now?',
      questionDescription: 'This sample topic focuses on whether developers should seriously shift toward AI, covering career upside, learning cost, market timing, and long-term opportunity.',
      sourceUrl: 'https://www.zhihu.com/question/xxxxxx'
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

const EMPTY_REPORTS = {
  zh: {
    title: '知乎问题选题多维度打分评估表',
    total: 0,
    maxScore: 60,
    level: '等待输入',
    conclusion: '等待生成报告',
    trafficVerdict: '填写并提交后，这里会显示流量判断。',
    answerVerdict: '填写并提交后，这里会显示回答建议。',
    summary: '当前暂无结果。你可以填写上方信息进行分析，或开启假数据快速预览。',
    heroAction: '等待数据输入',
    heroBadge: '未开始',
    metadata: {
      createdAt: '-',
      followers: '-',
      views: '-',
      questionTitle: '等待模型补全',
      questionDescription: '等待模型补全',
      sourceUrl: ''
    },
    metrics: [
      { label: '情绪 / 痛点 / 争议强度', score: 0, comment: '等待分析结果。' },
      { label: '关注者数量 & 活跃度', score: 0, comment: '等待分析结果。' },
      { label: '搜索流量潜力', score: 0, comment: '等待分析结果。' },
      { label: '赛道竞争饱和度', score: 0, comment: '等待分析结果。' },
      { label: '赛道与账号匹配度', score: 0, comment: '等待分析结果。' },
      { label: '变现 / 涨粉价值', score: 0, comment: '等待分析结果。' }
    ]
  },
  en: {
    title: 'Zhihu Question Topic Evaluation',
    total: 0,
    maxScore: 60,
    level: 'Waiting for input',
    conclusion: 'Waiting for report generation',
    trafficVerdict: 'Traffic judgment will appear here after submission.',
    answerVerdict: 'The answer recommendation will appear here after submission.',
    summary: 'No result is being shown yet. Fill in the form above or enable demo data for a quick preview.',
    heroAction: 'Waiting for input',
    heroBadge: 'Idle',
    metadata: {
      createdAt: '-',
      followers: '-',
      views: '-',
      questionTitle: 'Waiting for model inference',
      questionDescription: 'Waiting for model inference',
      sourceUrl: ''
    },
    metrics: [
      { label: 'Emotion / Pain Point / Controversy', score: 0, comment: 'Waiting for analysis.' },
      { label: 'Followers & Activity', score: 0, comment: 'Waiting for analysis.' },
      { label: 'Search Traffic Potential', score: 0, comment: 'Waiting for analysis.' },
      { label: 'Competition Saturation', score: 0, comment: 'Waiting for analysis.' },
      { label: 'Track-to-Account Fit', score: 0, comment: 'Waiting for analysis.' },
      { label: 'Monetization / Growth Value', score: 0, comment: 'Waiting for analysis.' }
    ]
  }
};

let currentLang = localStorage.getItem('mha-lang') === 'en' ? 'en' : 'zh';
let currentTheme = localStorage.getItem('mha-theme') === 'light' ? 'light' : 'dark';
let currentReport = EMPTY_REPORTS[currentLang];

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
            <td class="px-4 py-3 align-top break-words">${item.label}</td>
            <td class="px-4 py-3 align-top font-semibold text-white">${item.score}</td>
            <td class="px-4 py-3 align-top break-words">${item.comment}</td>
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
  setText('fake-data-label', 'fakeDataToggle');
  setText('recommend-label', 'recommendLabel');
  setText('score-word', 'scoreWord');
  setText('score-th-dimension', 'scoreDimension');
  setText('score-th-score', 'scoreValue');
  setText('score-th-comment', 'scoreComment');
  setText('traffic-title', 'trafficTitle');
  setText('answer-title', 'answerTitle');
  setText('meta-title', 'metaTitle');
  setText('meta-helper', 'metaHelper');
  setText('meta-source-label', 'metaSourceLabel');
  setText('meta-desc-label', 'metaDescLabel');

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
    if (report.metadata.sourceUrl) {
      sourceLink.textContent = report.metadata.sourceUrl;
      sourceLink.href = report.metadata.sourceUrl;
      sourceLink.classList.add('underline');
    } else {
      sourceLink.textContent = text('metaSourceUrlEmpty');
      sourceLink.removeAttribute('href');
      sourceLink.classList.remove('underline');
    }
    sourceLink.style.display = 'inline';
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
    const label = theme === 'dark' ? text('themeDark') : text('themeLight');
    themeButton.setAttribute('aria-label', label);
    themeButton.setAttribute('title', label);
  }
  
  // 更新主题图标
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'dark') {
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    } else {
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    }
  }
}

function applyStaticText() {
  document.title = text('pageTitle');
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh-CN';

  setText('brand-title', 'brandTitle');
  setText('brand-subtitle', 'brandSubtitle');
  setText('nav-guide', 'navGuide');
  setText('nav-reference', 'navReference');
  setText('nav-examples', 'navExamples');
  setText('nav-report', 'navReport');
  setText('nav-blog-label', 'navBlog');
  setText('nav-version-label', 'navVersion');
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
  setText('capabilities-desc', 'capabilitiesDesc');
  setText('cap-1-title', 'cap1Title');
  setText('cap-1-desc', 'cap1Desc');
  setText('cap-2-title', 'cap2Title');
  setText('cap-2-desc', 'cap2Desc');
  setText('cap-3-title', 'cap3Title');
  setText('cap-3-desc', 'cap3Desc');
  setText('cap-4-title', 'cap4Title');
  setText('cap-4-desc', 'cap4Desc');
  setText('articles-kicker', 'articlesKicker');
  setText('articles-title', 'articlesTitle');
  setText('articles-desc', 'articlesDesc');
  setText('article-1-tag', 'article1Tag');
  setText('article-1-title', 'article1Title');
  setText('article-1-desc', 'article1Desc');
  setText('article-2-tag', 'article2Tag');
  setText('article-2-title', 'article2Title');
  setText('article-2-desc', 'article2Desc');
  setText('article-3-tag', 'article3Tag');
  setText('article-3-title', 'article3Title');
  setText('article-3-desc', 'article3Desc');
  setText('footer-brand', 'footerBrand');
  setText('footer-desc', 'footerDesc');
  setText('footer-nav-title', 'footerNavTitle');
  setText('footer-link-blog', 'footerBlog');
  setText('footer-link-github', 'footerGithub');
  setText('footer-links-title', 'footerLinksTitle');
  setText('footer-link-geekmister', 'footerLinkGeekmister');
  setText('footer-link-aumoji', 'footerLinkAumoji');
  setText('footer-link-iplay', 'footerLinkIplay');

  const langButtonLabel = document.getElementById('lang-toggle-label');
  if (langButtonLabel) {
    langButtonLabel.textContent = text('langButton');
  }

  const accountPositioning = document.getElementById('accountPositioning');
  if (accountPositioning) {
    accountPositioning.placeholder = text('accountPositioningPlaceholder');
    const knownDefaults = [
      '程序员 / AI 工程师 / 独立开发者 / 一人 AI 公司',
      'Programmer / AI Engineer / Indie Developer / Solo AI Founder'
    ];
    if (knownDefaults.includes(accountPositioning.value.trim())) {
      accountPositioning.value = '';
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
  const fakeToggle = document.getElementById('fake-data-toggle');

  if (fakeToggle?.checked) {
    renderReport(DEFAULT_REPORTS[currentLang]);
    if (status) {
      status.textContent = text('fakeDataLoaded');
    }
    return;
  }

  if (!payload.accountPositioning && !payload.questionUrl && !payload.createdAt && !payload.followers && !payload.views) {
    renderReport(EMPTY_REPORTS[currentLang]);
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
  const fakeToggle = document.getElementById('fake-data-toggle');
  const payload = getFormPayload();

  if (fakeToggle?.checked) {
    renderReport(DEFAULT_REPORTS[currentLang]);
    status.textContent = text('fakeDataLoaded');
    document.getElementById('report').scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
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

function initNumberInputGuard() {
  const numericInputs = document.querySelectorAll('input[type="number"]');
  numericInputs.forEach((input) => {
    input.addEventListener('wheel', (event) => {
      event.preventDefault();
      input.blur();
    }, { passive: false });
  });
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
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.scrollTo(0, 0);

  applyStaticText();
  renderReport(EMPTY_REPORTS[currentLang]);
  initNumberInputGuard();
  initHeroModelMotion();

  document.getElementById('evaluation-form').addEventListener('submit', submitEvaluation);

  const heroPrimaryCta = document.getElementById('hero-primary-cta');
  const evaluatorHeading = document.getElementById('evaluator-heading');
  if (heroPrimaryCta && evaluatorHeading) {
    heroPrimaryCta.addEventListener('click', (event) => {
      event.preventDefault();
      evaluatorHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const fakeDataToggle = document.getElementById('fake-data-toggle');
  if (fakeDataToggle) {
    fakeDataToggle.addEventListener('change', () => {
      const status = document.getElementById('form-status');
      if (fakeDataToggle.checked) {
        renderReport(DEFAULT_REPORTS[currentLang]);
        if (status) {
          status.textContent = text('fakeDataLoaded');
        }
      } else {
        renderReport(EMPTY_REPORTS[currentLang]);
        if (status) {
          status.textContent = text('formIdle');
        }
      }
    });
  }
  
  // 主题切换按钮交互
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    // 更新主题图标
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (currentTheme === 'dark') {
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
      } else {
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
      }
    }
  });

  const versionToggle = document.getElementById('nav-version');
  const versionDropdown = document.getElementById('version-dropdown');

  if (versionToggle && versionDropdown) {
    versionToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      versionDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!versionToggle.contains(e.target) && !versionDropdown.contains(e.target)) {
        versionDropdown.classList.add('hidden');
      }
    });
  }

  // 语言切换下拉菜单交互
  const langToggle = document.getElementById('lang-toggle');
  const langDropdown = document.getElementById('lang-dropdown');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    const langOptions = langDropdown.querySelectorAll('a');
    langOptions.forEach((option) => {
      option.addEventListener('click', async (e) => {
        e.preventDefault();
        const lang = option.dataset.lang || 'zh';
        if (lang !== currentLang) {
          currentLang = lang;
          localStorage.setItem('mha-lang', currentLang);
          applyStaticText();
          await refreshLocalizedReport(true);
        }
        langDropdown.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
      }
    });
  }
});
