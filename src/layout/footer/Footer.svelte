<script lang="ts">
	import { WrapperWide } from '$layout/wrapper';

	import PeopleDaoLogo from '$assets/icons/daos/people-dao.svg';
	import DiscordIcon from '$assets/icons/socials/discord.svg';
	import TwitterIcon from '$assets/icons/socials/twitter.svg';
	import GithubIcon from '$assets/icons/socials/github.svg';
	import EtherscanIcon from '$assets/icons/socials/etherscan.svg';
	import CoinMarketCapIcon from '$assets/icons/socials/coinmarketcap.svg';
</script>

<footer>
	<WrapperWide>
		<div class="container">
			<a class="about" href="/">
				<div class="logo">
					<PeopleDaoLogo />
				</div>
				<div class="tagline">
					<h5>
						A meta-DAO uniting $PEOPLE and<br />
						<span>supporting mission-driven projects</span>
					</h5>
				</div>
			</a>
			<div class="socials">
				<a name="discord" href="https://discord.gg/peopledao" target="_blank">
					<DiscordIcon />
				</a>
				<a name="twitter" href="https://twitter.com/The_PeopleDAO" target="_blank">
					<TwitterIcon />
				</a>
				<a name="github" href="https://github.com/People-DAO" target="_blank">
					<GithubIcon />
				</a>
				<a
					name="etherscan"
					href="https://etherscan.io/token/0x7a58c0be72be218b41c608b7fe7c5bb630736c71"
					target="_blank"
				>
					<EtherscanIcon />
				</a>
				<a
					name="coinmarketcap"
					href="https://coinmarketcap.com/currencies/constitutiondao/"
					target="_blank"
				>
					<CoinMarketCapIcon />
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
					@include spacing--base(margin-bottom);
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
