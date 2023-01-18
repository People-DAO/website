<script lang="ts">
	import { onMount } from 'svelte';

	let contentRef: HTMLElement;
	let itemsCount = 0;

	const countItems = () => {
		itemsCount = contentRef?.children?.length;
	};

	let currentItemIndex = 0;

	const rotateItems = () => {
		countItems();

		if (itemsCount > 0) {
			if (currentItemIndex >= itemsCount - 1) {
				currentItemIndex = 0;
			} else {
				currentItemIndex += 1;
			}

			contentRef.style.transform = `translateY(${currentItemIndex * -44}px)`;
		}

		setTimeout(() => {
			rotateItems();
		}, 3000);
	};

	onMount(() => {
		rotateItems();
	});
</script>

<div
	class:announcements-banner={true}
	class={`
		${itemsCount ? 'h-11' : 'h-0'}
		w-full flex justify-center bg-gold-primary overflow-hidden
	`}
>
	<div bind:this={contentRef} class="max-w-7xl grow transition-transform duration-500">
		<slot />
	</div>
</div>
