<script lang="ts">
	import { Link } from '$lib/link/components';

	import {
		LINK_SOCIAL_TWITTER,
		LINK_SOCIAL_DISCORD,
		LINK_SOCIAL_GITHUB,
		LINK_SOCIAL_MIRROR
	} from '$lib/link/constants/socialLinks.constants';

	import TwitterIcon from '$assets/icons/socials/twitter.svg?raw';
	import DiscordIcon from '$assets/icons/socials/discord.svg?raw';
	import GithubIcon from '$assets/icons/socials/github.svg?raw';
	import MirrorIcon from '$assets/icons/socials/mirror.svg?raw';

	export const _ = undefined;
	const { class: a, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class="
		flex items-center space-x-4
		{$$restProps.class || ''}
	"
	{...restProps}
>
	<Link
		class="p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
		href={LINK_SOCIAL_TWITTER}
		target="_blank"
	>
		<div class="icon h5 w-5">
			{@html TwitterIcon}
		</div>
	</Link>
	<Link
		class="p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
		href={LINK_SOCIAL_DISCORD}
		target="_blank"
	>
		<div class="icon h5 w-5">
			{@html DiscordIcon}
		</div>
	</Link>
	<Link
		class="p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
		href={LINK_SOCIAL_GITHUB}
		target="_blank"
	>
		<div class="icon h5 w-5">
			{@html GithubIcon}
		</div>
	</Link>
	<Link
		class="p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
		href={LINK_SOCIAL_MIRROR}
		target="_blank"
	>
		<div class="icon h5 w-5">
			{@html MirrorIcon}
		</div>
	</Link>
</div>

<style lang="scss">
	.icon {
		:global(svg) {
			height: 100%;
			width: auto;
			fill: currentColor;
		}
	}
</style>
