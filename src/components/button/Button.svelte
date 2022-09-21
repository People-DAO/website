<script lang="ts">
	import IconArrowUpRight from '$assets/icons/general/arrow-up-right.svg?raw';

	import type { SvelteComponent } from 'svelte';

	export let href: string = null;
	export let target: '_blank' = null;
	export let icon: typeof SvelteComponent = null;
	export let onClick: () => void = null;

	const handleClick = () => {
		if (onClick) onClick();
	};
</script>

<a
	class:button={true}
	{href}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : null}
	on:click={handleClick}
	{...$$restProps}
>
	<span><slot /></span>
	{#if icon}
		<svelte:component this={icon} />
	{:else if target}
		{@html IconArrowUpRight}
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
		$button-border-width: 2px;
		$button-border-radius: 26px;
		border: $button-border-width solid $color-background--tertiary;
		border-radius: $button-border-radius;
		@include transition($transition--primary, background, border-color);
		cursor: pointer;
		z-index: 0;

		&::before {
			content: '';
			position: absolute;
			inset: $button-border-width * -1;
			padding: $button-border-width;
			border-radius: $button-border-radius;
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
