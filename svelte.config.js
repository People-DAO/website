import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: `@use 'src/styles/__styles.scss' as *;`
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$apps: resolve('./src/apps'),
			$assets: resolve('./static/assets'),
			$content: resolve('./src/content'),
			$lib: resolve('./src/lib'),
			$util: resolve('./src/util')
		}
	}
};

export default config;
