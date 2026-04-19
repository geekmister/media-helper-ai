#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 文章数据
const posts = [];

// 读取中文文章
const zhPostsDir = path.join(__dirname, 'posts', 'zh');
if (fs.existsSync(zhPostsDir)) {
  const zhFiles = fs.readdirSync(zhPostsDir).filter(file => file.endsWith('.md'));
  
  zhFiles.forEach(file => {
    const filePath = path.join(zhPostsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 解析元数据
    const metaMatch = content.match(/---[\s\S]*?---/);
    let meta = {};
    if (metaMatch) {
      const metaContent = metaMatch[0].replace(/---/g, '').trim();
      metaContent.split('\n').forEach(line => {
        const [key, value] = line.split(':').map(item => item.trim());
        if (key && value) {
          meta[key] = value.replace(/['"]/g, '');
        }
      });
    }
    
    // 提取内容
    const postContent = content.replace(/---[\s\S]*?---/, '').trim();
    
    // 生成slug
    const slug = meta.slug || file.replace('.md', '');
    
    // 构建文章对象
    const post = {
      slug: slug,
      accent: meta.accent || 'from-violet-500/30 to-cyan-400/20',
      category: meta.category || 'General',
      title: meta.title || 'Untitled',
      date: meta.date || new Date().toISOString().split('T')[0],
      author: meta.author || 'Geekmister',
      readingTime: meta.readingTime || '5 min',
      tags: meta.tags ? meta.tags.split(',').map(tag => tag.trim()) : [],
      summary: meta.summary || '',
      content: postContent,
      translations: {}
    };
    
    // 检查对应的英文文章
    const enFilePath = path.join(__dirname, 'posts', 'en', `${slug}.md`);
    if (fs.existsSync(enFilePath)) {
      const enContent = fs.readFileSync(enFilePath, 'utf8');
      
      // 解析英文元数据
      const enMetaMatch = enContent.match(/---[\s\S]*?---/);
      let enMeta = {};
      if (enMetaMatch) {
        const enMetaContent = enMetaMatch[0].replace(/---/g, '').trim();
        enMetaContent.split('\n').forEach(line => {
          const [key, value] = line.split(':').map(item => item.trim());
          if (key && value) {
            enMeta[key] = value.replace(/['"]/g, '');
          }
        });
      }
      
      // 提取英文内容
      const enPostContent = enContent.replace(/---[\s\S]*?---/, '').trim();
      
      // 添加英文翻译
      post.translations.en = {
        title: enMeta.title || post.title,
        summary: enMeta.summary || post.summary,
        content: enPostContent,
        tags: enMeta.tags ? enMeta.tags.split(',').map(tag => tag.trim()) : post.tags
      };
    }
    
    posts.push(post);
  });
}

// 生成blog-content.js
const outputPath = path.join(__dirname, 'assets', 'blog-content.js');
const outputContent = `window.PRECOMPILED_BLOG_POSTS = ${JSON.stringify(posts, null, 2)};`;

fs.writeFileSync(outputPath, outputContent);

console.log(`Generated blog-content.js with ${posts.length} posts`);

// 解析changelog文件
const changelogDir = path.join(__dirname, 'changelog');
const changelogVersions = [];

if (fs.existsSync(changelogDir)) {
  const changelogFiles = fs.readdirSync(changelogDir).filter(file => file.endsWith('.md') && !file.endsWith('.en.md'));
  
  changelogFiles.forEach(file => {
    const filePath = path.join(changelogDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 解析版本号
    const versionMatch = content.match(/^#\s+(v[\d.]+)/m);
    const version = versionMatch ? versionMatch[1] : file.replace('.md', '');
    
    // 解析发布日期
    const dateMatch = content.match(/发布日期：([\d-]+)/m);
    const date = dateMatch ? dateMatch[1] : '';
    
    // 解析各个部分
    const sections = {
      features: [],
      optimizations: [],
      fixes: [],
      knownIssues: []
    };
    
    // 提取新增功能
    const featuresMatch = content.match(/## 新增功能[\s\S]*?(?=##|$)/);
    if (featuresMatch) {
      const featuresContent = featuresMatch[0].replace(/## 新增功能/, '').trim();
      sections.features = featuresContent
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.trim().replace(/^-\s*/, ''))
        .filter(item => item);
    }
    
    // 提取改进优化
    const optimizationsMatch = content.match(/## 改进优化.*?[\s\S]*?(?=##|$)/);
    if (optimizationsMatch) {
      const optimizationsContent = optimizationsMatch[0].replace(/## 改进优化.*?/, '').trim();
      sections.optimizations = optimizationsContent
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.trim().replace(/^-\s*/, ''))
        .filter(item => item);
    }
    
    // 提取问题修复
    const fixesMatch = content.match(/## 问题修复[\s\S]*?(?=##|$)/);
    if (fixesMatch) {
      const fixesContent = fixesMatch[0].replace(/## 问题修复/, '').trim();
      sections.fixes = fixesContent
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.trim().replace(/^-\s*/, ''))
        .filter(item => item);
    }
    
    // 提取已知问题
    const knownIssuesMatch = content.match(/## 已知问题[\s\S]*?(?=##|$)/);
    if (knownIssuesMatch) {
      const knownIssuesContent = knownIssuesMatch[0].replace(/## 已知问题/, '').trim();
      sections.knownIssues = knownIssuesContent
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.trim().replace(/^-\s*/, ''))
        .filter(item => item);
    }
    
    // 构建版本对象
    const versionData = {
      version: version,
      date: date,
      type: 'feature', // 默认类型
      sections: sections,
      translations: {}
    };
    
    // 检查对应的英文文件
    const enFilePath = path.join(__dirname, 'changelog', `${version}.en.md`);
    if (fs.existsSync(enFilePath)) {
      const enContent = fs.readFileSync(enFilePath, 'utf8');
      
      // 解析英文发布日期
      const enDateMatch = enContent.match(/Release Date: ([\d-]+)/m);
      const enDate = enDateMatch ? enDateMatch[1] : date;
      
      // 解析英文各个部分
      const enSections = {
        features: [],
        optimizations: [],
        fixes: [],
        knownIssues: []
      };
      
      // 提取英文新增功能
      const enFeaturesMatch = enContent.match(/## New Features[\s\S]*?(?=##|$)/);
      if (enFeaturesMatch) {
        const enFeaturesContent = enFeaturesMatch[0].replace(/## New Features/, '').trim();
        enSections.features = enFeaturesContent
          .split('\n')
          .filter(line => line.trim().startsWith('-'))
          .map(line => line.trim().replace(/^-\s*/, ''))
          .filter(item => item);
      }
      
      // 提取英文改进优化
      const enOptimizationsMatch = enContent.match(/## Improvements[\s\S]*?(?=##|$)/);
      if (enOptimizationsMatch) {
        const enOptimizationsContent = enOptimizationsMatch[0].replace(/## Improvements/, '').trim();
        enSections.optimizations = enOptimizationsContent
          .split('\n')
          .filter(line => line.trim().startsWith('-'))
          .map(line => line.trim().replace(/^-\s*/, ''))
          .filter(item => item);
      }
      
      // 提取英文问题修复
      const enFixesMatch = enContent.match(/## Bug Fixes[\s\S]*?(?=##|$)/);
      if (enFixesMatch) {
        const enFixesContent = enFixesMatch[0].replace(/## Bug Fixes/, '').trim();
        enSections.fixes = enFixesContent
          .split('\n')
          .filter(line => line.trim().startsWith('-'))
          .map(line => line.trim().replace(/^-\s*/, ''))
          .filter(item => item);
      }
      
      // 提取英文已知问题
      const enKnownIssuesMatch = enContent.match(/## Known Issues[\s\S]*?(?=##|$)/);
      if (enKnownIssuesMatch) {
        const enKnownIssuesContent = enKnownIssuesMatch[0].replace(/## Known Issues/, '').trim();
        enSections.knownIssues = enKnownIssuesContent
          .split('\n')
          .filter(line => line.trim().startsWith('-'))
          .map(line => line.trim().replace(/^-\s*/, ''))
          .filter(item => item);
      }
      
      // 添加英文翻译
      versionData.translations.en = {
        date: enDate,
        sections: enSections
      };
    }
    
    changelogVersions.push(versionData);
  });
  
  // 按版本号排序（从高到低）
  changelogVersions.sort((a, b) => {
    const aParts = a.version.replace('v', '').split('.').map(Number);
    const bParts = b.version.replace('v', '').split('.').map(Number);
    
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const aVal = aParts[i] || 0;
      const bVal = bParts[i] || 0;
      if (aVal !== bVal) {
        return bVal - aVal;
      }
    }
    return 0;
  });
  
  // 生成changelog-content.js
  const changelogOutputPath = path.join(__dirname, 'assets', 'changelog-content.js');
  const changelogOutputContent = `window.PRECOMPILED_CHANGELOG = ${JSON.stringify(changelogVersions, null, 2)};`;
  
  fs.writeFileSync(changelogOutputPath, changelogOutputContent);
  
  console.log(`Generated changelog-content.js with ${changelogVersions.length} versions`);
}