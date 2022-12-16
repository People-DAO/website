import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
			scss: {
				prependData: `@use 'src/styles/__styles.scss' as *;`
			}
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		adapter: adapter(),
		alias: {
			$apps: 'src/apps',
			$assets: 'static/assets',
			$content: 'content',
			$lib: './src/lib',
			$util: 'src/util'
		}
	}
};

export default config;
