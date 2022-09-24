<script lang="ts">
	import { Section } from '$layout/section';
	import { Title, Text } from '$components/typography';
	import { TokenStats } from '$components/token-stats';
	import { Button } from '$components/button';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import {
		LINK_TOKEN_ETHERSCAN,
		LINK_TOKEN_OKEX,
		LINK_TOKEN_UNISWAP
	} from '$constants/links/tokens';
</script>

<Section id="token">
	<div class="container">
		<div class="content">
			<Title tag="h2">Token</Title>
			<Text>
				We use the $PEOPLE token for voting in DAO decision-making. The token has a capped supply
				and will be slightly deflationary so long as holders continue to redeem the token on
				Juicebox, in return for the underlying ETH. The original conversion rate of 1 ETH per 1M
				$PEOPLE thus acts like a floor price. PeopleDAO and its subDAOs are committed to building an
				ecosystem around this token. In practice this has looked like offering a free NFT to token
				holders, or airdropping $PANDA token to wallets holding the token.
			</Text>
			<TokenStats />
		</div>
		<div class="media">
			<img src="/assets/images/index_token.png" alt="" />
		</div>
		<div class="actions">
			<Button
				variant="white/navy"
				href={`${LINK_TOKEN_ETHERSCAN}?ref=${PLATFORM_DOMAIN}`}
				target="_blank">View on Etherscan</Button
			>
			<Button
				variant="white/navy"
				href={`${LINK_TOKEN_OKEX}?ref=${PLATFORM_DOMAIN}`}
				target="_blank">Buy on OKX</Button
			>
			<Button
				variant="white/navy"
				href={`${LINK_TOKEN_UNISWAP}?ref=${PLATFORM_DOMAIN}`}
				target="_blank">Exchange on Uniswap</Button
			>
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#token) {
		background-color: $color-navy--primary;

		.container {
			display: grid;
			grid-template-columns: 3fr 2fr;
			grid-template-areas:
				'content media'
				'actions actions';
			column-gap: 80px; // @TODO
			row-gap: 80px; // @TODO

			.content {
				grid-area: content;

				:global(.typography-title) {
					color: $color-gold--secondary;
				}

				:global(.typography-text) {
					color: $color-white;
					@include fluid(margin-bottom, 24, 24); //@TODO

					&:last-of-type {
						margin-bottom: 0;
					}
				}
			}

			.media {
				grid-area: media;

				img {
					display: block;
					width: 100%;
				}
			}

			.actions {
				grid-area: actions;
			}
		}
	}
</style>
