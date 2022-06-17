<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { Section, SectionTitle } from '$layout/section';
	import { WrapperWide } from '$layout/wrapper';
	import { Text } from '$components/text';
	import { Button, ButtonGroup } from '$components/button';
	import { VideoSequencer } from '$components/video-sequencer';
	import { Timeline, TimelineItem } from '$components/timeline';
	import { TokenStats } from '$components/token-stats';
	import { Label } from '$components/label';
	import { Hexagon, HexagonGroup } from '$components/hexagon';
	import { Accordion, AccordionItem } from '$components/accordion';

	import ConstitutioDaoIcon from '$assets/icons/daos/constitution-dao.svg';
	import PandaDaoIcon from '$assets/icons/daos/panda-dao.svg';
	import LanguageDaoIcon from '$assets/icons/daos/language-dao.svg';

	import { scrollToRef } from '$stores/layout/navigation';

	import { PLATFORM_DOMAIN } from '$constants/platform';
	import { SOCIAL_DISCORD } from '$constants/socials';
	import {
		TOKEN_COINMARKETCAP,
		TOKEN_ETHERSCAN,
		TOKEN_OKEX,
		TOKEN_UNISWAP
	} from '$constants/tokens';
	import {
		LINK_HACKEN_AUDIT,
		LINK_TRUSTLOOK_AUDIT,
		LINK_JUICEBOX,
		LINK_DEWORK,
		LINK_PANDADAO,
		LINK_LANGUAGEDAO,
		LINK_CFRAG
	} from '$constants/links';
</script>

<PageMeta />
<section class="hero" id="top">
	<div class="background">
		<div class="overlay" />
		<VideoSequencer
			videoUrls={[
				'/assets/videos/hero1.mp4',
				'/assets/videos/hero2.mp4',
				'/assets/videos/hero3.mp4',
				'/assets/videos/hero4.mp4'
			]}
			order="random"
		/>
	</div>
	<WrapperWide>
		<div class="container">
			<div class="title">
				<h1>
					Incubate Public Good<br />
					<span>For The People</span>
				</h1>
			</div>
		</div>
	</WrapperWide>
</section>
<Section scrollHref="mission" cropped="bottom">
	<SectionTitle>Mission</SectionTitle>
	<Text size="large" width={80}>
		PeopleDAO incubates subDAOs and&nbsp;projects that further web3 and&nbsp;social good because we
		believe blockchain technology can promote a&nbsp;freer, more prosperous, and&nbsp;vibrant world.
	</Text>
	<Text size="large" width={80}>
		Market activity around the <Label>$PEOPLE</Label> token acts like an&nbsp;engine for&nbsp;spreading
		our&nbsp;message.
	</Text>
	<Text size="large" width={80}>
		With every new incubation we build out a&nbsp;constellation of communities and&nbsp;protocols
		aligned around the same mission: let's invest in&nbsp;the&nbsp;alpha that will preserve our
		planet and&nbsp;advance humanity.
	</Text>
	<ButtonGroup>
		<Button href={SOCIAL_DISCORD} target="_blank">Join Discord</Button>
		<Button onClick={() => scrollToRef('projects')}>Active projects</Button>
	</ButtonGroup>
</Section>
<Section scrollHref="origins">
	<SectionTitle>Origins</SectionTitle>
	<Text size="large">
		PeopleDAO was born from a&nbsp;web3 movement to buy a&nbsp;private copy of the US Constitution.
		When the project failed in its mission the&nbsp;developers burned control of the
		<Label>$PEOPLE</Label> token contract,
		<a
			href={`https://twitter.com/ConstitutionDAO/status/1470970371025293317?ref=${PLATFORM_DOMAIN}`}
			target="_blank">sunsetting their involvement</a
		>. A&nbsp;group of community members formed PeopleDAO and&nbsp;adopter
		<Label>$PEOPLE</Label> as its governance token, impressed by the meme coin's decentralization, capped
		supply, and&nbsp;inspiring history.
	</Text>
	<div class="banner">
		<a
			class="container"
			href={`https://www.constitutiondao.com?ref=${PLATFORM_DOMAIN}`}
			target="_blank"
		>
			<img
				src="/assets/images/constitutiondao/constitution-signing.jpg"
				alt="Signing of the Constitution of the United States"
			/>
			<div class="overlay">
				<ConstitutioDaoIcon />
			</div>
		</a>
	</div>
	<Timeline>
		<TimelineItem
			date="Nov '21"
			title="The Cultural Event"
			description="An internet group rallies web3 to buy a copy of the US Constitution, garnering widespread support and media coverage. The movement raises $45M but loses the auction. Many PeopleDAO members contributed to the effort."
		/>
		<TimelineItem
			date="Nov '21"
			title="The Token"
			description="ConstitutionDAO announces it will shutter. Some donators redeem their $PEOPLE but others keep the token, enchanted by the meme's values of liberty and altruism. The price moons 40x amid speculation. PeopleDAO hosts its 1st Twitter Spaces."
		/>
		<TimelineItem
			date="Dec '21"
			title="PeopleDAO"
			description="PeopleDAO forms after a Snapshot vote on Dec 6th, gathering together individuals from across the world. Members have many visions for the $PEOPLE token oriented around further social good and web3. We agree to use a metaDAO structure and incubate DAOs addressing different causes."
		/>
		<TimelineItem
			date="Dec '21"
			title="Decentralization"
			description={`ConstitutionDAO relinquishes ownership of the $PEOPLE token contract (confirmed in later audits by <a href="${LINK_HACKEN_AUDIT}?ref=${PLATFORM_DOMAIN}" target='_blank'>Hacken</a> and <a href="${LINK_TRUSTLOOK_AUDIT}?ref=${PLATFORM_DOMAIN}" target='_blank'>TRUSTLOOK</a>). ConstitutionDAO shuts down its Discord, closing the first chapter of the $PEOPLE token.`}
		/>
		<TimelineItem
			date="Now"
			title="MetaDAO"
			description="As of June 2022 PeopleDAO has incubated two subDAOS, PandaDAO and LanguageDAO, and one community project, Constitution Fractionalizes. We continue to strengthen the structure and operations of the DAO while also incubating new opportunities. Our Discord has grown to over 17k members and our Twitter has grown to over 34k followers."
		/>
	</Timeline>
