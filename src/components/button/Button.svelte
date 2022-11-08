<script lang="ts">
	import { Text } from '$components/typography';

	import IconArrowUpRight from '$assets/icons/general/arrow-up-right.svg?raw';

	export let variant:
		| 'transparent/navy'
		| 'transparent/white'
		| 'navy/white'
		| 'white/navy'
		| 'gold/navy' = 'transparent/navy';
	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;
	export let iconData: string | undefined = undefined;
	export let onClick: (() => void) | undefined = undefined;

	const handleClick = () => {
		if (onClick) onClick();
	};
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class:button={true}
	class:--transparent-white={variant === 'transparent/white'}
	class:--navy-white={variant === 'navy/white'}
	class:--white-navy={variant === 'white/navy'}
	class:--gold-navy={variant === 'gold/navy'}
	{href}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : null}
	on:click={handleClick}
	{...$$restProps}
>
	<Text tag="span">
		<slot />
	</Text>
	{#if iconData}
		{@html iconData}
	{:else if target}
		{@html IconArrowUpRight}
	{/if}
</svelte:element>

<style lang="scss">
	.button {
		position: relative;
		display: inline-flex;
		align-items: center;
		@include fluid(padding-top, 10, 12);
		@include fluid(padding-bottom, 10, 12);
		@include fluid(padding-left, 20, 24);
		@include fluid(padding-right, 20, 24);
		color: $color-navy--primary;
		background: transparent;
		border: 1px solid $color-navy--primary;
		@include transition($transition--primary, color, background, border-color, opacity);
		cursor: pointer;

		&:hover {
			opacity: 0.6;
		}

		:global(.typography-text) {
			line-height: 1;
		}

		:global(svg) {
			width: auto;
			@include fluid(height, 20, 24);
			@include fluid(margin-left, 6, 8);
		}

		&.--transparent-white {
			color: $color-white;
			border-color: $color-white;
		}

		&.--navy-white {
			color: $color-white;
			background: $color-navy--primary;
			border-color: $color-navy--primary;
		}

		&.--white-navy {
			color: $color-navy--primary;
			background: $color-white;
			border-color: $color-white;
		}

		&.--gold-navy {
			color: $color-navy--primary;
			background: $color-gold--secondary;
			border-color: $color-gold--secondary;
		}
	}
</style>
