import { Component, JSX } from "solid-js";

const ParallaxCharacter: Component<{
	index: number;
	children: string;
	class: string;
	parallaxCharacterElement: HTMLDivElement[][];
	style?: JSX.CSSProperties;
}> = (props) => {
	return (
		<div
			ref={(element) => {
				if (!props.parallaxCharacterElement[props.index]) {
					props.parallaxCharacterElement[props.index] = [];
				}
				props.parallaxCharacterElement[props.index].push(element!);
			}}
			class={props.class}
		>
			{props.children === " " ? (
				<div style={{ margin: "0rem 1rem", ...props?.style }}></div>
			) : (
				props.children
			)}
		</div>
	);
};

export default ParallaxCharacter;
