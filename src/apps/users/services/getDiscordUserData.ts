import { fetchData } from '$util/svelte-query/fetchData';

import type { FetchDataError } from '$util/svelte-query/fetchData';

type GetDiscordUserDataRequest = {
	id: string;
};

type GetDiscordUserDataResponse = {
	id: string;
	username: string;
	avatar?: string;
	avatar_decoration?: string;
	discriminator: string;
	public_flags?: number;
	banner?: string;
	banner_color?: string;
	accent_color?: number;
};

export const getDiscordUserData = async ({
	id
}: GetDiscordUserDataRequest): Promise<GetDiscordUserDataResponse | FetchDataError> => {
	return await fetchData({
		url: '/api/users/discord',
		params: { id }
	});
};
