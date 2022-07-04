<script lang="ts">
	import { slide } from 'svelte/transition';

	import { Text } from '$components/text';

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
	<div class="title" on:click={handleClick}>
		<div class="icon" class:icon--open={open}>
			{@html ChevronDownIcon}
		</div>
		<span>{title}</span>
	</div>
	{#if open}
		<div class="description" transition:slide={{ duration: TRANSITION_DURATION }}>
			<Text>{@html description}</Text>
		</div>
	{/if}
</li>

<style lang="scss">
	.accordion-item {
		@include spacing--small(padding-top);

		.title {
			display: flex;
			align-items: center;
			@include spacing--small(padding-top, padding-bottom);
			@include fluid(margin-top, -20, -24);
			@include transition($transition--primary, background);
			cursor: pointer;

			.icon {
				display: flex;
				@include spacing--nano(margin-right);
				@include transition($transition--primary, transform);

				&.icon--open {
					transform: rotate(-180deg);
				}

				:global(svg) {
					@include fluid(height, 26, 32);
					width: auto;
				}
			}

			span {
				@include typography-family--secondary;
				@include typography-size--base;
				font-weight: $font-weight--semi-bold;
				@include transition($transition--primary, color);
			}

			&:hover {
				span {
					color: $color-text--secondary;
				}
			}
		}

		.description {
			@include fluid(margin-top, -10, -14);
			@include spacing--small(padding-bottom);
			@include fluid(padding-left, 34, 44);
			@include transition($transition--primary, background);

			:global(p) {
				@include typography-size--medium;
			}
		}
	}
</style>
