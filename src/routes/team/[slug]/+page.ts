import { error } from '@sveltejs/kit';

import { getTeams } from '$apps/teams/services/getTeams';

import type { LoadEvent } from '@sveltejs/kit';

export const load = async ({ params }: LoadEvent) => {
	const { slug } = params;

	const team = getTeams().find((t) => slug === t.metadata.slug);
	if (!team) {
		throw error(404, 'Team profile not found');
	}

	return team;
};
