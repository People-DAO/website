import { fetchData } from '$util/svelte-query';

import type { FetchDataError } from '$util/svelte-query/fetchData';
import type { MirrorPost } from '../types/post.type';

type GetPostsRequest = {
	after?: string;
};

type GetPostsResponse = {
	items: MirrorPost[];
	meta: {
		hasNextPage: boolean;
	};
};

const MIRRORXYZ_POSTS_URL = '/api/mirrorxyz/posts';

export const getPosts = async ({
	after
}: GetPostsRequest): Promise<GetPostsResponse | FetchDataError> => {
	return (await fetchData({
		url: MIRRORXYZ_POSTS_URL,
		params: after ? { after } : undefined
	})) as GetPostsResponse | FetchDataError;
};
