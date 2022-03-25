<script lang="ts">
	import { Section, SectionTitle } from '$layout/section';
	import { WrapperWide } from '$layout/wrapper';
	import { Text } from '$components/text';
	import { Button, ButtonGroup } from '$components/button';
	import { Timeline, TimelineItem } from '$components/timeline';

	import ConstitutioDaoIcon from '$assets/icons/daos/constitution-dao.svg';
</script>

<section class="hero" id="top">
	<WrapperWide>
		<div class="container">
			<div class="title">
				<h1>
					A meta-DAO uniting $PEOPLE and<br />
					<span>supporting mission-driven projects</span>
				</h1>
			</div>
		</div>
	</WrapperWide>
</section>

<Section id="vision" cropped="bottom">
	<SectionTitle>Vision</SectionTitle>
	<Text size="large" width={80}>
		$PEOPLE Dao Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
		ullamco laboris nisi ut aliquip ex ea commodo consequat.
	</Text>
	<Text size="large" width={80}>
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</Text>
	<ButtonGroup>
		<Button target="_blank">Join Discord</Button>
		<Button>Active projects</Button>
	</ButtonGroup>
</Section>

<Section id="origins">
	<SectionTitle>Origins</SectionTitle>
	<Text size="large">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pharetra lacinia lacus, non
		viverra tellus tempor sit amet. Vestibulum elementum elit sed ligula gravida, vel congue risus
		faucibus.
	</Text>
	<div class="banner">
		<div class="container">
			<img
				src="/assets/images/constitutiondao/constitution-signing.jpg"
				alt="Signing of the Constitution of the United States"
			/>
			<div class="overlay">
				<ConstitutioDaoIcon />
			</div>
		</div>
	</div>
	<Timeline>
		<TimelineItem
			date="Nov '21"
			title="The Birth"
			description="An internet group decides to buy a copy of the US Constitution. They raise $45M but lose the auction. Many People DAO members were contributors to the effort."
		/>
		<TimelineItem
			date="Nov '21"
			title="The Token"
			description="Constitution DAO announces it will shutter. While some donators redeem their $PEOPLE others keep the token. The price moons 40x amid speculation. People DAO hosts its 1st Twitter Spaces."
		/>
		<TimelineItem
			date="Dec '21"
			title="People DAO"
			description="People DAO forms after a Snapshot vote on Dec 6th. Our Discord grows to almost 7,000 members as talent gathers and begins building the DAO's next chapter."
		/>
		<TimelineItem
			date="Dec '21"
			title="Decentralization"
			description="Constitution DAO reliquishes ownership of the $PEOPLE token contract. They close down their Discord, closing the chapter."
		/>
		<TimelineItem
			date="Now"
			title="The Current"
			description="The future is still being written. Current plans include issueing POAPs to the community, launching our treasury, and beginning collaboation with other DAOs."
		/>
	</Timeline>
</Section>

<style lang="scss">
	.hero {
		background: $color-background--tertiary;

		.container {
			@include fluid(padding-top, 128, 256);
			@include fluid(padding-bottom, 128, 256);
			background-image: url('/assets/images/globe.png');
			background-repeat: no-repeat;
			background-position: right bottom;
			background-size: 50%;

			.title {
				max-width: 70%;

				@include breakpoint($breakpoint--sm) {
					max-width: 100%;
				}

				h1 {
					@include typography-family--secondary;
					@include typography-size--max;
					font-weight: $font-weight--semi-bold;
					color: $color-text--tertiary;

					span {
						background: linear-gradient(to right, $color-brand--blue, $color-brand--purple);
						background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
			}
		}
	}

	:global(#origins) {
		.banner {
			display: flex;
			justify-content: center;
			@include spacing--max(margin-top);
			@include spacing--large(margin-bottom);

			.container {
				position: relative;
				max-width: 806px;

				img {
					display: block;
					width: 100%;
				}

				.overlay {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background: rgba($color-background--tertiary, 0.66);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					:global(svg) {
						width: 60%;
						height: auto;
					}
				}
			}
		}
	}
</style>
