<script lang="ts">
	import { Analytics } from '$util/analytics';
	import { Header } from '$layout/header';
	import { Footer } from '$layout/footer';

	import { headerHeight, footerHeight } from '$stores/layout/layout';
</script>

<Analytics />

<Header />
<main
	style={`margin-top: ${$headerHeight}px; min-height: calc(100vh - ${$headerHeight}px - ${$footerHeight}px);`}
>
	<slot />
</main>
<Footer />
