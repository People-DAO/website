<div class="posts-list-loader">
	<span class="spinner" />
	<p>Fetching data from Arweave blockchain...</p>
</div>

<style lang="scss">
	.posts-list-loader {
		display: flex;
		justify-content: center;
		align-items: center;
		@include spacing--large(padding-top, padding-bottom);

		.spinner {
			@include spacing--medium(--posts-list-loader-size);
			border-width: calc(var(--posts-list-loader-size) / 5 * 0.75);
			border-style: solid;
			border-color: $color-navy--secondary;
			border-top-color: transparent;
			border-radius: 50%;
			width: var(--posts-list-loader-size);
			height: var(--posts-list-loader-size);
			animation: spin 1s linear infinite;

			@keyframes spin {
				0% {
					transform: rotate(0deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
		}

		p {
			@include spacing--small(margin-left);
			@include typography-size--base;
		}
	}
</style>
