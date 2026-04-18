# Media Helper AI

> 一个面向内容选题评估场景的高质感前端展示项目，负责表单交互、报告可视化、深浅色主题、中英文切换，以及整体官网级体验呈现。

![Frontend](https://img.shields.io/badge/Role-Frontend-8b5cf6)
![UI](https://img.shields.io/badge/UI-Premium%20Docs%20Style-0ea5e9)
![Theme](https://img.shields.io/badge/Theme-Dark%20%2F%20Light-22c55e)
![Language](https://img.shields.io/badge/i18n-ZH%20%2F%20EN-f59e0b)

---

## ✨ 项目定位

Media Helper AI 专注于把“问题评估结果”变成可展示、可演示、可复用的产品化页面体验：

- 面向知乎问题评估场景的高端展示前台
- 首页级视觉包装与文档型信息架构
- 支持表单提交、结果回填、状态提示、主题切换、双语切换
- 前后端彻底拆分，便于独立演进与后续部署

---

## 🧩 核心能力

### 1. 高级视觉呈现
- 参考文档产品官网风格构建页面节奏
- 强调玻璃态、渐变、卡片式信息分层
- 适合对外演示、方案汇报、产品包装

### 2. 智能评估交互
- 用户输入账号定位、问题链接、创建时间、关注人数、浏览量
- 一键触发独立后端服务进行运算
- 将结构化结果回填为评分表、结论卡片和元数据区

### 3. 产品化体验细节
- 中英文切换
- Dark / Light 模式切换
- 提交状态提示
- 数据加载后的自动滚动与报告刷新

---

## 🏗️ 项目结构

```text
media-helper-ai.git/
├── index.html              # 首页与评估主界面
├── assets/
│   ├── app.js              # 前端交互逻辑与 API 调用
│   └── theme.css           # 视觉系统与主题样式
├── guide/                  # 文档页
├── reference/              # 参考页
├── examples/               # 示例页
└── server.py               # 前端静态服务入口
```

---

## 🔌 与 GMService 的关系

当前工作区采用前后端分仓模式：

| 项目 | 职责 | 默认端口 |
|---|---|---:|
| Media Helper AI | 前端展示、交互、报告渲染 | 4173 |
| GMService | 大模型评估接口、JSON 规范化、服务兜底 | 8000 |

前端默认请求：

```text
http://127.0.0.1:8000/api/evaluate
```

---

## 🚀 快速启动

### 前置条件

- Python 3.10+
- 已在 GMService 中配置好可用的模型密钥

### 启动顺序

#### Step 1：启动后端服务

请先进入 GMService 项目并启动服务：

```bash
cd ../GMService.git
cp .env.example .env
python3 server.py
```

#### Step 2：启动前端项目

```bash
cd ../media-helper-ai.git
python3 server.py
```

#### Step 3：打开页面

```text
Frontend: http://127.0.0.1:4173
Backend : http://127.0.0.1:8000
```

---

## 🟣 推荐启动脚本

如果你在同一个工作区里联调，建议按下面方式分别在两个终端执行。

### Terminal A：启动 GMService

```bash
cd /path/to/GMService.git
python3 server.py
```

### Terminal B：启动 Media Helper AI

```bash
cd /path/to/media-helper-ai.git
python3 server.py
```

---

## 🧪 本地调试建议

### 检查后端健康状态

```bash
curl http://127.0.0.1:8000/health
```

### 手动测试评估接口

```bash
curl -X POST http://127.0.0.1:8000/api/evaluate \
  -H "Content-Type: application/json" \
  -d '{
    "accountPositioning":"程序员 / AI 工程师 / 独立开发者 / 一人 AI 公司",
    "questionUrl":"https://www.zhihu.com/question/xxxxxx",
    "createdAt":"2026-01-30T12:39",
    "followers":14,
    "views":2243,
    "lang":"zh"
  }'
```

---

## 🎯 适用场景

- 内容选题价值评估演示
- AI 产品体验原型展示
- 前后端分仓协作开发
- 高质量提案、路演、客户演示页面

---

## 📌 备注

- 当前前端不负责模型推理
- 当前前端不抓取知乎内容
- 问题标题与描述由独立后端结合链接和上下文进行模型推断

如果你希望继续扩展，本项目可以进一步接入：

- 用户登录体系
- 报告历史记录
- PDF / 图片导出
- 多模型切换
- 在线部署与域名接入
