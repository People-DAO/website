<script lang="ts">
	import IconArrowUpRight from '$assets/icons/arrow-up-right.svg';

	import type { SvelteComponent } from 'svelte';

	export let href: string;
	export let target: '_blank';
	export let icon: typeof SvelteComponent;
</script>

<a class="button" {href} {target} {...$$restProps}>
	<span><slot /></span>
	{#if icon}
		<svelte:component this={icon} />
	{:else if target}
		<IconArrowUpRight />
	{/if}
</a>

<style lang="scss">
	.button {
		display: inline-flex;
		align-items: center;
		padding: 12px 20px;
		border: 2px solid $color-background--tertiary;
		border-radius: 26px;
		cursor: pointer;

		span {
			font-family: $font-family--secondary;
			font-size: 19px;
			font-weight: $typography-weight--semi-bold;
			line-height: $typography-line-height--small;
		}

		:global(svg) {
			margin-left: 10px;
		}
	}
</style>
