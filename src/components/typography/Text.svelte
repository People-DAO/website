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
			@include typography-size--base;
			line-height: 1.8;
			@include fluid(margin-bottom, 18, 22);
		}

		&.--medium {
			@include typography-size--micro;
			@include fluid(margin-bottom, 16, 20);
		}

		&.--small {
			@include typography-size--nano;
			@include fluid(margin-bottom, 12, 14);
		}

		&:last-of-type {
			margin-bottom: 0;
		}
	}
</style>
