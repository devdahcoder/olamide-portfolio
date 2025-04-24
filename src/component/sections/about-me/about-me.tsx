import { Accessor, Component, createEffect, For } from "solid-js";
import "./about-me.scss";
import ParallaxCharacter from "../../parallax-character";
import SectionHeader from "../../section-header";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe: Component<{ isLoadedComplete: Accessor<boolean> }> = (props) => {
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

	const animateHeaderImage = () => {
		gsap.fromTo(
			".image--sub--container",
			{
				x: -100,
				opacity: 0,
			},
			{ x: 0, opacity: 1, duration: 1 }
		);
	};

	createEffect(() => {
		props?.isLoadedComplete();
		elementObserver(aboutMeSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting && props?.isLoadedComplete()) {
				animateHeaderText();
				animateHeaderImage();
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

		const textElements = document.querySelectorAll(".about--me--text");
		textElements.forEach((el) => {
			gsap.fromTo(
				el,
				{ y: 40, opacity: 0, filter: "blur(5px)", 
 },
				{
					y: 0,
					opacity: 1,
					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "top 60%",
						scrub: true,
					},
					ease: "power2.out",
									filter: "blur(0px)",

				}
			);
		});
	});

	return (
		<div ref={aboutMeSectionRefElement} class="about--me--container">
			<div class="about--me--sub--container">
				<div class="about--me--title--and--social--container">
					<div class="image--container">
						<div class="image--sub--container">
							<img
								src={`/images/pexels-mabble.jpg`}
								alt=""
								sizes=""
								srcset=""
								class="image"
							/>
							<div class="image--shadow"></div>
						</div>
					</div>
				</div>

				<div class="about--me--intro">
					<SectionHeader
						parallaxCharacterElement={
							headerParallaxCharacterElement
						}
						title="About Me"
						characterClassName="about--me--title--character shiny-text"
						class="about--me--header--title shiny-text"
						titleContainerClassNam="about--me--header--container shiny-text"
					/>
					<div class="about--me--text--container">
						<For
							each={`Hello! I'm Olamide, a passionate software developer, who crafts beautiful web and mobile experiences and digital solutions with a real impact that helps businesses grow and connect with their audience all over the world.`.split(
								" "
							)}
						>
							{(character, index) => (
								<ParallaxCharacter
									index={index()}
									class="about--me--text"
									children={character}
									style={{ margin: "0rem 0.5rem" }}
									parallaxCharacterElement={
										parallaxCharacterElement
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

export default AboutMe;

// StickySection.jsx
// import { Component, createEffect, onCleanup } from 'solid-js';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './about-me.scss';

// gsap.registerPlugin(ScrollTrigger);

// const StickySection: Component = () => {
//   let stickyRef!: HTMLDivElement;
//   let textRef!: HTMLDivElement;
//   let paragraphRef!: HTMLParagraphElement;

//   createEffect(() => {
//     // GSAP animation setup
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: stickyRef,
//         start: 'top top',
//         end: 'bottom bottom',
//         scrub: 1,
//       },
//     });

//     // Horizontal movement animation
//     tl.to(textRef, {
//       x: 500,
//       ease: 'none',
//     });

//     // Fade animation for paragraph
//     gsap.fromTo(
//       paragraphRef,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         scrollTrigger: {
//           trigger: stickyRef,
//           start: 'top center',
//           end: 'bottom center',
//           scrub: 1,
//         },
//       }
//     );

//     // Cleanup
//     onCleanup(() => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       tl.kill();
//     });
//   });

//   return (
//     <div class="sticky-container" ref={stickyRef}>
//       <div class="sticky-section">
//         <div class="content">
//           <div class="moving-text" ref={textRef}>
//             Sticky Content
//           </div>
//           <p ref={paragraphRef}>This section sticks while scrolling</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StickySection;
