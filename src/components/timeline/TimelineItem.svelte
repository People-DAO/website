<script lang="ts">
	import { Text } from '$components/text';

	export let date: string;
	export let title: string;
	export let description: string;
</script>

<li class:timeline-item={true} {...$$restProps}>
	<div class="dot">
		<span />
	</div>
	<div class="date">
		<span>{date}</span>
	</div>
	<div class="title">
		<h5>{title}</h5>
	</div>
	<div class="description">
		<Text>{@html description}</Text>
	</div>
</li>

<style lang="scss">
	.timeline-item {
		display: grid;
		grid-template-columns: 100px 12px 1fr;
		grid-template-rows: auto 1fr;
		@include spacing--nano(row-gap);
		@include spacing--medium(column-gap);
		@include spacing--large(padding-bottom);
		overflow: hidden;

		@include breakpoint($breakpoint--sm) {
			grid-template-columns: 12px 1fr;
			grid-template-rows: auto auto 1fr;
		}

		.dot {
			position: relative;
			grid-column: 2/3;
			grid-row: 1/2;
			display: flex;
			flex-direction: column;
			justify-content: center;

			@include breakpoint($breakpoint--sm) {
				grid-column: 1/2;
			}

			&::after {
				content: '';
				position: absolute;
				top: -100vh;
				bottom: -100vh;
				left: 5px;
				width: 2px;
				background-color: rgba($color-text--secondary, 0.25);
			}

			span {
				display: block;
				width: 12px;
				height: 12px;
				background: $color-text--secondary;
				border-radius: 50%;
				z-index: 1;
			}
		}

		.date {
			grid-column: 1/2;
			grid-row: 1/2;
			display: flex;
			justify-content: flex-end;
			margin-right: -20px;

			@include breakpoint($breakpoint--sm) {
				grid-column: 2/3;
				justify-content: flex-start;
				margin-right: 0;
			}

			span {
				@include typography-size--medium;
				font-weight: $font-weight--semi-bold;
			}
		}

		.title {
			grid-column: 3/4;
			grid-row: 1/2;
			display: flex;
			align-items: center;

			@include breakpoint($breakpoint--sm) {
				grid-column: 2/3;
				grid-row: 2/3;
			}

			h5 {
				@include typography-family--secondary;
				@include typography-size--base;
				font-weight: $font-weight--semi-bold;
				color: $color-text--secondary;
			}
		}

		.description {
			grid-column: 3/4;
			grid-row: 2/3;

			@include breakpoint($breakpoint--sm) {
				grid-column: 2/3;
				grid-row: 3/4;
			}

			:global(p) {
				@include typography-size--small;
			}
		}

		&:first-of-type {
			.dot::after {
				top: 50%;
			}
		}

		&:last-of-type {
			.dot::after {
				bottom: 50%;
			}
		}
	}
</style>
