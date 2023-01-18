<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';

	import { AnnouncementsBannerItem } from '$lib/announcements-banner/components';

	import { fetchData } from '$util/svelte-query/fetchData';

	$: spacesQuery = useQuery('TWITTER_SPACES', () =>
		fetchData({
			url: '/api/events/twitter'
		})
	);

	$: spacesResult = $spacesQuery?.data;
</script>

{#if spacesResult?.live}
	<AnnouncementsBannerItem href={`https://twitter.com/i/spaces/${spacesResult.id}`} target="_blank">
		<svg
			class:live-indicator={true}
			class="h-[8px] w-[8px] mr-px md:h-[10px] md:w-[10px] md:mr-0.5"
		>
			<circle cx="50%" cy="50%" r="50%" fill="#dc2626" />
		</svg>
		<strong>Live Twitter Space: </strong>
		{spacesResult.title}
	</AnnouncementsBannerItem>
{/if}

<style lang="scss">
	.live-indicator {
		position: relative;
		display: inline-flex;
		margin-bottom: 2px;
		animation: 1s liveIndicatorPulse ease infinite;

		@keyframes liveIndicatorPulse {
			0% {
				opacity: 0;
			}

			50% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}
	}
</style>
