// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		plugins: [starlightImageZoom()],
		lastUpdated: true,
		title: {
			'zh-CN': '星闪工具箱',
			en: 'NearLink ToolBox',
		},
		logo: {
			light: './src/assets/nearlink-logo.svg',
			dark: './src/assets/nearlink-logo.svg',
		},
		customCss: [
			'./src/assets/fonts.css',
			'./src/assets/custom.css',
			'./src/assets/landing.css'
		],
		head: [
			// 添加meta viewport确保移动端正确显示
			{
				tag: 'meta',
				attrs: {
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0',
				},
			},
		],
		social: {
			github: 'https://github.com/MiraHikari/nearlink-firmwares',
		},
		defaultLocale: 'root',
		locales: {
			root: {
				label: '简体中文',
				lang: 'zh-CN',
			},
			en: {
				label: 'English',
				lang: "en"
			},
		},
		sidebar: [
			{
				label: '初次开始',
				translations: {
					en: "First Step"
				},
				autogenerate: { directory: 'getting-started'},
				collapsed: true,
			},
			{
				label: '用户指南',
				translations: {
					en: "User Guide"
				},
				autogenerate: { directory: 'guides' },
			},
			{
				label: 'AT 指南',
				translations: {
					en: "AT Guide"
				},
				autogenerate: { directory: 'at-guides' },
				collapsed: true,
			},
			{
				label: '开发者指南',
				translations: {
					en: "Developer Guide"
				},
				autogenerate: { directory: 'developer-guides' },
			},
			{
				label: 'OpenHarmony 指南',
				translations: {
					en: "OpenHarmony Guide"
				},
				autogenerate: { directory: 'openharmony-guides' },
				collapsed: true,
			},
			{
				label: 'API 接口文档',
				translations: {
					en: "API Documentation"
				},
				autogenerate: { directory: 'toolbox-api' },
				collapsed: true,
			},
			{
				label: 'Mods 插件文档',
				translations: {
					en: "Mods Plugin Documentation"
				},
				autogenerate: { directory: 'mods-plugin' },
				collapsed: true,
			},
			{
				label: 'VSCode 插件',
				translations: {
					en: "VSCode Extension"
				},
				autogenerate: { directory: 'vscode-extension' },
				collapsed: true,
			},
			{
				label: '参考文档',
				translations: {
					en: "Reference Documentation"
				},
				autogenerate: { directory: 'docs' },
				collapsed: true,
			},
			{
				label: '关于',
				translations: {
					en: "About"
				},
				autogenerate: { directory: "about"},
				collapsed: true,
			},
		],
	}), markdoc()],

});
