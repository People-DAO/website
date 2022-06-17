<ul class:list={true} {...$$restProps}>
	<slot />
</ul>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;

		:global(li) {
			border-bottom: 2px solid rgba($color-text--secondary, 0.25);

			&:last-of-type {
				border-bottom: none;
			}
		}
	}
</style>
