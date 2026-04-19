# Media Helper AI

> 一个面向选题评估与报告展示的纯前端静态项目：无 Python、无 Node、无框架、无构建流程，打开即可使用。

![Frontend](https://img.shields.io/badge/Role-Pure%20Frontend-8b5cf6)
![Stack](https://img.shields.io/badge/Stack-HTML%20%2B%20CSS%20%2B%20JS-06b6d4)
![Runtime](https://img.shields.io/badge/Runtime-Static%20Only-22c55e)
![Language](https://img.shields.io/badge/i18n-ZH%20%2F%20EN-f59e0b)

---

## ✨ 项目说明

Media Helper AI 负责承载整套“知乎问题多维度评估报告”的前端展示体验，重点是：

- 高端官网式视觉表现
- 原生 JavaScript 表单交互
- 中英文切换与深浅色模式
- 本地静态可运行的报告生成体验

这个仓库**只保留前端页面与交互逻辑**，不再内置任何 Python 服务。

---

## 🧩 当前能力

### 1. 纯前端直接运行
- 双击首页即可打开
- 不依赖 Node、Vite、React、Vue 等框架
- 可直接部署到 GitHub Pages、Nginx 或任意静态托管平台

### 2. 双模式分析体验

| 模式 | 是否依赖后端 | 说明 |
|---|---:|---|
| 本地静态模式 | 否 | 浏览器直接生成基础评估报告 |
| 联动服务模式 | 是 | 自动连接 GMService 获取实时模型结果 |

### 3. 高质量展示输出
- 自动生成评分表、结论卡片、元数据区块
- 报告位于四张能力卡片上方
- 适合演示、提案、产品包装和原型验证

---

## 🏗️ 项目结构

```text
media-helper-ai.git/
├── index.html              # 首页与主评估界面
├── README.md               # 项目说明
├── assets/
│   ├── app.js              # 原生交互逻辑与前端本地分析
│   └── theme.css           # 主题样式与视觉系统
├── blog/                   # 博客首页与文章详情页
└── posts/                  # MDX 文章内容
```

---

## 🚀 使用方式

### 方式一：直接本地打开

这是推荐方式，不需要启动任何本仓库内的服务。

```bash
cd /Users/geekmister/Desktop/Workspace/Repositories/Geekmister/media-helper-ai.git
open index.html
```

或者直接在 Finder 中双击首页文件。

### 方式二：部署为静态站点

将整个目录上传到任意静态托管环境即可使用。

---

## 🔌 与 GMService 的协作关系

当前前端会优先尝试请求下面的独立后端接口：

```text
http://127.0.0.1:8000/api/evaluate
```

如果 GMService 未启动，页面会自动降级为**前端本地分析模式**，依然可以完整演示交互和报告回填流程。

如需查看实时模型结果，请参考同工作区后端项目中的说明文档。

---

## 🧪 调试建议

### 仅验证前端页面

```bash
open index.html
```

### 可选检查后端是否在线

```bash
curl http://127.0.0.1:8000/health
```

---

## 📌 约束原则

- 不在前端本地抓取知乎内容
- 不在这个仓库中保留 Python 后端逻辑
- 不引入任何前端框架或构建链路
- 页面分析逻辑全部由原生 JavaScript 承载

---

## 🎯 适用场景

- 内容选题评估展示
- AI 产品 Demo 与原型验证
- 零依赖静态站点部署
- 提案页、汇报页、品牌展示页
