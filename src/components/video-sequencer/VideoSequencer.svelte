<script lang="ts">
	import { onMount } from 'svelte';

	export let videoUrls: string[];
	export let order: 'ascending' | 'descending' | 'random' = 'ascending';

	let videoPlaying: HTMLVideoElement | null = null;
	let videoCaching: HTMLVideoElement | null = null;

	let videosOrderedUrls = [];

	onMount(() => {
		if (order === 'ascending') {
			videosOrderedUrls = videoUrls.slice();
		} else if (order === 'descending') {
			videosOrderedUrls = videoUrls.slice().reverse();
		} else if (order === 'random') {
			videosOrderedUrls = videoUrls.slice().sort(() => Math.random() - 0.5);
		}

		updateVideoQueue();
	});

	const updateVideoQueue = (currentVideoIndex = 0) => {
		let nextVideoIndex = currentVideoIndex + 1;
		if (nextVideoIndex >= videosOrderedUrls.length) {
			nextVideoIndex = 0;
		}

		if (!videoPlaying.src) {
			videoPlaying.src = videosOrderedUrls[currentVideoIndex];
		} else {
			videoPlaying.src = videoCaching.src;
		}

		videoCaching.src = videosOrderedUrls[nextVideoIndex];

		videoPlaying.autoplay = true;
		videoPlaying.play();
		videoPlaying.volume = 0;
		videoPlaying.muted = true;
		videoPlaying.onended = () => {
			updateVideoQueue(nextVideoIndex);
		};

		videoCaching.volume = 0;
		videoCaching.muted = true;
	};
</script>

<div class:video-sequencer={true} {...$$restProps}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoPlaying} />
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoCaching} />
</div>

<style lang="scss">
	.video-sequencer {
		position: relative;
		width: 100%;

		video {
			&:last-of-type {
				position: absolute !important;
				opacity: 0;
				z-index: -1000;
				pointer-events: none;
			}
		}
	}
</style>
