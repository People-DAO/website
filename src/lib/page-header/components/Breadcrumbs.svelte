<script lang="ts">
	type Breadcrumb = {
		label: string;
		href: string;
	};

	export let items: Breadcrumb[];
</script>

<div class="flex text-base md:text-lg font-medium text-white-primary mb-4 space-x-2">
	{#each items as item}
		<div class="flex space-x-2">
			<span>{'/'}</span>
			<a class="transition-colors duration-150 hover:text-bronze-primary" href={item.href}>
				{item.label}
			</a>
		</div>
	{/each}
</div>
