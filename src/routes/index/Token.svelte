<script lang="ts">
	import { Section } from '$lib/section/components';
	import { Title, Text } from '$lib/typography/components';
	import { TokenStatsSimple } from '$apps/token-stats/components';
	import { ButtonGroup, Button } from '$lib/button/components';

	import { PLATFORM_DOMAIN } from '$util/platform';
	import { LINK_PROJECT_CFAC } from '$lib/navigation/constants/projectLinks.constants';
	import {
		LINK_TOKEN_JUICEBOX,
		LINK_TOKEN_ETHERSCAN,
		LINK_TOKEN_OKEX,
		LINK_TOKEN_UNISWAP
	} from '$lib/navigation/constants/tokenLinks.constants';
</script>

<Section id="token">
	<div class="container">
		<div class="content">
			<Title tag="h2">Token</Title>
			<Text>
				We use the $PEOPLE token for voting in DAO decision-making. The token has a capped supply
				and will be slightly deflationary so long as holders continue to redeem the token on
				<a href={`${LINK_TOKEN_JUICEBOX}?ref=${PLATFORM_DOMAIN}`} target="_blank" rel="noreferrer"
					>Juicebox</a
				>, in return for the underlying ETH. The original conversion rate of 1 ETH per 1M $PEOPLE
				thus acts like a floor price. PeopleDAO and its subDAOs are committed to building an
				ecosystem around this token. In practice this has looked like offering a
				<a href={`${LINK_PROJECT_CFAC}?ref=${PLATFORM_DOMAIN}`} target="_blank" rel="noreferrer"
					>free NFT</a
				> to token holders, or airdropping $PANDA token to wallets holding the token.
			</Text>
			<TokenStatsSimple />
		</div>
		<div class="media">
			<img src="/assets/images/index_token.png" alt="" />
		</div>
		<div class="actions">
			<ButtonGroup>
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
			</ButtonGroup>
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#token) {
		$breakpoint--mobile: $breakpoint--medium;

		background: $color-navy--primary;

		.container {
			display: grid;
			grid-template-columns: 3fr 2fr;
			grid-template-areas:
				'content media'
				'actions actions';
			@include fluid(column-gap, 60, 80);
			@include fluid(row-gap, 40, 80);

			@include breakpoint($breakpoint--mobile) {
				grid-template-columns: auto;
				grid-template-rows: auto auto;
				grid-template-areas:
					'content'
					'actions';
			}

			.content {
				grid-area: content;

				:global(.typography-title) {
					color: $color-gold--secondary;
				}

				:global(.typography-text) {
					color: $color-white;

					&:last-of-type {
						margin-bottom: 0;
					}
				}

				:global(.token-stats) {
					@include fluid(margin-top, 42, 64);
				}
			}

			.media {
				grid-area: media;

				@include breakpoint($breakpoint--mobile) {
					display: none;
				}

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
