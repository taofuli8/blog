/**
 * VitePress 站点配置
 * 文件路径: blog/.vitepress/config.mts
 * 开发者: 公众号老猫迷
 * 作用: 站点标题、描述、导航、侧栏、主题、多语言等
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点标题，显示在浏览器标签和导航栏
  title: '本地博客',
  // 站点描述，用于 SEO 和 meta 标签
  description: 'Markdown 写作的静态博客，支持局域网与 GitHub Pages 访问',
  // 语言，影响「上一页/下一页」等文案
  lang: 'zh-CN',
  // 部署到 GitHub Pages：CI 会设置 VITEPRESS_BASE（用户站 '/'，项目站 '/仓库名/'）；本地未设置时默认 '/'
  base: process.env.VITEPRESS_BASE ?? '/',
  // 是否显示每页「最后更新时间」（依赖 Git）
  lastUpdated: true,
  // 构建时忽略死链（如 README 里的 localhost:5173），避免 CI 报错
  ignoreDeadLinks: true,
  // 主题配置
  themeConfig: {
    // 导航栏链接
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
    ],
    // 侧边栏：按路径分组，/posts/ 下显示文章列表
    sidebar: {
      '/posts/': [
        {
          text: '文章列表',
          items: [
            { text: '示例文章', link: '/posts/example' },
            { text: '写作说明', link: '/posts/how-to-write' },
          ],
        },
      ],
    },
    // 社交链接（可选，按需改）
    socialLinks: [],
    // 页脚
    footer: {
      message: '静态博客 · 公众号老猫迷',
      copyright: '本地与 GitHub 双模式访问',
    },
    // 编辑链接（不用可删）
    editLink: false,
  },
  // 开发时监听 0.0.0.0，方便局域网访问
  vite: {
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
  },
})
