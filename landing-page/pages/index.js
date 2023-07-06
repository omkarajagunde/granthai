import Head from "next/head";
import { Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState, useRef } from "react";
import Script from "next/script";
import HorizontalScroll from "react-scroll-horizontal";
import ScrollSection from "@/components/ScrollSection";

const inter = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function Home() {
	const component = useRef();
	const slider = useRef();
	const [state, setState] = useState({
		beforeSteps: [
			"Install swagger or other tools",
			"Write long specs/yml for API description, query params, headers, body",
			"Write examples",
			"Repeat 1, 2, 3 for all API's",
			"Deploy",
			"Ready to view"
		],
		afterSteps: ["Install & integrate the middleware", "Ready  to view"]
	});

	useEffect(() => {});

	const handleClick = () => {
		window.open("https://forms.gle/uzhQShaxyFrcrWJs9", "_blank");
	};

	return (
		<>
			<Head>
				<title>Granth Ai - Automate documentation</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Script strategy="beforeInteractive" src="/bee-inspect-widget.js" />
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.heroSection}>
					<div className={styles.left}>
						<div className={styles.logo}>
							<img src={"/granthai-logo.svg"} />
						</div>
						<div className={styles.header}>
							Automate <code>API</code> documentation
						</div>
						<div className={styles.subHeader}>
							Maximize developer productivity with our backend agnostic API documentation tool.
						</div>
						<div className={styles.seperator}></div>
						<div className={styles.callToAction} onClick={handleClick}>
							Get early access
						</div>
						<div className={styles.supportedTech}>
							<div>Supports </div>
							<img src={"/js-logo.svg"} />
							<img src={"/py-logo.svg"} />
							<img src={"/java-logo.svg"} />
							<img src={"/spring-logo.svg"} />
						</div>
					</div>
					<div className={styles.right}>
						<img src={"/js-snippet.png"} />
					</div>
				</div>
				<div className={styles.seperator} style={{ transform: "rotate(180deg)" }}></div>
				<div className={styles.title}>How does it work?</div>
				<ScrollSection />
				<div className={styles.beforeAfter}>
					<div className={styles.before}>
						<div className={styles.title}>Before GranthAi (5 steps) 😫</div>
						{state.beforeSteps.map((step, idx) => (
							<div className={styles.step}>
								<div className={styles.bullet}>
									{idx + 1 === state.beforeSteps.length ? <img src={"/tick.png"} /> : idx + 1}
								</div>
								{step}
							</div>
						))}
					</div>
					<div className={styles.after}>
						<div className={styles.title}>After GranthAi (1 step) 😊</div>
						{state.afterSteps.map((step, idx) => (
							<div className={styles.step}>
								<div className={styles.bullet}>
									{idx + 1 === state.afterSteps.length ? <img src={"/tick.png"} /> : idx + 1}
								</div>
								{step}
							</div>
						))}
					</div>
				</div>
				<div className={styles.seperator}></div>

				<div className={styles.pricing}>Pricing</div>
				<div className={styles.footer}>Contact</div>
			</main>
		</>
	);
}
