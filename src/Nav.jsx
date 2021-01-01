import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="NETFLIX"
				className="nav__logo"
			/>
			<img
				className="nav__avatar"
				src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3.png"
				alt=""
			/>
		</div>
	);
}

export default Nav;
