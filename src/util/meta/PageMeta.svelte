<script lang="ts">
	import {
		META_TITLE,
		META_DESCRIPTION,
		META_KEYWORDS,
		META_OG_IMAGE_WIDTH,
		META_OG_IMAGE_HEIGHT,
		META_OG_IMAGE_URL,
		META_OG_URL,
		META_THEME_COLOR,
		META_APPLE_COLOR,
		META_MICROSOFT_COLOR,
		META_VERSION
	} from '$constants/meta';
	import type { OpenGraph, Twitter } from './PageMeta.types';

	export let title = '';
	export let description: string = META_DESCRIPTION;
	export let keywords: string[] = META_KEYWORDS;

	export let canonical: string = null;
	export let openGraph: OpenGraph = undefined;
	export let twitter: Twitter = undefined;

	export let noindex = false;
	export let nofollow = false;

	const _title = title ? `${title} - ${META_TITLE}` : META_TITLE;
</script>

<svelte:head>
	<meta
		name="robots"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>
	<meta
		name="googlebot"
		content={`${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`}
	/>

	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={`/meta/apple-touch-icon.png?v=${META_VERSION}`}
	/>
	<link rel="icon" type="image/svg+xml" href={`/meta/favicon.svg?v=${META_VERSION}`} />
	<link rel="icon" type="image/png" href={`/meta/favicon.png?v=${META_VERSION}`} />
	<link rel="manifest" href={`/meta/site.webmanifest?v=${META_VERSION}`} />
	<link
		rel="mask-icon"
		href={`/meta/safari-pinned-tab.svg?v=${META_VERSION}`}
		color={META_APPLE_COLOR}
	/>
	<meta name="msapplication-TileColor" content={META_MICROSOFT_COLOR} />
	<meta name="theme-color" content={META_THEME_COLOR} />

	<title>{_title}</title>
	<meta property="og:title" content={openGraph?.title || _title} />
	<meta name="twitter:title" content={twitter?.title || _title} />

	<meta name="description" content={description} />
	<meta property="og:description" content={openGraph?.description || description} />
	<meta name="twitter:description" content={twitter?.description || description} />

	{#if keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	{#if canonical}
		<link rel="canonical" href={canonical} />
	{/if}

	{#if !openGraph}
		<meta property="og:url" content={META_OG_URL} />
		<meta property="og:image" content={META_OG_IMAGE_URL} />
		<meta property="og:image:width" content={META_OG_IMAGE_WIDTH.toString()} />
		<meta property="og:image:height" content={META_OG_IMAGE_HEIGHT.toString()} />
	{/if}

	{#if openGraph}
		{#if openGraph.type}
			<meta property="og:type" content={openGraph.type.toLowerCase()} />
		{/if}
		{#if openGraph.article}
			{#if openGraph.article.publishedTime}
				<meta property="article:published_time" content={openGraph.article.publishedTime} />
			{/if}
			{#if openGraph.article.modifiedTime}
				<meta property="article:modified_time" content={openGraph.article.modifiedTime} />
			{/if}
			{#if openGraph.article.expirationTime}
				<meta property="article:expiration_time" content={openGraph.article.expirationTime} />
			{/if}
			{#if openGraph.article.section}
				<meta property="article:section" content={openGraph.article.section} />
			{/if}
			{#if openGraph.article.authors}
				{#each openGraph.article.authors as author}
					<meta property="article:author" content={author} />
				{/each}
			{/if}
			{#if openGraph.article.tags}
				{#each openGraph.article.tags as tag}
					<meta property="article:tag" content={tag} />
				{/each}
			{/if}
			{#if openGraph.images && openGraph.images.length}
				{#each openGraph.images as image}
					<meta property="og:image" content={image.url} />
					{#if image.alt}
						<meta property="og:image:alt" content={image.alt} />
					{/if}
					{#if image.width}
						<meta property="og:image:width" content={image.width.toString()} />
					{/if}
					{#if image.height}
						<meta property="og:image:height" content={image.height.toString()} />
					{/if}
				{/each}
			{/if}
		{/if}
	{/if}

	{#if twitter}
		{#if twitter.card}
			<meta name="twitter:card" content={twitter.card || 'summary_large_image'} />
		{/if}
		{#if twitter.site}
			<meta name="twitter:site" content={twitter.site} />
		{/if}
		{#if twitter.image}
			<meta name="twitter:image" content={twitter.image} />
		{/if}
		{#if twitter.imageAlt}
			<meta name="twitter:image:alt" content={twitter.imageAlt} />
		{/if}
		{#if twitter.player}
			<meta name="twitter:player" content={twitter.player} />
		{/if}
		{#if twitter.playerWidth}
			<meta name="twitter:player:width" content={twitter.playerWidth.toString()} />
		{/if}
		{#if twitter.playerHeight}
			<meta name="twitter:player:height" content={twitter.playerHeight.toString()} />
		{/if}
	{/if}

	<slot />
</svelte:head>
