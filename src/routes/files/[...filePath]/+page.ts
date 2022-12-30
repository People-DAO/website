import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.filePath) {
		return { filePath: params.filePath };
	}

	throw error(404);
};
