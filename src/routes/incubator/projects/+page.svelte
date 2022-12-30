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
			PeopleDAO incubates and&nbsp;supports projects that&nbsp;advance Web3 and&nbsp;social good.
			We&nbsp;also support projects that&nbsp;build an&nbsp;ecosystem around the&nbsp;$PEOPLE token
			and&nbsp;they constitute our&nbsp;subDAOs. Below&nbsp;are&nbsp;profiles of&nbsp;incubated
			projects and&nbsp;subDAOs which&nbsp;are being incubated&nbsp;now or&nbsp;have&nbsp;been
			incubated in&nbsp;the&nbsp;past.
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
