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