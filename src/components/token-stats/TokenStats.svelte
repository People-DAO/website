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

			@include breakpoint($breakpoint--md) {
				grid-template-columns: 1fr;
				@include spacing--base(row-gap);
			}
		}
	}
</style>
