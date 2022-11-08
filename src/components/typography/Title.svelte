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
			@include typography-size--large;
			@include fluid(margin-bottom, 20, 24);
		}

		&.--medium {
			@include typography-size--medium;
			@include fluid(margin-bottom, 16, 20);
		}

		&.--small {
			@include typography-size--small;
			@include fluid(margin-bottom, 14, 16);
		}
	}
</style>
