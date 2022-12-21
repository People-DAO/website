<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';

	import { Wrapper } from '.';

	export let name: string | undefined = undefined;
	export let id: string | undefined = undefined;

	const idTag = !id && !!name ? name : id;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<section
	{name}
	id={idTag}
	use:scrollRef={`#${idTag}` || String(Math.random())}
	class="
		w-full flex flex-col justify-center items-center py-20
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<Wrapper>
		<slot />
	</Wrapper>
</section>
