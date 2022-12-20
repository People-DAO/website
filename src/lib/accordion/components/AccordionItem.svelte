<script lang="ts">
	import { slide } from 'svelte/transition';
	import { NavArrowDownIcon } from '@indaco/svelte-iconoir';

	import { FormattedContent } from '$lib/formatted-content/components';

	export let title: string;
	export let description: string;
	export let open = false;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;

	const handleClick = () => {
		open = !open;
	};
</script>

<li
	class:accordion-item={true}
	class="
		py-4 border-b border-black-tertiary !first:border-t
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class:title={true} class="flex center cursor-pointer font-medium" on:click={handleClick}>
		<div class:icon={true} class="flex flex-col justify-center ml-1 mr-1" class:icon--open={open}>
			<NavArrowDownIcon />
		</div>
		<FormattedContent>
			{@html title}
		</FormattedContent>
	</div>
	{#if open}
		<FormattedContent>
			<div class="ml-10 mt-2" transition:slide={{ duration: 250 }}>
				{@html description}
			</div>
		</FormattedContent>
	{/if}
</li>

<style lang="scss">
	.accordion-item {
		.title {
			.icon {
				color: $color-navy--primary;
				transition: transform 250ms ease-out;

				&.icon--open {
					transform: rotate(-180deg);
				}

				:global(svg) {
					width: auto;
				}
			}

			&:hover {
				:global(.formatted-content) {
					color: $color-bronze--primary;
				}

				.icon {
					color: $color-bronze--primary;
				}
			}
		}
	}
</style>
