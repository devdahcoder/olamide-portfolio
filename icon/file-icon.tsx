import { Component } from "solid-js";

type Props = {
    class: string;
    width?: string;
    height?: string;
    fill?: string;
};

const FileIcon: Component<Props> = (props) => {
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
				d="M6.667 1.667h7.5c1.667 0 2.5 0.833 2.5 2.5v1.15"
				stroke="white"
				stroke-width={1.25}
				stroke-miterlimit={10}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M1.667 10.85V5.833c0 -3.333 0.833 -4.167 4.167 -4.167h1.25c1.25 0 1.525 0.367 2 1l1.25 1.667c0.317 0.417 0.5 0.667 1.333 0.667h2.5c3.333 0 4.167 0.833 4.167 4.167"
				stroke="white"
				stroke-width={1.25}
				stroke-miterlimit={10}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M18.333 12.492V14.167c0 3.333 -0.833 4.167 -4.167 4.167H5.833c-3.333 0 -4.167 -0.833 -4.167 -4.167"
				stroke="white"
				stroke-width={1.25}
				stroke-miterlimit={10}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default FileIcon;
