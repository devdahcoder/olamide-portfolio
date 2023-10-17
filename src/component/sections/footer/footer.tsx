import { Component } from "solid-js";
import "./footer.scss";
import FooterCredit from "./footer-credit";
import FooterSocialMedia from "./footer-social-media";
import FooterCopyRightYear from "./footer-copy-right-year";
import FooterHero from "./footer-hero";

const Footer: Component<{}> = (props) => {
	return (
		<div class="footer--container">
			<div class="footer--sub--container">
				<FooterHero />
				<div class="footer--media--container">
					<FooterCredit />

					<FooterSocialMedia />

					<FooterCopyRightYear />
				</div>
			</div>
		</div>
	);
};

export default Footer;
