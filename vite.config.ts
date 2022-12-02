import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/styles/__styles.scss" as *;'
			}
		}
	},
	resolve: {
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
