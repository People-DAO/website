<div class:button-group={true} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.button-group {
		display: flex;
		align-items: center;
		flex-wrap: wrap;

		:global(a),
		:global(button) {
			@include fluid(margin-right, 20, 24);
			@include fluid(margin-bottom, 20, 24);

			&:last-child {
				margin-right: 0;
			}
		}

		@include breakpoint($breakpoint--small) {
			flex-direction: column;
			align-items: flex-start;

			:global(a),
			:global(button) {
				margin-right: 0;
				margin-bottom: 12px;
			}
		}
	}
</style>
