<ul class:accordion={true} {...$$restProps}>
	<slot />
</ul>

<style lang="scss">
	.accordion {
		display: flex;
		flex-direction: column;
		:global(li) {
			&:last-of-type {
				border-bottom: none;
			}
		}
	}
</style>