</Section>
<Section scrollHref="token">
	<SectionTitle>Token</SectionTitle>
	<Text size="large" class="description">
		We use the <Label>$PEOPLE</Label> token for&nbsp;voting in&nbsp;DAO decision-making process. The&nbsp;token
		has a&nbsp;capped supply and&nbsp;will be slightly deflationary so long as holders continue to redeem
		the&nbsp;token on
		<a href={`${LINK_JUICEBOX}?ref=${PLATFORM_DOMAIN}`} target="_blank">Juicebox</a>, in return for
		the underlying ETH. The original conversion rate of 1 ETH per 1M <Label>$PEOPLE</Label> thus acts
		like a&nbsp;floor price. PeopleDAO and&nbsp;its subDAOs are committed to building an&nbsp;ecosystem
		around this token. In&nbsp;practice this has looked like offering a&nbsp;<a
			href={`${LINK_CFRAG}?ref=${PLATFORM_DOMAIN}`}
			target="_blank">free NFT</a
		> to token holders, or airdropping $PANDA token to wallets holding the&nbsp;token.
	</Text>
	<TokenStats />
	<ButtonGroup>
		<Button href={`${TOKEN_ETHERSCAN}?ref=${PLATFORM_DOMAIN}`} target="_blank"
			>View on Etherscan</Button
		>
		<Button href={`${TOKEN_OKEX}?ref=${PLATFORM_DOMAIN}`} target="_blank">Buy on OKEx</Button>
		<Button href={`${TOKEN_UNISWAP}&ref=${PLATFORM_DOMAIN}`} target="_blank"
			>Exchange on Uniswap</Button
		>
	</ButtonGroup>
</Section>
<Section scrollHref="projects" cropped="bottom">
	<SectionTitle>Projects</SectionTitle>
	<Text size="large">
		PeopleDAO is an&nbsp;incubator for subDAOs and&nbsp;community projects. We&nbsp;provide seed
		funding, product development, strategic direction, marketing boosts, and&nbsp;consulting around
		governance.
	</Text>
	<HexagonGroup>
		<Hexagon href={`${LINK_PANDADAO}?ref=${PLATFORM_DOMAIN}`} target="_blank">
			<PandaDaoIcon />
		</Hexagon>
		<Hexagon href={`${LINK_LANGUAGEDAO}?ref=${PLATFORM_DOMAIN}`} target="_blank">
			<LanguageDaoIcon />
		</Hexagon>
	</HexagonGroup>
