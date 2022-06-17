<script lang="ts">
	import { createPopperActions } from 'svelte-popperjs';

	import type { TooltipPlacement, TooltipStrategy, TooltipBackground } from './tooltip.types';

	export let placement: TooltipPlacement = 'bottom';
	export let strategy: TooltipStrategy = 'absolute';
	export let background: TooltipBackground = 'tertiary';
	export let extraOptions = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};

	const [popperRef, popperContent] = createPopperActions({
		placement,
		strategy
	});

	export let open = false;
</script>

<div
	use:popperRef
	class:tooltip-wrapper={true}
	on:mouseenter={() => {
		open = true;
	}}
	on:mouseleave={() => {
		open = false;
	}}
	{...$$restProps}
>
	<slot />
</div>
<div
	class="tooltip"
	class:tooltip-background--primary={background === 'primary'}
	class:tooltip-background--secondary={background === 'secondary'}
	class:tooltip-background--tertiary={background === 'tertiary'}
	class:tooltip--visible={open}
	use:popperContent={extraOptions}
>
	<div class="tooltip-arrow" data-popper-arrow />
	<slot name="tooltip" />
</div>

<style lang="scss">
	.tooltip {
		padding: 8px 16px;
		border-radius: 8px;
		opacity: 0;
		@include transition($transition--primary, opacity);

		&.tooltip-background--primary {
			background: $color-background--primary;

			.tooltip-arrow {
				background: $color-background--primary;
			}
		}

		&.tooltip-background--secondary {
			background: $color-background--secondary;

			.tooltip-arrow {
				background: $color-background--secondary;
			}
		}

		&.tooltip-background--tertiary {
			color: $color-text--tertiary;
			background: $color-background--tertiary;

			.tooltip-arrow {
				background: $color-background--tertiary;
			}
		}

		&.tooltip--visible {
			opacity: 1;
		}

		.tooltip-arrow,
		.tooltip-arrow::before {
			position: absolute;
			width: 8px;
			height: 8px;
			background: inherit;
		}

		.tooltip-arrow {
			visibility: hidden;
		}

		.tooltip-arrow::before {
			visibility: visible;
			content: '';
			transform: rotate(45deg);
		}

		&[data-popper-placement^='top'] :global(.tooltip-arrow) {
			bottom: -4px;
		}

		&[data-popper-placement^='bottom'] :global(.tooltip-arrow) {
			top: -4px;
		}

		&[data-popper-placement^='left'] :global(.tooltip-arrow) {
			right: -4px;
		}

		&[data-popper-placement^='right'] :global(.tooltip-arrow) {
			left: -4px;
		}
	}
</style>
