import { redirect } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET = (({ url }) => {
	throw redirect(308, url.pathname.replace('/incubator', '/accelerator'));
}) satisfies RequestHandler;
