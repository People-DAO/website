<script lang="ts">
	import { browser } from '$app/environment';

	export let data;

	const FILES_BASE_URL = 'https://raw.githubusercontent.com/people-DAO/files/main';

	const filePath = data?.params?.file_path;

	if (browser) {
		if (!filePath) {
			location.replace('/not-found');
		} else {
			location.replace(`${FILES_BASE_URL}/${filePath}`);
		}
	}
</script>
