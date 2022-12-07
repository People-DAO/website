<script lang="ts">
	import { closeMobileNavigation, scrollToId } from '../stores/navigation.store';

	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;
	export let scrollHrefId: string | undefined = undefined;

	const handleClick = () => {
		if (scrollHrefId) {
			return scrollToId(scrollHrefId);
		}
		closeMobileNavigation();
	};
</script>

<a class:navigation-item={true} {href} {target} on:click={handleClick} {...$$restProps}>
	<slot />
</a>

<style lang="scss">
	.navigation-item {
		$padding--small: 4;
		$padding--max: 8;

		font-size: 16px;
		text-transform: uppercase;
		color: $color-white;
		@include fluid(padding, $padding--small, $padding--max);
		@include fluid(margin, -$padding--small, -$padding--max);
		@include fluid(margin-right, 32 - $padding--small, 64 - $padding--max);
		@include transition($transition--primary, color);
		cursor: pointer;

		&:hover {
			color: $color-gold--secondary;
		}

		&:last-of-type {
			@include fluid(margin, -$padding--small, -$padding--max);
		}

		@include breakpoint($breakpoint--medium) {
			@include typography-size--base;
			margin-right: 0;
			@include fluid(margin-bottom, 16, 20);
		}
	}
</style>
