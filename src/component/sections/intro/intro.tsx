import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accessor, Component, createEffect, For, onCleanup } from "solid-js";
import "./intro.scss";
gsap.registerPlugin(ScrollTrigger);

const Intro: Component<{ isLoadedComplete: Accessor<boolean> }> = (props) => {
	let introSectionRefElement: HTMLDivElement | undefined;

	createEffect(() => {

		const animations: any = [];
		props?.isLoadedComplete();
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".intro--container",
				start: `top center`,
				scrub: 1,
				end: `+=800px`,
				toggleActions: "play none none reverse",
			},
		});

		tl.fromTo(
			".intro--top--role--text",
			{ xPercent: -15, opacity: 0 },
			{
				xPercent: 15,
				opacity: 1,
				duration: 1.5,
				ease: "power1.inOut",
			}
		).fromTo(
			".intro--bottom--role--text",
			{ xPercent: 15, opacity: 0 },
			{
				xPercent: -15,
				opacity: 1,
				duration: 1.5,
				ease: "power1.inOut",
			},
			"<"
		);

		animations.push(tl);

		const startWordElements = document.querySelectorAll(
			".intro--word--start"
		);
		startWordElements.forEach((el) => {
			const anim = gsap.fromTo(
				el,
				{
					y: 30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top bottom",
						end: "top 60%",
						scrub: true,
						toggleActions: "play none none reverse",
					},
				}
			);
			animations.push(anim);
		});

		const endWordAnim = gsap.to(".intro--word--end", {
			scrollTrigger: {
				trigger: ".intro--text--container--end",
				start: `top bottom`,
				scrub: 1,
				end: `bottom center`,
				toggleActions: "play none none reverse",
			},
			duration: 1,
			stagger: 1,
			opacity: 1,
			ease: "power1.inOut",
		});

		animations.push(endWordAnim);

		onCleanup(() => {
			animations.forEach((anim: any) => {
				if (anim.scrollTrigger) {
					anim.scrollTrigger.kill();
				}
				anim.kill();
			});
		});
	});

	return (
		<div ref={introSectionRefElement} class="intro--container">
			<div class="intro--sub--container">
				<div class="intro--text--container intro--text--container--start">
					<div data-lag="0.2" class="intro--text">
						<For
							each={`I've worked in UI design and front-end development,
							so I can understand designs well and builds
							effective communication between team members.`.split(" ")}
						>
							{(word) => (
								<div class="mx-0.5 opacity-0 intro--word--start">
									{
										<For each={word.split(" ")}>
											{(character) => <p>{character}</p>}
										</For>
									}
								</div>
							)}
						</For>
					</div>
				</div>

				<div class="intro--role--container">
					<div class="intro--role--sub--container">
						<div class="intro--role--text--container shiny-text">
							<div class="intro--role--text intro--top--role--text shiny-text">
								Creative
							</div>
						</div>
						<div class="intro--role--text--container">
							<div class="intro--role--text intro--center--role--text">
								Software
							</div>
						</div>
						<div class="intro--role--text--container shiny-text">
							<div class="intro--role--text intro--bottom--role--text shiny-text">
								Developer
							</div>
						</div>
					</div>
				</div>

				<div class="intro--text--container intro--text--container--end">
					<div data-lag="0.2" class="intro--text ">
						<For
							each={`Currently, I live in Lagos. In my personal life, I
							love to write blog posts, watch documentaries
							about geography, wildlife, and explore new music.`.split(" ")}
						>
							{(word) => (
								<div class="mx-0.5 opacity-0 intro--word--end">
									{
										<For each={word.split(" ")}>
											{(character) => <p>{character}</p>}
										</For>
									}
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
