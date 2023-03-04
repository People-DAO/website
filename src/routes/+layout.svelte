<script>
	import '../styles/__styles.postcss';

	import { Analytics } from '$util/analytics';
	import { SvelteQueryProvider } from '$util/svelte-query';
	import { ViewportListener } from '$lib/layout/components';
	import { Header } from '$lib/header/components';
	import { Footer } from '$lib/footer/components';
	import { ScamWarningPopup } from '$apps/scam-warning/components';
</script>

<Analytics />
<ViewportListener />
<SvelteQueryProvider>
	<Header />
	<main id="top" class="flex-1 text-xl text-black-primary bg-beige-tertiary">
		<slot />
	</main>
	<Footer />
</SvelteQueryProvider>
<ScamWarningPopup />

<style lang="scss">
	:global(.sx-k7Y5vJkiso) {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 100vh;
	}
</style>
