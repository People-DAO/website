<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';

	import { CircleAvatar } from '$lib/avatar/components';

	import { fetchData } from '$util/svelte-query/fetchData';

	import { PLATFORM_DOMAIN } from '$util/platform';

	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';
	import TwitterIcon from '$assets/icons/socials/twitter.svg?raw';

	import type { User } from '../types/user.type';

	export let user: User;

	let isLoading = true;
	let discordHandle: string;
	let discordAvatarUrl: string;

	$: userDiscordDataQuery = useQuery(['USER_DISCORD_DATA', user.username], () =>
		fetchData({ url: '/api/users/discord', params: { id: user.discordId } })
	);

	$: if ($userDiscordDataQuery?.isSuccess && $userDiscordDataQuery?.data) {
		discordHandle = `${$userDiscordDataQuery.data.username}#${$userDiscordDataQuery.data.discriminator}`;
		discordAvatarUrl = `https://cdn.discordapp.com/avatars/${$userDiscordDataQuery.data.id}/${$userDiscordDataQuery.data.avatar}`;
		isLoading = false;
	}

	$: if ($userDiscordDataQuery?.isError) {
		isLoading = false;
	}

	const { class: a, style: b, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class:user-profile={true}
	class="text-black-secondary text-sm {$$restProps.class || ''}"
	{...restProps}
>
	<div class:avatar={true}>
		<CircleAvatar>
			<img src={discordAvatarUrl} alt="" />
		</CircleAvatar>
	</div>
	<div class:username={true} class="text-lg font-medium">
		<span>{user.username}</span>
	</div>
	<div class:socials={true}>
		{#if discordHandle}
			<div class:social-item={true}>
				{@html DiscordIcon}
				<span>{discordHandle}</span>
			</div>
		{/if}
		{#if user.twitterHandle}
			<a
				class:social-item={true}
				class="transition-colors duration-150"
				href={`https://twitter.com/${user.twitterHandle}?ref=${PLATFORM_DOMAIN}`}
				target="_blank"
				rel="noreferrer"
			>
				{@html TwitterIcon}
				<span>{user.twitterHandle}</span>
			</a>
		{/if}
	</div>
</div>

<style lang="scss">
	.user-profile {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			'avatar username'
			'avatar socials';
		column-gap: 0.75rem;

		.avatar {
			grid-area: avatar;
			display: flex;
			flex-direction: column;
			justify-content: center;

			:global(.circle-avatar) {
				height: 4.5rem;
			}
		}

		.username {
			grid-area: username;
			display: flex;
		}

		.socials {
			grid-area: socials;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			.social-item {
				display: flex;
				align-items: center;
				fill: $color-black--secondary;

				:global(svg) {
					height: 1rem;
					width: auto;
					margin-right: 0.25rem;
				}
			}

			:global(a) {
				&:hover {
					color: $color-bronze--primary;
					fill: $color-bronze--primary;
				}
			}
		}
	}
</style>
