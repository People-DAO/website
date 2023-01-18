<script lang="ts">
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { MenuIcon, CancelIcon, HomeIcon } from '@indaco/svelte-iconoir';

	import {
		NavItem,
		NavSubmenu,
		NavSubmenuItem,
		MobileNavItem,
		MobileNavSubmenuItem,
		SocialsMenu
	} from '$lib/navigation/components';

	import { viewport, isViewportGTE } from '$lib/layout/stores/viewport.store';
	import { headerHeight } from '$lib/header/stores/header.store';

	import { NAVIGATION_ITEMS } from '../config/navigation.config';

	let isMobileMenuOpen = false;
	$: if (browser) document.body.classList.toggle('scroll-lock', isMobileMenuOpen);
	$: if (isMobileMenuOpen && $navigating) {
		isMobileMenuOpen = false;
	}

	$: isViewportGTEmd = isViewportGTE($viewport, 'md');
	$: if (!isViewportGTEmd) {
		isMobileMenuOpen = false;
	}
</script>

{#if isViewportGTEmd}
	<nav class="flex items-center justify-center space-x-10 !ml-0">
		{#each NAVIGATION_ITEMS as item}
			<NavItem
				href={item.href || undefined}
				target={item.target || undefined}
				disabled={item.disabled}
				hasSubItems={!!item.subItems?.length}
			>
				<span>{item.label}</span>
				<svelte:fragment slot="submenu">
					{#if item.subItems?.length}
						<NavSubmenu>
							{#each item.subItems as subItem}
								<NavSubmenuItem
									href={subItem.href}
									target={subItem.target}
									disabled={subItem.disabled}
								>
									<svelte:fragment slot="icon">
										{#if subItem.icon}
											<svelte:component this={subItem.icon} />
										{/if}
									</svelte:fragment>
									<span>{subItem.label}</span>
								</NavSubmenuItem>
							{/each}
						</NavSubmenu>
					{/if}
				</svelte:fragment>
			</NavItem>
		{/each}
	</nav>
{:else}
	<button
		type="button"
		class="inline-flex md:hidden items-center my-auto !ml-auto p-2 ml-3 rounded-lg hover:text-gold-primary"
		on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
	>
		{#if !isMobileMenuOpen}
			<MenuIcon />
		{:else}
			<CancelIcon />
		{/if}
	</button>
	{#if isMobileMenuOpen}
		<div
			class="fixed top-14 left-0 right-0 bottom-0 bg-navy-primary !m-0 p-4 overflow-y-scroll rounded-bl-lg rounded-br-lg shadow-lg border border-t-0 border-gold-primary z-[1001]"
			style={`top: ${$headerHeight - 1}px;`}
			in:fly={{ y: 5, duration: 250 }}
			out:fly={{ y: 5, duration: 250 }}
		>
			<nav class="flex flex-col h-full px-3 py-2">
				<MobileNavItem href="/" target={undefined}>
					<span>Homepage</span>
					<svelte:fragment slot="icon">
						<HomeIcon />
					</svelte:fragment>
				</MobileNavItem>
				{#each NAVIGATION_ITEMS as item}
					<MobileNavItem
						href={item.href || undefined}
						target={item.target || undefined}
						disabled={item.disabled}
						hasSubItems={!!item.subItems?.length}
					>
						<svelte:fragment slot="icon">
							{#if item.icon}
								<svelte:component this={item.icon} />
							{/if}
						</svelte:fragment>
						<span>{item.label}</span>
						<svelte:fragment slot="submenu">
							{#if item.subItems?.length}
								{#each item.subItems as subItem}
									<MobileNavSubmenuItem
										href={subItem.href}
										target={subItem.target}
										disabled={subItem.disabled}
									>
										<span>{subItem.label}</span>
									</MobileNavSubmenuItem>
								{/each}
							{/if}
						</svelte:fragment>
					</MobileNavItem>
				{/each}
				<div class="flex mt-6 pb-6">
					<SocialsMenu />
				</div>
			</nav>
		</div>
	{/if}
{/if}

<style lang="scss">
	:global(.scroll-lock) {
		overflow-y: hidden;
	}
</style>
