import { Component, JSXElement } from "solid-js";

type Props = {
    children: JSXElement;
    linkClass: string;
    linkContainerClass: string;
};

const Link: Component<Props> = (props) => {
	return (
		<div class={props.linkContainerClass}>
			<a class={props.linkClass} href="http://" target="_blank" rel="noopener noreferrer">
				{props.children}
			</a>
		</div>
	);
};

export default Link;
