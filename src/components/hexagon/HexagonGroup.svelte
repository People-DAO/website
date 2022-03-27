<div class:hexagon-group={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.hexagon-group {
		@include spacing--max(margin-top);

		:global(a) {
			@include spacing--small(margin-right, margin-bottom);

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
</style>
