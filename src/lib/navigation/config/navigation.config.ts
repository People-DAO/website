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
	ReportsIcon
} from '@indaco/svelte-iconoir';

import type { SvelteComponentTyped } from 'svelte/internal';

import { LINK_SOCIAL_MIRROR } from '$lib/link/constants/socialLinks.constants';
import { LINK_TOOL_SNAPSHOT } from '$lib/link/constants/toolLinks.constants';
import {
	LINK_INCUBATOR_ABOUT,
	LINK_INCUBATOR_HOWTOAPPLY
} from '$lib/link/constants/incubatorLinks.constants';

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
				label: '$PEOPLE token',
				icon: BankIcon,
				disabled: true
			},
			{
				label: 'Teams',
				icon: PackagesIcon,
				href: '/teams'
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
		label: 'Incubator',
		icon: PotionIcon,
		subItems: [
			{
				label: 'About',
				icon: InfoEmptyIcon,
				href: LINK_INCUBATOR_ABOUT,
				target: '_blank'
			},
			{
				label: 'How to apply',
				icon: MailOutIcon,
				href: LINK_INCUBATOR_HOWTOAPPLY,
				target: '_blank'
			},
			{
				label: 'Incubated projects',
				icon: LeaderboardStarIcon,
				href: '/incubator/projects'
			}
		]
	}
];
