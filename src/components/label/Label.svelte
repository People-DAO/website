<script lang="ts">
	export let backgroundStart: string = null;
	export let backgroundEnd: string = null;
	export let color: string = null;
</script>

<span
	class:label={true}
	style={`
    background: linear-gradient(to right, ${backgroundStart}, ${backgroundEnd || backgroundStart});
    color: ${color || null};
  `}
	{...$$restProps}
>
	<slot />
</span>

<style lang="scss">
	.label {
		display: inline-flex;
		@include typography-family--secondary;
		font-weight: $font-weight--semi-bold;
		background: linear-gradient(to right, $color-brand--blue, $color-brand--purple);
		color: $color-text--tertiary;
		padding: 2px 10px;
		border-radius: 8px;
	}
</style>
