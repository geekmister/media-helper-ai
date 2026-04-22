#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const ASSETS_DIR = path.join(ROOT, 'assets');
const DIST_DIR = path.join(ROOT, 'dist');
const POSTS_ZH_DIR = path.join(ROOT, 'posts', 'zh');
const POSTS_EN_DIR = path.join(ROOT, 'posts', 'en');
const CHANGELOG_DIR = path.join(ROOT, 'changelog');

const DEPLOY_FILES = ['index.html', 'changelog.html'];
const DEPLOY_DIRS = ['blog'];
const DEPLOY_ASSETS = ['app.js', 'blog.js', 'theme.css', 'logo-mark.svg', 'blog-content.js', 'changelog-content.js'];
const BUILD_TIMESTAMP = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function cleanDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  ensureDir(dirPath);
}

function writeText(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function copyFile(sourcePath, targetPath) {
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
}

function copyDir(sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) {
    return;
  }

  ensureDir(targetPath);

  for (const entry of fs.readdirSync(sourcePath, { withFileTypes: true })) {
    const from = path.join(sourcePath, entry.name);
    const to = path.join(targetPath, entry.name);

    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      copyFile(from, to);
    }
  }
}

function parseValue(rawValue) {
  const value = rawValue.trim();

  if (!value) {
    return '';
  }

  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }

  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean);
  }

  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);

  return value;
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n*/);
  if (!match) {
    return { meta: {}, body: markdown.trim() };
  }

  const meta = {};
  let activeArrayKey = null;

  for (const rawLine of match[1].split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith('- ') && activeArrayKey) {
      meta[activeArrayKey].push(line.replace(/^-\s*/, '').trim().replace(/^['"]|['"]$/g, ''));
      continue;
    }

    activeArrayKey = null;
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (!rawValue) {
      meta[key] = [];
      activeArrayKey = key;
      continue;
    }

    meta[key] = parseValue(rawValue);
  }

  return {
    meta,
    body: markdown.slice(match[0].length).trim()
  };
}

function readMarkdownFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  return parseFrontmatter(source);
}

function getReadingTime(text) {
  const normalized = text.replace(/<[^>]+>/g, ' ');
  const tokenCount = (normalized.match(/[\u4e00-\u9fff]|\b\w+\b/g) || []).length;
  const minutes = Math.max(1, Math.ceil(tokenCount / 220));
  return `${minutes} min`;
}

function loadLocalizedPost(filePath, fallback = {}) {
  const { meta, body } = readMarkdownFile(filePath);
  const slug = String(meta.slug || fallback.slug || path.basename(filePath).replace(/\.mdx?$/, ''));
  const tags = Array.isArray(meta.tags)
    ? meta.tags
    : String(meta.tags || '')
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

  return {
    slug,
    accent: meta.accent || fallback.accent || 'from-violet-500/30 to-cyan-400/20',
    category: meta.category || fallback.category || 'General',
    title: meta.title || fallback.title || slug,
    date: meta.date || fallback.date || new Date().toISOString().slice(0, 10),
    author: meta.author || fallback.author || 'Geekmister',
    readingTime: meta.readingTime || fallback.readingTime || getReadingTime(body),
    tags: tags.length ? tags : (fallback.tags || []),
    summary: meta.summary || fallback.summary || '',
    content: body
  };
}

