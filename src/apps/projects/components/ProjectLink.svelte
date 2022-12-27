<script lang="ts">
	import { PLATFORM_DOMAIN } from '$util/platform';

	export let href: string;
	export let target: '_blank' | undefined = undefined;
	export let removeRef = false;

	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<a
	class:project-link={true}
	class="flex items-center text-lg transition-colors duration-150 hover:text-bronze-primary hover:fill-bronze-primary {$$restProps.class ||
		''}"
	href={target && !removeRef ? `${href}?ref=${PLATFORM_DOMAIN}` : href}
	{target}
	{...restProps}
>
	<div class:icon={true} class="mr-2">
		<slot name="icon" />
	</div>
	<slot />
</a>

<style lang="scss">
	.project-link {
		.icon {
			:global(svg) {
				height: 1.25rem;
				width: auto;
			}
		}
	}
</style>
