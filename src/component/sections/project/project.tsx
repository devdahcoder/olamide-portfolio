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
gsap.registerPlugin(ScrollTrigger);

const Project: Component<{}> = () => {
	let projectRef: HTMLDivElement[] = [];

	const [prevMousePosition, setPreviousMousePosition] =
		createSignal<number>(0);

	const getDOMVariables = (item: HTMLDivElement) => {
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
				boxShadow: "inset 20px 100px 96px 100px rgba(84, 80, 80, 0.1)",
				onComplete: () => {
					gsap.to(imageSelector, { rotate: 0, ease: "power1.out" });
				},
			});
			setPreviousMousePosition(prevX);
		}
	};

	const handleMouseEnter = (
		e: MouseEvent | any,
		imageSelector: Element | null,
		globalProjectBackgroundImage: HTMLImageElement
	) => {
		if (imageSelector) {
			gsap.set(imageSelector, {
				rotate: 0,
			});
		}
	};

	const handleMouseLeave = (
		e: MouseEvent,
		imageSelector: Element | null,
		globalProjectBackgroundImage: HTMLImageElement
	) => {
		if (imageSelector) {
			gsap.to(imageSelector, {
				opacity: 0,
				duration: 0.8,
				rotate: 0,
			});
		}
		// gsap.to(globalProjectBackgroundImage, {
		// 	duration: 1,
		// 	opacity: 0.5,
		// 	visibility: "hidden",
		// });
	};

	const handleGlobalProjectBackgroundImage = (
		globalProjectBackgroundImage: HTMLImageElement,
		imageElem: HTMLImageElement
	) => {
		globalProjectBackgroundImage.src = imageElem.src;
		animate(
			globalProjectBackgroundImage,
			{ opacity: 0.5, visibility: "visible" },
			{ easing: "linear" }
		);
	};

	const animateProjectFocus = (
		imageSelector: Element | null,
		globalProjectBackgroundImage: HTMLImageElement
	) => {
		gsap.to(globalProjectBackgroundImage, {
			ease: "sine.in",
			duration: 2,
			opacity: 0.5,
			visibility: "visible",
		});
	};

	const handleProjectToolsAnimation = (
		show: boolean,
		element: HTMLDivElement | NodeListOf<HTMLDivElement> | string
	) => {
		gsap.fromTo(
			element,
			{ yPercent: show ? 200 : 0, opacity: show ? 0 : 1, rotate: show ? 20 : 0, },
			{
				yPercent: show ? 0 : 200,
				opacity: show ? 1 : 0,
				duration: 1,
				ease: "power3.out",
				stagger: show ? 0.1 : -0.1,
				rotate: show ? 0 : 20,
			}
		);
	};

	const attachEventListeners = (item: HTMLDivElement) => {
		const {
			globalProjectBackgroundImage,
			imageSelector,
			imageElem,
			projectTools,
		} = getDOMVariables(item);

		item.addEventListener("mousemove", (e: MouseEvent) => {
			handleMouseMove(e, imageSelector);
		});

		item.addEventListener("mouseenter", (e: MouseEvent) => {
			handleProjectToolsAnimation(true, projectTools);
			if (globalProjectBackgroundImage) {
				handleGlobalProjectBackgroundImage(
					globalProjectBackgroundImage,
					imageElem
				);
				handleMouseEnter(
					e,
					imageSelector,
					globalProjectBackgroundImage
				);
			}
		});

		item.addEventListener("mouseleave", (e: MouseEvent) => {
			handleProjectToolsAnimation(false, projectTools);
			handleMouseLeave(e, imageSelector, globalProjectBackgroundImage);
		});
	};

	const removeEventListeners = (item: HTMLDivElement) => {
		const { globalProjectBackgroundImage, imageSelector } =
			getDOMVariables(item);

		item.removeEventListener("mousemove", (e: MouseEvent) =>
			handleMouseMove(e, imageSelector)
		);
		item.removeEventListener("mouseenter", (e: MouseEvent) =>
			handleMouseEnter(e, imageSelector, globalProjectBackgroundImage)
		);
		item.removeEventListener("mouseleave", (e: MouseEvent) => {
			handleMouseLeave(e, imageSelector, globalProjectBackgroundImage);
		});
	};

	createEffect(() => {
		// gsap.to(projectContainerRef, {
		// 	scrollTrigger: {
		// 		trigger: ".project--main--container",
		// 		start: "top top",
		// 		pin: true,
		// 		end: () => `+=${projectContainerRef.clientHeight}`, // Adjust as needed
		// 		markers: true,
		// 	},
		// });

		// projectRef.forEach((item, index) => {
		// 	gsap.to(item, {
		// 		scrollTrigger: {
		// 			trigger: item,
		// 			start: "top center+=100", // Adjust the start position
		// 			end: "bottom center-=100", // Adjust the end position
		// 			toggleClass: "active", // Add a class when in view
		// 		},
		// 		backgroundColor: index % 2 === 0 ? "lightblue" : "lightgreen", // Change colors as needed
		// 	});
		// });

		let observe = new IntersectionObserver(
			(entries) => {
				const globalProjectBackgroundImage = document?.querySelector(
					".global--project--background--image"
				) as HTMLImageElement;

				entries.forEach((entry) => {
					if (entry.isIntersecting) {
					} else {
						// animateLinkFocus(entry.target, link, false);
					}
				});
			},
			{
				threshold: [0.1, 0.2],
				rootMargin: "-46% 0px -46%",
			}
		);

		projectRef.forEach((element) => observe.observe(element));

		onCleanup(() => {
			observe.disconnect();
		});
		projectRef.forEach(attachEventListeners);
		onCleanup(() => {
			observe.disconnect();
			projectRef.forEach(removeEventListeners);
		});
	});

	return (
		<div class="project--main--container">
			<div class="project--sub--container">
				<For each={workContent}>
					{(props, index) => (
						<div
							ref={(e) => projectRef.push(e)}
							class="project--item--container"
						>
							<Image
								imageSrc={props?.image?.imageSrc}
								imageAlt={props?.image?.imageAlt}
								imageClass={props?.image?.imageClass}
								imageContainerClass={
									props?.image?.imageContainerClass
								}
								imageSubContainerClass={
									props?.image?.imageSubContainerClass
								}
							/>
							<a
								href={`http://${props.link}`}
								target="_blank"
								rel="noopener noreferrer"
								class="project--link"
							>
								<div class="project--title">
									<p>{props.title}</p>
								</div>

								<div class="project--item--utils--container">
									<div class="project--number--container">
										<span>0</span>
										<div>
											<IconButton
												icon={
													<svg
														data-v-1c16fc4a=""
														xmlns="http://www.w3.org/2000/svg"
														width="15"
														height="12"
														fill="none"
														viewBox="0 0 15 12"
													>
														<path
															fill="currentColor"
															fill-rule="evenodd"
															d="M14.709 6.478 15 6.122l-.283-.362L10.58.473l-.904.707 3.411 4.362H.03V6.69H13.05l-3.365 4.108.888.728 4.136-5.048Zm-1.224-.429v.11l.044-.053-.044-.057Z"
															clip-rule="evenodd"
														></path>
													</svg>
												}
												iconButtonClass="project--icon--button"
												iconButtonContainerClass="project--icon--container"
											/>
										</div>
										<span>{index()}</span>
									</div>

									<div class="project--tool--container">
										<For each={props.tools?.slice(0, 4)}>
											{(tool) => (
												<div class="project--tool">
													{tool}
												</div>
											)}
										</For>
										<Show
											when={
												props.tools?.slice(4)?.length ??
												0 > 0
											}
										>
											<div class="project--tool">
												+{" "}
												{props.tools?.slice(4)?.length}
											</div>
										</Show>
									</div>
								</div>
							</a>
						</div>
					)}
				</For>
			</div>
		</div>
	);
};

export default Project;
