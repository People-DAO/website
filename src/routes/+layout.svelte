<script lang="ts">
	import { Analytics } from '$util/analytics';
	import { Header } from '$lib/header/components';
	import { Footer } from '$lib/footer/components';
</script>

<Analytics />

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	:global(.sx-k7Y5vJkiso) {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 100vh;
	}

	:global(main) {
		flex-grow: 1;
		@include fluid(margin-top, 96, 168);
		overflow-x: hidden;
	}
</style>
