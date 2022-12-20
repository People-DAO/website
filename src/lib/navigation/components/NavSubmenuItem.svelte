<script lang="ts">
	export let href: string | undefined;
	export let target: '_blank' | undefined;
	export let disabled = false;
</script>

<a
	class="
		flex items-start p-3 -m-3 rounded-lg
		{!disabled ? '' : 'opacity-30 cursor-not-allowed'} 
		hover:bg-navy-secondary/25
	"
	href={!disabled ? href : undefined}
	{target}
>
	<div class="h-6 w-6 shrink-0 text-gold-primary">
		<slot name="icon" />
	</div>
	<div class="font-medium text-white-primary ml-4">
		<slot />
	</div>
</a>
