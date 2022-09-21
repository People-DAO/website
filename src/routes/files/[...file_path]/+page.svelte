<script lang="ts">
	import { browser } from '$app/environment';

	import { FILES_BASE_URL } from '$constants/files';

	export let data;

	const filePath = data?.params?.file_path;

	if (browser) {
		if (!filePath) {
			location.replace('/not-found');
		} else {
			location.replace(`${FILES_BASE_URL}/${filePath}`);
		}
	}
</script>
