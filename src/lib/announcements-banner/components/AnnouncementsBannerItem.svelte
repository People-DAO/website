<script lang="ts">
	import { FormattedContent } from '$lib/formatted-content/components';

	export let href: string;
	export let target: '_blank' | undefined = undefined;
</script>

<a
	class="h-11 w-full max-w-[96vw] flex justify-center items-center p-2 overflow-hidden"
	{href}
	{target}
>
	<FormattedContent class="!formatted-content-sm md:!formatted-content-base truncate">
		<slot />
	</FormattedContent>
</a>
