import { Component, JSXElement } from "solid-js";

const IconButton: Component<{

    icon: JSXElement,
    iconButtonContainerClass?: string;
    iconButtonClass: string,

}> = (props) => {
	return (
		<div class={props.iconButtonContainerClass}>
			<button class={props.iconButtonClass}>{props.icon}</button>
		</div>
	);
};

export default IconButton;
