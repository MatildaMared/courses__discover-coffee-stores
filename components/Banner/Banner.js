import React from "react";
import styles from "./Banner.module.css";

function Banner({ handleClick }) {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Coffee <span>Connoisseur</span> ☕️
			</h1>
			<p className={styles.subtitle}>Discover your local coffee shops!</p>
			<button onClick={handleClick} className={styles.button}>
				View stores nearby
			</button>
		</div>
	);
}

export default Banner;
