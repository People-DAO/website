<script lang="ts">
	import { Section } from '$layout/section';
	import { Title, Text } from '$components/typography';
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
			<span style="background: red;">@TODO: showcase carousel</span>
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
