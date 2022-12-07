<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';

	import { HexagonCarouselItem, HexagonCarouselAction } from '.';

	import ArrowRightIcon from '$assets/icons/general/arrow-right.svg?raw';

	export let items: CarouselItem[];
	export let autoplay = true;

	type CarouselItem = {
		iconHtml: string;
		href?: string;
		target?: '_blank';
	};

	let movableItems = [...items];

	const rotateLeft = () => {
		const first = movableItems.shift() as CarouselItem;
		movableItems.push(first);
		movableItems = movableItems;
	};

	const rotateRight = () => {
		const last = movableItems.pop() as CarouselItem;
		movableItems.unshift(last);
		movableItems = movableItems;
	};

	const hanldeRotateLeft = () => {
		if (autoplay) autoplay = false;
		rotateLeft();
	};

	const handleRotateRight = () => {
		if (autoplay) autoplay = false;
		rotateRight();
	};

	const autorotate = () => {
		if (autoplay) {
			rotateRight();
			setTimeout(autorotate, 2000);
			return;
		}
	};

	onMount(() => {
		autorotate();
	});
</script>

<div class:hexagon-carousel={true} {...$$restProps}>
	<div class="container">
		<div class="action --left">
			<HexagonCarouselAction iconData={ArrowRightIcon} onClick={hanldeRotateLeft} />
		</div>
		<div class="action --right">
			<HexagonCarouselAction iconData={ArrowRightIcon} onClick={handleRotateRight} />
		</div>
		<div class="pivot">
			{#each movableItems as item, index (item.href)}
				<div
					class="item"
					class:--back-left={index == items.length - 2}
					class:--middle-left={index == items.length - 1}
					class:--front={index == 0}
					class:--middle-right={index == 1}
					class:--back-right={index == 2}
					animate:flip={{ duration: 200 }}
				>
					<HexagonCarouselItem href={item.href} target={item.target}>
						{@html item.iconHtml}
					</HexagonCarouselItem>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.hexagon-carousel {
		$breakpoint--mobile: $breakpoint--small;

		position: relative;

		.container {
			position: relative;
			@include fluid(width, 455, 910);
			@include fluid(height, 128, 256);
			display: flex;
			justify-content: center;
			margin: 0 auto;

			@include breakpoint($breakpoint--mobile) {
				@include fluid(width, 335, 700);
			}

			.action {
				position: absolute;
				top: 50%;
				z-index: 10;

				&.--left {
					left: 0;
					transform: translateY(-50%);

					:global(svg) {
						transform: rotate(180deg);
					}
				}

				&.--right {
					right: 0;
					transform: translateY(-50%);
				}
			}

			.pivot {
				position: relative;

				.item {
					position: absolute !important;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					opacity: 0;
					@include transition($transition--primary, opacity);

					&.--back-left,
					&.--middle-left,
					&.--front,
					&.--middle-right,
					&.--back-right {
						opacity: 1;
					}

					&.--back-left {
						transform: translate(-170%, -50%) scale(0.5);
						z-index: 1;

						@include breakpoint($breakpoint--mobile) {
							transform: translate(-50%, -50%);
							opacity: 0;
						}
					}

					&.--middle-left {
						transform: translate(-120%, -50%) scale(0.75);
						z-index: 2;
					}

					&.--front {
						z-index: 3;
					}

					&.--middle-right {
						transform: translate(20%, -50%) scale(0.75);
						z-index: 2;
					}

					&.--back-right {
						transform: translate(70%, -50%) scale(0.5);
						z-index: 1;

						@include breakpoint($breakpoint--mobile) {
							transform: translate(-50%, -50%);
							opacity: 0;
						}
					}
				}
			}
		}
	}
</style>
