<script lang="ts">
	import { WrapperWide } from '$layout/wrapper';

	import PeopleDaoLogo from '$assets/icons/brand/logo.svg?raw';
	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';
	import TwitterIcon from '$assets/icons/socials/twitter.svg?raw';
	import MirrorIcon from '$assets/icons/socials/mirror.svg?raw';
	import GithubIcon from '$assets/icons/socials/github.svg?raw';
	import EtherscanIcon from '$assets/icons/socials/etherscan.svg?raw';
	import CoinMarketCapIcon from '$assets/icons/socials/coinmarketcap.svg?raw';

	import { SOCIAL_DISCORD, SOCIAL_TWITTER, SOCIAL_MIRROR, SOCIAL_GITHUB } from '$constants/socials';
	import { TOKEN_ETHERSCAN, TOKEN_COINMARKETCAP } from '$constants/tokens';

	import { footerHeight } from '$stores/layout/layout';
	import { scrollToTop } from '$stores/layout/navigation';
</script>

<footer bind:clientHeight={$footerHeight}>
	<WrapperWide>
		<div class="container">
			<a class="about" href="/" on:click={scrollToTop}>
				<div class="logo">
					{@html PeopleDaoLogo}
				</div>
				<div class="tagline">
					<h5>
						Incubate Public Good<br />
						<span>For The People</span>
					</h5>
				</div>
			</a>
			<div class="socials">
				<a name="discord" href={SOCIAL_DISCORD} target="_blank">
					{@html DiscordIcon}
				</a>
				<a name="twitter" href={SOCIAL_TWITTER} target="_blank">
					{@html TwitterIcon}
				</a>
				<a name="mirror" href={SOCIAL_MIRROR} target="_blank">
					{@html MirrorIcon}
				</a>
				<a name="mirror" href={SOCIAL_MIRROR} target="_blank">
					<MirrorIcon />
				</a>
				<a name="github" href={SOCIAL_GITHUB} target="_blank">
					{@html GithubIcon}
				</a>
				<a name="etherscan" href={TOKEN_ETHERSCAN} target="_blank">
					{@html EtherscanIcon}
				</a>
				<a name="coinmarketcap" href={TOKEN_COINMARKETCAP} target="_blank">
					{@html CoinMarketCapIcon}
				</a>
			</div>
		</div>
	</WrapperWide>
</footer>

<style lang="scss">
	footer {
		background: $color-background--tertiary;
		@include spacing--max(padding-top, padding-bottom);

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			@include breakpoint($breakpoint--sm) {
				flex-direction: column;
			}

			.about {
				display: flex;
				align-items: center;

				@include breakpoint($breakpoint--sm) {
					@include spacing--medium(margin-bottom);
				}

				.logo {
					:global(svg) {
						@include spacing--max(height);
						width: auto;
						fill: $color-text--tertiary;
					}
				}

				.tagline {
					@include spacing--small(margin-left);

					h5 {
						@include typography-family--secondary;
						@include typography-size--micro;
						font-weight: $font-weight--semi-bold;
						color: $color-text--tertiary;

						span {
							background: linear-gradient(to right, $color-brand--blue, $color-brand--purple);
							background-clip: text;
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
						}
					}
				}
			}

			.socials {
				a {
					display: inline-block;
					color: $color-text--tertiary;
					@include spacing--medium(margin-right);
					transition: color 0.125s ease-in;

					&:last-of-type {
						margin-right: 0;
					}

					:global(svg) {
						@include spacing--small(height);
						width: auto;
						fill: currentColor;
					}

					&:hover {
						&[name='discord'] {
							color: #7289da;
						}

						&[name='twitter'] {
							color: #1da1f2;
						}

						&[name='mirror'] {
							color: #007aff;
						}

						&[name='github'] {
							color: #24292e;
						}

						&[name='etherscan'] {
							color: #21325b;
						}

						&[name='coinmarketcap'] {
							color: #1c51ff;
						}
					}
				}
			}
		}
	}
</style>
