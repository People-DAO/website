<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';

	import { Wrapper } from '$lib/wrapper/components';

	export let id: string | undefined = undefined;
</script>

<section {id} use:scrollRef={id || Math.random().toString()} class:section={true} {...$$restProps}>
	<Wrapper>
		<slot />
	</Wrapper>
</section>

<style lang="scss">
	.section {
		position: relative;
		display: block;
		@include fluid(padding-top, 80, 175);
		@include fluid(padding-bottom, 80, 175);
	}
</style>
