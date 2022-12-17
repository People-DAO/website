export type OpenGraph = {
	title?: string;
	description?: string;
	url?: string;
	type?: string;
	article?: OpenGraphArticle;
	images?: OpenGraphImage[];
};

export type OpenGraphArticle = {
	publishedTime?: string;
	modifiedTime?: string;
	expirationTime?: string;
	section?: string;
	authors?: string[];
	tags?: string[];
};

export type OpenGraphImage = {
	url: string;
	alt?: string;
	width?: number | string;
	height?: number | string;
};

export type Twitter = {
	card?: TwitterCard;
	site?: string;
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	player?: string;
	playerWidth?: number;
	playerHeight?: number;
};

export type TwitterCard = 'summary' | 'summary_large_image' | 'player';
