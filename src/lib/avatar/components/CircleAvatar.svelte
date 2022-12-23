<script lang="ts">
	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;

	export let borderColor: string = '#dfc383';

	const { class: a, style: b, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class:circle-avatar={true}
	class="flex bg-bronze-tertiary border-2 rounded-full overflow-hidden {$$restProps.class || ''}"
	style={`border-color: ${borderColor}; ${$$restProps.style || ''}`}
	{...restProps}
>
	{#if href}
		<a {href} {target}>
			<slot />
		</a>
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
	.circle-avatar {
		aspect-ratio: 1/1;

		:global(svg),
		:global(img) {
			display: block;
			height: 100%;
			width: auto;
			object-fit: cover;
		}
	}
</style>
