<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { env } from '$env/dynamic/public';

	import * as Fathom from 'fathom-client';

	import { ANALYTICS_SCRIPT_URL } from '$constants/analytics';

	const trackingId = env.PUBLIC_FATHOM_ID;

	if (trackingId) {
		onMount(async () => {
			Fathom.load(trackingId, {
				url: ANALYTICS_SCRIPT_URL
			});
		});
	}

	$: if (trackingId) $page.url.pathname, browser && Fathom.trackPageview();
</script>
