# 本地静态博客

<!-- 文件路径: blog/README.md | 开发者: 公众号老猫迷 -->

用 **Markdown** 写文章，**VitePress** 生成静态站，支持**局域网**访问和 **GitHub Pages** 外网发布。开电脑即可随时查看（本地或局域网），或推送到 GitHub 后随时随地访问。

---

## 一、本地写文章与预览

| 操作 | 命令（在项目根目录） | 说明 |
|------|----------------------|------|
| 开发预览 | `npm run dev` | 启动开发服务器，改 Markdown 即刷新；默认 http://localhost:5173 |
| 构建静态站 | `npm run build` | 输出到 `.vitepress/dist` |
| 预览构建结果 | `npm run preview` | 以 0.0.0.0 监听，本机+局域网可访问 |

文章放在 `blog/posts/` 下，新建 `.md` 并写 frontmatter（`title`、`description`），然后在 `blog/.vitepress/config.mts` 的侧栏里加一项链接即可。详见 `posts/how-to-write.md`。

---

## 二、局域网访问（开电脑就随时看）

- **开发时**：运行 `npm run dev` 后，VitePress 已监听 `0.0.0.0`，同一 WiFi 下用浏览器访问 **`http://你的电脑IP:5173`** 即可。
- **构建后**：先 `npm run build`，再 `npm run preview`，同样用 **`http://你的电脑IP:5173`** 访问。

查看本机 IP（Windows）：命令行执行 `ipconfig`，看「IPv4 地址」。

若希望「开电脑就自动能看」、不想每次手动运行命令，可以：
- 把「运行 `npm run preview`」做成一个快捷方式放在桌面，开机后双击一次即可；或
- 用 Windows 任务计划程序，设置「用户登录时」运行一条命令：`cd /d 项目路径\blog && npx vitepress preview --host 0.0.0.0 --port 5173`（需先在该目录执行过 `npm install`）。

---

## 三、外网访问：GitHub Pages（推荐）

部署到 GitHub Pages 后，**不依赖你电脑开机**，随时随地都能打开博客。本项目已包含自动部署工作流 `.github/workflows/deploy.yml`，按下面步骤即可上线。

### 第一步：在 GitHub 创建仓库并推送代码

1. 在 [GitHub](https://github.com/new) 新建一个仓库：
   - **想用「个人首页」地址**（如 `https://你的用户名.github.io`）：仓库名填 **`你的用户名.github.io`**（例如用户叫 `zhangsan` 就填 `zhangsan.github.io`）。
   - **想用「项目子路径」地址**（如 `https://你的用户名.github.io/blog`）：仓库名随意，例如 **`blog`**。
2. 在本项目根目录（即 `blog` 目录）初始化 Git 并推送到 GitHub（若已有 Git 可跳过初始化）：

```powershell
cd f:\blog
git init
git add .
git commit -m "init: 博客初始版本"
git branch -M main
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

把 `你的用户名`、`仓库名` 换成你自己的（例如 `zhangsan`、`blog` 或 `zhangsan.github.io`）。

### 第二步：开启 GitHub Pages 并选 Actions 发布

1. 打开该仓库 → **Settings** → 左侧 **Pages**。
2. 在 **Build and deployment** 里，**Source** 选择 **GitHub Actions**（不要选 Deploy from a branch）。
3. 保存后，每次推送到 `main` 分支会自动运行 `.github/workflows/deploy.yml`：构建 VitePress 并把结果发布到 Pages。

### 第三步：查看访问地址

- 若仓库名为 **`你的用户名.github.io`**：站点地址为 **`https://你的用户名.github.io`**。
- 若仓库名为其他（如 **`blog`**）：站点地址为 **`https://你的用户名.github.io/blog/`**。

首次推送后到 **Actions** 页可看构建是否成功；约 1～2 分钟后访问上述地址即可打开博客。

### 关于 base 路径（无需手改）

`base` 已由 CI 根据仓库名自动设置：用户站（`xxx.github.io`）为 `'/'`，项目站为 `'/仓库名/'`。本地开发 `npm run dev` 未设置环境变量时默认 `'/'`，无需改配置文件。

---

## 四、用服务器做外网映射（可选）

若你有一台公网服务器，可以：

- 在服务器上 clone 本仓库，在项目根目录执行 `npm run build`，用 Nginx/Caddy 把站点根目录指到 `.vitepress/dist`；或
- 在你本机运行 `npm run preview`，在路由器或服务器上做**端口映射**，把公网某端口映射到本机 5173。这样只有在你本机开着且运行了 preview 时，外网才能访问。

相比之下，**GitHub Pages 不需要你开机、不占本机资源**，更适合「随时随地查看」。

---

## 五、小结

| 场景 | 做法 |
|------|------|
| 本地写文章 | 编辑 `blog/posts/*.md`，侧栏在 `config.mts` 里配置 |
| 本机预览 | `npm run dev` 或 `npm run build` + `npm run preview` |
| 局域网查看 | 运行上述命令后，用 `http://本机IP:5173` 访问 |
| 开电脑就随时看 | 开机后运行一次 `npm run dev` 或 `npm run preview`，或设成登录自启 |
| 外网随时看 | 用 GitHub Pages 部署（推荐），或服务器映射 5173 端口 |

后续需要我帮你「整理优化」、加文章或改侧栏，直接说即可，全由我操作。
