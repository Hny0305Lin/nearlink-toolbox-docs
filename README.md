# NearLink ToolBox Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build) [![Netlify Status](https://api.netlify.com/api/v1/badges/de8fbb15-af30-4eb2-beee-1271f01e5ecc/deploy-status)](https://app.netlify.com/sites/cheerful-rabanadas-beb490/deploys) [![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-success-blue?logo=cloudflare)](https://nearlink.docs.haohanyh.ovh) 

NearLink ToolBox 是浩瀚银河团队联合Sgguo团队开发的一款星闪工具箱软件，旨在搭建星闪用户和开发者之间的桥梁工具。

## 🚀 项目特点

<img src="src/assets/nearlink-logo.svg" alt="NearLink Logo" width="120" align="right"/>

- **团队嵌入式代表作**：搭建星闪用户和开发者之间的桥梁，让用户能够便捷地使用开源固件，同时也让开发者能够及时发布更新。

- **广泛的设备支持**：支持润和、小熊派、天工聚创、浩瀚银河等厂商的开发板，并持续扩展对更多社区开源开发板的支持。

- **独立于前端**：基于 Tauri 框架，支持任何前端技术栈，确保团队开发灵活性的同时保证软件功能互联互通。

- **安全的通讯**：采用 TanStack Router 进行通讯，保证软件内前后端在任何情况下的通讯安全。

- **极致性能**：得益于 Rust 语言的高性能，软件后端在 Windows 平台上内存占用最低可达 4MB。

- **跨平台支持**：完整支持 Windows、MacOS、Ubuntu 平台，用户可以随时随地使用。

## 📚 文档结构

```
src/content/docs/
├── about/          # 关于我们
├── at-guides/      # AT 指令指南
├── guides/         # 用户指南
├── getting-started/# 入门指南
└── docs/          # 参考文档
```

## 🛠️ 开发命令

| 命令                    | 操作                           |
| :--------------------- | :----------------------------- |
| `pnpm install`         | 安装依赖                       |
| `pnpm dev`            | 启动本地开发服务器 `localhost:4321` |
| `pnpm build`          | 构建生产版本到 `./dist/`        |
| `pnpm preview`        | 本地预览生产版本                |

## 🌟 相关链接

- [官方网站](https://nearlink.sgguo.com)
- [GitHub 仓库](https://github.com/MiraHikari/nearlink-firmwares)
- [Bilibili 官方账号](https://space.bilibili.com/1125364587)

## 📄 许可证

本项目受 Haohanyh Computer Software Products Open Source LICENSE 保护
[LICENSE](https://github.com/Hny0305Lin/LICENSE/blob/main/LICENSE)

## 🤝 联系我们

- 邮箱：[lmj-mc@outlook.com](mailto:lmj-mc@outlook.com)
- Gitee：[Lin.Meng](https://gitee.com/su-muyao)
- HiSilicon 社区：[联系我们](https://developers.hisilicon.com/userhomepage?uid=229213b344fb46238d47bc1f209583c9)

---
© 2019-FUTURE 浩瀚银河, 版权所有。