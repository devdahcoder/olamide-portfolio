import { Component } from "solid-js";

type SvgIconProps = {
	className?: string;
	width?: string;
	height?: string;
};

const Arrow: Component<SvgIconProps> = ({
	className = "",
	width = "24",
	height = "24",
	...props
}) => {
	return (
		<svg
			class={className}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20 12L4 12"
				stroke="currentColor"
				stroke-width={1.5}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
				stroke="currentColor"
				stroke-width={1.5}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default Arrow;
