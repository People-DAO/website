<script lang="ts">
	import { page } from '$app/stores';

	import { PageMeta } from '$util/meta';
	import { Section } from '$lib/section/components';
	import { Title, Text } from '$lib/typography/components';
	import { Button } from '$lib/button/components';
</script>

<PageMeta nofollow noindex title={$page.status === 404 ? 'Not found' : 'Error'} />
<Section class="error-page">
	<Title tag="h1">
		{$page.status === 404 ? 'Page not found' : 'An error has occured'}
	</Title>
	<Text size="medium">
		{$page.status === 404
			? "The link may be misspelled or the page you're looking for is no longer available."
			: 'There was an error processing your request. Sorry for the inconvenience.'}
	</Text>
	<div class="actions">
		<Button href="/">Go to homepage</Button>
	</div>
	{#if import.meta.env.DEV}
		<div class="detail">
			<pre>
				<code>
					{JSON.stringify($page.error, null, 2)}
				</code>
			</pre>
		</div>
	{/if}
</Section>

<style lang="scss">
	:global(.error-page) {
		:global(.typography-title) {
			@include typography-family--secondary;
			color: $color-navy--primary;
			text-align: center;
		}

		:global(.typography-text) {
			text-align: center;
		}

		.actions {
			display: flex;
			justify-content: center;
			@include fluid(margin-top, 32, 42);
		}

		.detail {
			display: flex;
			flex-direction: column;

			:global(pre) {
				background: $color-white;
				border: 1px solid red;
				@include fluid(margin-top, 42, 64);

				:global(code) {
					white-space: pre-wrap;
				}
			}
		}
	}
</style>
