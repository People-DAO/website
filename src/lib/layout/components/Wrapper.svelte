<script lang="ts">
	export const _ = undefined;
	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class="
		max-w-7xl w-full px-4 sm:px-6 mx-auto
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<slot />
</div>
