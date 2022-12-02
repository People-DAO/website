<script lang="ts">
	import { Wrapper } from '$lib/wrapper/components';
</script>

<div class:announcement-banner={true} {...$$restProps}>
	<Wrapper>
		<div class="container">
			<slot />
		</div>
	</Wrapper>
</div>

<style lang="scss">
	.announcement-banner {
		display: flex;
		background-color: $color-gold--secondary;
		@include spacing--nano(padding-top, padding-bottom);

		.container {
			display: flex;
			justify-content: center;
			align-items: center;

			:global(span),
			:global(p) {
				@include fluid(font-size, 16, 20);
				text-align: center;

				:global(a) {
					@include typography-family--secondary;
					font-style: italic;
					text-decoration: underline;
					color: $color-navy--primary;
					@include transition($transition--primary, opacity);

					&:hover {
						opacity: 0.6;
					}
				}
			}
		}
	}
</style>
