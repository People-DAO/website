<script lang="ts">
	import PeopleDAOShapeLogo from '$assets/icons/brand/logo-shape.svg?raw';
	import PeopleDAOTextLogo from '$assets/icons/brand/logo-text.svg?raw';

	export let variant: 'shape' | 'text' | 'full' = 'full';

	let clientHeight = 1;

	const { class: a, style: b, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div bind:clientHeight class={$$restProps.class} {...restProps}>
	<div
		class="h-full flex items-center font-secondary"
		style={`
			font-size: ${clientHeight}px; 
			${$$restProps.style || ''}
		`}
	>
		<div class="logo h-full flex">
			{#if variant === 'text'}
				{@html PeopleDAOTextLogo}
			{:else}
				{@html PeopleDAOShapeLogo}
			{/if}
		</div>
		{#if variant === 'full'}
			<span class="relative top-[0.075em] ml-[0.3em] text-[1.05em]">PeopleDAO</span>
		{/if}
	</div>
</div>

<style lang="scss">
	.logo {
		:global(svg) {
			height: 100%;
			width: auto;
			fill: currentColor;
		}
	}
</style>
