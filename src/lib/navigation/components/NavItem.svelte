<script lang="ts">
	import { fly } from 'svelte/transition';
	import { NavArrowDownIcon } from '@indaco/svelte-iconoir';

	export let href: string | undefined;
	export let target: '_blank' | undefined;
	export let disabled = false;
	export let hasSubItems = false; // @NOTE: Workaround for https://github.com/sveltejs/svelte/issues/5604

	let isSubmenuOpen = false;

	const setSubmenuOpen = (value: boolean) => {
		if (hasSubItems) isSubmenuOpen = value;
	};
</script>

<div
	class="relative"
	on:mouseenter={() => setSubmenuOpen(true)}
	on:mouseleave={() => setSubmenuOpen(false)}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<svelte:element
		this={hasSubItems ? 'button' : 'a'}
		class="
			group inline-flex items-center text-base font-medium 
			{!disabled ? 'text-white-primary' : 'text-gray-200'} 
			-my-3 py-3 rounded-md focus:outline-none
		"
		class:text-gold-primary={isSubmenuOpen}
		{href}
		{target}
	>
		<slot />
		{#if hasSubItems}
			<NavArrowDownIcon class="ml-1" />
		{/if}
	</svelte:element>
	{#if isSubmenuOpen}
		<div
			class="absolute z-10 -ml-4 mt-3 w-screen max-w-xs transform px-2 sm:px-0 left-1/2 ml-0 -translate-x-1/2 pointer-events-none"
			in:fly={{ y: 10, duration: 250 }}
			out:fly={{ y: 10, duration: 250 }}
		>
			<slot name="submenu" />
		</div>
	{/if}
</div>
