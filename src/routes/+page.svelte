<script lang="ts">
	import { FastArrowDownIcon } from '@indaco/svelte-iconoir';

	import { PageMeta } from '$util/meta';
	import { Wrapper, Section } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
	import { ButtonGroup, Button } from '$lib/button/components';
	import { Logo } from '$lib/logo/components';
	import { Link } from '$lib/link/components';
	import { Timeline, TimelineItem } from '$lib/timeline/components';
	import { TokenSimpleStats, TokenSimpleStatItem } from '$apps/token/components';
	import { HexagonAvatar } from '$lib/avatar/components';
	import { Accordion, AccordionItem } from '$lib/accordion/components';

	import { tokenData, isLoading as tokenDataIsLoading } from '$apps/token/stores/simpleStats.store';

	import { LINK_SOCIAL_DISCORD } from '$lib/link/constants/socialLinks.constants';
	import { LINK_TOOL_DEWORK } from '$lib/link/constants/toolLinks.constants';
	import {
		LINK_TOKEN_JUICEBOX,
		LINK_TOKEN_ETHERSCAN,
		LINK_TOKEN_COINMARKETCAP
	} from '$lib/link/constants/tokenLinks.constants';
	import { LINK_DOCUMENT_CONSTITUTION } from '$lib/link/constants/documentLinks.constants';
	import { LINK_PROJECT_CFAC } from '$lib/link/constants/projectLinks.constants';

	import LanguageDAOLogo from '$assets/icons/projects/languagedao.svg?raw';
	import PandaDAOLogo from '$assets/icons/projects/pandadao.svg?raw';
</script>

<PageMeta />

<section class="relative h-screen w-full -mt-16 overflow-hidden">
	<div class="absolute inset-0 flex justify-center items-center">
		<img
			class="h-full w-full max-h-none max-w-none object-cover"
			src="/assets/images/constitution1.png"
			alt=""
			loading="lazy"
		/>
	</div>
	<div
		class="relative w-full h-full flex flex-col justify-center items-center bg-navy-primary/90 text-center"
	>
		<Wrapper class="flex flex-col justify-center items-center">
			<div class="flex flex-col items-center space-y-8">
				<Logo class="h-24 sm:h-36 lg:h-48 text-white-primary" variant="text" />
				<h1
					class="font-secondary font-bold text-2xl sm:text-4xl lg:text-6xl text-white-primary text-gold-primary uppercase"
				>
					Incubating public good<br />for the people
				</h1>
				<div class="absolute bottom-12 text-gold-primary mt-auto">
					<FastArrowDownIcon
						class="h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 animate--scroll-down"
					/>
				</div>
			</div>
		</Wrapper>
	</div>
</section>
<Section name="afro-piece" class="relative !p-0 overflow-hidden bg-[#040404]">
	<a class="relative w-full flex z-10" href="https://forthepeoplenft.com" target="_blank">
		<img src="/assets/images/forthepeoplenft-banner.png" alt="" loading="lazy" />
	</a>
	<div
		class="absolute -inset-10 flex bg-[url('/assets/images/forthepeoplenft-banner.png')] bg-cover bg-center bg-no-repeat blur-2xl opacity-30"
	/>
</Section>
<Section name="mission">
	<div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-x-14">
		<div class="flex flex-col">
			<FormattedContent>
				<h2>Mission</h2>
				<p>
					PeopleDAO incubates subDAOs and&nbsp;projects that further web3 and&nbsp;social good
					because we&nbsp;believe blockchain technology can&nbsp;promote a&nbsp;freer, more
					prosperous, and&nbsp;vibrant world.
				</p>
				<p>
					Market activity around the&nbsp;$PEOPLE token acts like an&nbsp;engine for&nbsp;spreading
					our&nbsp;message.
				</p>
				<p>
					With every new incubation we&nbsp;build out a &nbsp;constellation of communities
					and&nbsp;protocols aligned around the&nbsp;same mission: let's&nbsp;invest
					in&nbsp;the&nbsp;alpha that will preserve our&nbsp;planet and&nbsp;advance humanity.
				</p>
			</FormattedContent>
			<ButtonGroup class="mt-8">
				<Button href="/accelerator/projects" variant="navy/gold">
					Browse accelerated projects
				</Button>
				<Button href={LINK_DOCUMENT_CONSTITUTION} target="_blank">View Constitution</Button>
			</ButtonGroup>
		</div>
		<div class="hidden lg:flex">
			<img class="block object-cover" src="/assets/images/mission1.png" alt="" loading="lazy" />
		</div>
	</div>
