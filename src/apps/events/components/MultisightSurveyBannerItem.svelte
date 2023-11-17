<script lang="ts">
	import { AnnouncementsBannerItem } from '$lib/announcements-banner/components';
</script>

<AnnouncementsBannerItem href="https://multisight.app/research" target="_blank">
	<svg class:live-indicator={true} class="h-[8px] w-[8px] mr-px md:h-[10px] md:w-[10px] md:mr-0.5">
		<circle cx="50%" cy="50%" r="50%" fill="#dc2626" />
	</svg>
	<strong>Take the community survey on multisig signer rewards - your input matters!</strong>
</AnnouncementsBannerItem>

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
