import { fetchData } from '$util/svelte-query';

import type { FetchDataError } from '$util/svelte-query/fetchData';
import type { MirrorPost } from '../types/post.type';

type GetPostsRequest = {
	after?: string;
	ignoredIds?: string[];
};

type GetPostsResponse = {
	items: MirrorPost[];
	meta: {
		hasNextPage: boolean;
	};
};

const MIRRORXYZ_POSTS_URL = '/api/mirrorxyz/posts';

export const getPosts = async ({
	after,
	ignoredIds
}: GetPostsRequest): Promise<GetPostsResponse | FetchDataError> => {
	return (await fetchData({
		url: MIRRORXYZ_POSTS_URL,
		params: {
			...(after && { after }),
			...(ignoredIds != undefined && { ignoredIds: encodeURIComponent(ignoredIds?.join(',')) })
		}
	})) as GetPostsResponse | FetchDataError;
};
