<script lang="ts">
	import { onMount } from 'svelte';

	import TokenStatItem from './TokenStatItem.svelte';

	import { tokenData, getTokenData } from './store';

	onMount(async () => getTokenData());
</script>

<div class="token-stats">
	<ul class="stats">
		<TokenStatItem label="Price" value={$tokenData['price']} />
		<TokenStatItem label="Market cap" value={$tokenData['marketCap']} />
		<TokenStatItem label="24h volume" value={$tokenData['volume24h']} />
	</ul>
</div>

<style lang="scss">
	.token-stats {
		@include spacing--max(margin-top);

		.stats {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			@include spacing--large(margin-bottom);

			@include breakpoint($breakpoint--md) {
				grid-template-columns: 1fr;
				@include spacing--base(row-gap);
			}

			li {
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
			}
		}
	}
</style>
