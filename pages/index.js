import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner/Banner";

export default function Home() {
	const onBannerClick = () => {
		console.log("Banner clicked");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseur ☕️</title>
				<meta
					name="description"
					content="Find a coffee shop close to you"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner handleClick={onBannerClick} />
			</main>
		</div>
	);
}
