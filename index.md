---
# 首页 frontmatter，layout: home 表示使用首页布局
layout: home
title: 首页
titleTemplate: 本地博客
description: 用 Markdown 写文章，静态生成，局域网与 GitHub 都能访问。
---

# 欢迎

这是一个**纯本地静态博客**，用 Markdown 写文案，方便维护。

- **写作**：在 `blog/posts/` 下新建 `.md` 文件即可
- **本地预览**：在 `blog` 目录执行 `npm run dev`，浏览器打开 http://localhost:5173
- **局域网访问**：同一 WiFi 下用 `http://你的电脑IP:5173` 即可查看
- **外网访问**：可部署到 GitHub Pages，或用自己的服务器做端口映射

开电脑后想随时查看：运行一次 `npm run dev` 或 `npm run preview`（构建后），即可在本机或局域网访问。
