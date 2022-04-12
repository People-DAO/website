<li class:list-item={true} {...$$restProps}>
	<slot />
</li>

<style lang="scss">
	.list-item {
		@include spacing--small(padding-top, padding-bottom);
	}
</style>
