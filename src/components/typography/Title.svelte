<script lang="ts">
	export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
	export let size: 'large' | 'medium' | 'small' = 'large';
</script>

<svelte:element
	this={tag}
	class:typography-title={true}
	class:--large={size === 'large'}
	class:--medium={size === 'medium'}
	class:--small={size === 'small'}
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.typography-title {
		@include typography-family--secondary;
		text-transform: uppercase;

		&.--large {
			@include fluid(font-size, 40, 40); // @TODO
		}

		&.--medium {
			@include fluid(font-size, 34, 34); // @TODO
		}

		&.--small {
			@include fluid(font-size, 30, 30); // @TODO
		}
	}
</style>
