<script lang="ts">
	import { InternetIcon } from '@indaco/svelte-iconoir';

	import { PageMeta } from '$util/meta';
	import { PageHeader, Breadcrumbs } from '$lib/page-header/components';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { UserProfile } from '$apps/users/components';
	import { ProjectLink } from '$apps/projects/components';

	import { getUser } from '$apps/users/services/getUser';

	import { PLATFORM_DOMAIN } from '$util/platform';

	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';
	import TwitterIcon from '$assets/icons/socials/twitter.svg?raw';

	import type { ProjectData } from '$apps/projects/types/projectData.type';
	import type { User } from '$apps/users/types/user.type';

	export let data: ProjectData;

	let leads: User[] = [];
	let stewards: User[] = [];

	$: if (data.metadata.leads) {
		data.metadata.leads.forEach((lead) => {
			const leadUser = getUser(lead);
			if (leadUser) leads.push(leadUser);
		});
	}

	$: if (data.metadata.stewards) {
		data.metadata.stewards.forEach((steward) => {
			const stewardUser = getUser(steward);
			if (stewardUser) stewards.push(stewardUser);
		});
	}
</script>

<PageMeta title={data.metadata.title} />
<PageHeader>
	<h1>{data.metadata.title}</h1>
	<Breadcrumbs slot="breadcrumbs" items={[{ label: 'Projects', href: '/incubator/projects' }]} />
</PageHeader>
<Section id="profile">
	<div class="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-x-14">
		<div class="flex flex-col">
			<FormattedContent>
				<svelte:component this={data.component} />
			</FormattedContent>
		</div>
		<div class="flex flex-col space-y-8">
			{#if data.metadata.links}
				<div class="flex flex-col">
					<FormattedContent class="mt-[1.55em] mb-[0.88em] lg:mt-0 lg:mb-4">
						<h4 class="text-[1.8em] lg:text-[1.5rem]">Links</h4>
					</FormattedContent>
					<div class="flex flex-col items-start space-y-1">
						{#if data.metadata.links.website}
							<ProjectLink href={data.metadata.links.website} target="_blank">
								<svelte:fragment slot="icon">
									<InternetIcon />
								</svelte:fragment>
								<span>{data.metadata.links.website}</span>
							</ProjectLink>
						{/if}
						{#if data.metadata.links.twitterHandle}
							<ProjectLink
								href={`https://twitter.com/${data.metadata.links.twitterHandle}`}
								target="_blank"
							>
								<svelte:fragment slot="icon">
									{@html TwitterIcon}
								</svelte:fragment>
								<span>{data.metadata.links.twitterHandle}</span>
							</ProjectLink>
						{/if}
						{#if data.metadata.links.discordCode}
							<ProjectLink
								href={`https://discord.com/invite/${data.metadata.links.discordCode}`}
								target="_blank"
							>
								<svelte:fragment slot="icon">
									{@html DiscordIcon}
								</svelte:fragment>
								<span>{data.metadata.links.discordCode}</span>
							</ProjectLink>
						{/if}
					</div>
				</div>
			{/if}
			<div class="flex flex-col">
				<FormattedContent class="mt-[1.55em] mb-[0.88em] lg:mt-0 lg:mb-4">
					<h4 class="text-[1.8em] lg:text-[1.5rem]">Project leads</h4>
				</FormattedContent>
				<div class="flex flex-col space-y-4">
					{#each leads as lead}
						<UserProfile user={lead} />
					{:else}
						<span>-</span>
					{/each}
				</div>
			</div>
			<div class="flex flex-col">
				<FormattedContent class="mt-[1.55em] mb-[0.88em] lg:mt-0 lg:mb-4">
					<h4 class="text-[1.8em] lg:text-[1.5rem]">Project stewards</h4>
				</FormattedContent>
				<div class="flex flex-col space-y-4">
					{#each stewards as steward}
						<UserProfile user={steward} />
					{:else}
						<span>-</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>