</Section>
<Section scrollHref="faq">
	<SectionTitle>FAQ</SectionTitle>
	<Accordion>
		<AccordionItem
			title="What is a metaDAO and subDAO?"
			description="We conceptualize them as similar to a&nbsp;corporation and subsidiaries. Or, like a&nbsp;coalition with shared purpose, and&nbsp;the&nbsp;metaDAO acts as a&nbsp;backbone entity, providing coordination across the group. In&nbsp;our case that purpose is building an&nbsp;ecosystem around the&nbsp;$PEOPLE token! Our&nbsp;subDAOs are autonomous in terms of governance, but may contribute revenue or in-kind service to PeopleDAO. We're still developing our model!"
		/>
		<AccordionItem
			title="Do I need to own $PEOPLE to join PeopleDAO?"
			description="Anyone can join PeopleDAO's Discord and&nbsp;start contributing, but&nbsp;holding $PEOPLE token unlocks two key advantages. $PEOPLE grants you the&nbsp;option to vote in our Snapshot proposal and&nbsp;therefore shape the&nbsp;governance of the DAO. Two, holding $PEOPLE enables you to attain Verified Member status in our Discord, which&nbsp;confers benefits such as access to activities, POAPs, or&nbsp;whitelist spots."
		/>
		<AccordionItem
			title="How can I contribute to PeopleDAO?"
			description={`Start with joining the <a href=${`${SOCIAL_DISCORD}`} target="_blank">Discord</a> and&nbsp;conducting the&nbsp;onboarding process described in&nbsp;the&nbsp;#onboarding channel. From&nbsp;there check out the&nbsp;#bounty-board channel or&nbsp;our&nbsp;<a href=${`${LINK_DEWORK}?ref=${PLATFORM_DOMAIN}`} target="_blank">Dework</a> page for tasks that need completing! We&nbsp;pay contributors for their work.`}
		/>
		<AccordionItem
			title="What market gap do you intend to close?"
			description="Economists have long recognized that funding public goods is an&nbsp;ongoing challenge. Simply put, because&nbsp;no one is excluded from using a&nbsp;public good many individuals avoid paying for them, giving rise to the&nbsp;free-rider problem. Web3 needs its&nbsp;roads, utilities, and&nbsp;non-profits just like the real world does. PeopleDAO fills the market gap by not only funding public goods, but&nbsp;by providing incubation services to ensure projects are on a&nbsp;road to growth and&nbsp;sustainability."
		/>
		<AccordionItem
			title="How can PeopleDAO help with my project?"
			description="Projects seeking incubation should meet at least two criteria: (1)&nbsp;an&nbsp;interest in joining a&nbsp;family of DAOs and&nbsp;projects united in the&nbsp;mission to build an&nbsp;ecosystem around the&nbsp;$PEOPLE token, and (2)&nbsp;a&nbsp;focus on making public goods in web3, or&nbsp;leveraging the blockchain for social impact."
		/>
		<AccordionItem
			title="How many wallet addresses hold $PEOPLE?"
			description={`You can browse statistics on the $PEOPLE token holder count and other data on the <a href=${`${TOKEN_COINMARKETCAP}/holders?ref=${PLATFORM_DOMAIN}`} target="_blank">dedicated CoinMarketCap page</a>.`}
		/>
	</Accordion>
</Section>

<style lang="scss">
	.hero {
		background: $color-background--tertiary;
		position: relative;

		.background {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			overflow: hidden;

			.overlay {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: rgba($color-background--tertiary, 0.75);
				z-index: 1;
			}

			:global(.video-sequencer) {
				position: relative;
				margin-top: 70px;
				max-width: 1920px;

				:global(video) {
					position: relative;
					left: 50%;
					transform: translateX(-50%);
				}

				&::after,
				&::before {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					width: 150px;
					background: linear-gradient(to right, $color-background--tertiary, transparent);
					z-index: 1;
				}

				&::before {
					left: 0;
				}

				&::after {
					right: 0;
					transform: rotate(180deg);
				}

				@include breakpoint($breakpoint--md) {
					&::after,
					&::before {
						display: none;
					}
				}
			}
		}

		.container {
			position: relative;
			@include fluid(padding-top, 128, 256);
			@include fluid(padding-bottom, 128, 256);
			z-index: 1;

			.title {
				@include fluid(max-width, 655, 1110);

				@include breakpoint($breakpoint--sm) {
					max-width: 100%;
				}

				h1 {
					@include typography-family--secondary;
					@include typography-size--max;
					font-weight: $font-weight--semi-bold;
					color: $color-text--tertiary;

					span {
						background: linear-gradient(
							to right,
							$color-brand--blue 0%,
							$color-brand--purple 50%,
							$color-brand--blue 100%
						);
						background-size: 200%;
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						animation: hero-text 5s ease infinite;

						@keyframes hero-text {
							0% {
								background-position: 0% center;
							}

							100% {
								background-position: 200% center;
							}
						}
					}
				}
			}
		}
	}

	:global(#origins) {
		.banner {
			display: flex;
			justify-content: center;
			@include spacing--max(margin-top);
			@include spacing--large(margin-bottom);

			.container {
				position: relative;
				max-width: 806px;

				img {
					display: block;
					width: 100%;
				}

				.overlay {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background: rgba($color-background--tertiary, 0.66);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					:global(svg) {
						width: 60%;
						height: auto;
					}
				}
			}
		}
	}

	:global(#token) {
		background: $color-background--secondary;
	}
</style>
