<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';

	import { AnnouncementsBannerItem } from '$lib/announcements-banner/components';

	import { LINK_TOOL_SNAPSHOT } from '$lib/link/constants/toolLinks.constants';

	import { fetchData } from '$util/svelte-query/fetchData';

	$: proposalsQuery = useQuery('PROPOSALS_ACTIVE', () =>
		fetchData({
			url: '/api/proposals/snapshot',
			params: {
				state: 'active'
			}
		})
	);

	$: proposalsCount = $proposalsQuery?.data?.length;
</script>

{#if proposalsCount}
	<AnnouncementsBannerItem
		href={`
			${LINK_TOOL_SNAPSHOT}
			${proposalsCount > 1 ? '' : `/proposal/${$proposalsQuery?.data[0].id}`}
		`}
		target="_blank"
	>
		<strong>Active Snapshot Proposal{proposalsCount > 1 ? 's' : ''}: </strong>
		{$proposalsQuery?.data[0].title}
		<i>
			{proposalsCount > 1 ? ` + ${proposalsCount - 1} more` : ''}
		</i>
	</AnnouncementsBannerItem>
{/if}
