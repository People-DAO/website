<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { PageHeader, Breadcrumbs } from '$lib/page-header/components';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { UserProfile } from '$apps/users/components';

	import { getUser } from '$apps/users/services/getUser';

	import type { TeamData } from '$apps/teams/types/teamData.type';
	import type { User } from '$apps/users/types/user.type';

	export let data: TeamData;

	let leads: User[] = [];

	$: if (data.metadata.leads) {
		data.metadata.leads.forEach((lead) => {
			const leadUser = getUser(lead);
			if (leadUser) leads.push(leadUser);
		});
	}
</script>

<PageMeta title={data.metadata.title} />
<PageHeader>
	<h1>{data.metadata.title}</h1>
	<Breadcrumbs slot="breadcrumbs" items={[{ label: 'Teams', href: '/teams' }]} />
</PageHeader>
<Section id="profile">
	<div class="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-x-14">
		<div class="flex flex-col">
			<FormattedContent>
				<svelte:component this={data.component} />
			</FormattedContent>
		</div>
		<div class="flex flex-col space-y-4">
			<FormattedContent class="mt-[1.55em] mb-[0.88em] lg:mt-0 lg:mb-0">
				<h4 class="text-[1.8em] lg:text-[1.5rem]">Team leads</h4>
			</FormattedContent>
			<div class="flex flex-col space-y-4">
				{#each leads as lead}
					<UserProfile user={lead} />
				{:else}
					<span>-</span>
				{/each}
			</div>
		</div>
	</div>
</Section>
