import gsap from "gsap";
import { Component, For, Show, createEffect, onCleanup } from "solid-js";
import { workContent } from "../../../../contents";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import IconButton from "../../icon-button";
import Image from "../../image";
import "./project.scss";

const Project: Component<{}> = (props) => {
	let projectRef: HTMLDivElement[] = [];
	let imageRef: HTMLDivElement | any;

	const handleItemEnter = (e: MouseEvent, imageSelector: Element | null) => {
		gsap.to(imageSelector, {
			opacity: 1,
			duration: 0.3,
			x:
				e.clientX -
				e.currentTarget.getBoundingClientRect().left -
				e.currentTarget.offsetWidth / 2,
			y:
				e.clientY -
				e.currentTarget.getBoundingClientRect().top -
				e.currentTarget.offsetHeight / 2,
		});
	};

	const handleItemLeave = (e: MouseEvent, imageSelector: Element | null) => {
		gsap.to(imageSelector, {
			opacity: 0,
			duration: 0.3,
		});
	};

	createEffect(() => {
		projectRef.forEach((item) => {
			let imageSelector = item.querySelector(".image--container");
			item.addEventListener("mouseenter", (e: MouseEvent) =>
				handleItemEnter(e, imageSelector)
			);
			item.addEventListener("mouseleave", (e: MouseEvent) =>
				handleItemLeave(e, imageSelector)
			);
		});
		onCleanup(() => {
			projectRef.forEach((item) => {
				let imageSelector = item.querySelector(".image--container");
				item.removeEventListener("mouseenter", (e: MouseEvent) =>
					handleItemEnter(e, imageSelector)
				);
				item.removeEventListener("mouseleave", (e: MouseEvent) =>
					handleItemLeave(e, imageSelector)
				);
			});
		});
	});

	return (
		<div class="project--container">
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
