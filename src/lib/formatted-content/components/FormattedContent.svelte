<script lang="ts">
	export const _ = undefined;
	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class="
		formatted-content formatted-content-xl max-w-none
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<slot />
</div>
