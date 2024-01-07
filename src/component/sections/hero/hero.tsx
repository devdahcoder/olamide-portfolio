import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate, scroll } from "motion";
import { Component, For, createEffect, createSignal } from "solid-js";
import { elementObserver } from "../../../../hooks";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import Link from "../../link";
import ParallaxCharacter from "../../parallax-character";
import "./hero.scss";
import HeroSubText from "./hero-sub-text";
import HeroIntro from "./hero-intro";
gsap.registerPlugin(ScrollTrigger);

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
	gsap.fromTo(".hero--intro--skills--container", {yPercent: 200}, {yPercent: 0, duration: 2.5, ease: "power4.out"});
}

const animateHeroLink = () => {
	gsap.fromTo(
		".hero--link",
		{ yPercent: 100, opacity: 0 },
		{ yPercent: 0, opacity: 1, duration: 1.5 }
	);
};

const Hero: Component<{ isNavigationOpen: boolean }> = (props) => {
	const [role] = createSignal<string>("Adigun Olamide");
	const parallaxCharacterElement: HTMLDivElement[][] = [];
	const firstExpertiseParallaxCharacterElement: HTMLDivElement[][] = [];
	const secondExpertiseParallaxCharacterElement: HTMLDivElement[][] = [];
	let heroRefSection: HTMLDivElement | undefined;
	let heroSubTextContainer: HTMLDivElement | undefined;

	createEffect(() => {
		elementObserver(heroRefSection, (entry, observer) => {
			if (entry.isIntersecting) {
				animateHeroMainParallaxCharacter();
				animateSubHeroParallaxCharacter();
				animateHeroIntroExpertiseParallaxCharacter();
				animateHeroSkills();
				animateHeroLink();
			}
			observer.unobserve(entry.target);
		});

		scroll(
			animate(
				".hero--text--container",
				{ y: [null, -300, -500, -700] },
				{ duration: 3, easing: "linear" }
			)
		);
	});

	return (
		<div
			ref={heroRefSection}
			style={props.isNavigationOpen ? { "margin-top": "10.4rem" } : {}}
			class="hero--main--container"
		>
			<div class="hero--sub--container">
				<div class="hero--text--main--container">
					<div class="hero--text--container">
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

					<HeroIntro
						firstExpertiseParallaxCharacterElement={
							firstExpertiseParallaxCharacterElement
						}
						secondExpertiseParallaxCharacterElement={
							secondExpertiseParallaxCharacterElement
						}
					/>

				</div>

				<Link
					children={
						<div class="hero--link--children--container">
							See Blog Posts Here
							<UpArrowIcon
								width="20"
								height="20"
								class="hero--link--icon"
							/>
						</div>
					}
					href={`https://medium.com/@adigunolamide200`}
					linkClass="hero--link"
					linkContainerClass="hero--link--container"
				/>

				<div class="hero--scroll--more--main--container">
					<div
						role="button"
						class="hero--scroll--more--sub--container"
					>
						<UpArrowIcon
							width="20"
							height="20"
							class="hero--scroll--more--icon"
						/>
						<p>Scroll Down</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
