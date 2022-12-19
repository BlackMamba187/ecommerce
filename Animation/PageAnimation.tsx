import React from "react";

export const PageAnimation = {
	initial: { opacity: 0, y: 28 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0 },
	transition: { duration: 0.4, ease: [0.61, 1, 0.88, 1] },
};

export const CartAnimation = {
	initial: { width: "20%", opacity: 0, },
	animate: { width: "100%", opacity: 1 },
	exit: {width: "20%", opacity: 0 },
	transition: { type: "spring", bounce: 0, duration: 1 },
};
