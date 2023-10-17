import { Component } from "solid-js";
import "./footer.scss";
import FooterCredit from "./footer-credit";
import FooterSocialMedia from "./footer-social-media";
import FooterCopyRightYear from "./footer-copy-right-year";

const Footer: Component<{}> = (props) => {
	return (
		<div class="footer--container">
            <div class="footer--sub--container">
				<FooterCredit />
				
				<FooterSocialMedia />

				<FooterCopyRightYear />
            </div>
		</div>
	);
};

export default Footer;
