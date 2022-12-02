<script lang="ts">
	import { slide } from 'svelte/transition';

	import { Text } from '$lib/typography/components';

	import ChevronDownIcon from '$assets/icons/general/chevron-down.svg?raw';

	export let title: string;
	export let description: string;
	export let open = false;

	const TRANSITION_DURATION = 500;

	const handleClick = () => {
		open = !open;
	};
</script>

<li class:accordion-item={true} {...$$restProps}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="title" on:click={handleClick}>
		<div class="icon" class:icon--open={open}>
			{@html ChevronDownIcon}
		</div>
		<Text tag="span" size="medium">{title}</Text>
	</div>
	{#if open}
		<div class="description" transition:slide={{ duration: TRANSITION_DURATION }}>
			<Text size="medium">{@html description}</Text>
		</div>
	{/if}
</li>

<style lang="scss">
	.accordion-item {
		@include fluid(padding-top, 20, 24);

		.title {
			display: flex;
			align-items: center;
			@include fluid(padding-top, 20, 24);
			@include fluid(padding-bottom, 20, 24);
			@include fluid(margin-top, -20, -24);
			@include transition($transition--primary, background, opacity);
			cursor: pointer;

			&:hover {
				opacity: 0.6;
			}

			.icon {
				display: flex;
				@include fluid(margin-right, 8, 12);
				@include transition($transition--primary, transform);

				&.icon--open {
					transform: rotate(-180deg);
				}

				:global(svg) {
					@include fluid(height, 26, 32);
					width: auto;
				}
			}

			:global(span) {
				@include transition($transition--primary, color);
			}
		}

		.description {
			@include fluid(margin-top, -10, -14);
			@include fluid(padding-bottom, 20, 24);
			@include fluid(padding-left, 34, 44);
			@include transition($transition--primary, background);
		}
	}
</style>
