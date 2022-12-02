<ul class:accordion={true} {...$$restProps}>
	<slot />
</ul>

<style lang="scss">
	.accordion {
		display: flex;
		flex-direction: column;

		:global(li) {
			border-bottom: 1px solid $color-white;

			&:last-of-type {
				border-bottom: none;
			}
		}
	}
</style>
