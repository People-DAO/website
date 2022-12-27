<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { PageHeader } from '$lib/page-header/components';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { HexagonAvatar } from '$lib/avatar/components';

	import type { ProjectData } from '$apps/projects/types/projectData.type';

	export let data: { projects: ProjectData[] };
</script>

<PageMeta title="Incubated projects" />
<PageHeader>
	<h1 class="text-center">Incubated projects</h1>
</PageHeader>
<Section id="list">
	<FormattedContent class="text-center">
		<p>
			The PeopleDAO's Incubator supports projects that advance web3 and&nbsp;social good,
			or&nbsp;build an&nbsp;ecosystem around the&nbsp;$PEOPLE token. Below are profiles of
			individual projects and&nbsp;subDAOs, which are&nbsp;being incubated now or&nbsp;have been
			in&nbsp;the&nbsp;past.
		</p>
	</FormattedContent>
	<div class="max-w-3xl flex flex-wrap justify-center space-x-3 space-y-3 mt-16 mx-auto">
		{#each data.projects as project, index}
			<div
				class:team-icon={true}
				class="flex flex-col justify-center space-y-1 {index === 0 ? 'ml-3 mt-3' : ''}"
			>
				<HexagonAvatar
					class="h-[192px]"
					color="#000000"
					href={`/incubator/project/${project.metadata.slug}`}
				>
					<img src={project.metadata.logoUrl} alt="" />
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
					height: 96px !important;
					width: 96px !important;
				}
			}
		}
	}
</style>
