<script lang="ts">
	export const _ = undefined;
	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div class={$$restProps.class || ''} class:button-group={true} {...restProps}>
	<slot />
</div>

<style lang="scss">
	.button-group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		:global(a),
		:global(button) {
			display: flex;
			margin-right: 0;
			margin-bottom: 0.5rem;
		}

		@include breakpoint($breakpoint--md) {
			flex-direction: row;
			align-items: center;
			flex-wrap: wrap;

			:global(a),
			:global(button) {
				margin-right: 0.5rem;

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
</style>
