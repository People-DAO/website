<script lang="ts">
	import HexagonShape from '$assets/icons/general/hexagon.svg';

	export let href: string = null;
	export let target: '_blank' = null;
</script>

<a
	class:hexagon={true}
	{href}
	{target}
	rel={target === '_blank' ? 'noopener noreferrer' : null}
	{...$$restProps}
>
	<div class="shape">
		<HexagonShape />
	</div>
	<div class="content">
		<slot />
	</div>
</a>

<style lang="scss">
	.hexagon {
		@include spacing--max(--hexagon-height--helper);
		--hexagon-height: calc(var(--hexagon-height--helper) * 3);
		width: var(--hexagon-height);
		height: calc(var(--hexagon-height) * 1.14);
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		.shape {
			position: absolute;
			inset: 1;
			width: var(--hexagon-height);
			height: calc(var(--hexagon-height) * 1.14);

			:global(svg) {
				fill: $color-background--secondary;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: calc(var(--hexagon-height) * 0.175);
			overflow: hidden;
			z-index: 1;

			:global(svg) {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
