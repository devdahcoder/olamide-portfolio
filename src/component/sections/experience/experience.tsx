import { Component, createEffect, For } from "solid-js";
import "./experience.scss";
import { experienceContent } from "../../../../contents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Experience: Component<{}> = () => {
	const experienceElementRef: HTMLDivElement[] = [];
	createEffect(() => {
		// const tl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: ".experience--container",
		// 		start: `top 20%`,
		// 		scrub: 1,
		// 		// pin: true,
		// 		end: `bottom bottom`,
		// 		// toggleActions: "play none none reverse",
		// 	},
		// });

		// tl.to(".experience--header--title", {
		// 	scale: 0.3,
		// 	opacity: 0,
		// 	duration: 1,
		// 	position: "sticky",
		// });

		experienceElementRef.forEach((element, _index) => {
			gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: `top 30%`,
					scrub: 1,
					pin: true,
					end: `bottom bottom`,
					// markers: true,
					// toggleActions: "play none none reverse",
				},
			}).to(
				element,
				{
					opacity: 0,
					delay: 0,
					scale: 0.8,
					y: -50,
					// x: 100,
					skewX: "10deg",
					duration: 1,
				},
				"<"
			);
		});
	});
	return (
		<div class="experience--container">
			<div class="experience--sub--container">
				<div class="experience--header--title">
					<div class="experience--title">
						<p>Creative process for</p>
					</div>
					<div class="experience--title">
						<p>your Success</p>
					</div>
				</div>

				<div class="experience--list">
					<For each={experienceContent}>
						{(experience) => (
							<div class={`flex flex-row w-full ${experience?.id % 2 !== 0 ? '!justify-start' : '!justify-end'}` }>
								<div
									ref={(element) =>
										experienceElementRef.push(element)
									}

									class={`experience--item flex `}

								>
									<div class="experience--number">
										<span>0{experience?.id}.</span>
									</div>
									<div class={"flex flex-col"}>
										<div class="experience--title">

											<p>{experience?.title}</p>

										</div>

										<div class="experience--description">
											<p>{experience?.description}</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Experience;
