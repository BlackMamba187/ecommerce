export type HomeProps = {
	techProducts: any;
	gymProducts : any
	bannerData: any;
	footerData: any;
};

export type heroBannerPops = {
	heroBanner: {
		image: string;
		buttonText: string;
		desc: string;
		name: string
		smallText: string;
		midText: string;
		largeText: string;
		discount: string;
		saleTime: string;
		slug: { current: string };
	};
};

export type productProps = {
	data: {
		image: string;
		name: string;
		slug: { current: string };
		price: string;
	};
};

export type productDetailsProps = {
	product: any;
	products: any;
};
export type footerBannerProps = {
	footerData: {
		discount: string;
		largeText1: string;
		saleTime: string;
		smallText: string;
		midText: string;
		desc: string;
		product: string;
		buttonText: string;
		image: string;
	};
};
