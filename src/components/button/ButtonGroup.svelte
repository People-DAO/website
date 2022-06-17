<div class:button-group={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.button-group {
		@include spacing--max(margin-top);

		:global(a) {
			@include spacing--small(margin-right, margin-bottom);

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
</style>
