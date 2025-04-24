import { Component, JSX, JSXElement } from "solid-js";

type Props = {
	children: JSXElement;
	buttonClass?: string;
	buttonContainerClass?: string;
	onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | any;
};

const Button: Component<Props> = (props) => {
	return (
		<div class={props.buttonContainerClass}>
			<button
				{...(props.onClick ? { onClick: () => props.onClick() } : {})}
				class={props.buttonClass}
			>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
