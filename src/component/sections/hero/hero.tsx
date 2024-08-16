import gsap from "gsap";
import ParallaxCharacter from "../../parallax-character";
import StarIcon from "../../../../public/icon/star-icon";
import { Accessor, Component, createEffect, createSignal, For } from "solid-js";
import { elementObserver, useIsLoadedStateHook } from "../../../../hooks";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.scss";
gsap.registerPlugin(ScrollTrigger);

const Hero: Component<{
	isNavigationOpen: boolean;
	isLoadedComplete: Accessor<boolean>;
}> = (props) => {
	const [name] = createSignal<string>("Adigun Olamide");
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
	const parallaxCharacterElement: HTMLDivElement[][] = [];
	const firstExpertiseParallaxCharacterElement: HTMLDivElement[][] = [];
	const secondExpertiseParallaxCharacterElement: HTMLDivElement[][] = [];
	let heroRefSection: HTMLDivElement | undefined;

	const animateHeroMainParallaxCharacter = () => {
		gsap.fromTo(
			".hero--main--text",
			{
				yPercent: 100,
				rotation: 20,
				opacity: 0.3,
			},
			{
				yPercent: 0,
				duration: 1,
				ease: "back.out(1.7)",
				stagger: 0.1,
				rotation: 0,
				opacity: 1,
			}
		);
	};

	const animateHeroIntroExpertiseParallaxCharacter = () => {
		gsap.fromTo(
			".hero--intro--expertise--text",
			{
				yPercent: 100,
				rotation: 20,
				opacity: 0.3,
			},
			{
				yPercent: 0,
				duration: 1.5,
				ease: "sine.out",
				rotation: 0,
				opacity: 1,
			}
		);
	};

	const animateSubHeroParallaxCharacter = () => {
		gsap.fromTo(
			".hero--sub--text",
			{ yPercent: 100, opacity: 0 },
			{
				yPercent: 0,
				opacity: 1,
				duration: 2,
				ease: "sin.inOut",
				stagger: 0.3,
			}
		);
	};

	const animateHeroSkills = () => {
		gsap.fromTo(
			".hero--intro--skills--container",
			{ yPercent: 200 },
			{ yPercent: 0, duration: 2.5, ease: "power4.out" }
		);
	};

	const animateHeroLink = () => {
		gsap.fromTo(
			".hero--link",
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 1.5 }
		);
	};

	createEffect(() => {
		props?.isLoadedComplete();
		elementObserver(heroRefSection, (entry, observer) => {
			if (entry.isIntersecting && props?.isLoadedComplete()) {
				animateHeroMainParallaxCharacter();
				animateSubHeroParallaxCharacter();
				animateHeroIntroExpertiseParallaxCharacter();
				animateHeroSkills();
				animateHeroLink();
				observer.unobserve(entry.target);
			}
		});
	});

	return (
		<div ref={heroRefSection} class=" hero--main--container">
			<div class="hero--sub--container">
				<div class="hero--text--main--container">
					<div class="hero--text--container">
						<For each={name().trim().split("")}>
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
													firstExpertiseParallaxCharacterElement
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
													secondExpertiseParallaxCharacterElement
												}
											/>
										)}
									</For>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
