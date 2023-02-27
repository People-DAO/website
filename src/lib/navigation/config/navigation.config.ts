import {
	AddUserIcon,
	BankIcon,
	CalendarIcon,
	GroupIcon,
	InfoEmptyIcon,
	LeaderboardStarIcon,
	MailOutIcon,
	PackagesIcon,
	PageIcon,
	PageFlipIcon,
	PotionIcon,
	ReportsIcon,
	TournamentIcon
} from '@indaco/svelte-iconoir';

import type { SvelteComponentTyped } from 'svelte/internal';

import { LINK_SOCIAL_MIRROR } from '$lib/link/constants/socialLinks.constants';
import { LINK_TOOL_SNAPSHOT } from '$lib/link/constants/toolLinks.constants';
import {
	LINK_ACCELERATOR_ABOUT,
	LINK_ACCELERATOR_HOWTOAPPLY
} from '$lib/link/constants/acceleratorLinks.constants';

type NavigationItem = {
	label: string;
	icon: new (...args: any) => SvelteComponentTyped;
	href?: string;
	target?: '_blank';
	disabled?: boolean;
	subItems?: NavigationItem[];
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
	{
		label: 'Community',
		icon: GroupIcon,
		subItems: [
			{
				label: 'How to join',
				icon: AddUserIcon,
				disabled: true
			},
			{
				label: 'Posts',
				icon: PageIcon,
				href: LINK_SOCIAL_MIRROR,
				target: '_blank'
			},
			{
				label: 'Events',
				icon: CalendarIcon,
				disabled: true
			}
		]
	},
	{
		label: 'Governance',
		icon: BankIcon,
		subItems: [
			{
				label: 'Structure',
				icon: TournamentIcon,
				href: '/governance/structure'
			},
			{
				label: 'Teams',
				icon: PackagesIcon,
				href: '/teams'
			},
			{
				label: '$PEOPLE token',
				icon: BankIcon,
				href: '/governance/people-token'
			},
			{
				label: 'Proposals',
				icon: PageFlipIcon,
				href: LINK_TOOL_SNAPSHOT,
				target: '_blank'
			},
			{
				label: 'Reports',
				icon: ReportsIcon,
				disabled: true
			}
		]
	},
	{
		label: 'Accelerator',
		icon: PotionIcon,
		subItems: [
			{
				label: 'About',
				icon: InfoEmptyIcon,
				href: LINK_ACCELERATOR_ABOUT,
				target: '_blank'
			},
			{
				label: 'How to apply',
				icon: MailOutIcon,
				href: LINK_ACCELERATOR_HOWTOAPPLY,
				target: '_blank'
			},
			{
				label: 'Accelerated projects',
				icon: LeaderboardStarIcon,
				href: '/accelerator/projects'
			}
		]
	}
];
