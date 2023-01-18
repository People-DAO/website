import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';

import { EVENTS_TWITTER_USER_ID } from '$apps/events/constants/twitter.constants';

const TWITTER_SPACES_URL = 'https://api.twitter.com/2/spaces/by/creator_ids';

type SpacesItemT = {
	creator_id: string;
	id: string;
	state: string;
	title: string;
};

export const GET: RequestHandler = async () => {
	try {
		if (!env.PRIVATE_TWITTER_API_TOKEN) {
			console.error(
				'[@DEBUG] /api/events/twitter/+server - error: PRIVATE_TWITTER_API_TOKEN is missing'
			);
			throw error(500);
		}

		const spacesRes = await fetch(
			`${TWITTER_SPACES_URL}?user_ids=${EVENTS_TWITTER_USER_ID}&space.fields=creator_id,title`,
			{
				headers: {
					Authorization: `Bearer ${env.PRIVATE_TWITTER_API_TOKEN}`
				}
			}
		);

		const spacesData = await spacesRes.json();

		if (String(spacesData?.meta?.results_count)) {
			const liveSpace = spacesData?.data?.find((s: SpacesItemT) => s.state === 'live');

			if (liveSpace) {
				return json(
					{
						live: true,
						id: liveSpace.id,
						title: liveSpace.title
					},
					{
						headers: {
							'Cache-Control': 'public, max-age=60'
						}
					}
				);
			}

			return json({ live: false });
		}

		if (import.meta.env.DEV) {
			console.error("[@DEBUG] /api/users/discord/+server - error: Couldn't get any Spaces data");
		}
		throw error(500);
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/events/twitter/+server - error: ', err);
		}
		throw error(500);
	}
};
