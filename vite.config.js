import path from 'path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// eslint({
		// 	fix: true,
		// 	failOnError: false,
		// 	exclude: ['**/virtual:/**', '**/node_modules/**']
		// }),
		stylelint(),
		createSvgIconsPlugin({
			symbolId: '[name]',
			iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url),),
			'@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
			'@images': fileURLToPath(new URL('./src/assets/images', import.meta.url),),
			'@svg': fileURLToPath(new URL('./src/assets/icons/svg', import.meta.url),),
			'@base64': fileURLToPath(new URL('./src/assets/icons/base64', import.meta.url),),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url),),
			'@ui': fileURLToPath(new URL('./src/components/$ui', import.meta.url),),
			'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url),),
			'@api': fileURLToPath(new URL('./src/api', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			'@helpers': fileURLToPath(new URL('./src/helpers', import.meta.url),),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import "@css/import/mixins.scss";
					@import "@css/import/variables.scss";
				`,
			},
		},
	},
})
