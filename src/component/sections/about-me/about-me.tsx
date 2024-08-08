import { Component, createEffect, For } from "solid-js";
import "./about-me.scss";
import Arrow from "../../../../public/icon/arrow";
import ParallaxCharacter from "../../parallax-character";
import SectionHeader from "../../section-header";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe: Component<{}> = (props) => {
		const parallaxCharacterElement: HTMLDivElement[][] = [];
	let headerParallaxCharacterElement: HTMLDivElement[][] = [];
	let aboutMeSectionRefElement: HTMLDivElement | undefined;

	const animateHeaderText = () => {
		gsap.fromTo(
			".about--me--title--character",
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
		elementObserver(aboutMeSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting) {
				animateHeaderText();
				observer.unobserve(entry.target);
			}
		});

		gsap.fromTo(
			".about--me--text",
			{
				color: "hsl(0, 4%, 14%)",
			},
			{
				scrollTrigger: {
					trigger: ".about--me--text--container",
					start: `top 80%`,
					end: `+=250`,
					scrub: 1,
					toggleActions: "play none none reverse",
				},
				duration: 1.5,
				color: "white",
				ease: "sine.in",
				stagger: 1.2,
			}
		);

	});

	return (
		<div ref={aboutMeSectionRefElement} class="about--me--container">
			<div class="about--me--sub--container">
				<div class="about--me--title--and--social--container">
					<div class="about--me--title"></div>
				</div>

				<div class="about--me--intro">
					<SectionHeader
						parallaxCharacterElement={
							headerParallaxCharacterElement
						}
						title="About Me"
						characterClassName="about--me--title--character"
						class="about--me--header--title"
						titleContainerClassNam="about--me--header--container"
					/>
					<div class="about--me--text--container">
						<For
							each={`Hello! I'm Olamide, a passionate
							software developer, who crafts beautiful web and
							mobile experiences and digital solutions with a real
							impact that helps businesses grow and connect with
							their audience all over the world.`.split(" ")}
						>
							{(character, index) => (
								<ParallaxCharacter
									index={index()}
									class="about--me--text"
									children={character}
									style={{
										margin: "0rem 0.5rem",
									}}
									parallaxCharacterElement={
										parallaxCharacterElement
									}
								/>
							)}
						</For>

						{/* <div class="about--me--text">
						<p>
							I'm eager for new challenges and collaborations, so
							whether you're a fellow developer, potential client,
							or someone with a great idea, let's connect and
							create something amazing. Explore my work and .
							Excited for the next chapter of innovation and
							creativity!
						</p>
					</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
