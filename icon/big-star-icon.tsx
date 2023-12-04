import { Component } from "solid-js";

type Props = {
    class: string;
    width?: string;
    height?: string;
    fill?: string;
};

const BigStarIcon: Component<Props> = (props) => {
    return (
		<svg
			class={props?.class ?? "icon"}
			width={props?.width ?? 50}
			height={props?.height ?? 50}
			viewBox={`0 0 ${props?.width ?? 50} ${props?.height ?? 50}`}
			fill={props?.fill ?? " none"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M25 0L31.0104 18.9896L50 25L31.0104 31.0104L25 50L18.9896 31.0104L0 25L18.9896 18.9896L25 0Z"
				fill="white"
			></path>
		</svg>
	);
};

export default BigStarIcon;