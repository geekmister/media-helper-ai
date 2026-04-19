let currentBlogLang = localStorage.getItem('mha-lang') === 'en' ? 'en' : 'zh';

const BLOG_POSTS = Array.isArray(window.PRECOMPILED_BLOG_POSTS) ? window.PRECOMPILED_BLOG_POSTS : [];

function applyTheme(theme) {
  const next = theme === 'light' ? 'light' : 'dark';
  localStorage.setItem('mha-theme', next);
  document.documentElement.setAttribute('data-theme', next);
  const themeText = document.getElementById('theme-toggle-text');
  if (themeText) {
    themeText.textContent = currentBlogLang === 'en'
      ? (next === 'dark' ? 'Dark' : 'Light')
      : (next === 'dark' ? '深色' : '浅色');
  }

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (next === 'dark') {
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    } else {
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    }
  }
}

function applyLanguage(lang) {
  currentBlogLang = lang === 'en' ? 'en' : 'zh';
  localStorage.setItem('mha-lang', currentBlogLang);
  document.documentElement.lang = currentBlogLang === 'en' ? 'en' : 'zh-CN';

  const homeLink = document.getElementById('blog-home-link');
  if (homeLink) {
    homeLink.textContent = currentBlogLang === 'en' ? 'Home' : '首页';
  }

  const langLabel = document.getElementById('blog-lang-label');
  if (langLabel) {
    langLabel.textContent = currentBlogLang === 'en' ? '中文' : 'EN';
  }

  applyTheme(localStorage.getItem('mha-theme') === 'light' ? 'light' : 'dark');
}

function initThemeToggle() {
  applyLanguage(currentBlogLang);
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      applyTheme(current === 'light' ? 'dark' : 'light');
    });
  }

  const langButton = document.getElementById('blog-lang-toggle');
  if (langButton) {
    langButton.addEventListener('click', () => {
      applyLanguage(currentBlogLang === 'en' ? 'zh' : 'en');
    });
  }
}

function slugify(value) {
  return String(value)
    .replace(/<[^>]+>/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5\s-]/g, '')
    .replace(/\s+/g, '-');
}

