import { Component } from "solid-js";
import CopyRightIcon from "../../../../icon/copy-right-icon";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import DoubleStackedText from "../../double-stacked-text";
import FooterSocialMedia from "./footer-social-media";

const FooterBottom: Component<{}> = () => {
	return (
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

				<DoubleStackedText
					containerClass="footer--copy--right--container"
					subContainerClass="footer--copy--right--sub--container"
					firstStack={
						<button class="footer--back--to--top--button">
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
	);
};

export default FooterBottom;
