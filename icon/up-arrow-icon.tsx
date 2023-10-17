import { Component } from "solid-js";

type Props = {
	class?: string;
	width?: string;
	height?: string;
	fill?: string;
};

const UpArrowIcon: Component<Props> = (props) => {
	return (
		<svg
			class={props?.class}
			width={props?.width}
			height={props?.height}
			viewBox={`0 0 ${props?.width} ${props?.height}`}
			fill={props?.fill ?? " none"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.058 7.975 10 2.917 4.942 7.975"
				stroke="white"
				stroke-width={1.25}
				stroke-miterlimit={10}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10 10V3.058"
				stroke="white"
				stroke-width={1.25}
				stroke-miterlimit={10}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M10 17.083v-3.775"
				stroke="white"
				stroke-width={1.25}
				stroke-miterlimit={10}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default UpArrowIcon;
