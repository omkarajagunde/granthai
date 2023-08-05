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
		socialsArr: [
			{ name: "Twitter", logo: "/twitter-logo.png", url: "#" },
			{ name: "Instagram", logo: "/instagram-logo.png", url: "https://insta.openinapp.co/1ns3u" },
			{ name: "Threads", logo: "/threads-logo.png", url: "https://openinapp.co/iamxd" },
			{ name: "Linkedin", logo: "/linkedin-logo.png", url: "#" }
		],
		afterSteps: ["Install & integrate the middleware", "Ready  to view"],
		mailTo: "manage.granthai@gmail.com",
		apisCount: 5
	});

	const handleClick = () => {
		window.open("https://tally.so/r/3qDAgg", "_blank");
	};

	const handleSocialClick = (url) => {
		window.open(url, "_blank");
	};

	const handleAPIRange = (eve) => {
		setState((prevState) => ({ ...prevState, apisCount: Number(eve.target.value) }));
	};

	return (
		<>
			<Head>
				<title>Granth Ai - Automate documentation</title>
				<meta
					name="description"
					content="Simplify your API documentation process today and focus on what you love—coding!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />{" "}
			</Head>
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
							Signup now
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
						{/* <img src={"/js-snippet.png"} /> */}
						<video autoPlay controls loop muted playsInline>
							<source
								src="https://github.com/omkarajagunde/granthai/assets/50138744/35d42210-307e-4cb8-a320-106b661b1593"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
				<div className={styles.seperator} style={{ transform: "rotate(180deg)" }}></div>
				{/* <div className={styles.title}>How does it work?</div>
				<ScrollSection /> */}
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

				<div className={styles.pricing}>
					<div className={styles.title}>Pricing</div>
					<div className={styles.pricingBox}>
						<div className={styles.pricingBox_one}>
							<div>How many API's do you want to document?</div>
							<div>
								<input
									onChange={handleAPIRange}
									type="range"
									value={state.apisCount}
									step={5}
									min={0}
									max={500}
								></input>
							</div>
							<div className={styles.pricingBox_apiCount}>
								<span style={{ fontSize: "1.4rem" }}>{state.apisCount}</span> API's
							</div>
						</div>
						<div className={styles.pricingBox_two}>
							<div className={styles.pricingBox_two_left}>
								<div className={styles.pricingBox_two_left_1}>
									<div>Everything included</div>
								</div>
								<div className={styles.pricingBox_two_left_2}>
									<div className={styles.step}>
										<div className={styles.bullet}>
											<img src={"/tick.png"} />
										</div>
										Live hosting
									</div>
									<div className={styles.step}>
										<div className={styles.bullet}>
											<img src={"/tick.png"} />
										</div>
										Automatic API updation
									</div>
									<div className={styles.step}>
										<div className={styles.bullet}>
											<img src={"/tick.png"} />
										</div>
										Automatic API creation
									</div>
									<div className={styles.step}>
										<div className={styles.bullet}>
											<img src={"/tick.png"} />
										</div>
										Export to Postman
									</div>
								</div>
							</div>
							<div className={styles.pricingBox_two_right}>
								<div className={styles.pricingBox_apiRate}>
									{state.apisCount <= 10 && <span style={{ fontSize: "2.7rem" }}>FREE 🤝</span>}

									{state.apisCount > 10 && (
										<div>
											$
											<span style={{ fontSize: "2.7rem", marginLeft: "5px", fontWeight: "500" }}>
												{parseInt(state.apisCount * 1.25)}
											</span>
											<br />
											USD per month
										</div>
									)}
								</div>
								<div onClick={handleClick} className={styles.callToAction} style={{ width: "100%" }}>
									GET STARTED
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.seperator} style={{ transform: "rotate(180deg)" }}></div>

				<div className={styles.lastSection}>
					<div className={styles.contactUs}>
						<div className={styles.title2}>Contact us?</div>
						<div>
							<a target="_blank" href={`https://openinapp.co/24jtf`}>
								{state.mailTo}
							</a>
						</div>
					</div>
					<div className={styles.socials}>
						<div className={styles.title2}>Join us on social media?</div>
						<div className={styles.socialIcons}>
							{state.socialsArr.map((acc) => (
								<img onClick={() => handleSocialClick(acc.url)} src={acc.logo} />
							))}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
