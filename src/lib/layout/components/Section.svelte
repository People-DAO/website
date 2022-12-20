<script lang="ts">
	import { Wrapper } from '.';

	export let name: string | undefined = undefined;
	export let id: string | undefined = undefined;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<section
	{name}
	id={!id && !!name ? name : id}
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
