<script context="module">
	import { FILES_BASE_URL } from '$constants/files';

	export async function load({ params }) {
		if (!params.file_path) {
			return {
				status: 308,
				redirect: '/not-found'
			};
		}

		return {
			status: 302,
			redirect: `${FILES_BASE_URL}/${params.file_path}`
		};
	}
</script>
