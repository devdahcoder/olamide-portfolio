import { Component, JSXElement } from "solid-js";

type Props = {
	children: JSXElement;
	buttonClass: string;
	buttonContainerClass: string;
};

const Button: Component<Props> = (props) => {
	return (
		<div class={props.buttonContainerClass}>
			<button class={props.buttonClass}>{props.children}</button>
		</div>
	);
};

export default Button;
