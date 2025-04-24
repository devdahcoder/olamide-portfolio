// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Component, createEffect, For } from "solid-js";
// import { imageScrollContent } from "../../../../contents";
// import { elementObserver } from "../../../../hooks";
// import Image from "../../image";
// import Noise from "../../noise";
// import "./image-scroll.scss";
// gsap.registerPlugin(ScrollTrigger);

// const ImageScroll: Component<{}> = () => {
// 	const imageScrollContainerRefElement: HTMLDivElement[] = [];

// 	createEffect(() => {
// 		imageScrollContainerRefElement.forEach((element, index) => {
// 			const targetElement = element.querySelector(".image--container");

// 			gsap.killTweensOf([targetElement]);

// 			// Set initial state for parallax effect
// 			gsap.set(targetElement, {
// 				y: 100,
// 				opacity: 0,
// 			});

// 			gsap.to(targetElement, {
// 				scrollTrigger: {
// 					trigger: element,
// 					start: "top 85%",
// 					end: "bottom top",
// 					scrub: true,
// 					toggleActions: "play reverse play reverse",
// 				},
// 				y: 0,
// 				opacity: 1,
// 				perspective: "2000px",
// 				rotateX: "-10deg",
// 				duration: 1,
// 				ease: "power2.out",
// 			});

// 			elementObserver(
// 				targetElement,
// 				(entry) => {
// 					if (entry.isIntersecting) {
// 						gsap.to(targetElement, {
// 							filter: "blur(0px)",
// 							duration: 0.5,
// 						});

// 						gsap.to(`.image--scroll--text--span--${index}`, {
// 							y: "0cap",
// 							ease: "power1.inOut",
// 						});

// 						if (index > 0) {
// 							gsap.to(
// 								`.image--scroll--text--span--${index - 1}`,
// 								{
// 									y: "-3cap",
// 									ease: "power1.inOut",
// 								}
// 							);
// 						}

// 						if (index < imageScrollContent.length - 1) {
// 							gsap.to(
// 								`.image--scroll--text--span--${index + 1}`,
// 								{
// 									y: "3cap",
// 									ease: "power1.inOut",
// 								}
// 							);
// 						}
// 					} else {
// 						gsap.to(targetElement, {
// 							filter: "blur(2px)",
// 							duration: 0.5,
// 						});
// 					}
// 				},
// 				{ threshold: 0.9, rootMargin: "-90px 0px -90px 0px" }
// 			);
// 		});
// 	});

// 	return (
// 		<div class="image--scroll--container relative">
// 			{/* <div
// 				style={{
// 					width: "600px",
// 					height: "400px",
// 					position: "relative",
// 					overflow: "hidden",
//                 }}
//                 class='w-screen h-screen'
// 			>
// 			</div> */}
// 			<div class="image--scroll--sub--container">
// 				{/* <Noise /> */}

// 				<div class="image--scroll--list">
// 					<For each={imageScrollContent}>
// 						{(item, index) => {
// 							return (
// 								<div
// 									ref={(element) =>
// 										imageScrollContainerRefElement.push(
// 											element
// 										)
// 									}
// 									class={`image--scroll--item image--scroll--item--${index()}`}
// 								>
// 									<Image
// 										imageSrc={item?.image?.imageSrc}
// 										imageAlt={item?.image?.imageAlt}
// 										imageClass={item?.image?.imageClass}
// 										imageContainerClass={
// 											item?.image?.imageContainerClass
// 										}
// 										imageSubContainerClass={
// 											item?.image?.imageSubContainerClass
// 										}
// 									/>
// 								</div>
// 							);
// 						}}
// 					</For>
// 				</div>

// 				<div class="image--scroll--text--container">
// 					<div class="image--scroll--text--sub--container">
// 						<div class="image--scroll--text">
// 							<p class={`text-base`}>
// 								Creativity isn't a destination <br /> reached
// 								with projects; it's a journey that unfolds
// 								endlessly.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ImageScroll;
