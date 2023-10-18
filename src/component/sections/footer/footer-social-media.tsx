import { Component, For } from "solid-js";
import { socialMediaContent } from "../../../../contents";
import "./footer.scss"

const FooterSocialMedia: Component<{}> = () => {

    return (
		<div class="footer--social--media--container">
			<div class="footer--social--media--sub--container">
				<For each={socialMediaContent}>
					{(props) => (
						<div class="footer--social--media--item">
							<a href={props.link}>{props.text}</a>
						</div>
					)}
				</For>
			</div>
		</div>
	);
    
};

export default FooterSocialMedia;
