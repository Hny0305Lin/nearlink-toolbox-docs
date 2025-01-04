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
			'./src/assets/fonts.css',
			'./src/assets/custom.css',
			'./src/assets/landing.css'
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
					{ label: '安装及使用', slug: 'getting-started/started' },
					{ label: '第一次配置', slug: 'getting-started/first-config' },
				],
				collapsed: true,
			},
			{
				label: '使用指南',
				autogenerate: { directory: 'guides' },
			},
			{
				label: 'AT 指南',
				items: [
					{ label: '小熊派 BM H63 AT使用', slug: 'at-guides/bearpi-bmh63' },
					{ label: '小熊派 BM H21E AT使用', slug: 'at-guides/bearpi-bmh21e' },
					{ label: '润和 HH-D03 AT使用', slug: 'at-guides/hihope-hhd03' },
				],
				collapsed: true,
			},
			{
				label: 'API接口文档',
				autogenerate: { directory: 'toolbox-api' },
				collapsed: true,
			},
			{
				label: 'VSCode插件',
				autogenerate: { directory: 'vscode-extension' },
				collapsed: true,
			},
			{
				label: '参考文档',
				autogenerate: { directory: 'docs' },
				collapsed: true,
			},
			{
				label: '关于',
				items: [
					{ label: '关于星闪工具箱', slug: 'about/nearlink' },
					{ label: '关于作者我们', slug: 'about/author' },
					{ label: '关于浩瀚银河', slug: 'about/haohanyh' },
					{ label: '联系我们', slug: 'about/contact' },
					{ label: '帮助我们', slug: 'about/contribute' },
				],
				collapsed: true,
			},
		],
	}), markdoc()],

});