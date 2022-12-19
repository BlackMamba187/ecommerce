import React from "react";
import { client } from "../lib/client";
import { Product, HeroBanner } from "../components";
import { HomeProps } from "../props/Props";
import Link from "next/link";

const Home = ({
	techProducts,
	gymProducts,
	bannerData,
	footerData,
}: HomeProps) => (
	<div>
		<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
		<div className="products-heading">
			<div className="heading">
				{" "}
				<div></div>
				<h2>Best Tech Products</h2>
				<Link href={`All-products`}>
					<div className="hover">more</div>
				</Link>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum
				vel minus, blanditiis sint beatae vero cum libero dolor aliquid ut
				consectetur ipsam repudiandae ea excepturi debitis eius. Fugiat,
				asperiores?
			</p>
		</div>

		<div className="products-container">
			{techProducts?.map((product: any) => (
				<Product key={product._id} data={product} />
			))}
		</div>
		<div className="products-heading">
			<div className="heading">
				{" "}
				<div></div>
				<h2>Best Gym Products</h2>
				<Link href={`All-products`}>
					<div className="hover">more</div>
				</Link>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatum
				vel minus, blanditiis sint beatae vero cum libero dolor aliquid ut
				consectetur ipsam repudiandae ea excepturi debitis eius. Fugiat,
				asperiores?
			</p>
		</div>
		<div className="products-container">
			{gymProducts?.map((product: any) => (
				<Product key={product._id} data={product} />
			))}
		</div>
		<HeroBanner heroBanner={bannerData.length && bannerData[0]} />
	</div>
);
export const getServerSideProps = async () => {
	const techQuery = '*[_type == "product" && category == "1"]';
	const techProducts = await client.fetch(techQuery);

	const gymQuery = '*[_type == "product" && category == "2"]';
	const gymProducts = await client.fetch(gymQuery);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	const footerQuery = '*[_type == "footer"]';
	const footerData = await client.fetch(footerQuery);
	return {
		props: { techProducts, gymProducts, bannerData, footerData },
	};
};

export default Home;
