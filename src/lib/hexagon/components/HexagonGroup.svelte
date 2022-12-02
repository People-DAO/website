<div class:hexagon-group={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.hexagon-group {
		display: flex;
		flex-wrap: wrap;
		@include spacing--max(margin-top);

		:global(.hexagon) {
			@include spacing--small(margin-right, margin-bottom);

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
</style>
