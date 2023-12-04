import { Component } from "solid-js";

type Props = {
	class: string;
	width?: string;
	height?: string;
	fill?: string;
};

const LoveIcon: Component<Props> = (props) => {
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
				d="M43.9585 16.9503C44.7463 24.4485 34.1232 34.7172 28.0728 39.4435C27.6247 39.7935 27.0195 39.8645 26.4997 39.6341C10.3324 32.4693 4.64059 18.9386 7.86597 13.8355C10.8561 9.10458 18.6147 8.5125 23.5372 12.845C24.2944 13.5115 25.4861 13.5193 26.2211 12.8285C32.7515 6.69081 43.0014 7.83951 43.9585 16.9503Z"
				fill="white"
			></path>
		</svg>
	);
};

export default LoveIcon;
