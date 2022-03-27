<script lang="ts">
	import { onMount } from 'svelte';

	import getTokenData from '$services/getTokenData';
	import formatPrice from '$helpers/formatPrice';

	let price;
	let marketCap;
	let volume24h;

	onMount(async () => {
		const tokenData = await getTokenData();

		price = formatPrice(tokenData.price);
		marketCap = formatPrice(tokenData.marketCap);
		volume24h = formatPrice(tokenData.volume24h);
	});
</script>

<div class="token-stats">
	<ul class="stats">
		<li class="item">
			<span class="label">Price</span>
			<span class="value">${price || '-'}</span>
		</li>
		<li class="item">
			<span class="label">Market cap</span>
			<span class="value">${marketCap || '-'}</span>
		</li>
		<li class="item">
			<span class="label">24h volume</span>
			<span class="value">${volume24h || '-'}</span>
		</li>
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
