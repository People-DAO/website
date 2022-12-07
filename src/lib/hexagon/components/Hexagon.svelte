<script lang="ts">
	import HexagonShape from '$assets/icons/general/hexagon.svg?raw';

	export let href: string | null = null;
	export let target: '_blank' | null = null;
</script>

<div class:hexagon={true} {...$$restProps}>
	<div class="shape">
		{@html HexagonShape}
	</div>
	<div class="link">
		<svg viewBox="0 0 244 278" fill="transparent" xmlns="http://www.w3.org/2000/svg">
			<a {href} {target} rel={target === '_blank' ? 'noopener noreferrer' : null}>
				<path
					d="M125.5 2.17543L238.744 67.5566C240.909 68.8071 242.244 71.1179 242.244 73.6188V204.381C242.244 206.882 240.909 209.193 238.744 210.443L125.5 275.825C123.334 277.075 120.666 277.075 118.5 275.825L5.25645 210.443C3.09064 209.193 1.75645 206.882 1.75645 204.381V73.6188C1.75645 71.1179 3.09064 68.8071 5.25645 67.5566L118.5 2.17543C120.666 0.924999 123.334 0.924997 125.5 2.17543Z"
					stroke="url(#paint0_linear_129_4)"
					stroke-width="2"
				/>
			</a>
			<defs>
				<linearGradient
					id="paint0_linear_129_4"
					x1="2.5"
					y1="139"
					x2="239"
					y2="139"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#4C87F6" />
					<stop offset="1" stop-color="#8042CA" />
				</linearGradient>
			</defs>
		</svg>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

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

		.shape {
			position: absolute;
			inset: 1;
			width: var(--hexagon-height);
			height: calc(var(--hexagon-height) * 1.14);

			:global(svg) {
				fill: $color-background--secondary;
			}
		}

		.link {
			position: absolute;
			inset: 1;
			width: var(--hexagon-height);
			height: calc(var(--hexagon-height) * 1.145);
			opacity: 0;
			@include transition($transition--primary, opacity);
			pointer-events: none;
			z-index: 10;

			a {
				pointer-events: all;
			}

			&:hover {
				opacity: 1;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: calc(var(--hexagon-height) * 0.2);
			overflow: hidden;
			z-index: 1;

			:global(svg),
			:global(img) {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
