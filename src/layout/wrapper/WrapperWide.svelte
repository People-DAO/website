<div class:wrapper={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.wrapper {
		max-width: #{$breakpoint--xlg}px;
		@include fluid(padding-left, 20, 40);
		@include fluid(padding-right, 20, 40);
		margin: 0 auto;
	}
</style>
