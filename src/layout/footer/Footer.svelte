<script lang="ts">
	import { Wrapper } from '$layout/wrapper';

	import { footerHeight } from '$stores/layout/layout';

	import PeopleDAOLogo from '$assets/icons/brand/logo.svg?raw';
	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';
	import TwitterIcon from '$assets/icons/socials/twitter.svg?raw';
	import MirrorIcon from '$assets/icons/socials/mirror.svg?raw';
	import DeworkIcon from '$assets/icons/socials/dework.svg?raw';
	import GithubIcon from '$assets/icons/socials/github.svg?raw';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import {
		LINK_SOCIAL_DISCORD,
		LINK_SOCIAL_TWITTER,
		LINK_SOCIAL_MIRROR,
		LINK_SOCIAL_DEWORK,
		LINK_SOCIAL_GITHUB
	} from '$constants/links/socials';
</script>

<footer bind:clientHeight={$footerHeight}>
	<Wrapper>
		<div class="container">
			<div class="navigation">
				<div class="category">
					<span>Category 1</span>
					<ul>
						<li>
							<a href="" target=""> Item 1 </a>
						</li>
						<li>
							<a href="" target=""> Item 2 </a>
						</li>
						<li>
							<a href="" target=""> Item 3 </a>
						</li>
						<li>
							<a href="" target=""> Item 4 </a>
						</li>
					</ul>
				</div>
				<div class="category">
					<span>Category 2</span>
					<ul>
						<li>
							<a href="" target=""> Item 1 </a>
						</li>
						<li>
							<a href="" target=""> Item 2 </a>
						</li>
						<li>
							<a href="" target=""> Item 3 </a>
						</li>
						<li>
							<a href="" target=""> Item 4 </a>
						</li>
					</ul>
				</div>
				<div class="category">
					<span>Category 3</span>
					<ul>
						<li>
							<a href="" target=""> Item 1 </a>
						</li>
						<li>
							<a href="" target=""> Item 2 </a>
						</li>
						<li>
							<a href="" target=""> Item 3 </a>
						</li>
						<li>
							<a href="" target=""> Item 4 </a>
						</li>
					</ul>
				</div>
			</div>
			<div class="brand">
				<div class="logo">
					{@html PeopleDAOLogo}
				</div>
				<div class="tagline">
					<span>Incubate public good<br />for the people</span>
				</div>
			</div>
			<div class="socials">
				<a name="discord" href={LINK_SOCIAL_DISCORD} target="_blank">
					{@html DiscordIcon}
				</a>
				<a name="twitter" href={`${LINK_SOCIAL_TWITTER}?ref=${PLATFORM_DOMAIN}`} target="_blank">
					{@html TwitterIcon}
				</a>
				<a name="mirror" href={`${LINK_SOCIAL_MIRROR}?ref=${PLATFORM_DOMAIN}`} target="_blank">
					{@html MirrorIcon}
				</a>
				<a name="dework" href={`${LINK_SOCIAL_DEWORK}?ref=${PLATFORM_DOMAIN}`} target="_blank">
					{@html DeworkIcon}
				</a>
				<a name="github" href={`${LINK_SOCIAL_GITHUB}?ref=${PLATFORM_DOMAIN}`} target="_blank">
					{@html GithubIcon}
				</a>
			</div>
		</div>
	</Wrapper>
</footer>

<style lang="scss">
	footer {
		.container {
			$breakpoint--mobile: $breakpoint--medium;

			display: grid;
			grid-template-columns: auto auto;
			grid-template-rows: auto auto;
			grid-template-areas:
				'navigation brand'
				'navigation socials';
			row-gap: 16px;
			@include fluid(padding-top, 48, 64);
			@include fluid(padding-bottom, 48, 64);

			@include breakpoint($breakpoint--mobile) {
				grid-template-rows: auto;
				grid-template-rows: auto auto auto;
				grid-template-areas:
					'brand'
					'navigation'
					'socials';
			}

			.navigation {
				grid-area: navigation;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;

				@include breakpoint($breakpoint--mobile) {
					grid-template-columns: auto;
					grid-template-rows: auto auto auto;
				}

				.category {
					span {
						display: flex;
						@include typography-family--secondary;
						@include fluid(font-size, 20, 24);
						line-height: 1.5;
						color: $color-navy--primary;
						@include fluid(margin-bottom, 6, 8);
					}

					ul {
						display: flex;
						flex-direction: column;

						li {
							@include fluid(margin-bottom, 12, 16);

							a {
								@include fluid(font-size, 16, 18);
								color: $color-black--primary;
								@include transition($transition--primary, opacity);

								&:hover {
									opacity: 0.6;
								}
							}

							&:last-of-type {
								margin-bottom: 0;
							}
						}
					}

					@include breakpoint($breakpoint--mobile) {
						@include fluid(margin-bottom, 14, 16);

						&:last-of-type {
							margin-bottom: 0;
						}
					}
				}
			}

			.brand {
				grid-area: brand;
				display: flex;
				flex-direction: column;
				align-items: flex-end;

				@include breakpoint($breakpoint--mobile) {
					align-items: flex-start;
				}

				.logo {
					:global(svg) {
						@include fluid(height, 96, 128);
						width: auto;
					}
				}

				.tagline {
					span {
						display: inline-flex;
						@include fluid(font-size, 20, 24);
						text-align: right;

						@include breakpoint($breakpoint--mobile) {
							text-align: left;
						}
					}
				}
			}

			.socials {
				grid-area: socials;
				display: flex;
				justify-content: flex-end;

				@include breakpoint($breakpoint--mobile) {
					justify-content: flex-start;
				}

				a {
					display: flex;
					padding: 4px;
					margin-right: 16px;
					@include transition($transition--primary, fill);

					:global(svg) {
						@include fluid(height, 22, 24);
						width: auto;
					}

					&:last-of-type {
						margin-right: 0;
					}

					&:hover {
						&[name='discord'] {
							fill: #7289da;
						}

						&[name='twitter'] {
							fill: #1da1f2;
						}

						&[name='mirror'] {
							fill: #007aff;
						}

						&[name='dework'] {
							fill: #b161c4;
						}

						&[name='github'] {
							fill: #24292e;
						}
					}
				}
			}
		}
	}
</style>
