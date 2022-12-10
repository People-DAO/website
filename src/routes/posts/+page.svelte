<script lang="ts">
	import { useInfiniteQuery } from '@sveltestack/svelte-query';

	import { PageMeta } from '$util/meta';
	import { Section } from '$lib/section/components';
	import { Title, Text } from '$lib/typography/components';
	import { Button } from '$lib/button/components';
	import { PostItem, PostsListLoader } from '$apps/mirrorxyz/components';

	import { getPosts } from '$apps/mirrorxyz/services/getPosts';

	let postIds: string[];

	const postsQuery = useInfiniteQuery(
		'mirrroxyz-posts',
		({ pageParam = undefined }) =>
			getPosts({
				after: pageParam,
				ignoredIds: postIds?.length ? postIds : undefined
			}),
		{
			getNextPageParam: (lastBatch) => {
				return lastBatch?.meta?.hasNextPage
					? lastBatch.items?.[lastBatch.items.length - 1].cursor
					: undefined;
			}
		}
	);

	$: if ($postsQuery?.data?.pages) {
		const itemIds = [];

		for (const page of $postsQuery?.data?.pages) {
			for (const post of page?.items) {
				itemIds.push(post.id);
			}
		}

		if (itemIds.length) {
			postIds = itemIds;
		}
	}

	// @TODO: No results
	// @TODO: Error
</script>

<PageMeta title="Posts" />
<Section id="posts" class="posts">
	<div class="container">
		<div class="header">
			<Title tag="h1">Posts</Title>
			<Text>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis erat eu congue
				fermentum. Nam felis est, blandit vel quam aliquet, dapibus condimentum nibh.
			</Text>
		</div>
		<div class="list">
			{#if $postsQuery.isLoading}
				<PostsListLoader />
			{:else if $postsQuery.isError}
				<p>@TODO: Error</p>
			{:else}
				{#each $postsQuery.data.pages as page}
					{#each page.items as item}
						<PostItem post={item} />
					{/each}
				{/each}
			{/if}
		</div>
		<div class="footer">
			{#if $postsQuery.isFetching && !$postsQuery.isLoading}
				<PostsListLoader />
			{:else if $postsQuery.hasNextPage}
				<Button variant="navy/white" onClick={() => $postsQuery.fetchNextPage()}>Load more</Button>
			{/if}
		</div>
	</div>
</Section>

<style lang="scss">
	.posts {
		.container {
			.header {
				@include spacing--medium(margin-bottom);
			}

			.list {
				display: flex;
				flex-direction: column;
			}

			.footer {
				display: flex;
				justify-content: center;
				@include spacing--medium(margin-top);
			}
		}
	}
</style>
