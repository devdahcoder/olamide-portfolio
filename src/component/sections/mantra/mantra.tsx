import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Component, createEffect, For } from "solid-js";
import Image from "../../image";
import "./mantra.scss";
import { imageScrollContent } from "../../../../contents";
import { elementObserver } from "../../../../hooks";
gsap.registerPlugin(ScrollTrigger);

const Mantra: Component = () => {
	let pinnedSectionRef: HTMLElement;
	let overlappingSectionRef: HTMLElement;
	const imageScrollContainerRefElement: HTMLDivElement[] = [];
	let mantraSectionRefElement: HTMLDivElement | undefined;
	const animateHeaderText = () => {
		gsap.fromTo(
			".mantra--title--character",
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
		// props?.isLoadedComplete();
		elementObserver(mantraSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting) {
				animateHeaderText();
				observer.unobserve(entry.target);
			}
		});
		if (!pinnedSectionRef || !overlappingSectionRef) return;
		// Create pin scroll trigger
		ScrollTrigger.create({
			trigger: pinnedSectionRef,
			start: "top top",
			endTrigger: overlappingSectionRef,
			end: "bottom bottom",
			pin: true,
			pinSpacing: false,
		});

		// Create overlapping section animation
		ScrollTrigger.create({
			trigger: overlappingSectionRef,
			start: "top 100%",
			end: "bottom bottom",
			onEnter: () => {
				gsap.to(overlappingSectionRef, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out",
				});
			},
			onLeaveBack: () => {
				gsap.to(overlappingSectionRef, {
					y: 100,
					opacity: 0,
					duration: 1,
					ease: "power2.in",
				});
			},
		});

		// Kill pin when reaching last section
		// ScrollTrigger.create({
		// 	trigger: lastSectionRef,
		// 	start: "top bottom",
		// 	end: "bottom top",
		// 	onEnter: () => {
		// 		ScrollTrigger.getById(pinnedSectionRef)?.kill();
		// 	},
		// });

		// Background color change animation
		ScrollTrigger.create({
			trigger: ".mantra--container",
			start: "top 50%",
			end: "bottom top",
			// onEnter: () => {
			// 	gsap.to(document.body, {
			// 		backgroundColor: "#ffffff",
			// 		duration: 0.7,
			// 		overwrite: "auto",
			// 	});
			// },
			// onLeave: () => {
			// 	gsap.to(document.body, {
			// 		backgroundColor: "#131111",
			// 		duration: 0.7,
			// 		overwrite: "auto",
			// 	});
			// },
		});

		// Image scroll animations
		setupImageScrollAnimations();

		return () => {
			// Clean up all ScrollTrigger instances
			ScrollTrigger.getAll().forEach((st) => st.kill());
		};
	});

	const setupImageScrollAnimations = () => {
		imageScrollContainerRefElement.forEach((element, index) => {
			const targetElement = element.querySelector(".image--container");

			if (!targetElement) return;

			gsap.killTweensOf([targetElement]);

			// Initial state
			gsap.set(targetElement, {
				y: 100,
				opacity: 0,
			});

			// Scroll animation
			gsap.to(targetElement, {
				scrollTrigger: {
					trigger: element,
					start: "top 70%",
					end: "bottom top",
					scrub: true,
					toggleActions: "play reverse play reverse",
				},
				y: 0,
				opacity: 1,
				perspective: "2000px",
				rotateX: "-7deg",
				duration: 1,
				ease: "power2.out",
			});

			// Element observer for additional effects
			elementObserver(
				targetElement,
				(entry) => {
					if (entry.isIntersecting) {
						gsap.to(targetElement, {
							filter: "blur(0px)",
							duration: 0.5,
						});

						gsap.to(`.image--scroll--text--span--${index}`, {
							y: "0cap",
							ease: "power1.inOut",
						});

						// Animate previous item
						if (index > 0) {
							gsap.to(
								`.image--scroll--text--span--${index - 1}`,
								{
									y: "-3cap",
									ease: "power1.inOut",
								}
							);
						}

						// Animate next item
						if (index < imageScrollContent.length - 1) {
							gsap.to(
								`.image--scroll--text--span--${index + 1}`,
								{
									y: "3cap",
									ease: "power1.inOut",
								}
							);
						}
					} else {
						gsap.to(targetElement, {
							filter: "blur(2px)",
							duration: 0.5,
						});
					}
				},
				{ threshold: 0.9, rootMargin: "-90px 0px -90px 0px" }
			);
		});
	};

	return (
		<div ref={mantraSectionRefElement} class="mantra--container">
			<section
				ref={(el: HTMLElement) => (pinnedSectionRef = el)}
				class="mantra--section mantra--pinned--section"
			>
				<div class="mantra--pinned--content">
					<Image
						imageSrc="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400"
						imageAlt="Image"
						imageClass="image"
						imageContainerClass="image--container"
						imageSubContainerClass="image--sub--container"
					/>


				</div>
			</section>

			<section
				ref={(el: HTMLElement) => (overlappingSectionRef = el)}
				class="mantra--section overlapping--section"
			>
				<div class="image--scroll--list">
					<For each={imageScrollContent}>
						{(item, index) => (
							<div
								ref={(element) =>
									imageScrollContainerRefElement.push(element)
								}
								class={`image--scroll--item image--scroll--item--${index()}`}
							>
								<Image
									imageSrc={item?.image?.imageSrc}
									imageAlt={item?.image?.imageAlt}
									imageClass={item?.image?.imageClass}
									imageContainerClass={
										item?.image?.imageContainerClass
									}
									imageSubContainerClass={
										item?.image?.imageSubContainerClass
									}
								/>
							</div>
						)}
					</For>
				</div>

				{/* <div class="image--scroll--text--container">
					<div class="image--scroll--text--sub--container">
						<div class="image--scroll--text">
							<p class="text-base">
								Creativity isn't a destination <br />
								reached with projects; it's a journey that
								unfolds endlessly.
							</p>
						</div>
					</div>
				</div> */}
			</section>

			{/* <section ref={lastSectionRef} class="mantra--section last-section">
				<div class="content">
					<h2>Final Section</h2>
					<p>
						Once this section appears, both sections will scroll
						together.
					</p>
				</div>
			</section> */}
		</div>
	);
};

export default Mantra;
