<script lang="ts">
	import { Title, Text } from '$components/typography';

	import { loading, error } from './store';

	import WarningIcon from '$assets/icons/general/warning.svg?raw';

	export let label: string;
	export let value: string | unknown = null;
</script>

<li class="item">
	<Text tag="span" size="small">{label}</Text>
	<!-- <span class="label">{label}</span> -->
	<Title tag="span" size="medium">
		<!-- @DEBUG -->
		<!-- {#if $loading}
			<div class="icon-container">
				<span class="spinner" />
			</div>
		{:else if $error}
			<div class="icon-container">
				{@html WarningIcon}
			</div>
		{:else}
			${value || '-'}
		{/if} -->
		$123.45K
	</Title>
</li>

<style lang="scss">
	.item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		:global(.typography-text) {
			line-height: 1;
			color: $color-white;
			margin-bottom: 8px !important; // @TODO
		}

		:global(.typography-title) {
			@include typography-family--primary;
			color: $color-white !important;
			cursor: default;
		}

		.icon-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			@include fluid(height, calc(42 * 1.2), calc(60 * 1.2));
			@include fluid(--token-stats-icon-size, 20, 24);

			.spinner {
				border-width: calc(var(--token-stats-icon-size) / 5 * 0.75);
				border-style: solid;
				border-color: $color-white;
				border-top-color: transparent;
				border-radius: 50%;
				width: var(--token-stats-icon-size);
				height: var(--token-stats-icon-size);
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

			:global(svg) {
				width: calc(var(--token-stats-icon-size) * 1.33);
				height: calc(var(--token-stats-icon-size) * 1.33);
				color: red;
			}
		}
	}
</style>
