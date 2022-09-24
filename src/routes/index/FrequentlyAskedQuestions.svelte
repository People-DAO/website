<script lang="ts">
	import { Section } from '$layout/section';
	import { Title } from '$components/typography';
	import { Accordion, AccordionItem } from '$components/accordion';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import { LINK_SOCIAL_DISCORD, LINK_SOCIAL_DEWORK } from '$constants/links/socials';
	import { LINK_TOKEN_COINMARKETCAP } from '$constants/links/tokens';
</script>

<Section id="frequently-asked-questions">
	<div class="container">
		<div class="content">
			<Title tag="h2">FAQ</Title>
		</div>
		<div class="questions">
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
					description={`Start with joining the <a href=${`${LINK_SOCIAL_DISCORD}`} target="_blank">Discord</a> and&nbsp;conducting the&nbsp;onboarding process described in&nbsp;the&nbsp;#onboarding channel. From&nbsp;there check out the&nbsp;#bounty-board channel or&nbsp;our&nbsp;<a href=${`${LINK_SOCIAL_DEWORK}?ref=${PLATFORM_DOMAIN}`} target="_blank">Dework</a> page for tasks that need completing! We&nbsp;pay contributors for their work.`}
				/>
				<AccordionItem
					title="What market gap do you intend to close?"
					description="Economists have long recognized that funding public goods is an&nbsp;ongoing challenge. Simply put, because&nbsp;no one is excluded from using a&nbsp;public good many individuals avoid paying for them, giving rise to the&nbsp;free-rider problem. Web3 needs its&nbsp;roads, utilities, and&nbsp;non-profits just like the real world does. PeopleDAO fills the market gap by not only funding public goods, but&nbsp;by providing incubation services to ensure projects are on a&nbsp;path to growth and&nbsp;sustainability."
				/>
				<AccordionItem
					title="How can PeopleDAO help with my project?"
					description="Projects seeking incubation should meet at least two criteria: (1)&nbsp;an&nbsp;interest in joining a&nbsp;family of DAOs and&nbsp;projects united in the&nbsp;mission to build an&nbsp;ecosystem around the&nbsp;$PEOPLE token, and (2)&nbsp;a&nbsp;focus on making public goods in web3, or&nbsp;leveraging the blockchain for social impact."
				/>
				<AccordionItem
					title="How many wallet addresses hold $PEOPLE?"
					description={`You can browse statistics on the $PEOPLE token holder count and other data on the <a href=${`${LINK_TOKEN_COINMARKETCAP}/holders?ref=${PLATFORM_DOMAIN}`} target="_blank">dedicated CoinMarketCap page</a>.`}
				/>
			</Accordion>
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#frequently-asked-questions) {
		background-color: $color-navy--primary;

		.container {
			display: grid;
			grid-template-rows: auto auto;
			grid-template-areas:
				'content'
				'questions';

			.content {
				grid-area: content;

				:global(.typography-title) {
					color: $color-white;
				}
			}

			.questions {
				grid-area: questions;

				:global(.accordion) {
					:global(.accordion-item) {
						color: $color-white;
						border-bottom: 1px solid $color-white;
					}
				}
			}
		}
	}
</style>
