<script lang="ts">
	import IconArrowUpRight from '$assets/icons/general/arrow-up-right.svg';

	import type { SvelteComponent } from 'svelte';

	export let href: string = null;
	export let target: '_blank' = null;
	export let icon: typeof SvelteComponent = null;
</script>

<a
	class:button={true}
	{href}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : null}
	{...$$restProps}
>
	<span><slot /></span>
	{#if icon}
		<svelte:component this={icon} />
	{:else if target}
		<IconArrowUpRight />
	{/if}
</a>

<style lang="scss">
	.button {
		position: relative;
		display: inline-flex;
		align-items: center;
		@include spacing--nano(padding-top, padding-bottom);
		@include spacing--base(padding-left, padding-right);
		background: transparent;
		--button-border-width: 2px;
		border: var(--button-border-width) solid $color-background--tertiary;
		border-radius: 26px;
		@include transition($transition--primary, border-color);
		cursor: pointer;

		&::after {
			content: '';
			position: absolute;
			top: calc(var(--button-border-width) * -1);
			bottom: calc(var(--button-border-width) * -1);
			left: calc(var(--button-border-width) * -1);
			right: calc(var(--button-border-width) * -1);
			background: linear-gradient($color-background--secondary, $color-background--secondary)
					padding-box,
				linear-gradient(to right, $color-brand--blue, $color-brand--purple) border-box;
			border: var(--button-border-width) solid transparent;
			border-radius: inherit;
			z-index: -1;
			opacity: 0;
			@include transition($transition--primary, opacity);
		}

		span {
			@include typography-family--secondary;
			@include typography-size--base;
			font-weight: $font-weight--semi-bold;
		}

		:global(svg) {
			width: auto;
			@include fluid(height, 19, 22);
			@include fluid(margin-left, 8, 10);
		}

		&:hover {
			border-color: transparent;

			&::after {
				opacity: 1;
			}
		}
	}
</style>
