import type { MdsvexDocument } from '$util/mdsvex';

import type { User } from '../types/user.type';

export const getUser = (username: User['username']) => {
	const users = Object.entries(import.meta.glob('/content/users/*.md', { eager: true })).map(
		([, u]) => {
			const userDocument = u as MdsvexDocument;
			return {
				...userDocument.metadata
			} as User;
		}
	);

	const user = users.find((u) => username?.toLowerCase() === u.username?.toLowerCase());

	return user;
};
