import { browser } from '$app/environment';

type FetchDataRequest = {
	method?: 'GET';
	url: string;
	params?: { [key: string]: string } | undefined;
	headers?: { [key: string]: string } | undefined;
	body?: unknown | undefined;
};

export type FetchDataError = {
	status?: number;
	statusCode?: number;
	message?: unknown;
	data: never;
};

export const fetchData = async ({
	method = 'GET',
	url,
	params,
	headers,
	body
}: FetchDataRequest) => {
	if (browser) {
		try {
			const stringifiedParams = params ? new URLSearchParams(params).toString() : '';

			const res = await fetch(`${url}?${stringifiedParams}`, {
				method,
				headers,
				body: body ? JSON.stringify(body) : undefined
			});

			return await res.json();
		} catch (err) {
			if (import.meta.env.DEV) {
				console.log('[@DEBUG] fetchData - error: ', err);
			}
			throw err;
		}
	}
};