import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import { unheadVueComposablesImports } from '@unhead/vue';

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		},
	},
	plugins: [
		vue(),
		AutoImport({
			dts: true,
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/, // .md
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				'pinia',
				unheadVueComposablesImports,
			],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/shared/components'),
			'@layouts': path.resolve(__dirname, './src/shared/components/layouts'),
		},
	},
	server: {
		port: 3000,
	},
});
