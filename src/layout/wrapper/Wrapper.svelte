<div class:wrapper={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.wrapper {
		max-width: #{$breakpoint--lg}px;
		@include fluid(padding-left, 100, 20);
		@include fluid(padding-right, 100, 20);
		margin: 0 auto;

		@include breakpoint($breakpoint--md) {
			@include fluid(padding-left, 20, 120);
			@include fluid(padding-right, 20, 120);
		}
	}
</style>
