import { Component } from "solid-js";

type Props = {
    class: string;
    width?: string;
    height?: string;
    fill?: string;
};

const SmallStartIcon: Component<Props> = (props) => {
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
				d="M26.5 0L29.4981 23.5019L53 26.5L29.4981 29.4981L26.5 53L23.5019 29.4981L0 26.5L23.5019 23.5019L26.5 0Z"
				fill="white"
			></path>
		</svg>
	);
};

export default SmallStartIcon;
