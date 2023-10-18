import { Component } from "solid-js";
import "./footer.scss";
import FooterHero from "./footer-hero";
import FooterHeader from "./footer-header";
import FooterBottom from "./footer-bottom";
import IconButton from "../../icon-button";
import UpArrowIcon from "../../../../icon/up-arrow-icon";

const Footer: Component<{}> = (props) => {
	return (
		<div class="footer--container">
			<div class="footer--sub--container">
				<FooterHeader />

				<FooterHero />

				<IconButton
					icon={<UpArrowIcon width="20" height="20" />}
					iconButtonContainerClass="footer--back--to--top--hero--button--container"
					iconButtonClass="footer--back--to--top--hero--button"
				/>

				<FooterBottom />
			</div>
		</div>
	);
};

export default Footer;
