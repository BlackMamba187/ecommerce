import Link from "next/link";
import React, { useRef } from "react";
import {
	AiOutlineLeft,
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineShopping,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { BsTrash } from "react-icons/bs";
import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import { CartAnimation } from "../../Animation/PageAnimation";

const Cart = () => {
;
	const {
		totalPrice,
		totalQuantities,
		cartItems,
		setShowCart,
		toggleCartItemQuanitity,
		onRemove,
	} = useStateContext();

	let RoundedPrice = totalPrice.toFixed(2);

	return (
		<div className="cart-wrapper" >
			<motion.div
				initial={CartAnimation.initial}
				animate={CartAnimation.animate}
				exit={CartAnimation.exit}
				transition={CartAnimation.transition}
				className="cart-container"
			>
				<button
					type="button"
					className="cart-heading"
					onClick={() => setShowCart(false)}
				>
					<FaTimes />
				</button>
				<div className="cart-title">
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({totalQuantities} items)</span>
				</div>
				{cartItems.length < 1 && (
					<div className="empty-cart">
						<AiOutlineShopping size={150} />
						<h3>Your shopping bag is empty</h3>

						<button
							type="button"
							onClick={() => setShowCart(false)}
							className="btn"
						>
							Continue Shopping
						</button>
					</div>
				)}
				<div className="product-container">
					{cartItems.length >= 1 &&
						cartItems.map((item: any) => {
							let image: any = urlFor(item?.image[0]);
							return (
								<div className="product" key={item._id}>
									<img src={image} className="cart-product-image" />
									<div className="item-desc">
										<div className="flex top">
											<h5>{item.name}</h5>
											<h4>£{item.price}</h4>
										</div>
										<div className="flex bottom">
											<div>
												<p className="quantity-desc">
													<span
														className="minus"
														onClick={() =>
															toggleCartItemQuanitity(item._id, "dec")
														}
													>
														<AiOutlineMinus />
													</span>
													<span className="num">{item.quantity}</span>
													<span
														className="plus"
														onClick={() =>
															toggleCartItemQuanitity(item._id, "inc")
														}
													>
														<AiOutlinePlus />
													</span>
												</p>
											</div>
											<button
												type="button"
												className="remove-item"
												onClick={() => onRemove(item)}
											>
												<BsTrash />
											</button>
										</div>
									</div>
								</div>
							);
						})}
				</div>

				{cartItems.length >= 1 && (
					<div className="cart-bottom">
						<div className="total">
							<h3>Subtotal:</h3>
							<h3>£{RoundedPrice}</h3>
						</div>
						<div className="btn-container">
							<button type="button" className="btn">
								Pay with PayPal
							</button>
						</div>
					</div>
				)}
			</motion.div>
		</div>
	);
};

export default Cart;
