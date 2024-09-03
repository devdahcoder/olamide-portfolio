import { Component, createSignal } from "solid-js";
import "./footer.scss";
import FooterHero from "./footer-hero";
import DoubleStackedText from "../../double-stacked-text";
import FooterSocialMedia from "./footer-social-media";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import CopyRightIcon from "../../../../icon/copy-right-icon";

const Footer: Component<{}> = () => {
	const [latitude] = createSignal<number>(6.4563278);
	const [longitude] = createSignal<number>(3.4468312);

	const formattedLocation = `${latitude().toFixed(5)}°N, ${Math.abs(
		longitude()
	).toFixed(5)}°W`;

	return (
		<div class="footer--container">
			<div class="footer--sub--container">
				<div class="footer--header--container">
					<div class="footer--header--sub--container">
						<DoubleStackedText
							containerClass="footer--year--container "
							subContainerClass="footer--year--sub--container"
							firstStack={<p>Software / Creative Developer</p>}
							secondStack={<p>Portfolio 2024 - 2025</p>}
							firstStackClass="footer--role--text"
							secondStackClass="footer--year--text"
						/>
						<DoubleStackedText
							containerClass="footer--location--container "
							subContainerClass="footer--location--sub--container"
							firstStack={<p>{formattedLocation}</p>}
							secondStack={<p>Available for freelance work</p>}
							firstStackClass="footer--availability--text"
							secondStackClass="footer--location--text"
						/>
					</div>
				</div>

				<FooterHero />

				<div class="footer--bottom--container">
					<div class="footer--bottom--sub--container">
						<DoubleStackedText
							containerClass="footer--credit--container"
							subContainerClass="footer--credit--sub--container"
							firstStack={
								<>
									Designs from:{" "}
									<span>
										<a href="http://">Behance</a>
									</span>
								</>
							}
							secondStack={
								<>
									Developed by:{" "}
									<span>
										<div>Olamide Adigun</div>
									</span>
								</>
							}
							firstStackClass="footer--credit--design--text"
							secondStackClass="footer--credit--developer--text"
						/>

						<FooterSocialMedia />
						{/* <DoubleStackedText
							containerClass="footer--credit--container"
							subContainerClass="footer--credit--sub--container"
							firstStack={
								<>
									Designs from:{" "}
									<span>
										<a href="http://">Behance</a>
									</span>
								</>
							}
							secondStack={
								<>
									Developed by:{" "}
									<span>
										<div>Olamide Adigun</div>
									</span>
								</>
							}
							firstStackClass="footer--credit--design--text"
							secondStackClass="footer--credit--developer--text"
						/> */}
						<DoubleStackedText
							containerClass="footer--copy--right--container"
							subContainerClass="footer--copy--right--sub--container"
							firstStack={
								<button
									onClick={() => {
										window.scrollTo({
											top: 0,
											behavior: "smooth",
										});
									}}
									class="footer--back--to--top--button"
								>
									Back to top
									<UpArrowIcon width="15" height="15" />
								</button>
							}
							secondStack={
								<>
									<CopyRightIcon
										width="20"
										height="20"
										class="footer--copy--right--icon"
									/>
									2023 - All Rights Reserved
								</>
							}
							firstStackClass="footer--credit--design--text"
							secondStackClass="footer--copy--right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
