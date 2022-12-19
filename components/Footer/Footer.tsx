import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaCcPaypal, FaCcStripe, FaCcVisa, FaShopify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="row">
				<div className="section">
					<h1>ABOUT US</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing eat. Totam nobis
						eius officia suscipit dolorum harum, quod, quia maxime voluptatibus
						repellendus labore qui, nam natus molestias illum veat autem ipsam
						perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quasi eaque iste rerum dicta porro tenetur non placeat quod?
						Quisquam ut excepturi, corporis officia iusto necessitatibus ratione
						commodi nemo rerum ipsum. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Esse, expedita nobis obcaecati, quisquam veritatis
						repudiandae eos explicabo quo alias tempore quae culpa nemo pariatur
						vero odit vitae doloremque cum ea!
					</p>
				</div>

				<div className="">
					<h1>SUPPORT</h1>
					<div className="list">
						<a>Shipping Info</a>
						<a>Privacy Policy</a>
						<a>Terms Of Service</a>
						<a>Refunds & Returns</a>
					</div>
				</div>

				<div className="">
					<h1>SOCIAL</h1>
					<div className="list">
						<p className="icons">
							<a href="https://www.instagram.com/">
								<AiFillInstagram />
							</a>

							<a href="help@warriortech.store">
								<MdEmail />
							</a>
						</p>
					</div>
				</div>
			</div>
			<p className="icons">
				{" "}
				<FaCcPaypal />
				<FaCcVisa /> <FaCcStripe /> <FaShopify />
			</p>
			<p>2023 WarriorTech All rights reserverd</p>
		</div>
	);
};

export default Footer;
