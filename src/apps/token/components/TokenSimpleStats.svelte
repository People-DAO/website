<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';

	import { fetchData } from '$util/svelte-query/fetchData';
	import { tokenData, isLoading, isError } from '../stores/simpleStats.store';

	export const _ = undefined;
	const { class: a, ...rest } = $$restProps;
	const restProps = rest;

	$: simpleStatsQuery = useQuery('TOKEN_SIMPLE_STATS', () =>
		fetchData({ url: '/api/token/coingecko' })
	);

	$: if ($simpleStatsQuery?.data) {
		$tokenData = $simpleStatsQuery.data;
		$isLoading = false;
	}

	$: if (!$simpleStatsQuery?.isLoading && $simpleStatsQuery.isError) {
		$isLoading = false;
		$isError = true;
	}
</script>

<ul
	class="
		grid auto-cols-fr grid-flow-row gap-6 md:grid-flow-col
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<slot />
</ul>
