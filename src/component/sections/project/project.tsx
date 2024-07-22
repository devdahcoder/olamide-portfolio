import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate } from "motion";
import {
	Component,
	For,
	Show,
	createEffect,
	createSignal,
	onCleanup,
} from "solid-js";
import { workContent } from "../../../../contents";
import IconButton from "../../icon-button";
import Image from "../../image";
import "./project.scss";
import ParallaxCharacter from "../../parallax-character";
import DoubleArrowIcon from "../../../../public/icon/double-arrow-icon";
import { DOMElement } from "solid-js/jsx-runtime";
import { elementObserver } from "../../../../hooks";
gsap.registerPlugin(ScrollTrigger);

const Project: Component<{}> = () => {
	let projectRef: HTMLDivElement[] = [];
	let r: HTMLDivElement | undefined;
	const parallaxCharacterElement: HTMLDivElement[][] = [];
	const headerParallaxCharacterElement: HTMLDivElement[][] = [];

	const [prevMousePosition, setPreviousMousePosition] =
		createSignal<number>(0);
	const [currentMouseIndex, setCurrentMouseIndex] = createSignal<
		number | null
	>(0);

	const getDOMVariables = (item: HTMLDivElement | Element) => {
		const globalProjectBackgroundImage = document?.querySelector(
			".global--project--background--image"
		) as HTMLImageElement;
		const projectToolsContainer = item?.querySelector(
			".project--tool--container"
		) as HTMLDivElement;
		const projectTools = projectToolsContainer?.querySelectorAll(
			".project--tool"
		) as NodeListOf<HTMLDivElement>;
		const imageSelector = item?.querySelector(".image--container");
		const imageSubSelector = imageSelector?.querySelector(
			".image--sub--container"
		) as HTMLDivElement;
		const imageElem = imageSubSelector?.querySelector(
			".image"
		) as HTMLImageElement;

		let prevX = 0;

		return {
			globalProjectBackgroundImage,
			imageSelector,
			imageSubSelector,
			imageElem,
			prevX,
			projectTools,
		};
	};

	const handleMouseMove = (
		e: MouseEvent | any,
		imageSelector: Element | null
	) => {
		if (imageSelector) {
			let prevX = e.clientX;
			const currentX =
				e.clientX -
				e.currentTarget.getBoundingClientRect().left -
				e.currentTarget.offsetWidth / 2;

			const currentY =
				e.clientY -
				e.currentTarget.getBoundingClientRect().top -
				e.currentTarget.offsetHeight / 2;

			const direction = prevX >= prevMousePosition() ? "right" : "left";

			const tiltAmount = direction === "right" ? 10 : -10;

			gsap.to(imageSelector, {
				duration: 0.8,
				x: currentX,
				y: currentY,
				ease: "power1.out",
				rotation: tiltAmount,
				opacity: 0.9,
				zIndex: 1,
				boxShadow: "inset 20px 100px 96px 100px rgba(84, 80, 80, 0.1)",
				onComplete: () => {
					gsap.to(imageSelector, { rotate: 0, ease: "power1.out" });
				},
			});
			setPreviousMousePosition(prevX);
		}
	};

	const handleMouseEnter = (
		e: MouseEvent & {
			currentTarget: HTMLAnchorElement;
			target: DOMElement;
		},
		index: number
		// imageSelector: Element | null,
		// globalProjectBackgroundImage: HTMLImageElement
	) => {
		const allElements = document.querySelectorAll(
			".project--util--icon--container"
		);
		const selectedElement = allElements[index];
		const selectedElementIconElement =
			selectedElement.querySelector(`.project--util--icon`);

		// gsap.fromTo(
		// 	selectedElement,
		// 	{
		// 		width: 0,
		// 		height: 0,
		// 		visibility: "hidden",
		// 	},
		// 	{
		// 		width: "2.5rem",
		// 		height: "2.5rem",
		// 		visibility: "visible",
		// 		duration: 0.6,
		// 	}
		// );
		// gsap.fromTo(
		// 	selectedElementIconElement,
		// 	{
		// 		scale: 0,
		// 	},
		// 	{
		// 		scale: 1,
		// 		duration: 0.6,
		// 	}
		// );
		// if (imageSelector) {
		// 	gsap.set(imageSelector, {
		// 		rotate: 0,
		// 	});
		// }
		// setCurrentMouseIndex(index);
	};

	const handleMouseLeave = (
		e: MouseEvent & {
			currentTarget: HTMLAnchorElement;
			target: DOMElement;
		},
		index: number
		// e: MouseEvent,
		// imageSelector: Element | null,
		// globalProjectBackgroundImage: HTMLImageElement
	) => {
		// setCurrentMouseIndex(null);

		const allElements = document.querySelectorAll(
			".project--util--icon--container"
		);
		const selectedElement = allElements[index];
		const selectedElementIconElement =
			selectedElement.querySelector(`.project--util--icon`);

		gsap.fromTo(
			selectedElement,
			{
				width: "2.5rem",
				height: "2.5rem",
				visibility: "visible",
			},
			{
				width: 0,
				height: 0,
				// visibility: "hidden",
				duration: 1,
			}
		);
		gsap.fromTo(
			selectedElementIconElement,
			{
				scale: 1,
			},
			{
				scale: 0,
				duration: 1,
			}
		);
		// if (imageSelector) {
		// 	gsap.to(imageSelector, {
		// 		opacity: 0,
		// 		duration: 0.8,
		// 		rotate: 0,
		// 	});
		// }
		// gsap.to(globalProjectBackgroundImage, {
		// 	duration: 1,
		// 	opacity: 0.5,
		// 	visibility: "hidden",
		// });
	};

	// const handleGlobalProjectBackgroundImage = (
	// 	globalProjectBackgroundImage: HTMLImageElement,
	// 	imageElem: HTMLImageElement
	// ) => {
	// 	globalProjectBackgroundImage.src = imageElem.src;
	// 	animate(
	// 		globalProjectBackgroundImage,
	// 		{ opacity: 0.5, visibility: "visible" },
	// 		{ easing: "linear" }
	// 	);
	// };

	// const animateProjectFocus = (
	// 	imageSelector: Element | null,
	// 	globalProjectBackgroundImage: HTMLImageElement
	// ) => {
	// 	gsap.to(globalProjectBackgroundImage, {
	// 		ease: "sine.in",
	// 		duration: 2,
	// 		opacity: 0.5,
	// 		visibility: "visible",
	// 	});
	// };

	// const handleProjectToolsAnimation = (
	// 	show: boolean,
	// 	element: HTMLDivElement | NodeListOf<HTMLDivElement> | string
	// ) => {
	// 	gsap.fromTo(
	// 		element,
	// 		{
	// 			yPercent: show ? 200 : 0,
	// 			opacity: show ? 0 : 1,
	// 			rotate: show ? 20 : 0,
	// 		},
	// 		{
	// 			yPercent: show ? 0 : 200,
	// 			opacity: show ? 1 : 0,
	// 			duration: 1,
	// 			ease: "power3.out",
	// 			stagger: show ? 0.1 : -0.1,
	// 			rotate: show ? 0 : 20,
	// 		}
	// 	);
	// };

	// const attachEventListeners = (item: HTMLDivElement) => {
	// 	const {
	// 		globalProjectBackgroundImage,
	// 		imageSelector,
	// 		imageElem,
	// 		projectTools,
	// 	} = getDOMVariables(item);

	// 	item.addEventListener("mousemove", (e: MouseEvent) => {
	// 		handleMouseMove(e, imageSelector);
	// 	});

	// 	item.addEventListener("mouseenter", (e: MouseEvent) => {
	// 		handleProjectToolsAnimation(true, projectTools);
	// 		if (globalProjectBackgroundImage) {
	// 			handleGlobalProjectBackgroundImage(
	// 				globalProjectBackgroundImage,
	// 				imageElem
	// 			);
	// 			handleMouseEnter(
	// 				e,
	// 				imageSelector,
	// 				globalProjectBackgroundImage
	// 			);
	// 		}
	// 	});

	// 	item.addEventListener("mouseleave", (e: MouseEvent) => {
	// 		handleProjectToolsAnimation(false, projectTools);
	// 		handleMouseLeave(e, imageSelector, globalProjectBackgroundImage);
	// 	});
	// };

	// const removeEventListeners = (item: HTMLDivElement) => {
	// 	const {
	// 		globalProjectBackgroundImage,
	// 		imageSelector,
	// 		imageElem,
	// 		projectTools,
	// 	} = getDOMVariables(item);

	// 	item.removeEventListener("mousemove", (e: MouseEvent) =>
	// 		handleMouseMove(e, imageSelector)
	// 	);
	// 	item.removeEventListener("mouseenter", (e: MouseEvent) => {
	// 		handleProjectToolsAnimation(true, projectTools);
	// 		handleGlobalProjectBackgroundImage(
	// 			globalProjectBackgroundImage,
	// 			imageElem
	// 		);
	// 		handleMouseEnter(e, imageSelector, globalProjectBackgroundImage);
	// 	});
	// 	item.removeEventListener("mouseleave", (e: MouseEvent) => {
	// 		handleMouseLeave(e, imageSelector, globalProjectBackgroundImage);
	// 	});
	// };

	// createEffect(() => {
	// 	gsap.to(".project--main--container", {
	// 		opacity: 1,
	// 		scrollTrigger: {
	// 			trigger: ".project--main--container",
	// 			start: "top center",
	// 			// pin: true,
	// 			// markers: true,
	// 		},
	// 	});

	// 	// projectRef.forEach((item, index) => {
	// 	// 	gsap.to(item, {
	// 	// 		scrollTrigger: {
	// 	// 			trigger: item,
	// 	// 			start: "top center+=100", // Adjust the start position
	// 	// 			end: "bottom center-=100", // Adjust the end position
	// 	// 			toggleClass: "active", // Add a class when in view
	// 	// 		},
	// 	// 		backgroundColor: index % 2 === 0 ? "lightblue" : "lightgreen", // Change colors as needed
	// 	// 	});
	// 	// });

	// 	// let observe = new IntersectionObserver(
	// 	// 	(entries) => {
	// 	// 		entries.forEach((entry) => {
	// 	// 			if (entry.isIntersecting) {
	// 	// 				const {
	// 	// 					globalProjectBackgroundImage,
	// 	// 					imageSelector,
	// 	// 					imageElem,
	// 	// 					projectTools,
	// 	// 				} = getDOMVariables(entry.target);

	// 	// 				handleGlobalProjectBackgroundImage(
	// 	// 					globalProjectBackgroundImage,
	// 	// 					imageElem
	// 	// 				);
	// 	// 				handleProjectToolsAnimation(true, projectTools);
	// 	// 			} else {
	// 	// 				const {
	// 	// 					globalProjectBackgroundImage,
	// 	// 					imageSelector,
	// 	// 					imageElem,
	// 	// 					projectTools,
	// 	// 				} = getDOMVariables(entry.target);
	// 	// 				handleProjectToolsAnimation(false, projectTools);
	// 	// 			}
	// 	// 		});
	// 	// 	},
	// 	// 	{
	// 	// 		threshold: 0.1,
	// 	// 		rootMargin: "-45% 0px -46%",
	// 	// 	}
	// 	// );

	// 	// projectRef.forEach((element) => observe.observe(element));

	// 	projectRef.forEach(attachEventListeners);
	// 	onCleanup(() => {
	// 		// observe.disconnect();
	// 		projectRef.forEach(removeEventListeners);
	// 	});
	// });

	// createEffect(() => {
	// 	currentMouseIndex();

	// 	const allElements = document.querySelectorAll(
	// 		".project--util--icon--container"
	// 	);
	// 	const selectedElement = allElements[currentMouseIndex()];
	// 	const selectedElementIconElement =
	// 		selectedElement.querySelector(`.project--util--icon`);

	// 	if (typeof currentMouseIndex() === "number") {

	// 		gsap.fromTo(
	// 			selectedElement,
	// 			{
	// 				width: 0,
	// 				height: 0,
	// 				visibility: "hidden",
	// 			},
	// 			{
	// 				width: "2.5rem",
	// 				height: "2.5rem",
	// 				visibility: "visible",
	// 				duration: 1,
	// 			}
	// 		);
	// 		gsap.fromTo(
	// 			selectedElementIconElement,
	// 			{
	// 				scale: 0,
	// 			},
	// 			{
	// 				scale: 1,
	// 				duration: 1,
	// 			}
	// 		);
	// 	} else {
	// 		gsap.fromTo(
	// 			selectedElement,
	// 			{
	// 				width: "2.5rem",
	// 				height: "2.5rem",
	// 				visibility: "visible",
	// 			},
	// 			{
	// 				width: 0,
	// 				height: 0,
	// 				// visibility: "hidden",
	// 				duration: 1,
	// 			}
	// 		);
	// 		gsap.fromTo(
	// 			selectedElementIconElement,
	// 			{
	// 				scale: 1,
	// 			},
	// 			{
	// 				scale: 0,
	// 				duration: 1,
	// 			}
	// 		);
	// 	}
	// });


	const animateHeaderText = () => {
		gsap.fromTo(".project--title-character", {
			opacity: 0.4,
			x: 100
		}, {
			opacity: 1,
			x: 0,
			stagger: 0.1,
			duration: 1,
			ease: "power3.out"
		});
	}

	createEffect(() => {
		elementObserver(r, (entry, observer) => {
			if (entry.isIntersecting) {
				animateHeaderText();
				observer.unobserve(entry.target);
			}
			
		});
	});

	return (
		<div ref={r} class="project--container">
			<div class="project--sub--container">
				<div class="project--header--container">
					<For each={"Portfolio".split("")}>
						{(character, index) => (
							<ParallaxCharacter
								index={index()}
								class="project--header--title"
								characterClass="project--title-character"
								children={character}
								parallaxCharacterElement={
									headerParallaxCharacterElement
								}
							/>
						)}
					</For>
					<div class="project--header--title"></div>
				</div>
				<div class="project--list">
					<For each={workContent}>
						{(props, index) => (
							<div
								ref={(e) => projectRef.push(e)}
								class="project--item"
							>
								{/* <Image
								imageSrc={props?.image?.imageSrc}
								imageAlt={props?.image?.imageAlt}
								imageClass={props?.image?.imageClass}
								imageContainerClass={
									props?.image?.imageContainerClass
								}
								imageSubContainerClass={
									props?.image?.imageSubContainerClass
								}
							/> */}
								<a
									onMouseEnter={(e) =>
										handleMouseEnter(e, index())
									}
									onMouseLeave={(e) =>
										handleMouseLeave(e, index())
									}
									href={`http://${props.link}`}
									target="_blank"
									rel="noopener noreferrer"
									class="project--item--link"
								>
									<div class="project--title--container">
										<div class="project--title">
											<For
												each={props.title
													.trim()
													.split("")}
											>
												{(character, index) => (
													<ParallaxCharacter
														index={index()}
														class="project--title--character"
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
										</div>
									</div>

									<div class="project--type--container">
										<div class="project--type">
											<For each={props.type}>
												{(type) => (
													<p>
														{type}{" "}
														<span class="mx-0.5">
															/
														</span>
													</p>
												)}
											</For>
										</div>
									</div>

									<div class="project--util--container">
										<div class="project--util">
											<div class="project--util--link">
												View
											</div>
											<div class="project--util--icon--container">
												<DoubleArrowIcon class="project--util--icon scale-0 " />
											</div>
										</div>
									</div>
								</a>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Project;
