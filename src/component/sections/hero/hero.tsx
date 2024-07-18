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
	gsap.fromTo(".hero--intro--skills--container",
		{ yPercent: 200 }, { yPercent: 0, duration: 2.5, ease: "power4.out" });
}

const animateHeroLink = () => {
	gsap.fromTo(
		".hero--link",
		{ yPercent: 100, opacity: 0 },
		{ yPercent: 0, opacity: 1, duration: 1.5 }
	);
};

const Hero: Component<{ isNavigationOpen: boolean }> = (props) => {
	const [name] = createSignal<string>("Adigun Olamide");
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

					<HeroIntro
						firstExpertiseParallaxCharacterElement={
							firstExpertiseParallaxCharacterElement
						}
						secondExpertiseParallaxCharacterElement={
							secondExpertiseParallaxCharacterElement
						}
					/>
				</div>

				{/* <Link
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

				<div class="xl:h-[100px] xl:w-[100px] 2xl:w-[125px] 2xl:h-[125px] flex items-center justify-center">
					<div >
						<svg height="100" width="100">
							<path id="ellipse-id-r2-" style="fill: none;" d="M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"></path>
							<text style="font-size: 11px; letter-spacing: 7.5px; fill: rgb(244, 244, 244);">
								<textPath xlink:href="#ellipse-id-r2-" startOffset="0">
									<tspan>SEE MY BLOG POSTS HERE</tspan>
								</textPath></text>
						</svg>
					</div>
					<div class="absolute h-[16px] w-[16px]" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px) rotate(-257.076deg);">
						<img src="/icons/asterisk.svg" alt="asterisk" class="object-contain" />
					</div>
				</div>

				<div class="hero--scroll--more--main--container">
					<div
						name="button"
						class="hero--scroll--more--sub--container"
					>
						<UpArrowIcon
							width="20"
							height="20"
							class="hero--scroll--more--icon"
						/>
						<p>Scroll Down</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Hero;
