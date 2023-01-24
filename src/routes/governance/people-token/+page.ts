import type { MdsvexDocument } from '$util/mdsvex';

import { error } from '@sveltejs/kit';

export const load = async () => {
	const content = Object.entries(
		import.meta.glob('/content/governance/people-token.md', { eager: true })
	).map(([, content]) => {
		const contentDocument = content as MdsvexDocument;

		return {
			metadata: contentDocument.metadata,
			component: contentDocument.default
		};
	});

	if (!content) {
		throw error(404, 'Content not found');
	}

	return content[0];
};
