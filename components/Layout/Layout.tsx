import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeroBanner from "../HeroBanner/HeroBanner";

const Layout = ({ children }: any) => {
	return (
		<div className="layout">
			<Head>
				<title>Warrior Tech</title>
			</Head>
			<header >
				<Navbar />
			</header>
			<main className="main-container">{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
