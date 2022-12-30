<script lang="ts">
	import { viewport } from '../stores/viewport.store';

	let innerWidth: number;

	$: switch (true) {
		case innerWidth >= 1536:
			$viewport = '2xl';
			break;
		case innerWidth >= 1280:
			$viewport = 'xl';
			break;
		case innerWidth >= 1024:
			$viewport = 'lg';
			break;
		case innerWidth >= 768:
			$viewport = 'md';
			break;
		default:
			$viewport = 'sm';
	}
</script>

<svelte:window bind:innerWidth />
