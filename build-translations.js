const fs = require('fs');
const path = require('path');

// 模拟翻译函数 - 实际项目中应替换为真实的翻译 API 调用
function mockTranslate(text, targetLang) {
  const translations = {
    '你写的知乎回答为什么没人看？不是因为你写的不好，而是问题没流量！': 'Why no one reads your Zhihu answers? It\'s not because you write poorly, but because the question has no traffic!',
    '很多知乎回答没有阅读量，根本原因不是内容不够努力，而是选题本身已经失去自然流量。': 'Many Zhihu answers have no views, the root cause is not that the content is not good enough, but that the topic itself has lost natural traffic.',
    '先说结论': 'First, the conclusion',
    '很多知乎回答之所以没人看，并不是因为文笔差，而是因为你回答的那个问题，压根就没有流量窗口了。': 'The reason many Zhihu answers go unnoticed is not because of poor writing, but because the question you answered simply has no traffic window left.',
    '你以为是写作问题，其实是选题问题': 'You think it\'s a writing problem, but it\'s actually a topic selection problem',
    '很多创作者会陷入一种误区：': 'Many creators fall into a misunderstanding:',
    '标题不够吸引人': 'The title is not attractive enough',
    '排版不够精致': 'The layout is not exquisite enough',
    '观点不够犀利': 'The viewpoint is not sharp enough',
    '这些当然重要，但它们往往不是第一影响因子。': 'These are certainly important, but they are often not the primary influencing factor.',
    '在知乎这种平台，**先有流量机会，才有内容被看见的可能**。如果问题本身没有推荐、没有搜索需求、没有关注基础，那么再认真写，曝光也会非常有限。': 'On platforms like Zhihu, **you first need traffic opportunities before your content can be seen**. If the question itself has no recommendations, no search demand, and no foundation of followers, then no matter how carefully you write, the exposure will be very limited.',
    '什么样的问题更容易“天然没人看”': 'What kind of questions are more likely to "naturally go unnoticed"',
    '问题太老': 'The question is too old',
    '已经过了平台推荐周期，就算回答质量不错，也很难重新获得分发。': 'It has passed the platform\'s recommendation cycle, and even if the answer quality is good, it\'s difficult to get distribution again.',
    '搜索意图太弱': 'Search intent is too weak',
    '用户根本不会主动搜索这个问题，自然也就没有长尾流量。': 'Users will not actively search for this question, so naturally there is no long-tail traffic.',
    '关注基数太低': 'The follower base is too low',
    '问题本身几乎没人关注，说明它并没有形成广泛需求。': 'The question itself has almost no followers, indicating that it has not formed a widespread demand.',
    '真正应该先判断的三个信号': 'Three signals you should judge first',
    '这个问题是否还有流量生命周期？': 'Does this question still have a traffic lifecycle?',
    '它是否具备明确搜索意图？': 'Does it have clear search intent?',
    '它和你的账号定位是否匹配？': 'Does it match your account positioning?',
    '只要这三项里有两项明显偏弱，就不建议重投入。': 'If two of these three are obviously weak, it\'s not recommended to invest heavily.',
    '先选对问题，再优化表达，效率才会高很多。': 'Choose the right question first, then optimize your expression, and efficiency will be much higher.',
    '项目定位下的实用建议': 'Practical suggestions under project positioning',
    'Media Helper AI 这个项目的意义就在这里：': 'This is the significance of the Media Helper AI project:',
    '它不是单纯帮你写内容，而是帮助你提前判断——**这个题值不值得答**。': 'It doesn\'t just help you write content, but helps you judge in advance——**whether this question is worth answering**.',
    '如果一个问题在流量、竞争和匹配度三方面都不成立，那最优解不是把回答写得更长，而是换题。': 'If a question doesn\'t hold up in terms of traffic, competition, and matching, the optimal solution is not to make the answer longer, but to change the question.',
    '什么样的知乎问题回答后更容易变现？': 'What kind of Zhihu questions are easier to monetize after answering?',
    '更容易变现的知乎问题，通常不是最热闹的问题，而是那些带有决策意图和购买场景的问题。': 'Zhihu questions that are easier to monetize are usually not the most popular ones, but those with decision-making intentions and purchase scenarios.',
    '更容易变现的问题，通常具备这些特征': 'Problems that are easier to monetize usually have these characteristics',
    '用户在做选择': 'Users are making choices',
    '比如“哪个工具更适合”“该不该买”“怎么入门”，这类问题天然带有决策意图。': 'For example, questions like "which tool is more suitable", "should I buy it", "how to get started" naturally carry decision-making intentions.',
    '用户愿意付费解决': 'Users are willing to pay to solve it',
    '只要问题背后对应一个真实成本，内容就更有机会连接产品、服务或咨询转化。': 'As long as there is a real cost behind the question, content has a better chance to connect with products, services, or consulting conversions.',
    '和你的身份强相关': 'Strongly related to your identity',
    '变现不是泛泛而谈，而是让用户觉得“你就是那个能帮我解决问题的人”。': 'Monetization is not a general discussion, but making users feel "you are the one who can help me solve the problem".',
    '哪几类问题最值得重点回答': 'Which types of questions are most worth focusing on answering',
    '工具选择型问题': 'Tool selection questions',
    '路径规划型问题': 'Path planning questions',
    '避坑建议型问题': 'Pitfall avoidance suggestion questions',
    '预算与投入产出型问题': 'Budget and ROI questions',
    '这些问题往往代表用户已经处在“快要行动”的阶段，因此更容易形成关注、私信、咨询或购买。': 'These questions often represent that users are in the "about to take action" stage, so they are more likely to form follows, private messages, consultations, or purchases.',
    '一个简单判断法': 'A simple judgment method',
    '如果用户读完你的回答后，下一步很自然会想“那我该用什么”“那你能不能帮我”，这类内容就更接近变现型内容。': 'If after reading your answer, users naturally think "what should I use" or "can you help me", this type of content is closer to monetizable content.',
    '为什么这跟项目定位高度一致': 'Why this is highly consistent with project positioning',
    'Media Helper AI 做的不是泛内容写作，而是**内容决策前置**。': 'Media Helper AI doesn\'t do general content writing, but **content decision-making in advance**.',
    '也就是说，在回答之前就判断：': 'That is, judge before answering:',
    '这个问题值不值得做': 'Is this question worth doing',
    '它有没有变现空间': 'Does it have monetization potential',
    '回答后能否承接到账号目标': 'Can it connect to account goals after answering',
    '这正是高价值内容系统和普通写作工具最大的区别。': 'This is the biggest difference between a high-value content system and an ordinary writing tool.',
    '带有这几种标签的知乎问题千万不要答！！！': 'Never answer Zhihu questions with these tags!!!',
    '有些知乎问题看起来热闹，实际上既难拿流量，也难形成沉淀，更不利于账号增长。': 'Some Zhihu questions look lively, but in reality, they are difficult to get traffic, difficult to form沉淀, and even more不利于 account growth.',
    '第一类：纯情绪宣泄型': 'First type: Pure emotional catharsis',
    '这类问题通常表达强烈，但缺乏明确目标，比如：': 'These questions usually express strongly but lack clear goals, such as:',
    '“为什么生活这么难？”': '"Why is life so hard?"',
    '“我现在是不是彻底废了？”': '"Am I completely useless now?"',
    '它们有情绪，没有结构；有发泄，没有搜索承接。你可能能写出共鸣，但很难形成稳定阅读和关注转化。': 'They have emotion but no structure; they have venting but no search承接. You may be able to write resonance, but it\'s difficult to form stable reading and follower conversion.',
    '第二类：过度宽泛的大话题': 'Second type: Overly broad big topics',
    '比如：': 'For example:',
    '“AI 会改变世界吗？”': '"Will AI change the world?"',
    '“程序员还有前途吗？”': '"Do programmers still have a future?"',
    '这类题目往往竞争极高，而且已经有大量优质回答。对新内容来说，除非切口非常新，否则很难拿到结果。': 'These topics often have extremely high competition and already have a lot of high-quality answers. For new content, it\'s difficult to get results unless the angle is very new.',
    '第三类：低意图低承接型': 'Third type: Low intent, low conversion type',
    '用户只是随口一问，没有明确动作，也没有下一步需求。': 'Users just ask casually, with no clear action and no next-step needs.',
    '没搜索意图': 'No search intent',
    '用户不会持续搜，也不会反复看，内容寿命很短。': 'Users won\'t search continuously or look repeatedly, so the content lifespan is very short.',
    '没转化路径': 'No conversion path',
    '看完之后既不会关注，也不会咨询，更不会有商业承接。': 'After reading, they won\'t follow, consult, or have business承接.',
    '没账号积累': 'No account accumulation',
    '即使偶尔有曝光，也很难沉淀成长期有价值的受众资产。': 'Even if there is occasional exposure, it\'s difficult to沉淀 into long-term valuable audience assets.',
    '更好的替代思路': 'Better alternative ideas',
    '与其去答“看起来很热闹”的题，不如优先选择：': 'Instead of answering "seemingly lively" questions, it\'s better to prioritize:',
    '需求明确的问题': 'Questions with clear needs',
    '搜索意图稳定的问题': 'Questions with stable search intent',
    '与账号定位强匹配的问题': 'Questions that strongly match account positioning',
    '别只看热闹，要看它是否真的值得投入。': 'Don\'t just look at the excitement, look at whether it\'s really worth investing in.'
  };
  
  return translations[text] || text;
}

