<script lang="ts">
	import { Wrapper } from '$lib/wrapper/components';
	import { Navigation } from '$lib/navigation/components';

	import { AnnouncementBanner } from '$apps/announcements/components';

	import PeopleDAOLogo from '$assets/icons/brand/logo.svg?raw';
	import ScrollIcon from '$assets/icons/emoji/scroll.svg?raw';

	import { scrollToTop } from '$lib/navigation/stores/navigation.store';

	import { PLATFORM_DOMAIN } from '$util/platform';

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
			({@html ScrollIcon}, {@html ScrollIcon}) We&nbsp;are&nbsp;gonna&nbsp;buy the&nbsp;Constitution
			- join us at
			<a
				href={`https://constitutiondao2.com//?ref=${PLATFORM_DOMAIN}`}
				target="_blank"
				rel="noreferrer"
			>
				ConstitutionDAO2
			</a>! ({@html ScrollIcon},
			{@html ScrollIcon})
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

		:global(.announcement-banner) {
			text-transform: capitalize;

			:global(svg) {
				position: relative;
				@include fluid(top, 2, 4);
				display: inline-block;
				@include fluid(height, 20, 24);
			}
		}
	}
</style>
