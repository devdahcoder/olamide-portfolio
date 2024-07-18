import { Component } from "solid-js";

type SvgIconProps = {
	class?: string;
	width?: string;
	height?: string;
};

const DoubleArrowIcon: Component<SvgIconProps> = ({
	width = "24",
	height = "24",
	...props
}: SvgIconProps) => {
	return (
		<svg
			class={props?.class}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			color={"#000000"}
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};
export default DoubleArrowIcon;

{
	/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    
</svg> */
}
