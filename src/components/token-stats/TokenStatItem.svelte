<script lang="ts">
	import { loading, error } from './store';

	import WarningIcon from '$assets/icons/general/warning.svg';

	export let label: string;
	export let value: string | unknown = null;
</script>

<li class="item">
	<span class="label">{label}</span>
	<span class="value">
		{#if $loading}
			<div class="icon-container">
				<span class="spinner" />
			</div>
		{:else if $error}
			<div class="icon-container">
				<WarningIcon />
			</div>
		{:else}
			${value || '-'}
		{/if}
	</span>
</li>

<style lang="scss">
	.item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		.label {
			@include typography-family--secondary;
			@include typography-size--base;
			font-weight: $font-weight--semi-bold;
			color: $color-text--secondary;
			@include fluid(margin-bottom, 2, 4);
		}

		.value {
			@include typography-family--secondary;
			@include typography-size--max;
			font-weight: $font-weight--semi-bold;
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
				border-color: $color-text--primary;
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
