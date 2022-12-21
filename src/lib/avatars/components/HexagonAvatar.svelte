<script lang="ts">
	import HexagonIcon from '$assets/icons/shapes/hexagon.svg?raw';
	import HexagonOutlineIcon from '$assets/icons/shapes/hexagon-outline.svg?raw';

	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;

	export let color: string = '#ffffff';
	export let borderColor: string = '#dfc383';
	export let backgroundColor: string = 'transparent';

	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div class="flex justify-center {$$restProps.class}" {...restProps}>
	<div class:hexagon-avatar={true}>
		<div class:border={true} style="color: {borderColor};">
			{@html HexagonOutlineIcon}
		</div>
		<div class:content={true}>
			<div class:shape={true} style="color: {backgroundColor};">
				{@html HexagonIcon}
			</div>
			<div style="color: {color};">
				<slot />
			</div>
		</div>
		{#if href}
			<div class:link={true}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="transparent" viewBox="0 0 66.08 76.3">
					<a
						class:link-inner={true}
						class="transition-all duration-150"
						{href}
						{target}
						rel={target === '_blank' ? 'noopener noreferrer' : null}
					>
						<polygon
							points="33.04,0 49.56,9.54 66.08,19.08 66.08,38.15 66.08,57.23 49.56,66.77 33.04,76.3 16.52,66.77 -0,57.23 -0,38.15 -0,19.08 16.52,9.54"
						/>
					</a>
				</svg>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.hexagon-avatar {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		overflow: hidden;

		.border {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			:global(svg) {
				height: 100%;
				width: auto;
				fill: currentColor;
			}
		}

		.content {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			clip-path: url(#svgPath);
			overflow: hidden;
			padding: 22.5%;

			.shape {
				position: absolute;
				z-index: -1;
			}

			:global(svg),
			:global(img) {
				display: block;
				height: auto;
				width: 100%;
				fill: currentColor;
			}
		}

		.link {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;

			.link-inner {
				&:hover {
					opacity: 0.5;
					fill: $color-white--hover;
				}
			}
		}
	}
</style>
