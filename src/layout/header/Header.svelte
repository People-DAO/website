<script lang="ts">
	import { WrapperWide } from '$layout/wrapper';
	import { Button } from '$components/button';

	import PeopleDaoLogo from '$assets/icons/daos/people-dao.svg';

	import { SOCIAL_DISCORD } from '$constants/socials';
</script>

<header>
	<WrapperWide>
		<div class="container">
			<a class="logo" href="/">
				<PeopleDaoLogo />
			</a>
			<nav>
				<a href="#vision">Vision</a>
				<a href="#origins">Origins</a>
				<Button href={SOCIAL_DISCORD} target="_blank" class="button--discord">Join Discord</Button>
			</nav>
		</div>
	</WrapperWide>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: $color-background--tertiary;
		@include spacing--micro(padding-top, padding-bottom);
		z-index: 1000;

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.logo {
				:global(svg) {
					@include spacing--max(height);
					width: auto;
					fill: $color-text--tertiary;
				}
			}

			nav {
				display: flex;
				align-items: center;

				a {
					@include typography-family--secondary;
					@include typography-size--base;
					font-weight: $font-weight--semi-bold;
					color: $color-text--tertiary;
					@include spacing--max(margin-right);

					&:last-of-type {
						margin-right: 0;
					}
				}

				:global(a.button--discord) {
					position: relative;

					&::before {
						opacity: 1;
					}

					:global(span),
					:global(svg) {
						color: $color-text--tertiary;
					}

					&:hover {
						:global(span),
						:global(svg) {
							color: $color-text--primary;
						}
					}
				}
			}
		}
	}
</style>
