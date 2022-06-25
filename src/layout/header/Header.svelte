<script lang="ts">
	import { WrapperWide } from '$layout/wrapper';
	import { Navigation } from '$layout/navigation';

	import PeopleDaoLogo from '$assets/icons/brand/logo.svg';

	import { headerHeight } from '$stores/layout/layout';
	import { scrollToTop } from '$stores/layout/navigation';
</script>

<header bind:clientHeight={$headerHeight}>
	<WrapperWide>
		<div class="container">
			<a class="logo" href="/" on:click={scrollToTop}>
				<PeopleDaoLogo />
			</a>
			<Navigation />
		</div>
	</WrapperWide>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: $color-background--tertiary;
		@include spacing--micro(padding-top, padding-bottom);
		z-index: 1000;

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.logo {
				display: flex;
				z-index: 1001;

				:global(svg) {
					@include spacing--max(height);
					width: auto;
					fill: $color-text--tertiary;
				}
			}
		}
	}
</style>
