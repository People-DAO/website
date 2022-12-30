<script lang="ts">
	import { CloudErrorIcon } from '@indaco/svelte-iconoir';

	import { formatPrice } from '../helpers/formatPrice';

	export let isLoading = true;
	export let label: string;
	export let value: string | number | null | undefined = null;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<li
	class:token-simple-stat-item={true}
	class="
		grid grid-rows-[auto_1fr] gap-y-1
		{$$restProps.class || ''} 
	"
	{...restProps}
>
	<div class="font-medium">
		{label}
	</div>
	<div class:value={true} class="text-4xl my-auto">
		{#if isLoading}
			<span class:spinner={true} />
		{:else if value}
			{'$'}{formatPrice(Number(value))}
		{:else}
			<CloudErrorIcon class="text-2xl" />
		{/if}
	</div>
</li>

<style lang="scss">
	.token-simple-stat-item {
		.value {
			color: $color-bronze--primary;

			.spinner {
				display: flex;
				$spinner-icon-size: 32px;
				width: $spinner-icon-size;
				height: $spinner-icon-size;
				border-width: calc($spinner-icon-size / 5 * 0.4);
				border-style: solid;
				border-color: $color-bronze--primary;
				border-top-color: transparent;
				border-radius: 50%;
				animation: spin 1s linear infinite;

				@keyframes spin {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			}
		}
	}
</style>
