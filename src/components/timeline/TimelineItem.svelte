<script lang="ts">
	import { Title, Text } from '$components/typography';

	export let date: string;
	export let title: string;
	export let description: string;
</script>

<li class:timeline-item={true} {...$$restProps}>
	<div class="dot">
		<span />
	</div>
	<div class="date">
		<Title tag="span" size="medium">{date}</Title>
	</div>
	<div class="content">
		<Title tag="span" size="small">{title}</Title>
		<Text size="small">{@html description}</Text>
	</div>
</li>

<style lang="scss">
	.timeline-item {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-areas: 'date dot content';
		column-gap: 110px; // @TODO
		padding: 50px; // @TODO
		overflow: hidden;

		.dot {
			grid-area: dot;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;

			span {
				position: relative;
				display: block;
				width: 20px;
				height: 20px;
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
			display: flex;
			flex-direction: column;
			justify-content: center;

			:global(.typography-title) {
				text-transform: none;
				text-align: right;
				color: $color-navy--primary;
			}
		}

		.content {
			grid-area: content;

			:global(.typography-title) {
				text-transform: none;
				color: $color-navy--primary;
			}
		}

		&:nth-of-type(2n) {
			grid-template-areas: 'content dot date';

			.date {
				:global(.typography-title) {
					text-align: left;
				}
			}
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
						width: 30px;
						height: 30px;
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
