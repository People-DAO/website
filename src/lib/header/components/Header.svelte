<script lang="ts">
	import { Wrapper } from '$lib/layout/components';
	import { Logo } from '$lib/logo/components';
	import { Navigation } from '$lib/navigation/components';
	import { Button } from '$lib/button/components';

	import { viewport, isViewportGTE } from '$lib/layout/stores/viewport.store';

	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';

	$: isViewportGTElg = isViewportGTE($viewport, 'lg');
</script>

<header class="fixed w-full h-16 bg-navy-primary z-[1000] border-b border-gold-primary">
	<Wrapper>
		<div class="h-16 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_auto_1fr] gap-x-12 py-2 space-x-10">
			<a class="my-auto mr-auto" href="/">
				<Logo class="h-7 text-white" variant={isViewportGTElg ? 'full' : 'text'} />
			</a>
			<Navigation />
			<Button
				class="hidden md:flex !ml-auto !my-auto bg-white text-black-primary"
				size="sm"
				href="@TODO"
				target="_blank"
			>
				<svelte:fragment slot="icon">
					{@html DiscordIcon}
				</svelte:fragment>
				{isViewportGTElg ? 'Join Discord' : ''}
			</Button>
		</div>
	</Wrapper>
</header>
