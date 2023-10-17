import { Component } from "solid-js";

type Props = {
	class?: string;
	width?: string;
	height?: string;
	fill?: string;
};

const CopyRightIcon: Component<Props> = (props) => {
	return (
		<svg
			class={props?.class}
			width={props?.width}
			height={props?.height}
			viewBox={`0 0 ${props?.width} ${props?.height}`}
			fill={props?.fill ?? " none"}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="none" d="M0 0H20V20H0V0z" />
			<path
				fill="none"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width={0.625}
				d="M17.5 10A7.5 7.5 0 0 1 10 17.5A7.5 7.5 0 0 1 2.5 10A7.5 7.5 0 0 1 17.5 10z"
			/>
			<path
				fill="none"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width={0.625}
				d="M12.5 11.875a3.125 3.125 0 1 1 0 -3.751"
			/>
		</svg>
	);
};

export default CopyRightIcon;
