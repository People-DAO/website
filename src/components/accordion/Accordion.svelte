<ul class:accordion={true} {...$$restProps}>
	<slot />
</ul>

<style lang="scss">
	.accordion {
		display: flex;
		flex-direction: column;

		:global(li) {
			border-bottom: 2px solid rgba($color-text--secondary, 0.25); // @TODO

			&:last-of-type {
				border-bottom: none;
			}
		}
	}
</style>
