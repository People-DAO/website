import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./content']
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/styles/__styles.scss" as *;'
			}
		}
	}
};

export default config;
