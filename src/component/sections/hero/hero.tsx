import gsap from "gsap";
import { Component, For, createSignal, onMount } from "solid-js";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import Link from "../../link";
import ParallaxCharacter from "../../parallax-character";
import "./hero.scss";

const animateHeroMainCharacters = (index: number) => {
	gsap.fromTo(
		[".hero--main--text"],
		{ yPercent: 200 },
		{ yPercent: 0, delay: 0.2 + index * 0.3 }
	);
};

const animateParallaxCharacter = (target: HTMLDivElement, index: number) => {

	gsap.fromTo(
		target,
		{ yPercent: 90 },
		{
			yPercent: 0,
			duration: 2.5,
			ease: "expo.out",
			// ease: "bounce.out",
			// ease: "back.out(2)",
			delay: 0.1 + index * 0.1,
		}
	);

}

const Hero: Component<{}> = () => {
	const [role] = createSignal<string>("Full-Stack Developer");
	const parallaxCharacterElement: HTMLDivElement[] = [];

	onMount(() => {
		// animateHeroMainCharacters(1 + 1);
		parallaxCharacterElement.forEach((element, index) => animateParallaxCharacter(element, index))
	});

	return (
		<div class="hero--container">
			<div class="hero--sub--container">
				<div class="hero--text--container">
					<div class="hero--main--text--container">
						<div class="hero--main--text">
							{/* <p>Full-Stack Developer</p> */}
						</div>
						<For each={role().trim().split("")}>
							{(character, index) => (
								<ParallaxCharacter
									index={index()}
									class="hero--main--text"
									children={character}
									parallaxCharacterElement={
										parallaxCharacterElement
									}
								/>
							)}
						</For>
					</div>

					<div class="hero--sub--text--container">
						<div class="hero--sub--text">
							<p>
								Hi, My name is Olamide. I'm a passionate
								software engineer with a strong background in
								software technologies. I thrive on the dynamic
								nature of the tech industry and constantly seek
								out innovative solutions to everyday problems.
								My journey in software development has been
								marked by an unwavering eagerness to tackle more
								complex challenges and a commitment to finding
								ways to maximize user efficiency.
							</p>
						</div>

						<div class="hero--sub--text">
							<p>
								Spanning both backend and frontend development,
								my expertise enables me to deliver holistic
								solutions that excel in functionality and user
								experience. When I'm not immersed in code,
								debugging, or reading tech articles, I'm sharing
								my latest tech interests and learning
								experiences through writing which you can check
								out the link to my blog posts down below. I am
								excited about the limitless possibilities that
								lie ahead in the ever-evolving tech landscape.
							</p>
						</div>
					</div>
				</div>

				<Link
					children={
						<div class="hero--link--inner--container">
							See Blog Posts Here
							<UpArrowIcon
								width="20"
								height="20"
								class="hero--link--icon"
							/>
						</div>
					}
					linkClass="hero--link"
					linkContainerClass="hero--link--container"
				/>

				<div class="hero--scroll--more--container">
					<div
						role="button"
						class="hero--scroll--more--sub--container"
					>
						<p>Scroll Down</p>

						<UpArrowIcon
							width="20"
							height="20"
							class="hero--scroll--more----icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
