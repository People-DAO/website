<script lang="ts">
	import { Wrapper } from '$lib/layout/components';
	import { Logo } from '$lib/logo/components';
	import { Link } from '$lib/link/components';
	import { SocialsMenu } from '$lib/navigation/components';

	import {
		LINK_SOCIAL_GITHUB,
		LINK_SOCIAL_MIRROR
	} from '$lib/link/constants/socialLinks.constants';
	import {
		LINK_TOOL_DEWORK,
		LINK_TOOL_NOTION,
		LINK_TOOL_BIPSO,
		LINK_TOOL_GNOSISSAFE,
		LINK_TOOL_SNAPSHOT
	} from '$lib/link/constants/toolLinks.constants';
	import {
		LINK_TOKEN_ETHERSCAN,
		LINK_TOKEN_COINMARKETCAP,
		LINK_TOKEN_COINGECKO
	} from '$lib/link/constants/tokenLinks.constants';
</script>

<footer
	class="w-full mt-auto pt-16 pb-6 bg-navy-primary text-white-primary  border-t border-gold-primary"
>
	<Wrapper class="footer-container">
		<div class:brand={true} class="flex flex-col space-y-4">
			<a class="flex mr-auto" href="/">
				<Logo class="h-10 text-white-primary" />
			</a>
			<span class="font-medium italic capitalize">Incubate public good<br />for the people</span>
		</div>
		<SocialsMenu class="socials text-white-primary" />
		<div class:nav={true} class="font-medium">
			<div class="grid gap-3 mb-auto">
				<span class="font-medium text-gold-primary">Resources</span>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOOL_NOTION}
					target="_blank">Notion</Link
				>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOOL_BIPSO}
					target="_blank">Bip.so</Link
				>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_SOCIAL_GITHUB}
					target="_blank">Github</Link
				>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_SOCIAL_MIRROR}
					target="_blank">Mirror</Link
				>
			</div>
			<div class="grid gap-3 mb-auto">
				<span class="font-medium text-gold-primary">Governance</span>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOOL_GNOSISSAFE}
					target="_blank">Gnosis Safe</Link
				>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOOL_SNAPSHOT}
					target="_blank">Snapshot</Link
				>
			</div>
			<div class="grid gap-3 mb-auto">
				<span class="font-medium text-gold-primary">$PEOPLE</span>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOKEN_ETHERSCAN}
					target="_blank">Etherscan</Link
				>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOKEN_COINMARKETCAP}
					target="_blank">CoinMarketCap</Link
				>
				<Link
					class="flex items-start p-2 -m-2 rounded-lg hover:bg-navy-secondary/25"
					href={LINK_TOKEN_COINGECKO}
					target="_blank">CoinGecko</Link
				>
			</div>
		</div>
	</Wrapper>
</footer>

<style lang="scss">
	:global(.footer-container) {
		display: grid;
		grid-template-areas:
			'brand'
			'nav'
			'socials';
		grid-template-columns: 1fr;
		grid-row-gap: 3rem;

		@include breakpoint($breakpoint--lg) {
			grid-template-areas:
				'brand nav'
				'socials nav';
			grid-template-columns: 1fr 1fr;
			grid-row-gap: 3rem;
		}

		.brand {
			grid-area: brand;
		}

		:global(.socials) {
			grid-area: socials;
		}

		.nav {
			grid-area: nav;
			display: grid;
			grid-template-rows: auto auto auto;
			row-gap: 2rem;

			@include breakpoint($breakpoint--md) {
				grid-template-rows: auto;
				grid-template-columns: 1fr 1fr 1fr;
				column-gap: 3rem;
			}
		}
	}
</style>
