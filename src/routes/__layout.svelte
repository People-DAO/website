<script lang="ts">
	import { Header } from '$layout/header';
	import { Footer } from '$layout/footer';

	import { headerHeight, footerHeight } from '$stores/layout/layout';
</script>

<Header />
<main
	style={`margin-top: ${$headerHeight}px; min-height: calc(100vh - ${$headerHeight}px - ${$footerHeight}px);`}
>
	<slot />
</main>
<Footer />