function buildPosts() {
  if (!fs.existsSync(POSTS_ZH_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(POSTS_ZH_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .sort();

  const posts = files.map((fileName) => {
    const zhPath = path.join(POSTS_ZH_DIR, fileName);
    const zhPost = loadLocalizedPost(zhPath);
    const translations = {};

    const enPath = path.join(POSTS_EN_DIR, `${zhPost.slug}.md`);
    if (fs.existsSync(enPath)) {
      const enPost = loadLocalizedPost(enPath, zhPost);
      translations.en = {
        title: enPost.title,
        summary: enPost.summary,
        content: enPost.content,
        tags: enPost.tags
      };
    }

    return {
      ...zhPost,
      translations
    };
  });

  return posts.sort((left, right) => String(right.date).localeCompare(String(left.date)));
}

function extractSectionItems(content, headings) {
  const escapedHeadings = headings.map((heading) => heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const sectionRegex = new RegExp(`##\\s+(?:${escapedHeadings})[\\s\\S]*?(?=\\n##\\s+|$)`, 'i');
  const match = content.match(sectionRegex);

  if (!match) {
    return [];
  }

  return match[0]
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('-'))
    .map((line) => line.replace(/^-\s*/, ''));
}

function parseVersionNumber(version) {
  return String(version)
    .replace(/^v/i, '')
    .split('.')
    .map((item) => Number(item) || 0);
}

function compareVersions(left, right) {
  const a = parseVersionNumber(left.version || left);
  const b = parseVersionNumber(right.version || right);
  const length = Math.max(a.length, b.length);

  for (let index = 0; index < length; index += 1) {
    const delta = (b[index] || 0) - (a[index] || 0);
    if (delta !== 0) {
      return delta;
    }
  }

  return 0;
}

function buildChangelog() {
  if (!fs.existsSync(CHANGELOG_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(CHANGELOG_DIR)
    .filter((file) => file.endsWith('.md') && !file.endsWith('.en.md'));

  const changelog = files.map((fileName) => {
    const filePath = path.join(CHANGELOG_DIR, fileName);
    const content = fs.readFileSync(filePath, 'utf8');
    const versionMatch = content.match(/^#\s+(v[\d.]+)/m);
    const dateMatch = content.match(/发布日期[:：]\s*([\d-]+)/m);
    const version = versionMatch ? versionMatch[1] : fileName.replace(/\.md$/, '');
    const date = dateMatch ? dateMatch[1] : '';

    const item = {
      version,
      date,
      type: 'feature',
      sections: {
        features: extractSectionItems(content, ['新增功能', '功能更新']),
        optimizations: extractSectionItems(content, ['改进优化', '性能优化']),
        fixes: extractSectionItems(content, ['问题修复']),
        knownIssues: extractSectionItems(content, ['已知问题'])
      },
      translations: {}
    };

    const enFilePath = path.join(CHANGELOG_DIR, `${version}.en.md`);
    if (fs.existsSync(enFilePath)) {
      const enContent = fs.readFileSync(enFilePath, 'utf8');
      const enDateMatch = enContent.match(/Release Date[:：]\s*([\d-]+)/i);

      item.translations.en = {
        date: enDateMatch ? enDateMatch[1] : date,
        sections: {
          features: extractSectionItems(enContent, ['New Features', 'Features']),
          optimizations: extractSectionItems(enContent, ['Improvements', 'Optimizations']),
          fixes: extractSectionItems(enContent, ['Bug Fixes', 'Fixes']),
          knownIssues: extractSectionItems(enContent, ['Known Issues'])
        }
      };
    }

    return item;
  });

  return changelog.sort(compareVersions);
}

function writeCompiledData(posts, changelog) {
  const blogPayload = `window.PRECOMPILED_BLOG_POSTS = ${JSON.stringify(posts, null, 2)};\n`;
  const changelogPayload = `window.PRECOMPILED_CHANGELOG = ${JSON.stringify(changelog, null, 2)};\n`;

  writeText(path.join(ASSETS_DIR, 'blog-content.js'), blogPayload);
  writeText(path.join(ASSETS_DIR, 'changelog-content.js'), changelogPayload);
}

function buildVersionedAssetName(assetName) {
  const ext = path.extname(assetName);
  const base = path.basename(assetName, ext);
  return `${base}.${BUILD_TIMESTAMP}${ext}`;
}

function rewriteAssetReferences(filePath, assetMap) {
  let html = fs.readFileSync(filePath, 'utf8');

  for (const [originalName, versionedName] of Object.entries(assetMap)) {
    html = html.replaceAll(`assets/${originalName}`, `assets/${versionedName}`);
    html = html.replaceAll(`../assets/${originalName}`, `../assets/${versionedName}`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

function buildDeployBundle() {
  cleanDir(DIST_DIR);

  for (const fileName of DEPLOY_FILES) {
    copyFile(path.join(ROOT, fileName), path.join(DIST_DIR, fileName));
  }

  for (const dirName of DEPLOY_DIRS) {
    copyDir(path.join(ROOT, dirName), path.join(DIST_DIR, dirName));
  }

  const assetMap = Object.fromEntries(
    DEPLOY_ASSETS.map((assetName) => [assetName, buildVersionedAssetName(assetName)])
  );

  for (const [assetName, versionedName] of Object.entries(assetMap)) {
    copyFile(path.join(ASSETS_DIR, assetName), path.join(DIST_DIR, 'assets', versionedName));
  }

  writeText(path.join(DIST_DIR, 'assets', 'asset-manifest.json'), JSON.stringify({
    timestamp: BUILD_TIMESTAMP,
    assets: assetMap
  }, null, 2));

  rewriteAssetReferences(path.join(DIST_DIR, 'index.html'), assetMap);
  rewriteAssetReferences(path.join(DIST_DIR, 'changelog.html'), assetMap);
  rewriteAssetReferences(path.join(DIST_DIR, 'blog', 'index.html'), assetMap);
  rewriteAssetReferences(path.join(DIST_DIR, 'blog', 'post.html'), assetMap);

  return assetMap;
}

function main() {
  const posts = buildPosts();
  const changelog = buildChangelog();

  writeCompiledData(posts, changelog);
  const assetMap = buildDeployBundle();

  console.log(`Build complete: ${posts.length} posts, ${changelog.length} changelog versions.`);
  console.log(`Asset version timestamp: ${BUILD_TIMESTAMP}`);
  console.log(`Versioned assets: ${Object.values(assetMap).join(', ')}`);
  console.log(`CDN-ready static output: ${path.join(DIST_DIR)}`);
}

main();
