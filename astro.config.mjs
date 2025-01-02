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
					label: 'Guides',
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: 'Example Guide', slug: 'guides/example' },
						],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
