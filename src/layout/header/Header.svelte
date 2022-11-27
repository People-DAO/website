<script lang="ts">
	import { Wrapper } from '$layout/wrapper';
	import { Navigation } from '$layout/navigation';

	import { AnnouncementBanner } from '$components/announcement-banner';

	import PeopleDAOLogo from '$assets/icons/brand/logo.svg?raw';

	import { scrollToTop } from '$stores/layout/navigation';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
<header class:--compact={scrollY >= 100}>
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
	<AnnouncementBanner>
		<span>
			We&nbsp;are&nbsp;going to&nbsp;buy the&nbsp;Constitution - get&nbsp;involved by joining
			the&nbsp;dedicated
			<a href="https://discord.gg/btfc" target="_blank">Discord&nbsp;server</a>!
		</span>
	</AnnouncementBanner>
</header>

<style lang="scss">
	header {
		$header-breakpoint--mobile: $breakpoint--medium;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: $color-navy--primary;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
						@include transition($transition--primary, height);
					}
				}
			}

			.navigation {
				grid-area: navigation;
				display: flex;
				justify-content: flex-end;
				align-items: center;
			}
		}

		&.--compact {
			.container {
				@include fluid(padding-top, 8, 12);
				@include fluid(padding-bottom, 8, 12);

				.logo {
					a {
						:global(svg) {
							@include fluid(height, 32, 96);

							@include breakpoint($header-breakpoint--mobile) {
								@include fluid(height, 48, 128);
							}
						}
					}
				}
			}
		}
	}
</style>
