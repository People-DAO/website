<script lang="ts">
	import Button from '$components/Button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<span
	>$PEOPLE Dao Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
	incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
	ullamco laboris nisi ut aliquip ex ea commodo consequat.
</span>

<Button target="_blank">Join Discord</Button>

<style lang="scss">
	:global(p) {
		color: $color-background--primary;
	}

	:global(span) {
		font-size: 33px;
	}
</style>
