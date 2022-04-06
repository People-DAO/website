<script lang="ts">
	import { closeMobileNavigation, scrollToRef } from '$stores/layout/navigation';

	export let href: string = null;
	export let target: '_blank' = null;
	export let scrollHref: string = null;

	const handleClick = () => {
		if (!!scrollHref) {
			return scrollToRef(scrollHref);
		}
		closeMobileNavigation();
	};
</script>

<a class:navigation-button={true} {href} {target} on:click={handleClick} {...$$restProps}>
	<slot />
</a>

<style lang="scss">
	.navigation-button {
		@include typography-family--secondary;
		@include typography-size--base;
		font-weight: $font-weight--semi-bold;
		color: $color-text--tertiary;
		@include spacing--max(margin-right);
		cursor: pointer;

		&:last-of-type {
			margin-right: 0;
		}

		@include breakpoint($breakpoint--sm) {
			@include typography-size--large;
			@include spacing--medium(margin-bottom);

			&:last-of-type {
				margin-bottom: 0;
			}
		}
	}
</style>
