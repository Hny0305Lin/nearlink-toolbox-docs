// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '星闪工具箱',
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
				}
			],
		}),
	],
});
