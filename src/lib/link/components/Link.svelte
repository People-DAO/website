<script lang="ts">
	import { PLATFORM_DOMAIN } from '$util/platform';

	export let href: string;
	export let target: '_blank' | undefined = undefined;
	export let removeRef = false;
</script>

<a href={target && !removeRef ? `${href}?ref=${PLATFORM_DOMAIN}` : href} {target} {...$$restProps}>
	<slot />
</a>
