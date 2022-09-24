<script lang="ts">
	export let tag: 'p' | 'span' = 'p';
	export let size: 'large' | 'medium' | 'small' = 'large';
</script>

<svelte:element
	this={tag}
	class:typography-text={true}
	class:--large={size === 'large'}
	class:--medium={size === 'medium'}
	class:--small={size === 'small'}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.typography-text {
		@include typography-family--primary;

		&.--large {
			@include fluid(font-size, 24, 24); // @TODO
			line-height: 1.8;
		}

		&.--medium {
			@include fluid(font-size, 22, 22); // @TODO
		}

		&.--small {
			@include fluid(font-size, 16, 16); // @TODO
		}
	}
</style>
