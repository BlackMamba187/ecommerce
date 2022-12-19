import React, { useState } from "react";
import {
	AiFillStar,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import ButtonLoader from "../../components/ButtonLoader/ButtonLoader";
import StarReview from "../../components/StarReview/StarReview";
import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";
import { productDetailsProps } from "../../props/Props";

const ProductDetails = ({ products, product }: productDetailsProps) => {
	const [index, setIndex] = useState(0);
	const { decQty, incQty, qty, onAdd, loading } = useStateContext();
	let image: any = urlFor(product.image && product.image[index]);
	return (
		<div>
			
				<div className="product-detail-container">
					<div>
						<div className="image-container">
							<img src={image} className="product-detail-image" />
						</div>
						<div className="small-images-container">
							{product.image?.map((item: any, i: number) => {
								let Src: any = urlFor(item);
								return (
									<img
										key={i}
										src={Src}
										className={
											i === index ? "small-image selected-image" : "small-image"
										}
										onClick={() => setIndex(i)}
									/>
								);
							})}
						</div>

						<div className="product-detail-desc">
							<h1>{product.name}</h1>
							<StarReview />
							<h4>Details: </h4>
							<p>{product.details}</p>
							<p className="price">£{product.price}</p>
							<div className="quantity">
								<h3>Quantity:</h3>
								<p className="quantity-desc">
									<span className="minus" onClick={decQty}>
										<AiOutlineMinus />
									</span>
									<span className="num">{qty}</span>
									<span className="plus" onClick={incQty}>
										<AiOutlinePlus />
									</span>
								</p>
							</div>
							<div className="buttons">
								<button
									type="button"
									className="add-to-cart"
									onClick={() => onAdd(product, qty)}
								>
									{!loading ? (
										"Add to Cart"
									) : (
										<div>
											<ButtonLoader />
										</div>
									)}
								</button>
								<button type="button" className="buy-now">
									Buy Now
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="maylike-products-wrapper">
					<h2>You may also like</h2>
					<div className="products-container">
						{products?.map((product: any) => (
							<Product key={product._id} data={product} />
						))}
					</div>
				</div>
			
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

	const products = await client.fetch(query);

	const paths = products.map((product: { slug: { current: string } }) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }: any) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
	const productsQuery = '*[_type == "product"]';

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);

	return {
		props: { products, product },
	};
};

export default ProductDetails;
