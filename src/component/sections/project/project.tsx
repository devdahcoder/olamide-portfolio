import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animate } from "motion";
import {
	Accessor,
	Component,
	For,
	Show,
	createEffect,
	createSignal,
	onCleanup,
	onMount,
} from "solid-js";
import { workContent } from "../../../../contents";
import IconButton from "../../icon-button";
import Image from "../../image";
import "./project.scss";
import ParallaxCharacter from "../../parallax-character";
import DoubleArrowIcon from "../../../../public/icon/double-arrow-icon";
import { DOMElement } from "solid-js/jsx-runtime";
import { elementObserver, useIsLoadedStateHook } from "../../../../hooks";
import SectionHeader from "../../section-header";
gsap.registerPlugin(ScrollTrigger);

const Project: Component<{ isLoadedComplete: Accessor<boolean> }> = (props) => {
	let projectItemRef: HTMLDivElement[] = [];
	let projectSectionRefElement: HTMLDivElement | undefined;
	const parallaxCharacterElement: HTMLDivElement[][] = [];
	const headerParallaxCharacterElement: HTMLDivElement[][] = [];

	const [prevMousePosition, setPreviousMousePosition] =
		createSignal<number>(0);
	const [currentMouseIndex, setCurrentMouseIndex] = createSignal<
		number | null
	>(0);

	const animateHeaderText = () => {
		gsap.fromTo(
			".project--header--title--character",
			{
				opacity: 0,
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

	const getDomVariables = (
		e: MouseEvent
	): {
		targetElement: any;
		currentX: number;
		titleContainerElement: HTMLDivElement;
		titleElement: HTMLDivElement;
		titleCharacterContainerElement: NodeListOf<HTMLDivElement>;
		firstTitleCharacterElements: HTMLElement[];
		secondTitleCharacterElements: HTMLElement[];
		imageContainerElement: Element | null;
		imageSubElement: Element | null;
		imageElement: Element | null;
		borderElement: HTMLDivElement;
		utilIconContainerElement: HTMLDivElement;
		iconElement: SVGElement;
	} => {
		const targetElement: any = e.currentTarget;
		const currentX =
			e.clientX -
			e.currentTarget?.getBoundingClientRect()?.left -
			e.currentTarget?.offsetWidth / 2;

		// project title dom manipulation //
		const titleContainerElement: HTMLDivElement =
			targetElement?.querySelector(
				".project--title--container"
			) as HTMLDivElement;
		const titleElement: HTMLDivElement =
			titleContainerElement?.querySelector(
				".project--title"
			) as HTMLDivElement;
		const titleCharacterContainerElement: NodeListOf<HTMLDivElement> =
			titleElement?.querySelectorAll(
				".project--title--character--container"
			);
		const firstTitleCharacterElements: HTMLElement[] = [];
		const secondTitleCharacterElements: HTMLElement[] = [];

		titleCharacterContainerElement.forEach((element) => {
			const firstCharElement = element.querySelector(
				".first--project--title--character"
			);
			const secondCharElement = element.querySelector(
				".second--project--title--character"
			);
			if (firstCharElement instanceof HTMLElement) {
				firstTitleCharacterElements.push(firstCharElement);
			}
			if (secondCharElement instanceof HTMLElement) {
				secondTitleCharacterElements.push(secondCharElement);
			}
		});
		// end project title dom manipulation //

		// project image dom manipulation //
		const imageContainerElement =
			targetElement?.querySelector(".image--container");
		const imageSubElement = imageContainerElement?.querySelector(
			".image--sub--container"
		);
		const imageElement = imageSubElement?.querySelector(".image");
		// end project image dom manipulation //

		const borderElement = targetElement?.querySelector(
			".project--item--border"
		) as HTMLDivElement;
		const utilIconContainerElement: HTMLDivElement =
			targetElement?.querySelector(
				".project--util--icon--container"
			) as HTMLDivElement;
		const iconElement: SVGElement = utilIconContainerElement.querySelector(
			`.project--util--icon`
		) as SVGElement;

		gsap.killTweensOf([
			e.target,
			utilIconContainerElement,
			iconElement,
			titleContainerElement,
			titleElement,
			borderElement,
			imageElement,
			imageContainerElement,
			imageContainerElement,
			titleCharacterContainerElement,
			titleCharacterContainerElement,
			firstTitleCharacterElements,
			secondTitleCharacterElements,
		]);

		return {
			targetElement,
			currentX,
			titleContainerElement,
			titleElement,
			titleCharacterContainerElement,
			firstTitleCharacterElements,
			secondTitleCharacterElements,
			imageContainerElement,
			imageSubElement,
			imageElement,
			borderElement,
			utilIconContainerElement,
			iconElement,
		};
	};

	createEffect(() => {
		props?.isLoadedComplete();
		elementObserver(projectSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting && props?.isLoadedComplete()) {
				animateHeaderText();
				observer.unobserve(entry.target);
			}
		});
	});

	createEffect(() => {
		if (!projectItemRef) return;

		const handleMouseEnter = (e: MouseEvent) => {
			const {
				targetElement,
				currentX,
				titleContainerElement,
				titleElement,
				titleCharacterContainerElement,
				firstTitleCharacterElements,
				secondTitleCharacterElements,
				imageContainerElement,
				imageSubElement,
				imageElement,
				borderElement,
				utilIconContainerElement,
				iconElement,
			} = getDomVariables(e);

			gsap.to(utilIconContainerElement, {
				width: "2.5rem",
				height: "2.5rem",
				visibility: "visible",
				duration: 0.4,
				overwrite: true,
			});
			gsap.to(iconElement, {
				scale: 1,
				duration: 0.4,
				overwrite: true,
			});
			gsap.to(firstTitleCharacterElements, {
				yPercent: -100,
				duration: 0.3,
				stagger: 0.04,
				overwrite: true,
			});
			gsap.to(secondTitleCharacterElements, {
				yPercent: -100,
				duration: 0.3,
				stagger: 0.04,
				overwrite: true,
			});
			gsap.to(borderElement, {
				width: "100%",
				height: "0.05rem",
				duration: 0.4,
				stagger: 0.04,
				overwrite: true,
			});
			gsap.to(imageContainerElement, {
				opacity: 1,
				duration: 0.4,
				scale: 1,
				x: currentX,
				overwrite: true,
			});
		};

		const handleMouseLeave = (e: MouseEvent) => {
			const {
				targetElement,
				currentX,
				titleContainerElement,
				titleElement,
				titleCharacterContainerElement,
				firstTitleCharacterElements,
				secondTitleCharacterElements,
				imageContainerElement,
				imageSubElement,
				imageElement,
				borderElement,
				utilIconContainerElement,
				iconElement,
			} = getDomVariables(e);

			gsap.to(utilIconContainerElement, {
				width: 0,
				height: 0,
				duration: 0.6,
				overwrite: true,
			});
			gsap.to(iconElement, {
				scale: 0,
				duration: 0.6,
				overwrite: true,
			});
			gsap.to(firstTitleCharacterElements, {
				yPercent: 0,
				duration: 0.4,
				stagger: 0.04,
				overwrite: true,
			});
			gsap.to(secondTitleCharacterElements, {
				yPercent: 0,
				duration: 0.3,
				stagger: 0.04,
				overwrite: true,
			});
			gsap.to(borderElement, {
				width: "0%",
				height: "0rem",
			});
			gsap.to(imageContainerElement, {
				opacity: 0,
				duration: 0.4,
				scale: 0,
				x: currentX,
				overwrite: true,
			});
		};

		const handleMouseMove = (e: MouseEvent | any) => {
			const targetElement: any = e.currentTarget;

			// project image dom manipulation //
			const imageContainerElement =
				targetElement?.querySelector(".image--container");
			const imageSubElement = imageContainerElement.querySelector(
				".image--sub--container"
			);
			const imageElement = imageSubElement.querySelector(".image");
			// end project image dom manipulation //

			// gsap.killTweensOf([
			// 	e.target,
			// 	imageElement,
			// 	imageContainerElement,
			// 	imageContainerElement,
			// ]);

			if (imageElement) {
				let prevX = e.clientX;
				const currentX =
					e.clientX -
					e.currentTarget.getBoundingClientRect().left -
					e.currentTarget.offsetWidth / 2;

				const currentY =
					e.clientY -
					e.currentTarget.getBoundingClientRect().top -
					e.currentTarget.offsetHeight / 2;

				const direction =
					prevX >= prevMousePosition() ? "right" : "left";

				const tiltAmount = direction === "right" ? 10 : -10;

				gsap.to(imageContainerElement, {
					// duration: 0.8,
					x: currentX,
					y: currentY,
					// ease: "power1.out",
					// rotation: tiltAmount,
					// opacity: 0.9,
					// zIndex: 1,
					// boxShadow:
					// "inset 20px 100px 96px 100px rgba(84, 80, 80, 0.1)",
					onComplete: () => {
						// gsap.to(imageElement, {
						// 	rotate: 0,
						// 	ease: "power1.out",
						// });
					},
				});
				// setPreviousMousePosition(prevX);
			}
		};

		Array.from(projectItemRef).forEach((item) => {
			item.addEventListener("mouseenter", (e) => handleMouseEnter(e));
			item.addEventListener("mouseleave", (e) => handleMouseLeave(e));
			item.addEventListener("mousemove", (e) => handleMouseMove(e));
		});

		onCleanup(() => {
			Array.from(projectItemRef).forEach((item) => {
				item.removeEventListener("mouseenter", (e) =>
					handleMouseEnter(e)
				);
				item.removeEventListener("mouseleave", (e) =>
					handleMouseLeave(e)
				);
				item.removeEventListener("mousemove", (e) =>
					handleMouseMove(e)
				);
			});
		});
	});

	return (
		<div ref={projectSectionRefElement} class="project--container">
			<div class="project--sub--container">
				<SectionHeader
					parallaxCharacterElement={headerParallaxCharacterElement}
					title="Portfolio"
					characterClassName="project--header--title--character"
					class="project--header--title"
					titleContainerClassNam="project--header--container"
				/>
				<div class="project--list">
					<For each={workContent}>
						{(props, index) => (
							<div
								ref={(element) => projectItemRef.push(element)}
								class="project--item"
							>
								<a
									href={`http://${props.link}`}
									target="_blank"
									rel="noopener noreferrer"
									class="project--item--link"
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
									<div class="project--title--container">
										<div class="project--title">
											<For
												each={props.title
													.trim()
													.split("")}
											>
												{(character, index) => (
													<div class="project--title--character--container ">
														<ParallaxCharacter
															index={index()}
															class="project--title--character first--project--title--character z-20"
															children={character}
															style={{
																margin: "0rem 0.5rem",
															}}
															parallaxCharacterElement={
																parallaxCharacterElement
															}
														/>
														<ParallaxCharacter
															index={index()}
															class="project--title--character second--project--title--character z-20"
															children={character}
															style={{
																margin: "0rem 0.5rem",
															}}
															parallaxCharacterElement={
																parallaxCharacterElement
															}
														/>
													</div>
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
											<div class="project--util--icon--container--mobile">
												<DoubleArrowIcon class="project--util--icon" />
											</div>
										</div>
									</div>
									<div class="project--item--border"></div>
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
