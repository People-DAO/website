import type { MdsvexDocument } from '$util/mdsvex';

import type { ProjectData } from '../types/projectData.type';

type SortOption = 'alphabetical' | 'priority' | 'random';

export const getProjects = (sortBy: SortOption = 'alphabetical') => {
	const projects = Object.entries(import.meta.glob('/content/projects/*.md', { eager: true })).map(
		([, project]) => {
			const projectDocument = project as MdsvexDocument;
			return {
				metadata: projectDocument.metadata,
				component: projectDocument.default
			} as ProjectData;
		}
	);

	if (sortBy === 'priority') {
		projects.sort((a, b) => a.metadata.priority - b.metadata.priority);
	}

	if (sortBy === 'random') {
		for (let i = projects.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[projects[i], projects[j]] = [projects[j], projects[i]];
		}
	}

	return projects;
};
