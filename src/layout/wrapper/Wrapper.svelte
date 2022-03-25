<div class:wrapper={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.wrapper {
		max-width: #{$breakpoint--lg}px;
		padding: 0 20px;
		margin: 0 auto;
	}
</style>
