import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";
import { AnimatePresence, motion } from "framer-motion";
import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	return (
		<div className="navbar-container">
			<div></div>
			<div className="logo-containter">
				<Link className="logo" href={"/"}>
					<Logo />
				</Link>
				<div className="logo-text"> Warrior Tech</div>
			</div>

			<div className="cart-icon" onClick={() => setShowCart(!showCart)}>
				<span className="cart-item-qty">
					<div className="num">{totalQuantities}</div>
				</span>
				<FaShoppingCart className="cart" />
			</div>

			{showCart && <Cart />}
		</div>
	);
};

export default Navbar;
