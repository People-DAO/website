import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { TOKEN_ENDPOINT_COINGECKO_SIMPLE } from '$apps/token/constants/endpoints.constants';

export const GET: RequestHandler = async () => {
	try {
		const response = await fetch(TOKEN_ENDPOINT_COINGECKO_SIMPLE);
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
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/token/coingecko/+server - error: ', err);
		}
		return error(500);
	}
};
