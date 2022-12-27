import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';

export const GET: RequestHandler = async ({ url }) => {
	try {
		if (!env.PRIVATE_DISCORD_BOT_TOKEN) {
			console.error(
				'[@DEBUG] /api/users/discord/+server - error: PRIVATE_DISCORD_BOT_TOKEN is missing'
			);
			throw error(500);
		}

		const userId = url?.searchParams?.get('id') || undefined;
		if (!userId) {
			throw error(400, "Parameter 'id' for Discord User's ID is required");
		}

		const userRes = await fetch(`https://canary.discord.com/api/v10/users/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bot ${env.PRIVATE_DISCORD_BOT_TOKEN}`
			}
		});
		const userData = await userRes.json();

		if (!userData.id) {
			throw error(404, 'User not found');
		}

		return json({ ...userData });
	} catch (err) {
		if (import.meta.env.DEV) {
			console.error('[@DEBUG] /api/users/discord/+server - error: ', err);
		}
		throw error(500);
	}
};
