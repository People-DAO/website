import { writable, get } from 'svelte/store';

import type { Writable } from 'svelte/store';

export type Viewport = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const orderedViewports = ['sm', 'md', 'lg', 'xl', '2xl'];

export const viewport: Writable<Viewport> = writable('sm');

export const isViewportGTE = (_: Viewport, targetViewport: Viewport) => {
	const currentViewport = get(viewport);
	const currentViewportIndex = orderedViewports.indexOf(currentViewport);
	const targetViewportIndex = orderedViewports.indexOf(targetViewport);
	return currentViewportIndex >= targetViewportIndex;
};
