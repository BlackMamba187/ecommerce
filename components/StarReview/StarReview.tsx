import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarReview = () => {
	return (
		<div className="reviews">
			<div>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiOutlineStar />
			</div>
			<p>(20)</p>
		</div>
	);
};

export default StarReview;
