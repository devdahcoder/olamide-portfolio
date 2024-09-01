import { Component, JSX, Show } from "solid-js";

const ParallaxCharacter: Component<{
	index: number;
	children: string;
	class: string;
	characterClass?: string;
	parallaxCharacterElement: HTMLDivElement[][];
	style?: JSX.CSSProperties;
}> = (props) => {
	return (
		<div
			ref={(element) => {
				if (!props.parallaxCharacterElement[props.index]) {
					props.parallaxCharacterElement[props.index] = [];
				}
				props.parallaxCharacterElement[props.index].push(element);
			}}
			class={props.class}
		>
			<Show when={props.children === " "}>
				<div class="character--space" style={{ margin: "0rem 1rem", ...props?.style }}></div>
			</Show>
			<Show when={props.children !== " "}>
				<div class={`${props?.characterClass}`}>{props.children}</div>
			</Show>
		</div>
	);
};

export default ParallaxCharacter;
