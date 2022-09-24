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

<a
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
</a>

<style lang="scss">
	.button {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: 12px 24px; // @TODO
		color: $color-navy--primary;
		background: transparent;
		border: 1px solid $color-navy--primary;
		margin-right: 24px; // @TODO
		@include transition($transition--primary, color, background, border-color);
		cursor: pointer;

		:global(.typography-text) {
			line-height: 1;
		}

		:global(svg) {
			width: auto;
			@include fluid(height, 24, 24); // @TODO
			@include fluid(margin-left, 8, 8); // @TODO
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

		&:last-of-type {
			margin-right: 0;
		}

		&:hover {
			// @TODO
		}
	}
</style>
