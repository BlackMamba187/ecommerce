import React from "react";
import { productProps } from "../../props/Props";
import { urlFor } from "../../lib/client";
import Link from "next/link";

const Product = ({ data, }: productProps) => {
	let image: any = urlFor(data.image && data.image[0]);
	return (
		<div>
			<div className="product-card">
				<Link href={`/product/${data.slug.current}`}>
					<div className={`back`}>
						<div className="back2">
						<div className="img">
							<img src={image} className="product-image" />
						</div>
						<div className="content">
							<p className="product-name">{data.name}</p>
						</div>
						<div className="content-bot">
							<p className="product-price">£{data.price}</p>
						</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Product;
