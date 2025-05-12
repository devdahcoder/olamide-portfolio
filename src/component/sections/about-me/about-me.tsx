import { Component, createEffect } from "solid-js";
import "./about-me.scss";
import SectionHeader from "../../section-header";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutMe: Component<{ isLoadedComplete: boolean }> = (props) => {
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
		const isLoadedComplete = props.isLoadedComplete;

		if (!isLoadedComplete) return;

		elementObserver(aboutMeSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting && isLoadedComplete) {
				animateHeaderText();
				animateHeaderImage();
				SplitText.create(".about--me--text--container", {
					type: "words, lines",
					mask: "lines",
					onSplit: (self) => {
						gsap.fromTo(
							self.lines,
							{
								yPercent: 100,
								opacity: 0,
								filter: "blur(5px)",
								color: "hsl(0, 4%, 14%)",
							},
							{
								yPercent: 0,
								opacity: 1,
								filter: "blur(0px)",
								color: "white",
								duration: 2,
								ease: "power2.out",
								scrollTrigger: {
									trigger: self.words,
									start: "top bottom",
									end: "top 30%",
									scrub: true,
									toggleActions: "play none none reverse",
								},
							}
						);
					},
				});
				observer.unobserve(entry.target);
			}
		});

		
	});

	return (
		<div
			// data-speed="0.5"
			// data-lag="0.1"
			ref={aboutMeSectionRefElement}
			class="about--me--container"
		>
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
						<p>
							Hello! I'm Olamide, a passionate software developer,
							who crafts beautiful web and mobile experiences and
							digital solutions with a real impact that helps
							businesses grow and connect with their audience all
							over the world.
						</p>
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
