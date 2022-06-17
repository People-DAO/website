<div class:section-title={true} {...$$restProps}>
	<h3><slot /></h3>
</div>

<style lang="scss">
	.section-title {
		display: inline-block;
		@include spacing--medium(margin-bottom);

		h3 {
			@include typography-family--secondary;
			@include typography-size--base;
			font-weight: $font-weight--bold;
			letter-spacing: 1px;
			background: linear-gradient(to right, $color-brand--blue, $color-brand--purple);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
</style>
