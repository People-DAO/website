type LoadPayload = {
	params: {
		file_path: string;
	};
};

export const load = ({ params }: LoadPayload) => {
	return { params };
};
