<script lang="ts">
	import { closeMobileNavigation, scrollToId } from '$stores/layout/navigation';

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
		font-size: 16px;
		text-transform: uppercase;
		color: $color-text--tertiary;
		margin-right: 64px; // @TODO
		cursor: pointer;

		&:last-of-type {
			margin-right: 0;
		}
	}
</style>
