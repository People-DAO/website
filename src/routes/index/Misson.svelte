<script lang="ts">
	import { Section } from '$layout/section';
	import { Title, Text } from '$components/typography';
	import { Button } from '$components/button';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import { LINK_SOCIAL_DISCORD } from '$constants/links/socials';
	import { LINK_DOCUMENT_CONSTITUTION } from '$constants/links/documents';

	import { scrollToId } from '$stores/layout/navigation';
</script>

<Section id="mission">
	<div class="container">
		<div class="content">
			<Title tag="h2">Mission</Title>
			<Text>
				PeopleDAO incubates subDAOs and projects that further web3 and social good because we
				believe blockchain technology can promote a freer, more prosperous, and vibrant world.
			</Text>
			<Text>
				Market activity around the $PEOPLE token acts like an engine for spreading our message.
			</Text>
			<Text>
				With every new incubation we build out a constellation of communities and protocols aligned
				around the same mission: let's invest in the alpha that will preserve our planet and advance
				humanity.
			</Text>
		</div>
		<div class="media">
			<img src="/assets/images/index_mission.png" alt="" />
		</div>
		<div class="actions">
			<Button variant="navy/white" href={LINK_SOCIAL_DISCORD} target="_blank">Join Discord</Button>
			<Button href={`${LINK_DOCUMENT_CONSTITUTION}?ref=${PLATFORM_DOMAIN}`} target="_blank">
				View Constitution
			</Button>
			<Button onClick={() => scrollToId('projects')}>Browse incubated projects</Button>
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#mission) {
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
					color: $color-navy--primary;
				}

				:global(.typography-text) {
					color: $color-black--primary;
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
