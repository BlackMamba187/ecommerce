import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

interface context {
	showCart: Boolean;
	loading: Boolean;
	cartItems: any;
	totalPrice: number;
	totalQuantities: number;
	qty: number;
	onAdd: any;
	setShowCart: any;
	incQty: any;
	decQty: any;
	toggleCartItemQuanitity: any;
	onRemove: any;
}
const Context = createContext({} as context);

export const StateContext = ({ children }: any) => {
	const [showCart, setShowCart] = useState(false);
	const [loading, setLoading] = useState(false);
	const [cartItems, setCartItems] = useState<Array<any>>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalQuantities, setTotalQuantities] = useState(0);
	const [qty, setQty] = useState(1);

	let foundProduct: { quantity: number; price: number };
	let index;

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);

	const incQty = () => {
		setQty((prevQty) => prevQty + 1);
	};

	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

	const onAdd = (product: any, quantity: number) => {
		setLoading(true);

		if (loading === true) {
			return;
		} else {
			setTimeout(() => {
				const checkProductInCart = cartItems.find(
					(item) => item._id === product._id
				);
				setTotalPrice(
					(prevTotalPrice) => prevTotalPrice + product.price * quantity
				);
				setTotalQuantities(
					(prevTotalQuantities) => prevTotalQuantities + quantity
				);

				if (checkProductInCart) {
					const updatedCartItems = cartItems.map((cartProduct) => {
						if (cartProduct._id === product._id)
							return {
								...cartProduct,
								quantity: cartProduct.quantity + quantity,
							};
					});
					setCartItems(updatedCartItems);
				} else {
					product.quantity = quantity;
					setCartItems([...cartItems, { ...product }]);
				}
				toast.success(`${qty} ${product.name} added to the cart.`, {
					position: "bottom-right",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});
				setQty(1);
				setLoading(false);
			}, 2000);
		}
	};

	const toggleCartItemQuanitity = (id: any, value: string) => {
		foundProduct = cartItems.find((item) => item._id === id);
		index = cartItems.findIndex((product) => product._id === id);
		const newCartItems = cartItems.filter((item) => item._id !== id);

		if (value === "inc") {
			setCartItems([
				...newCartItems,
				{ ...foundProduct, quantity: foundProduct.quantity + 1 },
			]);
			setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		} else if (value === "dec") {
			if (foundProduct.quantity > 1) {
				setCartItems([
					...newCartItems,
					{ ...foundProduct, quantity: foundProduct.quantity - 1 },
				]);
				setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
				setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
			}
		}
	};

	const onRemove = (product: { _id: any }) => {
		foundProduct = cartItems.find((item) => item._id === product._id);
		const newCartItems = cartItems.filter((item) => item._id !== product._id);

		setTotalPrice(
			(prevTotalPrice) =>
				prevTotalPrice - foundProduct.price * foundProduct.quantity
		);
		setTotalQuantities(
			(prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
		);
		setCartItems(newCartItems);
	};
	return (
		<Context.Provider
			value={{
				showCart,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				loading,
				onAdd,
				setShowCart,
				incQty,
				decQty,
				toggleCartItemQuanitity,
				onRemove,
			}}
		>
			{children}
		</Context.Provider>
	);
};
export const useStateContext = () => useContext(Context);
