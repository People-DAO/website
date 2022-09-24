<script lang="ts">
	import { Wrapper } from '$layout/wrapper';
	import { Button } from '$components/button';

	import { PLATFORM_DOMAIN } from '$constants/util/platform';
	import { LINK_SOCIAL_DISCORD } from '$constants/links/socials';
	import { LINK_DOCUMENT_CONSTITUTION } from '$constants/links/documents';
</script>

<div class="hero">
	<Wrapper>
		<div class="container">
			<div class="title">
				<h1>Incubate public good<br />for the people</h1>
			</div>
			<div class="actions">
				<Button variant="gold/navy" href={LINK_SOCIAL_DISCORD} target="_blank">Join Discord</Button>
				<Button
					variant="transparent/white"
					href={`${LINK_DOCUMENT_CONSTITUTION}?ref=${PLATFORM_DOMAIN}`}
					target="_blank"
				>
					View Constitution
				</Button>
			</div>
		</div>
	</Wrapper>
	<div class="background">
		<div class="overlay" />
		<img src="/assets/images/index_hero.png" alt="" />
	</div>
</div>

<style lang="scss">
	.hero {
		position: relative;
		overflow: hidden;

		.container {
			display: grid;
			grid-template-rows: auto auto;
			grid-template-areas:
				'title'
				'actions';
			padding: 160px 0 380px; // @TODO

			.title {
				grid-area: title;
				display: flex;
				justify-content: center;

				h1 {
					@include typography-family--secondary;
					font-size: 96px; // @TODO
					line-height: 1.2;
					text-align: center;
					color: $color-gold--secondary;
				}
			}

			.actions {
				grid-area: actions;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.background {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: -2;
			overflow: hidden;

			&:after {
				content: '';
				position: absolute;
				display: block;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background: rgba($color-navy--primary, 0.75);
			}

			img {
				display: block;
				width: 100%;
				min-width: 100vw;
			}
		}
	}
</style>
