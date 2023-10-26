import { Component } from "solid-js";

const ParallaxCharacter: Component<{
	index: number;
	children: string;
	class: string;
	parallaxCharacterElement: HTMLDivElement[];
}> = (props) => {
	return (
		<div
			ref={(element) => props.parallaxCharacterElement.push(element)}
			class={props.class}
		>
			{props.children === " " ? (
				<div style={{ margin: "0rem 1rem" }}></div>
			) : (
				props.children
			)}
		</div>
	);
};

export default ParallaxCharacter;
