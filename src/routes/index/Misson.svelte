<script lang="ts">
	import { Section } from '$lib/section/components';
	import { Title, Text } from '$lib/typography/components';
	import { ButtonGroup, Button } from '$lib/button/components';

	import { PLATFORM_DOMAIN } from '$util/platform';
	import { LINK_SOCIAL_DISCORD } from '$lib/navigation/constants/socialLinks.constants';
	import { LINK_DOCUMENT_CONSTITUTION } from '$lib/navigation/constants/documentLinks.constants';

	import { scrollToId } from '$lib/navigation/stores/navigation.store';
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
			<ButtonGroup>
				<Button variant="navy/white" href={LINK_SOCIAL_DISCORD} target="_blank">
					Join Discord
				</Button>
				<Button href={`${LINK_DOCUMENT_CONSTITUTION}?ref=${PLATFORM_DOMAIN}`} target="_blank">
					View Constitution
				</Button>
				<Button onClick={() => scrollToId('projects')}>Browse incubated projects</Button>
			</ButtonGroup>
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#mission) {
		$breakpoint--mobile: $breakpoint--medium;

		background: $color-white;

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
					color: $color-navy--primary;
				}

				:global(.typography-text) {
					color: $color-black--primary;

					&:last-of-type {
						margin-bottom: 0;
					}
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
