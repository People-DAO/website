<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';

	import { Wrapper } from '$layout/wrapper';

	export let cropped: 'top' | 'bottom' = null;
	export let scrollHref: string = null;
</script>

<section
	id={scrollHref}
	use:scrollRef={scrollHref || Math.random().toString()}
	class:section={true}
	class:section-cropped--top={cropped === 'top'}
	class:section-cropped--bottom={cropped === 'bottom'}
	{...$$restProps}
>
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

		&.section-cropped--top {
			padding-top: 0;
		}

		&.section-cropped--bottom {
			padding-bottom: 0;
		}
	}
</style>
