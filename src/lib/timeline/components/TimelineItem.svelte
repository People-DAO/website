<script lang="ts">
	import { FormattedContent } from '$lib/formatted-content/components';

	export let date: string;
	export let title: string;
	export let description: string;

	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<li
	class:timeline-item={true}
	class="
		grid grid-cols-[auto_1fr] grid-rows-[auto-1fr] gap-x-4 md:gap-x-6 pb-10 overflow-y-hidden
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<div class:dot={true} class="w-12">
		<span />
	</div>
	<div class:date={true} class="flex flex-col text-lg">
		<span>{date}</span>
	</div>
	<div class:content={true} class="flex flex-col">
		<FormattedContent>
			<h4>{title}</h4>
			{@html description}
		</FormattedContent>
	</div>
</li>

<style lang="scss">
	.timeline-item {
		display: grid;
		grid-template-areas:
			'_ date'
			'dot content';

		.dot {
			grid-area: dot;
			position: relative;
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			padding-top: 7px;
			margin-bottom: auto;

			span {
				position: relative;
				display: block;
				width: 20px;
				height: 20px;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 50%;
				background: $color-navy--primary;
				z-index: 1;
			}

			&:after {
				content: '';
				position: absolute;
				top: -100vh;
				bottom: -100vh;
				width: 1px;
				left: 50%;
				transform: translateX(-50%);
				background: $color-black--primary;
			}
		}

		.date {
			grid-area: date;
		}

		.content {
			grid-area: content;
		}

		&:last-of-type {
			padding-bottom: 0;

			.dot {
				span {
					&:before,
					&:after {
						content: '';
						position: absolute;
						display: block;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 33px;
						height: 33px;
						border: 1px solid $color-navy--primary;
						border-radius: 50%;
					}

					&:after {
						width: 46px;
						height: 46px;
					}
				}

				&:after {
					bottom: 50%;
				}
			}
		}
	}
</style>
