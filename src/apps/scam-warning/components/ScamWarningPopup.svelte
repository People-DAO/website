<script lang="ts">
	import { browser } from '$app/environment';
	import { fly, fade } from 'svelte/transition';
	import { WarningTriangleOutlineIcon } from '@indaco/svelte-iconoir';

	import { FormattedContent } from '$lib/formatted-content/components';
	import { Link } from '$lib/link/components';
	import { Button } from '$lib/button/components';

	import { isClosedByUser } from '../stores/scamWarning.store';

	import { SCAM_WARNING_DOMAINS } from '../config/blacklist.config';

	import {
		LINK_SOCIAL_TWITTER,
		LINK_SOCIAL_DISCORD
	} from '$lib/link/constants/socialLinks.constants';

	let isOpen = false;

	if (browser) {
		const referrer = document?.referrer;

		if (referrer && !$isClosedByUser) {
			const referrerDomain = new URL(referrer).hostname;
			if (SCAM_WARNING_DOMAINS.some((domain) => referrerDomain.includes(domain))) {
				isOpen = true;
			}
		}
	}
	$: if (browser) document?.body.classList.toggle('scroll-lock', isOpen);
</script>

{#if isOpen}
	<div
		class="fixed inset-0 flex justify-center items-center z-[1100]"
		in:fade={{ duration: 250 }}
		out:fade={{ duration: 250 }}
	>
		<div class="fixed inset-0 h-full w-full bg-black-primary/75" />
		<div
			class="flex justify-center items-center"
			in:fly={{ y: 5, duration: 250 }}
			out:fly={{ y: 5, duration: 250 }}
		>
			<div
				class="max-h-screen max-w-md md:max-w-xl  m-2 md:m-8 rounded-lg shadow-lg ring-1 ring-gold-primary overflow-auto"
			>
				<div class="relative grid gap-6 bg-bronze-tertiary px-5 py-6 sm:gap-8 sm:p-8">
					<div class="flex justify-center items-center text-red-600">
						<WarningTriangleOutlineIcon class="h-8 w-8 mr-2" />
						<h2 class="text-3xl font-medium text-center">SCAM WARNING</h2>
						<WarningTriangleOutlineIcon class="h-8 w-8 ml-2" />
					</div>
					<FormattedContent class="text-center">
						<p>
							The website you came from is <strong>NOT</strong>&nbsp;affiliated with&nbsp;PeopleDAO.
						</p>
						<p>
							PeopleDAO will never run promotional&nbsp;events <i>(e.g.&nbsp;giveaways)</i>
							without an&nbsp;announcement on&nbsp;the&nbsp;official
							<Link href={LINK_SOCIAL_TWITTER} target="_blank">Twitter</Link>
							account or&nbsp;<Link href={LINK_SOCIAL_DISCORD} target="_blank">Discord</Link> server.
						</p>
						<p>
							Please make&nbsp;sure that&nbsp;your&nbsp;accounts and&nbsp;funds
							are&nbsp;properly&nbsp;secured.
						</p>
					</FormattedContent>
					<div class="flex justify-center">
						<Button
							on:click={() => {
								isOpen = false;
								$isClosedByUser = true;
							}}
						>
							I understand
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
