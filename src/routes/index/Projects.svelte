<script lang="ts">
	import { Section } from '$layout/section';
	import { Title, Text } from '$components/typography';
	import { HexagonCarousel } from '$components/hexagon-carousel';

	import LanguageDAOLogo from '$assets/icons/projects/languagedao.svg?raw';
	import PandaDAOLogo from '$assets/icons/projects/pandadao.svg?raw';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import {
		LINK_PROJECT_CFAC,
		LINK_PROJECT_PANDADAO,
		LINK_PROJECT_LANGUAGEDAO,
		LINK_PROJECT_LOSTCHILDREN,
		LINK_PROJECT_AFROPIECE
	} from '$constants/links/projects';
</script>

<Section id="projects">
	<div class="container">
		<div class="content">
			<Title tag="h2">Projects</Title>
			<Text>
				PeopleDAO is an incubator for subDAOs and community projects. We provide seed funding,
				product development, strategic direction, marketing boosts, and consulting around
				governance.
			</Text>
		</div>
		<div class="showcase">
			<HexagonCarousel
				items={[
					{
						iconHtml: '<img src="/assets/icons/projects/afro-piece.png" alt="" />',
						href: `${LINK_PROJECT_AFROPIECE}?ref=${PLATFORM_DOMAIN}`,
						target: '_blank'
					},
					{
						iconHtml: PandaDAOLogo,
						href: `${LINK_PROJECT_PANDADAO}?ref=${PLATFORM_DOMAIN}`,
						target: '_blank'
					},
					{
						iconHtml: '<img src="/assets/icons/projects/cfrac.png" alt="" />',
						href: `${LINK_PROJECT_CFAC}?ref=${PLATFORM_DOMAIN}`,
						target: '_blank'
					},
					{
						iconHtml: LanguageDAOLogo,
						href: `${LINK_PROJECT_LANGUAGEDAO}?ref=${PLATFORM_DOMAIN}`,
						target: '_blank'
					},
					{
						iconHtml: '<img src="/assets/icons/projects/lost-children.png" alt="" />',
						href: `${LINK_PROJECT_LOSTCHILDREN}?ref=${PLATFORM_DOMAIN}`,
						target: '_blank'
					}
				]}
			/>
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#projects) {
		background: $color-white;

		.container {
			display: grid;
			grid-template-rows: auto auto;
			grid-template-areas:
				'content'
				'showcase';
			@include fluid(row-gap, 40, 80);

			.content {
				grid-area: content;
				margin: 0 auto;
				max-width: 720px;

				:global(.typography-title) {
					color: $color-gold--primary;
					text-align: center;
				}

				:global(.typography-text) {
					text-align: center;
				}
			}

			.showcase {
				grid-area: showcase;
			}
		}
	}
</style>
