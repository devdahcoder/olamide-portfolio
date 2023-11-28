import { Component, JSX, JSXElement } from "solid-js";

type Props = {
	children: JSXElement;
	linkClass: string;
	linkContainerClass: string;
	href?: string;
	onMouseEnter?: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> | any;
	onMouseLeave?: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> | any;
	onMouseOver?: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> | any;
	onMouseOut?: JSX.EventHandlerUnion<HTMLDivElement, MouseEvent> | any;
};

const Link: Component<Props> = (props) => {
	return (
		<div class={props.linkContainerClass}>
			<a
				{...(props.onMouseEnter
					? {
							onMouseEnter: () => props?.onMouseEnter?.(),
					  }
					: {})}
				{...(props.onMouseLeave
					? { onMouseLeave: () => props?.onMouseLeave?.() }
					: {})}
				{...(props.onMouseOver
					? { onMouseOver: () => props?.onMouseOver?.() }
					: {})}
				{...(props.onMouseOut
					? { onMouseOut: () => props?.onMouseOut?.() }
					: {})}
				class={props.linkClass}
				href={`${props.href}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{props.children}
			</a>
		</div>
	);
};

export default Link;
