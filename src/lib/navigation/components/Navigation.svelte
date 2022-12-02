<script lang="ts">
	import { browser } from '$app/environment';

	import NavigationItem from './NavigationItem.svelte';
	import { Button } from '$lib/button/components';

	import { LINK_SOCIAL_DISCORD } from '$lib/navigation/constants/socialLinks.constants';

	import {
		mobileNavigationOpen,
		toggleMobileNavigation,
		closeMobileNavigation
	} from '$lib/navigation/stores/navigation.store';

	let mobileButton: HTMLElement['offsetWidth'];

	$: if (browser) {
		document.body.classList.toggle('scroll-lock', $mobileNavigationOpen);
	}

	$: if (browser && !mobileButton) {
		document.body.classList.toggle('scroll-lock', false);
		closeMobileNavigation();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	bind:clientWidth={mobileButton}
	class="navigation-button"
	class:navigation-button--open={$mobileNavigationOpen}
	on:click={toggleMobileNavigation}
>
	<span />
</div>

<div class="navigation" class:navigation--active={$mobileNavigationOpen}>
	<nav>
		<NavigationItem scrollHrefId="mission">Mission</NavigationItem>
		<NavigationItem scrollHrefId="origin">Origin</NavigationItem>
		<NavigationItem scrollHrefId="token">Token</NavigationItem>
		<NavigationItem scrollHrefId="projects">Projects</NavigationItem>
		<NavigationItem scrollHrefId="frequently-asked-questions">FAQ</NavigationItem>
		<Button variant="gold/navy" href={LINK_SOCIAL_DISCORD} target="_blank" class="button--discord">
			Join Discord
		</Button>
	</nav>
</div>

<style lang="scss">
	:global(.scroll-lock) {
		height: 100vh;
		overflow-y: hidden;
	}

	$navigation-breakpoint--mobile: $breakpoint--medium;

	.navigation-button {
		width: 0;
		height: 0;

		@include breakpoint($navigation-breakpoint--mobile) {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			$navigation-button-gap: 10px;
			$navigation-button-line: 2px;
			height: $navigation-button-line * 3 + $navigation-button-gap * 2;
			padding: 10px;
			cursor: pointer;
			z-index: 1001;
			display: flex;
			width: auto;

			:global(span) {
				position: relative;

				&,
				&::before,
				&::after {
					display: block;
					width: 3rem;
					height: $navigation-button-line;
					background: $color-background--secondary;
					@include transition($transition--primary, top, transform, background);
				}

				&::before,
				&::after {
					content: '';
					position: absolute;
				}

				&::before {
					top: $navigation-button-gap;
				}

				&::after {
					top: $navigation-button-gap * -1;
				}
			}

			&.navigation-button--open {
				:global(span) {
					background: transparent;

					&::before {
						top: 0;
						transform: rotate(45deg);
						opacity: 1;
					}

					&::after {
						top: 0;
						transform: rotate(-45deg);
						opacity: 1;
					}
				}
			}
		}
	}

	.navigation {
		display: flex;

		@include breakpoint($navigation-breakpoint--mobile) {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			pointer-events: none;
			visibility: hidden;
			transition: visibility 0.5s linear;
		}

		nav {
			display: flex;
			align-items: center;

			@include breakpoint($navigation-breakpoint--mobile) {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				opacity: 0;
				@include fluid(padding-top, 42, 64);
				@include fluid(padding-bottom, 42, 64);
				@include fluid(padding-left, 20, 120);
				@include fluid(padding-right, 20, 120);
				@include transition($transition--primary, opacity, background);
			}
		}

		&.navigation--active {
			@include breakpoint($navigation-breakpoint--mobile) {
				visibility: visible;
				pointer-events: all;

				nav {
					opacity: 1;
					background: $color-navy--primary;
				}
			}
		}
	}
</style>
