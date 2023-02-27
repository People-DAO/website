import { error } from '@sveltejs/kit';

import { getProjects } from '$apps/projects/services/getProjects';

export const load = async () => {
	const projects = getProjects('random');
	if (!projects?.length) {
		throw error(404, 'No projects found');
	}

	return { projects: projects };
};
