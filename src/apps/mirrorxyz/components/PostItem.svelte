<script lang="ts">
	import { Title, Text } from '$lib/typography/components';
	import { Button } from '$lib/button/components';

	import { dayjs } from '$util/dayjs';

	import { DOMAIN_MIRROXYZ_PEOPLEDAO } from '$apps/mirrorxyz/constants/domain.constants';

	import type { MirrorPost } from '../types/post.type';

	export let post: MirrorPost;

	const formattedTimestamp = dayjs(post.timestamp * 1000)
		.local()
		.format('MMMM Do, YYYY');
</script>

<div class="post">
	<div class="title">
		<Title tag="span" size="small">{post.title}</Title>
	</div>
	<div class="meta">
		<Text tag="span" size="small">{formattedTimestamp}</Text>
	</div>
	<div class="link">
		<Button href={`${DOMAIN_MIRROXYZ_PEOPLEDAO}/${post.id}`} target="_blank">
			Read on Mirror.xyz
		</Button>
	</div>
</div>

<style lang="scss">
	.post {
		display: grid;
		grid-template-areas:
			'meta link'
			'title link';
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr auto;
		@include spacing--small(column-gap);
		@include spacing--medium(padding-top, padding-bottom);
		border-bottom: 1px solid $color-navy--tertiary;

		&:last-of-type {
			border-bottom: 0;
		}

		.title {
			grid-area: title;

			:global(span) {
				color: $color-navy--primary;
			}
		}

		.meta {
			grid-area: meta;
		}

		.link {
			grid-area: link;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
