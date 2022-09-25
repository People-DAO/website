<script lang="ts">
	import { Wrapper } from '$layout/wrapper';

	import { Navigation } from '$layout/navigation';

	import PeopleDAOLogo from '$assets/icons/brand/logo.svg?raw';

	import { headerHeight } from '$stores/layout/layout';
	import { scrollToTop } from '$stores/layout/navigation';
</script>

<header bind:clientHeight={$headerHeight}>
	<Wrapper>
		<div class="container">
			<div class="logo">
				<a href="/" on:click={scrollToTop}>
					{@html PeopleDAOLogo}
				</a>
			</div>
			<div class="navigation">
				<Navigation />
			</div>
		</div>
	</Wrapper>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: $color-navy--primary;
		z-index: 1000;

		.container {
			display: grid;
			grid-template-columns: auto 1fr;
			grid-template-areas: 'logo navigation';
			@include fluid(padding-top, 16, 20);
			@include fluid(padding-bottom, 16, 20);

			.logo {
				position: relative;
				grid-area: logo;
				z-index: 1001;

				a {
					:global(svg) {
						fill: $color-white;
						@include fluid(height, 64, 128);
						width: auto;
					}
				}
			}

			.navigation {
				grid-area: navigation;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}

			.actions {
				grid-area: actions;
				display: flex;
				align-items: center;
			}
		}
	}
</style>
