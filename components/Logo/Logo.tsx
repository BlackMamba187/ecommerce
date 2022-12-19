import React from "react";
import Image from "next/image";
import LogoPic from "../../data/logo.png";

const Logo = () => {
	return (
		<div className="containter-logo">
			<Image
				src={LogoPic}
				alt="logo"
				className="logo"
				
			/>
		</div>
	);
};

export default Logo;
