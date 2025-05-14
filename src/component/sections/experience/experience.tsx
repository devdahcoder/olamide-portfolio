import { Accessor, Component, createEffect, For, onCleanup } from "solid-js";
import "./experience.scss";
import { experienceContent } from "../../../../contents";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Experience: Component<{ isLoadedComplete: Accessor<boolean> }> = (
	props
) => {
	const experienceElementRef: HTMLDivElement[] = [];
	createEffect(() => {
		const animations: any = [];

		props.isLoadedComplete();
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".experience--container",
				start: `top 20%`,
				scrub: 1,
				// pin: true,
				end: `bottom bottom`,
				// toggleActions: "play none none reverse",
			},
		});

		tl.to(".experience--header--title", {
			scale: 0.3,
			opacity: 0,
			duration: 1,
			position: "sticky",
		});

		const elements = gsap.utils.toArray(
			".experience--item"
		) as HTMLDivElement[];

		elements.forEach((el: HTMLDivElement, _index) => {
			const anim = gsap.fromTo(
				el,
				{
					y: 40,
					x: 70,
					opacity: 0,
					filter: "blur(5px)",
					color: "hsl(0, 4%, 14%)",
				},
				{
					y: 0,
					x: 0,
					opacity: 1,
					filter: "blur(0px)",
					color: "white",
					duration: 1.5,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						end: "bottom 60%",
						scrub: true,
						toggleActions: "play none none reverse",
					},
				}
			);

			animations.push(anim);
		});
		onCleanup(() => {
			animations.forEach((anim: any) => {
				if (anim.scrollTrigger) {
					anim.scrollTrigger.kill();
				}
				anim.kill();
			});

			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
							<div
								class={`experience--item relative flex flex-row md:even:items-start md:even:justify-stat md:odd:items-end md:odd:justify-end`}
							>
								<div
									ref={(element) =>
										experienceElementRef.push(element)
									}
									class={`experience--item w-full md:w-1/2`}
								>
									<div class="experience--number">
										<span>0{experience?.id}.</span>
									</div>
									<div class={"flex flex-col w-full flex-1"}>
										<div class="experience--title w-full">
											<p>{experience?.title}</p>
										</div>

										<div class="experience--description w-full ">
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
