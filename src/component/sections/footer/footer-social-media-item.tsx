import { Component } from "solid-js";

type Props = {
	id: number;
	text: string;
	link: string;
};

const FooterSocialMediaItem: Component<Props> = (props: Props) => {
	return (
		<div class="footer--social--media--item">
			<a href={props.link}>{ props.text }</a>
		</div>
	);
};

export default FooterSocialMediaItem;
