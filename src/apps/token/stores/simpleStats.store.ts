import { writable } from 'svelte/store';

import type { Writable } from 'svelte/store';

type TokenData = {
	timestamp: number;
	price: number;
	volume24h: number;
	marketCap: number;
};

export const isLoading = writable(true);
export const isError = writable(false);
export const tokenData: Writable<TokenData | null> = writable(null);
