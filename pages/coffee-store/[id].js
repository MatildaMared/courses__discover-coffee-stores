import { useRouter } from "next/router";
import React from "react";

function CoffeeStore() {
	const router = useRouter();
	console.log("router", router);
	return <div>coffee-store</div>;
}

export default CoffeeStore;
