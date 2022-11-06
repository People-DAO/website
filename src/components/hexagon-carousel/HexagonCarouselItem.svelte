<script lang="ts">
	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;
</script>

<div class:hexagon-carousel-item={true} {...$$restProps}>
	<div class="shape">
		<svg viewBox="0 0 342 304" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.0882 177.189C6.54673 167.591 3.94232 163.048 2.94723 158.242C2.09445 154.124 2.09445 149.876 2.94723 145.758C3.94232 140.952 6.54673 136.409 12.0882 126.811L69.73 26.9727C75.2714 17.3746 77.9037 12.8476 81.5675 9.58325C84.7073 6.78577 88.3871 4.66125 92.3797 3.34082C97.0386 1.80002 102.275 1.78397 113.358 1.78397H228.642C239.725 1.78397 244.961 1.80002 249.62 3.34082C253.613 4.66125 257.293 6.78577 260.432 9.58325C264.096 12.8476 266.729 17.3746 272.27 26.9727L329.912 126.811C335.453 136.409 338.058 140.952 339.053 145.758C339.906 149.876 339.906 154.124 339.053 158.242C338.058 163.048 335.453 167.591 329.912 177.189L272.27 277.027C266.729 286.625 264.096 291.152 260.432 294.417C257.293 297.214 253.613 299.339 249.62 300.659C244.961 302.2 239.725 302.216 228.642 302.216H113.358C102.275 302.216 97.0386 302.2 92.3797 300.659C88.3871 299.339 84.7073 297.214 81.5675 294.417C77.9037 291.152 75.2714 286.625 69.73 277.027L12.0882 177.189Z"
				stroke-width="2.67681"
			/>
		</svg>
	</div>
	<div class="link">
		<svg viewBox="0 0 342 304" fill="none" xmlns="http://www.w3.org/2000/svg">
			<a {href} {target}>
				<path
					d="M12.0882 177.189C6.54673 167.591 3.94232 163.048 2.94723 158.242C2.09445 154.124 2.09445 149.876 2.94723 145.758C3.94232 140.952 6.54673 136.409 12.0882 126.811L69.73 26.9727C75.2714 17.3746 77.9037 12.8476 81.5675 9.58325C84.7073 6.78577 88.3871 4.66125 92.3797 3.34082C97.0386 1.80002 102.275 1.78397 113.358 1.78397H228.642C239.725 1.78397 244.961 1.80002 249.62 3.34082C253.613 4.66125 257.293 6.78577 260.432 9.58325C264.096 12.8476 266.729 17.3746 272.27 26.9727L329.912 126.811C335.453 136.409 338.058 140.952 339.053 145.758C339.906 149.876 339.906 154.124 339.053 158.242C338.058 163.048 335.453 167.591 329.912 177.189L272.27 277.027C266.729 286.625 264.096 291.152 260.432 294.417C257.293 297.214 253.613 299.339 249.62 300.659C244.961 302.2 239.725 302.216 228.642 302.216H113.358C102.275 302.216 97.0386 302.2 92.3797 300.659C88.3871 299.339 84.7073 297.214 81.5675 294.417C77.9037 291.152 75.2714 286.625 69.73 277.027L12.0882 177.189Z"
				/>
			</a>
		</svg>
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.hexagon-carousel-item {
		@include fluid(--hexagon-height, 128, 256);

		position: relative;
		display: inline-flex;
		height: var(--hexagon-height);
		width: calc(var(--hexagon-height) * 1.125);

		.shape {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;

			svg {
				path {
					fill: $color-white;
					stroke: $color-gold--tertiary;
				}
			}
		}

		.link {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			pointer-events: none;
			z-index: 10;

			a {
				pointer-events: all;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin: calc(var(--hexagon-height) * 0.2);
			overflow: hidden;
			z-index: 1;

			:global(svg),
			:global(img) {
				height: 100%;
				max-width: 100%;
				fill: $color-white;
				@include transition($transition--primary, opacity);
			}
		}

		.link:hover + .content {
			:global(svg),
			:global(img) {
				opacity: 0.6;
			}
		}
	}
</style>
