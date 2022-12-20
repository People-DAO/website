<script lang="ts">
	import { ArrowRightIcon } from '@indaco/svelte-iconoir';

	export let variant: 'white/gold' | 'navy/gold' = 'white/gold';
	export let href: string | undefined;
	export let target: '_blank' | undefined = undefined;
	export let disabled = false;

	let defaultSlot: HTMLElement;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<a
	class:button={true}
	class:--icon-only={!defaultSlot?.clientWidth}
	class="
		grid grid-cols-[auto_auto] gap-x-3
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
	href={!disabled ? href : undefined}
	{target}
	{...restProps}
>
	<div bind:this={defaultSlot}>
		<slot />
	</div>
	{#if $$slots.icon}
		<div class:icon={true}>
			<slot name="icon" />
		</div>
	{:else if target}
		<div class:icon={true} class="-rotate-45">
			<ArrowRightIcon />
		</div>
	{/if}
</a>

<style lang="scss">
	.button {
		&.--icon-only {
			column-gap: 0;
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
