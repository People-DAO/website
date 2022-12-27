import type { MdsvexDocument } from '$util/mdsvex';

import type { TeamData } from '../types/teamData.type';

type SortOption = 'alphabetical' | 'priority' | 'random';

export const getTeams = (sortBy: SortOption = 'alphabetical') => {
	const teams = Object.entries(import.meta.glob('/content/teams/*.md', { eager: true })).map(
		([, team]) => {
			const teamDocument = team as MdsvexDocument;
			return {
				metadata: teamDocument.metadata,
				component: teamDocument.default
			} as TeamData;
		}
	);

	if (sortBy === 'priority') {
		teams.sort((a, b) => a.metadata.priority - b.metadata.priority);
	}

	if (sortBy === 'random') {
		for (let i = teams.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[teams[i], teams[j]] = [teams[j], teams[i]];
		}
	}

	return teams;
};
