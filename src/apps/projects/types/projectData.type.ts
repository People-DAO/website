import type { User } from '$apps/users/types/user.type';

export type ProjectData = {
	metadata: {
		title: string;
		slug: string;
		priority: number;
		logoUrl: string;
		links: {
			website?: string;
			twitterHandle?: string;
			discordCode?: string;
		};
		leads: User['username'][];
		stewards: User['username'][];
	};
	component: any;
};
