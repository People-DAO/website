<script lang="ts">
	import { Header } from '$layout/header';
	import { Footer } from '$layout/footer';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
