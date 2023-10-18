import { Component } from "solid-js";
import FooterSocialMediaList from "./footer-social-media-list";
import { socialMediaContent } from "../../../../contents";
import "./footer.scss"

const FooterSocialMedia: Component<{}> = (props) => {

    return (
		<div class="footer--social--media--container">
			<FooterSocialMediaList footerSocialMediaArrayContent={socialMediaContent} />
		</div>
	);
    
};

export default FooterSocialMedia;
