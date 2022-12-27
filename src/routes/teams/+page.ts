import { error } from '@sveltejs/kit';

import { getTeams } from '$apps/teams/services/getTeams';

export const load = async () => {
	const teams = getTeams('random');
	if (!teams?.length) {
		throw error(404, 'No teams found');
	}

	return { teams: teams };
};
