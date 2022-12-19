import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";
import { heroBannerPops } from "../../props/Props";

const HeroBanner = ({ heroBanner }: heroBannerPops) => {
	let image: any = urlFor(heroBanner.image);
	return (
		<div className="hero-banner-container">
			<div>
				<p className="small">{heroBanner.smallText}</p>
				<h3>{heroBanner.midText}</h3>
				<h1>{heroBanner.largeText}</h1>
				<img src={image} alt="headphones" className="hero-banner-image" />

				<div>
					<Link href={`/product/${heroBanner.slug.current}`}>
						<button type="button">{heroBanner.buttonText}</button>
					</Link>
					<div className="desc">
						<h5>Description</h5>
						<p>{heroBanner.desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