</Section>
<Section name="origin" class="bg-bronze-tertiary">
	<div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-x-14">
		<div class="hidden lg:flex">
			<img class="block object-cover" src="/assets/images/origin1.png" alt="" loading="lazy" />
		</div>
		<FormattedContent>
			<h2>Origin</h2>
			<p>
				PeopleDAO was born from a&nbsp;web3 movement to&nbsp;buy a&nbsp;private copy of
				the&nbsp;US&nbsp;Constitution. When&nbsp;the&nbsp;project failed in&nbsp;its&nbsp;mission
				the&nbsp;developers burned control of the&nbsp;$PEOPLE token contract, <Link
					href="https://twitter.com/ConstitutionDAO/status/1470970371025293317?ref=people-dao.com"
					target="_blank">sunsetting their involvement</Link
				>.
			</p>
			<p>
				A&nbsp;group of community&nbsp;members formed PeopleDAO and&nbsp;adopted $PEOPLE as
				its&nbsp;governance token, impressed&nbsp;by the&nbsp;meme coin's decentralization, capped
				supply, and&nbsp;inspiring history.
			</p>
		</FormattedContent>
	</div>
</Section>
<div class="w-full flex">
	<img
		class="block w-full object-cover"
		src="/assets/images/constitutiondao1.png"
		alt=""
		loading="lazy"
	/>
</div>
<Section name="constitution-dao">
	<FormattedContent class="text-center">
		<h2>Evolved from ConstitutionDAO</h2>
	</FormattedContent>
	<Timeline class="mt-16">
		<TimelineItem
			date="Nov '21"
			title="The Cultural Event"
			description="<p>An internet group rallies web3 to buy a copy of the US Constitution, garnering widespread support and media coverage. The movement raises $45M but loses the auction. Many PeopleDAO members contributed to the effort.</p>"
		/>
		<TimelineItem
			date="Nov '21"
			title="The Token"
			description="<p>ConstitutionDAO announces it will shutter. Some donators redeem their $PEOPLE but others keep the token, enchanted by the meme's values of liberty and altruism. The price moons 40x amid speculation. PeopleDAO hosts its 1st Twitter Spaces.</p>"
		/>
		<TimelineItem
			date="Dec '21"
			title="PeopleDAO"
			description="<p>PeopleDAO forms after a Snapshot vote on Dec 6th, gathering together individuals from across the world. Members have many visions for the $PEOPLE token oriented around furthering social good and web3. We agree to use a metaDAO structure and incubate DAOs addressing different causes.</p>"
		/>
		<TimelineItem
			date="Dec '21"
			title="Decentralization"
			description={`<p>ConstitutionDAO relinquishes ownership of the $PEOPLE token contract (confirmed in later audits by <a href="https://github.com/People-DAO/files/blob/main/governance/audits/PEOPLE-Token-Audit-Hacken.pdf?ref=people-dao.com" target='_blank'>Hacken</a> and <a href="https://github.com/People-DAO/files/blob/main/governance/audits/PEOPLE-Token-Audit-Trustlook.pdf?ref=people-dao.com" target='_blank'>TRUSTLOOK</a>). ConstitutionDAO shuts down its Discord, closing the first chapter of the $PEOPLE token.</p>`}
		/>
		<TimelineItem
			date="Now"
			title="MetaDAO"
			description="<p>As of June 2022 PeopleDAO has incubated two subDAOS, PandaDAO and LanguageDAO, and one community project, Constitution Fractionalized. We continue to strengthen the structure and operations of the DAO while also incubating new opportunities.</p>"
		/>
	</Timeline>
</Section>
<Section name="token" class="bg-bronze-tertiary">
	<div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-x-14">
		<div class="flex flex-col">
			<FormattedContent>
				<h2>Token</h2>
				<p>
					We use the $PEOPLE token for voting in DAO decision-making. The token has a capped supply
					and will be slightly deflationary so long as holders continue to redeem the token on
					<Link href={LINK_TOKEN_JUICEBOX} target="_blank">Juicebox</Link>, in return for the
					underlying ETH. The original conversion rate of 1 ETH per 1M $PEOPLE thus acts like a
					floor price. PeopleDAO and its subDAOs are committed to building an ecosystem around this
					token. In practice this has looked like offering a free NFT to token holders, or
					airdropping $PANDA token to wallets holding the token.
				</p>
			</FormattedContent>
			<TokenSimpleStats class="mt-8">
				<TokenSimpleStatItem
					label="Price"
					value={$tokenData?.price}
					isLoading={$tokenDataIsLoading}
				/>
				<TokenSimpleStatItem
					label="Market cap"
					value={$tokenData?.marketCap}
					isLoading={$tokenDataIsLoading}
				/>
				<TokenSimpleStatItem
					label="24h volume"
					value={$tokenData?.volume24h}
					isLoading={$tokenDataIsLoading}
				/>
			</TokenSimpleStats>
			<ButtonGroup class="mt-8">
				<Button href="/governance/people-token" variant="navy/gold">
					Learn more about $PEOPLE
				</Button>
				<Button href={LINK_TOKEN_ETHERSCAN} target="_blank">View on Etherscan</Button>
			</ButtonGroup>
		</div>
		<div class="hidden lg:flex">
			<img class="block object-cover" src="/assets/images/token1.png" alt="" loading="lazy" />
		</div>
	</div>