// 读取原始博客内容
function readOriginalPosts() {
  const contentPath = path.join(__dirname, 'assets', 'blog-content.js');
  const content = fs.readFileSync(contentPath, 'utf8');
  // 提取数组部分
  const startIndex = content.indexOf('window.PRECOMPILED_BLOG_POSTS = ');
  if (startIndex === -1) {
    throw new Error('Could not find blog posts in blog-content.js');
  }
  const contentStart = startIndex + 'window.PRECOMPILED_BLOG_POSTS = '.length;
  let contentEnd = content.indexOf(';', contentStart);
  if (contentEnd === -1) {
    contentEnd = content.length;
  }
  const postsString = content.substring(contentStart, contentEnd);
  return JSON.parse(postsString);
}

// 翻译文章内容
function translatePost(post) {
  const translated = {
    ...post,
    title: mockTranslate(post.title, 'en'),
    summary: mockTranslate(post.summary, 'en'),
    content: translateContent(post.content, 'en'),
    tags: post.tags.map(tag => mockTranslate(tag, 'en'))
  };
  return translated;
}

// 翻译内容中的各个部分
function translateContent(content, targetLang) {
  return content.split('\n').map(line => {
    // 处理标题
    if (line.startsWith('## ')) {
      const title = line.replace('## ', '');
      return `## ${mockTranslate(title, targetLang)}`;
    }
    if (line.startsWith('### ')) {
      const title = line.replace('### ', '');
      return `### ${mockTranslate(title, targetLang)}`;
    }
    
    // 处理 Feature 组件
    if (line.includes('<Feature title="')) {
      const match = line.match(/<Feature title="([^"]+)">/);
      if (match) {
        const title = match[1];
        const translatedTitle = mockTranslate(title, targetLang);
        return line.replace(title, translatedTitle);
      }
    }
    
    // 处理 Badge 组件
    if (line.includes('<Badge')) {
      const match = line.match(/<Badge[^>]*>([^<]+)<\/Badge>/);
      if (match) {
        const text = match[1];
        const translatedText = mockTranslate(text, targetLang);
        return line.replace(text, translatedText);
      }
    }
    
    // 处理普通文本
    return mockTranslate(line, targetLang);
  }).join('\n');
}

// 生成多语言版本
function generateMultiLanguagePosts() {
  const originalPosts = readOriginalPosts();
  const multiLangPosts = originalPosts.map(post => {
    const enVersion = translatePost(post);
    return {
      ...post,
      translations: {
        en: enVersion
      }
    };
  });
  return multiLangPosts;
}

// 写入新的博客内容文件
function writeMultiLanguagePosts(posts) {
  const contentPath = path.join(__dirname, 'assets', 'blog-content.js');
  const content = `window.PRECOMPILED_BLOG_POSTS = ${JSON.stringify(posts, null, 2)};`;
  fs.writeFileSync(contentPath, content);
  console.log('Generated multi-language blog posts successfully!');
}

// 主函数
function main() {
  try {
    const multiLangPosts = generateMultiLanguagePosts();
    writeMultiLanguagePosts(multiLangPosts);
  } catch (error) {
    console.error('Error generating translations:', error);
    process.exit(1);
  }
}

// 运行主函数
if (require.main === module) {
  main();
}

module.exports = { generateMultiLanguagePosts, writeMultiLanguagePosts };