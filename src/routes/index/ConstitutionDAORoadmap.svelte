<script lang="ts">
	import { Section } from '$layout/section';
	import { Title } from '$components/typography';
	import { Timeline, TimelineItem } from '$components/timeline';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import {
		LINK_DOCUMENT_HACKEN_AUDIT,
		LINK_DOCUMENT_TRUSTLOOK_AUDIT
	} from '$constants/links/documents';
</script>

<div class="constitutiondao-banner">
	<img src="/assets/images/index_constitutiondao-roadmap.png" alt="" />
</div>
<Section id="constitution-dao">
	<div class="container">
		<div class="content">
			<Title tag="h2" size="medium">ConstitutionDAO Roadmap</Title>
		</div>
		<div class="timeline">
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
					description="PeopleDAO forms after a Snapshot vote on Dec 6th, gathering together individuals from across the world. Members have many visions for the $PEOPLE token oriented around furthering social good and web3. We agree to use a metaDAO structure and incubate DAOs addressing different causes."
				/>
				<TimelineItem
					date="Dec '21"
					title="Decentralization"
					description={`ConstitutionDAO relinquishes ownership of the $PEOPLE token contract (confirmed in later audits by <a href="${LINK_DOCUMENT_HACKEN_AUDIT}?ref=${PLATFORM_DOMAIN}" target='_blank'>Hacken</a> and <a href="${LINK_DOCUMENT_TRUSTLOOK_AUDIT}?ref=${PLATFORM_DOMAIN}" target='_blank'>TRUSTLOOK</a>). ConstitutionDAO shuts down its Discord, closing the first chapter of the $PEOPLE token.`}
				/>
				<TimelineItem
					date="Now"
					title="MetaDAO"
					description="As of June 2022 PeopleDAO has incubated two subDAOS, PandaDAO and LanguageDAO, and one community project, Constitution Fractionalized. We continue to strengthen the structure and operations of the DAO while also incubating new opportunities."
				/>
			</Timeline>
		</div>
	</div>
</Section>

<style lang="scss">
	.constitutiondao-banner {
		img {
			display: block;
			width: 100%;
			max-width: 100vw;
		}
	}

	:global(#constitution-dao) {
		background: $color-white;

		.container {
			display: grid;
			grid-template-rows: auto 1fr;
			grid-template-areas:
				'content'
				'timeline';
			@include fluid(row-gap, 30, 30);

			.content {
				grid-area: content;

				:global(.typography-title) {
					color: $color-navy--primary;
					text-transform: none;
					text-align: center;
				}

				:global(.typography-text) {
					color: $color-black--primary;
				}
			}

			.timeline {
				grid-area: timeline;
			}
		}
	}
</style>
