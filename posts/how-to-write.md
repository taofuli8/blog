---
title: 写作说明
description: 如何在本博客中新增和编辑 Markdown 文章
---

# 写作说明

## 新增一篇文章

1. 在 `blog/posts/` 下新建一个 `.md` 文件，例如 `my-post.md`。
2. 文件开头写上 frontmatter（用 `---` 包起来）：

```yaml
---
title: 文章标题
description: 简短描述（可选，用于 SEO 和摘要）
---
```

3. 下面正常用 Markdown 写正文即可。

## 让新文章出现在侧栏

打开 `blog/.vitepress/config.mts`，在 `themeConfig.sidebar['/posts/']` 的 `items` 里增加一项，例如：

```ts
{ text: '我的新文章', link: '/posts/my-post' },
```

链接路径是 `/posts/` + 文件名（不含 `.md`）。

## 本地预览与构建

- **开发预览**（改完即刷新）：在项目根目录执行 `npm run docs:dev`，或在 `blog` 目录执行 `npm run dev`。
- **构建静态站**：在项目根执行 `npm run docs:build`，或在 `blog` 目录执行 `npm run build`，输出在 `blog/.vitepress/dist`。
- **局域网访问**：开发时已监听 `0.0.0.0`，同 WiFi 下用 `http://你的电脑IP:5173` 访问；或先 `npm run build` 再在 `blog` 目录执行 `npm run preview`，同样支持局域网。

## 维护建议

- 文章都放在 `blog/posts/`，可按主题建子目录，如 `posts/tech/`、`posts/life/`。
- 需要新分类时，在 `config.mts` 的 `sidebar` 里加一组，或在 `nav` 里加导航入口。
- 由我（AI）帮你整理优化时，直接说「帮我加一篇文章 xxx」或「侧栏加一个分类」即可。
