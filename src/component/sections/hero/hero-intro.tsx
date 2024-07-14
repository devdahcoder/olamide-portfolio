import { Component, For, createSignal } from "solid-js";
import "./hero.scss";
import ParallaxCharacter from "../../parallax-character";
import StarIcon from "../../../../public/icon/star-icon";

const HeroIntro: Component<{
	firstExpertiseParallaxCharacterElement: HTMLDivElement[][];
	secondExpertiseParallaxCharacterElement: HTMLDivElement[][];
}> = (props) => {
	const [skills] = createSignal<string[]>([
		"Java",
		"JavaScript",
		"SCSS",
		"CSS",
		"HTML",
		"Python",
		"PHP",
		"C#",
		"C++",
	]);

	return (
		<div class="hero--intro--container">
			<div class="hero--intro--sub--container">
				<div class="hero--intro--skills--container">
					<div class="hero--intro--skills--header">
						<p>skills</p>
					</div>

					<div class="hero--intro--main--skills">
						<For each={skills()}>
							{(skill) => <span>{skill},</span>}
						</For>
						<div class="and--more">
							<p>and more...</p>
						</div>
					</div>
				</div>

				<div class="hero--intro--expertise">
					<div class="intro--expertise">
						<StarIcon class="w-8 h-8 mr-3 animate-spin ease-linear duration-1000" />
						<For each={"Software &".split("")}>
							{(character, index) => (
								<ParallaxCharacter
									index={index()}
									class="hero--intro--expertise--text"
									children={character}
									parallaxCharacterElement={
										props.firstExpertiseParallaxCharacterElement
									}
								/>
							)}
						</For>
					</div>{" "}
					<div class="intro--expertise">
						<For each={"Creative Developer".split("")}>
							{(character, index) => (
								<ParallaxCharacter
									index={index()}
									class="hero--intro--expertise--text"
									children={character}
									parallaxCharacterElement={
										props.secondExpertiseParallaxCharacterElement
									}
								/>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroIntro;
