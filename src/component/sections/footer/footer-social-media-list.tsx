import { Component, For } from "solid-js";
import { SocialMediaTypes } from "../../../../types";
import FooterSocialMediaItem from "./footer-social-media-item";
import "./footer.scss";

type Props = {
	footerSocialMediaArrayContent: SocialMediaTypes[];
};

const FooterSocialMediaList: Component<Props> = (props: Props) => {
	return (
		<div class="footer--social--media--list">
			<For each={props.footerSocialMediaArrayContent}>
				{(props) => (
					<FooterSocialMediaItem
						id={props.id}
						text={props.text}
						link={props.link}
					/>
				)}
			</For>
		</div>
	);
};

export default FooterSocialMediaList;
