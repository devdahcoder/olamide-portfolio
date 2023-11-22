import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Component, For, Show, createEffect, onCleanup } from "solid-js";
import { workContent } from "../../../../contents";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import IconButton from "../../icon-button";
import Image from "../../image";
import "./project.scss";
gsap.registerPlugin(ScrollTrigger);

const handleItemEnter = (
	e: MouseEvent | any,
	imageSelector: Element | null,
	prevX: number
) => {
	if (imageSelector) {
		const currentX =
			e.clientX -
			e.currentTarget.getBoundingClientRect().left -
			e.currentTarget.offsetWidth / 2;

		const direction = currentX > prevX ? "right" : "left";

		gsap.to(imageSelector, {
			duration: 0.5,
			x:
				e.clientX -
				e.currentTarget.getBoundingClientRect().left -
				e.currentTarget.offsetWidth / 2,
			y:
				e.clientY -
				e.currentTarget.getBoundingClientRect().top -
				e.currentTarget.offsetHeight / 2,
			ease: "sine.inOut",
			opacity: 0.9,
			boxShadow: "inset 20px 100px 96px 100px rgba(84, 80, 80, 0.1)",
		});
	}
};

const handleItemLeave = (e: MouseEvent, imageSelector: Element | null) => {
	if (imageSelector) {
		gsap.to(imageSelector, {
			opacity: 0,
			duration: 0.5,
		});
	}
};

const handleItemHover = () => {
	gsap.to(".project--background--image", {
		ease: "sine.in",
		duration: 2.5,
		opacity: 0.9,
		delay: 0,
	});
};

const handleItemOut = () => {
	gsap.to(".project--background--image", {
		duration: 2.5,
		opacity: 0,
	});
};

const handleProjectToolsAnimation = (show: boolean) => {
	gsap.fromTo(
		".project--tool",
		{ yPercent: 100, opacity: 0 },
		{ yPercent: 0, opacity: 1, duration: 0.7, ease: "sine.in", stagger: show ? 0.5 : -0.5 }
	);
};

const Project: Component<{}> = () => {
	let projectRef: HTMLDivElement[] = [];

	const attachEventListeners = (item: HTMLDivElement) => {
		const projectContainerSelector = document.querySelector(
			".project--container"
		);
		const projectBackgroundImageSelector =
			projectContainerSelector?.querySelector(
				".project--background--image"
			) as HTMLImageElement;
		const imageSelector = item.querySelector(".image--container");
		const imageSubSelector = imageSelector?.querySelector(
			".image--sub--container"
		);
		const imageElem = imageSubSelector?.querySelector(
			".image"
		) as HTMLImageElement;
		let prevX = 0;

		item.addEventListener("mouseenter", () => {
			if (projectBackgroundImageSelector) {
				projectBackgroundImageSelector.src = imageElem.src;
				handleItemHover();
				handleProjectToolsAnimation(true);
			}
		});

		item.addEventListener("mousemove", (e: MouseEvent) => {
			handleItemEnter(e, imageSelector, prevX);

			prevX = e.clientX;
		});

		item.addEventListener("mouseleave", (e: MouseEvent) => {
			handleItemLeave(e, imageSelector);
			handleItemOut();
		});
	};

	const removeEventListeners = (item: HTMLDivElement) => {
		const imageSelector = item.querySelector(".image--container");

		item.removeEventListener("mousemove", (e: MouseEvent) =>
			handleItemEnter(e, imageSelector, 0)
		);
		item.removeEventListener("mouseenter", () => handleItemHover());
		item.removeEventListener("mouseleave", (e: MouseEvent) => {
			handleItemLeave(e, imageSelector);
			handleItemOut();
		});
	};

	createEffect(() => {
		// gsap.to(
		// "",
		// 	// ".project--item--container",
		// 	// { yPercent: 100 },
		// 	{
		// 		// yPercent: 0,
		// 		scrollTrigger: {
		// 			trigger: ".project--container",
		// 			start: "top top",
		// 			end: "bottom center",
		// 			scrub: true,
		// 			pin: true,
		// 			markers: true,
		// 		},
		// 	}
		// );
		projectRef.forEach(attachEventListeners);
		onCleanup(() => projectRef.forEach(removeEventListeners));
	});

	return (
		<div class="project--container">
			<img
				src=""
				alt="background-image"
				class="project--background--image"
			/>
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
												<>
													<div class="project--tool">
														{tool}
													</div>
												</>
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
