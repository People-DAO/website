import fetch from 'isomorphic-unfetch';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { API_TOKEN_STATS_SIMPLE } from '$apps/token-stats/constants/apis.constants';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch(API_TOKEN_STATS_SIMPLE);
		const data = await response.json();

		const tokenData = {
			timestamp: data.prices[0][0],
			price: data.prices[0][1],
			volume24h: data.total_volumes[0][1],
			marketCap: data.market_caps[0][1]
		};

		return json(tokenData, {
			status: 200
		});
	} catch (err) {
		return error(500, err);
	}
};
