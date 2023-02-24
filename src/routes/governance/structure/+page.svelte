<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { PageHeader, Breadcrumbs } from '$lib/page-header/components';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';

	export let data: { component: any };
</script>

<PageMeta title="Governance Structure" />
<PageHeader>
	<h1>Governance Structure</h1>
</PageHeader>
<Section id="structure">
	<div class="flex flex-col">
		<FormattedContent>
			<svelte:component this={data?.component} />
		</FormattedContent>
	</div>
</Section>
