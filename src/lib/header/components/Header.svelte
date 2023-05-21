<script lang="ts">
	import { Wrapper } from '$lib/layout/components';
	import { Logo } from '$lib/logo/components';
	import { Navigation } from '$lib/navigation/components';
	import { Button } from '$lib/button/components';
	import { AnnouncementsBanner } from '$lib/announcements-banner/components';

	// import { TwitterSpacesBannerItem } from '$apps/events/components';
	import { ProposalsBannerItem } from '$apps/proposals/components';

	import { viewport, isViewportGTE } from '$lib/layout/stores/viewport.store';
	import { headerHeight } from '../stores/header.store';

	import { LINK_SOCIAL_DISCORD } from '$lib/link/constants/socialLinks.constants';

	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';

	$: isViewportGTElg = isViewportGTE($viewport, 'lg');
</script>

<header
	bind:clientHeight={$headerHeight}
	class="!sticky top-0 w-full bg-navy-primary z-[1000] border-b border-gold-primary"
>
	<AnnouncementsBanner>
		<!-- <TwitterSpacesBannerItem /> -->
		<ProposalsBannerItem />
	</AnnouncementsBanner>
	<Wrapper>
		<div class:container={true} class="h-16 gap-x-12 py-2 space-x-10">
			<a class:logo={true} class="my-auto mr-auto" href="/">
				<Logo class="h-7 text-white-primary" variant={isViewportGTElg ? 'full' : 'text'} />
			</a>
			<Navigation />
			<div class:cta={true} class="hidden md:flex !ml-auto !my-auto">
				<Button
					variant="white/gold"
					iconPosition="leading"
					href={LINK_SOCIAL_DISCORD}
					target="_blank"
				>
					<svelte:fragment slot="icon">
						{@html DiscordIcon}
					</svelte:fragment>
					{isViewportGTElg ? 'Join Discord' : ''}
				</Button>
			</div>
		</div>
	</Wrapper>
</header>

<style lang="scss">
	header {
		.container {
			min-width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'logo navigation';

			@include breakpoint($breakpoint--md) {
				grid-template-columns: 1fr auto 1fr;
				grid-template-areas: 'logo navigation cta';
			}

			.logo {
				grid-area: logo;
			}

			.cta {
				grid-area: cta;
			}
		}
	}
</style>
