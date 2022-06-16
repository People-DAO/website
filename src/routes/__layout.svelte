<script lang="ts">
	import { Header } from '$layout/header';
	import { Footer } from '$layout/footer';

	import { headerHeight } from '$stores/layout/header';
</script>

<Header />
<main style={`margin-top: ${$headerHeight - 1}px;`}>
	<slot />
</main>
<Footer />
