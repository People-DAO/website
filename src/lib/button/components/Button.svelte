<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { scrollElement } from 'svelte-scrolling';
	import { ArrowRightIcon } from '@indaco/svelte-iconoir';

	export let variant: 'white/gold' | 'navy/gold' = 'white/gold';
	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;
	export let disabled = false;

	const dispatch = createEventDispatcher();

	const handleClick = (e: MouseEvent) => {
		dispatch('click', e);
		if (href?.startsWith('#')) {
			e.preventDefault();
			scrollElement(href, { offset: -64 });
		}
	};

	let iconSlot: HTMLElement;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class:button={true}
	class:--with-icon={iconSlot?.clientWidth}
	class="
		grid grid-flow-col
		text-lg rounded-lg
		font-medium 
		py-2 px-6 border
		transition-colors duration-150
		{variant === 'white/gold'
		? 'text-black-primary bg-white-primary border-gold-primary hover:text-bronze-primary hover:bg-white-hover'
		: ''}
		{variant === 'navy/gold'
		? 'text-white-primary bg-navy-primary border-gold-primary hover:text-gold-primary hover:bg-navy-hover'
		: ''}
		{$$restProps.class || ''}
	"
	on:click={handleClick}
	href={!disabled ? href : undefined}
	{target}
	{...restProps}
>
	<slot />
	{#if $$slots.icon}
		<div bind:this={iconSlot} class:icon={true}>
			<slot name="icon" />
		</div>
	{:else if target}
		<div bind:this={iconSlot} class:icon={true} class="-rotate-45">
			<ArrowRightIcon />
		</div>
	{/if}
</svelte:element>

<style lang="scss">
	.button {
		&.--with-icon {
			column-gap: 0.75rem;
		}

		.icon {
			display: flex;
			width: 1.5rem;

			:global(svg) {
				height: 100%;
				width: auto;
				fill: currentColor;
			}
		}
	}
</style>
