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
	<!-- @TODO: Wrapper? -->
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
			display: grid;
			grid-template-columns: 1fr auto;
			grid-template-rows: auto auto;
			grid-template-areas:
				'navigation brand'
				'navigation socials';
			padding: 64px 0; // @TODO

			.navigation {
				grid-area: navigation;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;

				.category {
					span {
						@include typography-family--secondary;
						font-size: 24px; // @TODO
						line-height: 1.5;
						color: $color-navy--primary;
						margin-bottom: 8px; // @TODO
					}

					ul {
						display: flex;
						flex-direction: column;

						li {
							margin-bottom: 16px; // @TODO

							a {
								font-size: 18px; // @TODO
								color: $color-black--primary;
							}

							&:last-of-type {
								margin-bottom: 0;
							}
						}
					}
				}
			}

			.brand {
				grid-area: brand;
				display: flex;
				flex-direction: column;
				align-items: flex-end;

				.logo {
					:global(svg) {
						height: 128px;
						width: auto;
					}
				}

				.tagline {
					span {
						display: inline-flex;
						font-size: 24px;
						text-align: right;
					}
				}
			}

			.socials {
				grid-area: socials;
				display: flex;
				justify-content: flex-end;
				margin-top: 18px; // @TODO

				a {
					display: flex;
					padding: 4px; // @TODO
					margin-right: 16px; // @TODO

					:global(svg) {
						height: 24px;
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