</Section>
<Section name="projects">
	<FormattedContent class="text-center">
		<h2>Projects</h2>
		<p>
			PeopleDAO is an accelerator for subDAOs and community projects. We provide seed funding,
			product development, strategic direction, marketing boosts, and consulting around governance.
		</p>
	</FormattedContent>
	<div class="flex flex-wrap justify-center space-x-3 space-y-1 mt-16 mx-auto">
		<HexagonAvatar class="h-[192px] mt-1 ml-3" href={LINK_PROJECT_CFAC} target="_blank">
			<img src="/assets/icons/projects/cfrac.png" alt="" loading="lazy" />
		</HexagonAvatar>
		<HexagonAvatar
			class="h-[192px]"
			href="/accelerator/project/pandadao"
			color="#000000"
			backgroundColor="transparent"
		>
			{@html PandaDAOLogo}
		</HexagonAvatar>
		<HexagonAvatar class="h-[192px]" href="/accelerator/project/languagedao">
			{@html LanguageDAOLogo}
		</HexagonAvatar>
		<HexagonAvatar class="h-[192px]" href="/accelerator/project/the-lost-children-of-benin-city">
			<img src="/assets/icons/projects/the-lost-children-of-benin-city.png" alt="" loading="lazy" />
		</HexagonAvatar>
		<HexagonAvatar class="h-[192px]" href="/accelerator/project/afro-piece">
			<img src="/assets/icons/projects/afro-piece.png" alt="" loading="lazy" />
		</HexagonAvatar>
	</div>
	<div class="flex justify-center mt-16">
		<Button href="/accelerator/projects" variant="white/gold">
			Browse all accelerated projects
		</Button>
	</div>
</Section>

<Section name="faq" class="bg-bronze-tertiary">
	<FormattedContent class="mb-8">
		<h2>Frequently Asked Questions</h2>
	</FormattedContent>
	<Accordion>
		<AccordionItem
			title="What is a metaDAO and subDAO?"
			description="We conceptualize them as similar to a&nbsp;corporation and subsidiaries. Or, like a&nbsp;coalition with shared purpose, and&nbsp;the&nbsp;metaDAO acts as a&nbsp;backbone entity, providing coordination across the group. In&nbsp;our case that purpose is building an&nbsp;ecosystem around the&nbsp;$PEOPLE token! Our&nbsp;subDAOs are autonomous in terms of governance, but may contribute revenue or in-kind services to PeopleDAO. We're still developing our model!"
		/>
		<AccordionItem
			title="Do I need to own $PEOPLE to join PeopleDAO?"
			description="Anyone can join PeopleDAO's Discord and&nbsp;start contributing, but&nbsp;holding $PEOPLE token unlocks two key advantages. $PEOPLE grants you the&nbsp;option to vote in our Snapshot proposals and&nbsp;therefore shape the&nbsp;governance of the DAO. Two, holding $PEOPLE enables you to attain Verified Member status in our Discord, which&nbsp;confers benefits such as access to activities, POAPs, or&nbsp;whitelist spots."
		/>
		<AccordionItem
			title="How can I contribute to PeopleDAO?"
			description={`Start with joining the <a href=${`${LINK_SOCIAL_DISCORD}`} target="_blank">Discord</a> and&nbsp;conducting the&nbsp;onboarding process described in&nbsp;the&nbsp;#onboarding channel. From&nbsp;there check out the&nbsp;#bounty-board channel or&nbsp;our&nbsp;<a href=${`${LINK_TOOL_DEWORK}`} target="_blank">Dework</a> page for tasks that need completing! We&nbsp;pay contributors for their work.`}
		/>
		<AccordionItem
			title="What market gap do you intend to close?"
			description="Economists have long recognized that funding public goods is an&nbsp;ongoing challenge. Simply put, because&nbsp;no one is excluded from using a&nbsp;public good many individuals avoid paying for them, giving rise to the&nbsp;free-rider problem. Web3 needs its&nbsp;roads, utilities, and&nbsp;non-profits just like the real world does. PeopleDAO fills the market gap by not only funding public goods, but&nbsp;by providing accelerator services to ensure projects are on a&nbsp;path to growth and&nbsp;sustainability."
		/>
		<AccordionItem
			title="How can PeopleDAO help with my project?"
			description="Projects seeking acceleration should meet at least two criteria: (1)&nbsp;an&nbsp;interest in joining a&nbsp;family of DAOs and&nbsp;projects united in the&nbsp;mission to build an&nbsp;ecosystem around the&nbsp;$PEOPLE token, and (2)&nbsp;a&nbsp;focus on making public goods in web3, or&nbsp;leveraging the blockchain for social impact."
		/>
		<AccordionItem
			title="How many wallet addresses hold $PEOPLE?"
			description={`You can browse statistics on the $PEOPLE token holder count and other data on the <a href=${`${LINK_TOKEN_COINMARKETCAP}/holders`} target="_blank">dedicated CoinMarketCap page</a>.`}
		/>
	</Accordion>
</Section>

<style lang="scss">
	:global(.animate--scroll-down) {
		position: relative;
		animation: 2.5s scrollDown infinite;

		@keyframes scrollDown {
			0% {
				opacity: 0;
				top: -75%;
			}
			50% {
				opacity: 1;
			}
			100% {
				opacity: 0;
				top: 0;
			}
		}
	}
</style>
