<script lang="ts">
	import { NavArrowDownIcon } from '@indaco/svelte-iconoir';

	export let href: string | undefined;
	export let target: '_blank' | undefined;
	export let disabled = false;
	export let hasSubItems = false; // @NOTE: Workaround for https://github.com/sveltejs/svelte/issues/5604
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="relative">
	<svelte:element
		this={hasSubItems ? 'button' : 'a'}
		class="
			flex items-start p-3 -m-3 rounded-lg
			{!hasSubItems ? 'hover:bg-navy-secondary/25' : ''}
			{!disabled ? 'text-white-primary' : 'text-gray-200'} 
		"
		{href}
		{target}
	>
		<div class="h-6 w-6 shrink-0 text-gold-primary">
			<slot name="icon" />
		</div>
		<div class="font-medium text-white-primary ml-4">
			<slot />
		</div>
		{#if hasSubItems}
			<NavArrowDownIcon class="ml-2" />
		{/if}
	</svelte:element>
</div>
<div class="grid gap-4 mx-6 my-4">
	<slot name="submenu" />
</div>
