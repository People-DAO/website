<script lang="ts">
	export let size: 'small' | 'medium' | 'large' = 'small';
	export let width: 80 | 100 = 100;
</script>

<p
	class:text={true}
	class:text--medium={size === 'medium'}
	class:text--large={size === 'large'}
	class:width--80={width === 80}
	{...$$restProps}
>
	<slot />
</p>

<style lang="scss">
	.text {
		@include typography-size--base;
		@include spacing--large(margin-bottom);

		&.text--medium {
			@include typography-size--medium;
			@include spacing--medium(margin-bottom);
		}

		&.text--large {
			@include typography-size--large;
			@include spacing--large(margin-bottom);
		}

		&.width--80 {
			max-width: #{$breakpoint--md}px;
		}
	}
</style>
