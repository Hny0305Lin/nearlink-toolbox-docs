// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: {
			en: 'NearLink ToolBox',
			'zh-CN': '星闪工具箱',
		},
		logo: {
			light: './src/assets/nearlink-logo.svg',
			dark: './src/assets/nearlink-logo.svg',
		},
		customCss: [
			'./src/styles/fonts.css',
			'./src/styles/custom.css',
		],
		components: {
			Header: './src/components/Header.astro',
		},
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
			'en': {
				label: 'English',
				lang: 'en',
			},
		},
		sidebar: [
			{
				label: '初次开始',
				items: [
					{ label: '初次开始', slug: 'getting-started/started' },
					{ label: '如何使用', slug: 'getting-started/how-to-use' },
				],
			},
			{
				label: '指南',
				autogenerate: { directory: 'guides' },
			},
			{
				label: 'API接口文档',
				autogenerate: { directory: 'api' },
			},
			{
				label: 'VSCode插件',
				autogenerate: { directory: 'vscode' },
			},
			{
				label: '参考文档',
				autogenerate: { directory: 'docs' },
			},
			{
				label: '关于',
				items: [
					{ label: '关于星闪工具箱', slug: 'about/nearlink' },
					{ label: '关于作者我们', slug: 'about/author' },
					{ label: '联系我们', slug: 'about/contact' },
					{ label: '帮助我们', slug: 'about/contribute' },
				],
			},
		],
	}), markdoc()],

});