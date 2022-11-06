<script lang="ts">
	import { Section } from '$layout/section';
	import { Title, Text } from '$components/typography';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
</script>

<Section id="origin">
	<div class="container">
		<div class="content">
			<Title tag="h2">Origin</Title>
			<Text>
				PeopleDAO was born from a web3 movement to buy a private copy of the US Constitution. When
				the project failed in its mission the developers burned control of the $PEOPLE token
				contract,
				<a
					href={`https://twitter.com/ConstitutionDAO/status/1470970371025293317?ref=${PLATFORM_DOMAIN}`}
					target="_blank"
				>
					sunsetting their involvement
				</a>. A group of community members formed PeopleDAO and adopted $PEOPLE as its governance
				token, impressed by the meme coin's decentralization, capped supply, and inspiring history.
			</Text>
		</div>
		<div class="media">
			<img src="/assets/images/index_origin.png" alt="" />
		</div>
	</div>
</Section>

<style lang="scss">
	:global(#origin) {
		$breakpoint--mobile: $breakpoint--medium;

		background: $color-navy--primary;

		.container {
			display: grid;
			grid-template-columns: 2fr 3fr;
			grid-template-areas: 'media content';
			@include fluid(column-gap, 60, 80);

			@include breakpoint($breakpoint--mobile) {
				grid-template-columns: auto;
				grid-template-rows: auto;
				grid-template-areas: 'content';
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
		}
	}
</style>
