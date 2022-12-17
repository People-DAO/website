<script lang="ts">
	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class="
		max-w-7xl px-4 sm:px-6 mx-auto
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<slot />
</div>
