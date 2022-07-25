import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CoffeeShop() {
	const router = useRouter();
	console.log("router", router);
	return (
		<div>
			<Head>
				<title>{router.query.id} ☕️</title>
			</Head>
			<h1>Coffee Shop {router.query.id}</h1>
			<Link href="/">Back to home</Link>
		</div>
	);
}

export default CoffeeShop;
