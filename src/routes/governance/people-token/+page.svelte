<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { PageHeader, Breadcrumbs } from '$lib/page-header/components';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { TokenDuneStatItem } from '$apps/token/components';

	export let data: { component: any };
</script>

<PageMeta title="$PEOPLE token" />
<PageHeader>
	<h1>$PEOPLE token</h1>
</PageHeader>
<Section id="profile">
	<div class="flex flex-col">
		<FormattedContent>
			<svelte:component this={data?.component} />
			<h2>Market</h2>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/298036/565672/51aab04c-fde8-49e2-9019-39d665aa1c9b"
					width="100%"
					height="100%"
					title="$PEOPLE market cap"
				/>
			</TokenDuneStatItem>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/298036/565670/05ece860-5883-4520-8240-293008761630"
					width="100%"
					height="100%"
					title="$PEOPLE token supply"
				/>
			</TokenDuneStatItem>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/300128/569795/4270b856-8af7-4ed0-ba5a-34eb5701bf68"
					width="100%"
					height="400px"
					title="$PEOPLE balance distribution"
				/>
			</TokenDuneStatItem>
			<h2>PeopleDAO</h2>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/1834782/3018113/b58c4c25-e818-4063-8c78-85f98270d77c"
					width="100%"
					height="100%"
					title="PeopleDAO treasury value"
				/>
			</TokenDuneStatItem>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/1834784/3018115/10ffbbf6-42cc-451b-9319-1d2523b39233"
					width="100%"
					height="400px"
					title="PeopleDAO treasury distribution"
				/>
			</TokenDuneStatItem>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/1917734/3161313/2b1886af-1382-4252-99bd-68ef921e3ec4"
					width="100%"
					height="400px"
					title="PeopleDAO monthly expenditures"
				/>
			</TokenDuneStatItem>
			<TokenDuneStatItem>
				<iframe
					src="https://dune.com/embeds/1914674/3154322/887a632b-2be0-4636-a2b7-675e1cbb22a3"
					width="100%"
					height="400px"
					title="PeopleDAO contributor rewards"
				/>
			</TokenDuneStatItem>
		</FormattedContent>
	</div>
</Section>
