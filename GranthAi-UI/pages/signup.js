import Script from "next/script";
import React from "react";
import styles from "@/styles/Home.module.scss";

function Signup() {
	const hasWindow = typeof window !== "undefined";
	return (
		<div>
			<Script src="https://tally.so/widgets/embed.js" strategy="beforeInteractive" />
			<iframe
				className={styles.tallyIframe}
				data-tally-src="https://tally.so/r/3qDAgg"
				width="100%"
				height="100%"
				frameborder="0"
				marginheight="0"
				marginwidth="0"
				title="Use GranthAi without limits"
			></iframe>
		</div>
	);
}

export default Signup;
