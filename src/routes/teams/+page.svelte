<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { PageHeader } from '$lib/page-header/components';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { HexagonAvatar } from '$lib/avatar/components';

	import type { TeamData } from '$apps/teams/types/teamData.type';

	export let data: { teams: TeamData[] };
</script>

<PageMeta title="Teams" />
<PageHeader>
	<h1 class="text-center">Teams</h1>
</PageHeader>
<Section id="list">
	<FormattedContent class="text-center">
		<p>
			PeopleDAO is operated through multiple groups of contributors, distributed among teams by
			their purpose and responsibilities. Most of these are open to join. You can see a detailed
			profile of each team on links below.
		</p>
	</FormattedContent>
	<div class="max-w-3xl flex flex-wrap justify-center space-x-3 space-y-3 mt-16 mx-auto">
		{#each data.teams as team, index}
			<div
				class:team-icon={true}
				class="flex flex-col justify-center space-y-1 {index === 0 ? 'ml-3 mt-3' : ''}"
			>
				<HexagonAvatar class="h-[192px]" color="#000000" href={`/team/${team.metadata.slug}`}>
					<img class="flex" src={team.metadata.logoUrl} alt="" />
					<span class="font-semibold text-base text-navy-primary text-center uppercase mt-1">
						{team.metadata.slug}
					</span>
				</HexagonAvatar>
			</div>
		{/each}
	</div>
</Section>

<style lang="scss">
	.team-icon {
		:global(.hexagon-avatar) {
			:global(.content-inner) {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				:global(img) {
					height: 64px !important;
					width: 64px !important;
				}

				:global(span) {
					text-align: center;
				}
			}
		}
	}
</style>
