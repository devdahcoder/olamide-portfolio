import gsap from "gsap";
import ParallaxCharacter from "../../parallax-character";
import StarIcon from "../../../../public/icon/star-icon";
import { Accessor, Component, createEffect, createSignal, For } from "solid-js";
import { elementObserver } from "../../../../hooks";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "./hero.scss";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero: Component<{
	isNavigationOpen: boolean;
	isLoadedComplete: Accessor<boolean>;
}> = (props) => {
	const [skills] = createSignal<string[]>([
		"Java",
		"TypeScript",
		"SCSS",
		"HTML",
		"Python",
		"Golang",
		"C#",
		"PHP",
	]);
	const parallaxCharacterElement: HTMLDivElement[][] = [];
	let heroRefSection: HTMLDivElement | undefined;

	const animateHeroMainParallaxCharacter = () => {
		SplitText.create(".hero--text--container", {
			type: "words, chars",
			onSplit(self) {
				gsap.fromTo(
					self.chars,
					{
						yPercent: 100,
						rotation: 20,
						opacity: 0.3,
						filter: "blur(5px)",
					},
					{
						yPercent: 0,
						duration: 1,
						ease: "back.out(1.7)",
						stagger: 0.1,
						rotation: 0,
						opacity: 1,
						filter: "blur(0px)",
					}
				);
			},
		});
	};

	const animateHeroIntroExpertiseParallaxCharacter = () => {
		SplitText.create(".intro--expertise", {
			type: "words, words",
			onSplit(self) {
				gsap.fromTo(
					self.words,
					{
						y: 150,
						opacity: 0,
						scale: 0.5,
						filter: "blur(8px)",
					},
					{
						y: 0,
						duration: 2.9,
						ease: "elastic.out(1.2, 0.5)",
						delay: 0.7,
						opacity: 1,
						scale: 1,
						filter: "blur(0px)",
						stagger: 0.1,
						transformOrigin: "center center",
					}
				);
			},
		});
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
			".hero--intro--skill--character",
			{ yPercent: 200, opacity: 0.3 },
			{ yPercent: 0, duration: 2.5, opacity: 1, ease: "power4.out" }
		);
	};

	const animateHeroLink = () => {
		gsap.fromTo(
			".hero--link",
			{ yPercent: 100, opacity: 0 },
			{ yPercent: 0, opacity: 1, duration: 1.5 }
		);
	};

	const animateSkillHeaderText = () => {
		gsap.fromTo(
			".hero--intro--skills--header--text--character",
			{
				opacity: 0.4,
				x: 100,
			},
			{
				opacity: 1,
				x: 0,
				stagger: 0.1,
				duration: 1,
				ease: "power3.out",
			}
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
				animateSkillHeaderText();
				animateHeroLink();
				observer.unobserve(entry.target);
			}
		});
	});

	return (
		<div ref={heroRefSection} class=" hero--main--container">
			<div class="hero--sub--container">
				<div class="hero--text--main--container">
					<div
						data-lag="0.3"
						data-speed="1"
						class="hero--text--container"
					>
						<div> Adigun Olamide</div>
					</div>

					<div class="hero--intro--container">
						<div class="hero--intro--sub--container">
							<div class="hero--intro--skills--container">
								<div class="hero--intro--skills--header">
									<For each={"skills".trim().split("")}>
										{(character, index) => (
											<ParallaxCharacter
												index={index()}
												class="hero--intro--skills--header--container"
												children={character}
												characterClass="hero--intro--skills--header--text--character shiny-text"
												parallaxCharacterElement={
													parallaxCharacterElement
												}
											/>
										)}
									</For>
								</div>

								<div class="hero--intro--main--skills ">
									<For each={skills()}>
										{(skill) => (
											<div class="hero--intro--skill--text ">
												<div class="hero--intro--skill--character shiny-text">
													{skill},
												</div>
											</div>
										)}
									</For>
									<div class="and--more">
										<div>and more...</div>
									</div>
								</div>
							</div>

							<div data-speed="1" class="hero--intro--expertise">
								<div class="intro--expertise">
									<StarIcon class="w-8 h-8 mr-3 animate-spin ease-linear duration-1000" />
									<p>Software &</p>
								</div>{" "}
								<div class="intro--expertise">
									<p>Creative Developer</p>
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
