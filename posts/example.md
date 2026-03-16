---
title: 示例文章
description: 一篇示例 Markdown 文章，展示标题、段落、列表与代码块
---

# 示例文章

这是一篇示例文章，用来演示 **Markdown** 的常用写法。

## 段落与强调

普通段落。**粗体**、*斜体*、`行内代码` 都可以直接写。

## 列表

- 无序列表项一
- 无序列表项二

1. 有序列表一
2. 有序列表二

## 代码块

```js
// 代码块会高亮显示
function hello() {
  console.log('Hello, Blog!')
}
```

## 链接

[VitePress 文档](https://vitepress.dev/)

---

在 `blog/posts/` 下新建 `.md` 文件并写好 frontmatter（title、description），侧栏会在构建时按目录生成；若需自定义侧栏，可编辑 `blog/.vitepress/config.mts` 的 `sidebar`。
