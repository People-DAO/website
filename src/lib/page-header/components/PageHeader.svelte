<script lang="ts">
	import { Wrapper } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
</script>

<section name="page-header" class:page-header={true} class="relative w-full overflow-hidden">
	<div class="absolute inset-0 flex justify-center items-center">
		<img
			class="h-full w-full max-h-none max-w-none object-cover"
			src="/assets/images/constitution1.png"
			alt=""
			loading="lazy"
		/>
	</div>
	<div class="relative w-full h-full flex flex-col justify-center items-center bg-navy-primary/90">
		<Wrapper class="flex flex-col justify-center py-16">
			{#if $$slots.breadcrumbs}
				<slot name="breadcrumbs" />
			{/if}
			<FormattedContent class="title uppercase">
				<slot />
			</FormattedContent>
		</Wrapper>
	</div>
</section>

<style lang="scss">
	.page-header {
		:global(.title) {
			:global(h1) {
				font-size: 1.8em;
				color: $color-gold--primary;

				@include breakpoint($breakpoint--md) {
					font-size: 2.8em;
				}
			}
		}
	}
</style>
