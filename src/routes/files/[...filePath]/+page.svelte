<script lang="ts">
	import { browser } from '$app/environment';

	import { PageMeta } from '$util/meta';
	import { Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { Button } from '$lib/button/components';

	export let data;

	const FILES_BASE_URL = 'https://github.com/People-DAO/files/blob/main/';
	const filePath = data?.filePath;

	if (browser) {
		location.replace(`${FILES_BASE_URL}/${filePath}`);
	}
</script>

<PageMeta title="Files link" nofollow noindex />
<Section class="h-full">
	<div class="flex flex-col items-center text-center my-auto h-full">
		<FormattedContent>
			<h1>Files link</h1>
			<p>
				You'll be redirected to the target file shortly.
				<br />
				Alternatively, you can use the link below.
			</p>
		</FormattedContent>
		<div class="mt-8">
			<Button href="/">Go to the linked file</Button>
		</div>
	</div>
</Section>