function extractHeadings(content) {
  return content
    .split('\n')
    .map((line) => line.match(/^(##|###)\s+(.+)/))
    .filter(Boolean)
    .map((match) => ({
      level: match[1].length,
      text: match[2].replace(/[<>{}`]/g, '').trim(),
      id: slugify(match[2])
    }));
}

async function loadPost(post) {
  const content = String(post.content || '').replace(/^#\s+.+\n+/, '');
  return {
    ...post,
    content,
    headings: extractHeadings(content)
  };
}

function formatTags(tags = []) {
  return (Array.isArray(tags) ? tags : [tags])
    .filter(Boolean)
    .map((tag) => `<span class="rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300">${tag}</span>`)
    .join('');
}

function renderFeatured(post) {
  const target = document.getElementById('featured-post');
  if (!target || !post) return;
  target.innerHTML = `
    <a href="./post.html?slug=${post.slug}" class="block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${post.accent} p-[1px]">
      <div class="h-full rounded-[calc(1.5rem-1px)] bg-slate-950/85 p-6 lg:p-7">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="text-xs uppercase tracking-[0.2em] text-violet-300">Featured</div>
          <div class="text-xs text-slate-300">${displayCategory(post.category)} · ${post.readingTime || '5 min'}</div>
        </div>
        <h3 class="mt-3 text-2xl font-bold text-white">${post.title || post.slug}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-300">${post.summary || ''}</p>
        <div class="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span>${post.date || ''}</span>
          <span>•</span>
          <span>${post.author || 'Geekmister'}</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">${formatTags(post.tags)}</div>
      </div>
    </a>
  `;
}

function renderGrid(posts) {
  const target = document.getElementById('post-grid');
  if (!target) return;
  if (!posts.length) {
    target.innerHTML = '<div class="glass rounded-2xl p-5 text-sm text-slate-300">未找到匹配的文章，请换个关键词试试。</div>';
    return;
  }
  target.innerHTML = posts
    .map(
      (post) => `
        <a href="./post.html?slug=${post.slug}" class="glass card-lift block rounded-2xl p-5">
          <div class="flex items-center justify-between gap-3">
            <span class="text-xs uppercase tracking-[0.2em] text-cyan-300">${displayCategory(post.category)}</span>
            <span class="text-xs text-slate-400">${post.readingTime || '4 min'}</span>
          </div>
          <h3 class="mt-3 text-xl font-semibold text-white">${post.title || post.slug}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-300">${post.summary || ''}</p>
          <div class="mt-4 flex flex-wrap gap-2">${formatTags(post.tags)}</div>
        </a>
      `
    )
    .join('');
}

function displayCategory(category = '') {
  const map = {
    Traffic: '流量判断',
    Monetization: '变现问题',
    Warning: '避坑策略'
  };
  return map[category] || category || '专题';
}

function renderCategories(posts, onSelect, activeTag = '') {
  const target = document.getElementById('category-list');
  if (!target) return;
  const tags = ['全部', ...new Set(posts.map((post) => displayCategory(post.category)))];
  target.innerHTML = tags
    .map((tag) => {
      const active = (tag === '全部' && !activeTag) || tag === activeTag;
      return `<button type="button" data-tag="${tag}" class="topic-chip ${active ? 'topic-chip-active' : ''}">${tag}</button>`;
    })
    .join('');

  target.querySelectorAll('[data-tag]').forEach((button) => {
    button.addEventListener('click', () => {
      const next = button.dataset.tag === '全部' ? '' : button.dataset.tag || '';
      onSelect(next);
    });
  });
}

function renderPostNav(posts, activeSlug) {
  const target = document.getElementById('post-nav');
  if (!target) return;
  target.innerHTML = posts
    .map((post) => {
      const active = post.slug === activeSlug;
      return `<a href="./post.html?slug=${post.slug}" class="sidebar-link ${active ? 'active' : ''}">${post.title || post.slug}</a>`;
    })
    .join('');
}

function renderToc(headings) {
  const target = document.getElementById('post-toc');
  if (!target) return;
  if (!headings.length) {
    target.innerHTML = '<div class="text-sm text-slate-400">暂无目录</div>';
    return;
  }
  target.innerHTML = headings
    .map((item) => `<a href="#${item.id}" class="toc-link ${item.level === 3 ? 'pl-3' : ''}">${item.text}</a>`)
    .join('');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderInlineMarkdown(text) {
  return escapeHtml(String(text || ''))
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function renderMDX(content, container) {
  try {
    const lines = String(content || '').split('\n');
    let html = '';
    let i = 0;

    while (i < lines.length) {
      const raw = lines[i];
      const line = raw.trim();

      if (!line) {
        i += 1;
        continue;
      }

      if (line.startsWith('<Callout')) {
        let block = raw;
        while (i + 1 < lines.length && !lines[i].includes('</Callout>')) {
          i += 1;
          block += `\n${lines[i]}`;
        }
        const type = (block.match(/type="([^"]+)"/) || [])[1] || 'info';
        const title = (block.match(/title="([^"]+)"/) || [])[1] || '';
        const inner = block.replace(/^<Callout[^>]*>/, '').replace(/<\/Callout>\s*$/, '').trim();
        html += `<div class="mdx-callout mdx-callout-${type}">${title ? `<div class="mdx-callout-title">${renderInlineMarkdown(title)}</div>` : ''}<div class="mdx-callout-body"><p>${renderInlineMarkdown(inner)}</p></div></div>`;
        i += 1;
        continue;
      }

      if (line.startsWith('<FeatureGrid>')) {
        let block = '';
        i += 1;
        while (i < lines.length && !lines[i].trim().startsWith('</FeatureGrid>')) {
          block += `${lines[i]}\n`;
          i += 1;
        }
        const features = [...block.matchAll(/<Feature\s+title="([^"]+)">([\s\S]*?)<\/Feature>/g)];
        html += `<div class="mdx-feature-grid">${features
          .map((match) => `<div class="mdx-feature-card"><div class="mdx-feature-title">${renderInlineMarkdown(match[1])}</div><div class="mdx-feature-body">${renderInlineMarkdown(match[2].trim())}</div></div>`)
          .join('')}</div>`;
        i += 1;
        continue;
      }

      if (line.startsWith('<Badge')) {
        const type = (line.match(/type="([^"]+)"/) || [])[1] || 'tip';
        const inner = line.replace(/^<Badge[^>]*>/, '').replace(/<\/Badge>\s*$/, '').trim();
        html += `<div><span class="mdx-inline-badge mdx-inline-badge-${type}">${renderInlineMarkdown(inner)}</span></div>`;
        i += 1;
        continue;
      }

      if (/^##\s+/.test(line)) {
        const text = line.replace(/^##\s+/, '').trim();
        html += `<h2 id="${slugify(text)}">${renderInlineMarkdown(text)}</h2>`;
        i += 1;
        continue;
      }

      if (/^###\s+/.test(line)) {
        const text = line.replace(/^###\s+/, '').trim();
        html += `<h3 id="${slugify(text)}">${renderInlineMarkdown(text)}</h3>`;
        i += 1;
        continue;
      }

      if (/^\d+\.\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
          i += 1;
        }
        html += `<ol>${items.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join('')}</ol>`;
        continue;
      }

      if (/^-\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^-\s+/.test(lines[i].trim())) {
          items.push(lines[i].trim().replace(/^-\s+/, ''));
          i += 1;
        }
        html += `<ul>${items.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join('')}</ul>`;
        continue;
      }

      const paragraph = [line];
      i += 1;
      while (i < lines.length) {
        const next = lines[i].trim();
        if (!next || next.startsWith('<') || /^##\s+/.test(next) || /^###\s+/.test(next) || /^\d+\.\s+/.test(next) || /^-\s+/.test(next)) {
          break;
        }
        paragraph.push(next);
        i += 1;
      }
      html += `<p>${renderInlineMarkdown(paragraph.join(' '))}</p>`;
    }

    container.innerHTML = html || '<p class="text-slate-300">暂无内容。</p>';
  } catch (error) {
    console.error(error);
    container.innerHTML = `<pre class="overflow-x-auto rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-100">${escapeHtml(String(error))}</pre>`;
  }
}

async function renderBlogIndex() {
  const posts = await Promise.all(BLOG_POSTS.map(loadPost));
  posts.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

  const totalPosts = document.getElementById('blog-total-posts');
  const totalTopics = document.getElementById('blog-topic-count');
  const lastUpdate = document.getElementById('blog-last-update');
  if (totalPosts) totalPosts.textContent = String(posts.length);
  if (totalTopics) totalTopics.textContent = String(new Set(posts.map((post) => post.category || '')).size);
  if (lastUpdate) lastUpdate.textContent = posts[0]?.date || '2026-04-19';

  let activeTag = '';
  const search = document.getElementById('blog-search');

  const applyFilters = () => {
    const keyword = search?.value.trim().toLowerCase() || '';
    const filtered = posts.filter((post) => {
      const tags = Array.isArray(post.tags) ? post.tags.join(' ') : '';
      const matchesText = `${post.title || ''} ${post.summary || ''} ${tags}`.toLowerCase().includes(keyword);
      const matchesTag = !activeTag || displayCategory(post.category) === activeTag;
      return matchesText && matchesTag;
    });
    renderFeatured(filtered[0] || posts[0]);
    renderGrid(filtered);
    renderCategories(posts, (tag) => {
      activeTag = tag;
      applyFilters();
    }, activeTag);
  };

  if (search) {
    search.addEventListener('input', applyFilters);
  }

  applyFilters();
}

async function renderBlogPost() {
  const slug = new URLSearchParams(window.location.search).get('slug') || BLOG_POSTS[0].slug;
  const posts = await Promise.all(BLOG_POSTS.map(loadPost));
  const current = posts.find((post) => post.slug === slug) || posts[0];

  document.title = `${current.title || 'Post'} · Media Helper AI`;

  const postTitle = document.getElementById('post-title');
  const postMeta = document.getElementById('post-meta');
  const postSummary = document.getElementById('post-summary');
  const postContent = document.getElementById('post-content');

  if (postTitle) postTitle.textContent = current.title || current.slug;
  if (postMeta) postMeta.textContent = `${current.date || ''} · ${current.author || 'Geekmister'} · ${current.readingTime || '5 min'}`;
  if (postSummary) postSummary.textContent = current.summary || '';

  renderPostNav(posts, current.slug);
  renderToc(current.headings);

  if (postContent) {
    renderMDX(current.content, postContent);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  initThemeToggle();
  const page = document.body.dataset.page;

  try {
    if (page === 'blog-index') {
      await renderBlogIndex();
    }
    if (page === 'blog-post') {
      await renderBlogPost();
    }
  } catch (error) {
    console.error(error);
    const fallback = document.getElementById('post-grid') || document.getElementById('post-content');
    if (fallback) {
      fallback.innerHTML = '<div class="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-100">内容加载失败，请检查 MDX 文件路径与格式。</div>';
    }
  }
});
