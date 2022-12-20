<script lang="ts">
	import { page } from '$app/stores';

	import { PageMeta } from '$util/meta';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { Button } from '$lib/button/components';
</script>

<PageMeta title={$page.status === 404 ? 'Not found' : 'Error'} nofollow noindex />
<Section class="h-full">
	<div class="flex flex-col items-center text-center my-auto h-full">
		{#if $page.status === 404}
			<FormattedContent>
				<h1>Page not found</h1>
				<p>
					We were unable to find the requested page, sorry for the inconvenience.
					<br />
					The link may be misspelled or the page you're looking for is no longer available.
				</p>
			</FormattedContent>
			<div class="mt-8">
				<Button href="/">Go to homepage</Button>
			</div>
		{:else}
			<FormattedContent>
				<h1>Something went wrong</h1>
				<p>We were unable to complete your request, sorry for the inconvenience.</p>
				{#if import.meta.env.DEV}
					<pre class="text-left">{JSON.stringify($page, null, 2)}</pre>
				{/if}
			</FormattedContent>
			<div class="mt-8">
				<Button href="/">Go to homepage</Button>
			</div>
		{/if}
	</div>
</Section>
