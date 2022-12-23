<script lang="ts">
	import { Wrapper } from '$lib/layout/components';
	import { FormattedContent } from '$lib/formatted-content/components';
</script>

<section
	name="page-header"
	class:page-header={true}
	class="w-full bg-[url('/assets/images/constitution1.png')] bg-cover bg-no-repeat bg-center"
>
	<div class="w-full h-full flex flex-col justify-center items-center bg-navy-primary/90">
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
				color: $color-gold--primary;
			}
		}
	}
</style>
