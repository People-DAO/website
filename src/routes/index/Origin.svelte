<script lang="ts">
	import { Section } from '$layout/section';
	import { Title, Text } from '$components/typography';
</script>

<Section id="origin">
	<div class="container">
		<div class="content">
			<Title tag="h2">Origin</Title>
			<Text>
				PeopleDAO was born from a web3 movement to buy a private copy of the US Constitution. When
				the project failed in its mission the developers burned control of the $PEOPLE token
				contract, sunsetting their involvement. A group of community members formed PeopleDAO and
				adopted $PEOPLE as its governance token, impressed by the meme coin's decentralization,
				capped supply, and inspiring history.
			</Text>
		</div>
		<div class="media">
			<img src="/assets/images/index_origin.png" alt="" />
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#origin) {
		background-color: $color-navy--primary;

		.container {
			display: grid;
			grid-template-columns: 2fr 3fr;
			grid-template-areas: 'media content';
			column-gap: 80px; // @TODO

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
		}
	}
</style>
