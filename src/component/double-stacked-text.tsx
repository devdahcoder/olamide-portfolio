import { Component, JSXElement } from "solid-js";

const DoubleStackedText: Component<{
	containerClass: string;
	subContainerClass?: string;
	firstStack: JSXElement;
	firstStackClass?: string;
	secondStack: JSXElement;
	secondStackClass?: string;
}> = (props) => {
	return (
		<div class={props.containerClass}>
			<div class={props.subContainerClass}>
				<div class={props.firstStackClass}>{props.firstStack}</div>
				<div class={props.secondStackClass}>{props.secondStack}</div>
			</div>
		</div>
	);
};

export default DoubleStackedText;
