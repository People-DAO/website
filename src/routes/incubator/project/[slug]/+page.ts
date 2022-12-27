import { error } from '@sveltejs/kit';

import { getProjects } from '$apps/projects/services/getProjects';

import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ params }: LoadEvent) => {
	const { slug } = params;

	const project = getProjects().find((t) => slug === t.metadata.slug);
	if (!project) {
		throw error(404, 'Project profile not found');
	}

	return project;
};
