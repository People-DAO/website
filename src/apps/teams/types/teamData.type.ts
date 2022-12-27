import type { User } from '$apps/users/types/user.type';

export type TeamData = {
	metadata: {
		title: string;
		slug: string;
		priority: number;
		logoUrl: string;
		leads: User['username'][];
	};
	component: any;
};
