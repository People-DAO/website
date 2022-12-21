<script lang="ts">
	export const _ = undefined;
	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<ul
	class="
		max-w-4xl flex flex-col mx-auto
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<slot />
</ul>
