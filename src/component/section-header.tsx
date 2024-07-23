import { Component, For, JSX } from "solid-js";
import ParallaxCharacter from "./parallax-character";

const SectionHeader: Component<{
	title: string;
	titleContainerClassNam?: string;
	class?: string;
	characterClassName?: string;
	parallaxCharacterElement: HTMLDivElement[][];
	style?: JSX.CSSProperties;
}> = (props) => {
	return (
		<div class={`${props?.titleContainerClassNam}`}>
			<For each={props?.title?.split("")}>
				{(character, index) => (
					<ParallaxCharacter
						index={index()}
						class={`${props?.class}`}
						characterClass={`${props?.characterClassName}`}
						children={character}
						parallaxCharacterElement={
							props?.parallaxCharacterElement
						}
						style={props?.style}
					/>
				)}
			</For>
		</div>
	);
};

export default SectionHeader;
