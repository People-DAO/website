import fetch from 'isomorphic-unfetch';

import type { VercelRequest, VercelResponse } from '@vercel/node';

import { API_TOKEN_URL } from '../src/constants/api';

const fetchTokenData = async (_: VercelRequest, res: VercelResponse): Promise<VercelResponse> => {
	try {
		const response = await fetch(API_TOKEN_URL);
		const data = await response.json();

		const tokenData = {
			timestamp: data.prices[0][0],
			price: data.prices[0][1],
			volume24h: data.total_volumes[0][1],
			marketCap: data.market_caps[0][1]
		};

		return res.status(200).json(tokenData);
	} catch (err) {
		return res.status(err.statusCode || 500).json({ ...err });
	}
};

export default fetchTokenData;
