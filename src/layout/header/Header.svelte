<!-- <script lang="ts">
	import { WrapperWide } from '$layout/wrapper';
	import { Navigation } from '$layout/navigation';

	import PeopleDaoLogo from '$assets/icons/brand/logo.svg?raw';

	import { headerHeight } from '$stores/layout/layout';
	import { scrollToTop } from '$stores/layout/navigation';
</script>

<header bind:clientHeight={$headerHeight}>
	<WrapperWide>
		<div class="container">
			<a class="logo" href="/" on:click={scrollToTop}>
				{@html PeopleDaoLogo}
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
</style> -->
<script lang="ts">
	import { Wrapper } from '$layout/wrapper';

	import { Navigation } from '$layout/navigation';
	import { Button } from '$components/button';

	import PeopleDAOLogo from '$assets/icons/brand/logo.svg?raw';

	import { headerHeight } from '$stores/layout/layout';
	import { scrollToTop } from '$stores/layout/navigation';

	import { LINK_SOCIAL_DISCORD } from '$constants/links/socials';
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
			padding: 20px 0; // @TODO

			.logo {
				grid-area: logo;

				a {
					:global(svg) {
						fill: $color-white;
						height: 128px;
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
