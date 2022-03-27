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
		color: $color-text--primary;
		@include spacing--nano(padding-top, padding-bottom);
		@include spacing--base(padding-left, padding-right);
		--button-border-width: 2px;
		--button-border-radius: 26px;
		border: var(--button-border-width) solid $color-background--tertiary;
		border-radius: var(--button-border-radius);
		@include transition($transition--primary, background, border-color);
		cursor: pointer;
		z-index: 0;

		&::before {
			content: '';
			position: absolute;
			inset: calc(var(--button-border-width) * -1);
			padding: var(--button-border-width);
			border-radius: var(--button-border-radius);
			background: linear-gradient(to right, $color-brand--blue, $color-brand--purple);
			mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			opacity: 0;
			z-index: -1;
			@include transition($transition--primary, opacity);
		}

		span {
			@include typography-family--secondary;
			@include typography-size--base;
			font-weight: $font-weight--semi-bold;
		}

		:global(svg) {
			width: auto;
			// stroke: currentColor;
			@include fluid(height, 19, 22);
			@include fluid(margin-left, 8, 10);
		}

		&:hover {
			border-color: transparent;
			background: $color-background--secondary;

			&::before {
				opacity: 1;
			}
		}
	}
</style>
