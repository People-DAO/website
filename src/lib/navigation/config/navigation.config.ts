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
				href: 'https://peopledao.mirror.xyz',
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
				href: '/teams',
				disabled: true
			},
			{
				label: 'Proposals',
				icon: PageFlipIcon,
				href: 'https://snapshot.org/#/people-dao.eth',
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
				href: 'https://bip.so/peopledao/incubator-v2.0-31153c',
				target: '_blank'
			},
			{
				label: 'How to apply',
				icon: MailOutIcon,
				href: 'https://bip.so/peopledao/proposal-template-31160c',
				target: '_blank'
			},
			{
				label: 'Incubatees',
				icon: LeaderboardStarIcon,
				href: 'https://bip.so/peopledao/incubatees-33397c',
				target: '_blank'
			}
		]
	}
];
