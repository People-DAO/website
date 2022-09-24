<script lang="ts">
	import { page } from '$app/stores';

	import { PageMeta } from '$util/meta';
	import { Section } from '$layout/section';
	import { Text } from '$components/typography';
	import { Button } from '$components/button';
</script>

<PageMeta nofollow noindex title={$page.status === 404 ? 'Not found' : 'Error'} />
<Section class="error-page">
	<div class="title">
		<h1>
			{$page.status === 404 ? 'Page not found' : 'An error has occured'}
		</h1>
	</div>
	<Text size="medium" class="description">
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
		:global(.title) {
			:global(h1) {
				@include typography-family--secondary;
				@include typography-size--max;
				font-weight: $font-weight--bold;
				letter-spacing: 1px;
				text-align: center;
				background: linear-gradient(to right, $color-brand--blue, $color-brand--purple);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			@include spacing--large(margin-bottom);
		}

		:global(.description) {
			text-align: center;
		}

		:global(.actions) {
			display: flex;
			justify-content: center;
		}

		:global(.detail) {
			display: flex;
			flex-direction: column;

			:global(pre) {
				background: $color-background--secondary;
				border: 1px solid red;
				@include spacing--max(margin-top);

				:global(code) {
					white-space: pre-wrap;
				}
			}
		}
	}
</style>
