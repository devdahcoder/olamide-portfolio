import { Accessor, Component, createEffect, For } from "solid-js";
import "./intro.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro: Component<{ isLoadedComplete: Accessor<boolean> }> = (props) => {
	createEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".intro--container",
				start: `top center`,
				scrub: 1,
				end: `+=800px`,
				toggleActions: "play none none reverse",
			},
		});

		gsap.to(".intro--word--start", {
			scrollTrigger: {
				trigger: ".intro--text--container--start",
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

		gsap.to(".intro--word--end", {
			scrollTrigger: {
				trigger: ".intro--text--container--end",
				start: `top bottom`,
				scrub: 1,
				end: `bottom center`,
				markers: true,
				toggleActions: "play none none reverse",
			},
			duration: 1,
			stagger: 1,
			opacity: 1,
			ease: "power1.inOut",
		});

		tl.add([
			gsap.fromTo(
				".intro--top--role--text",
				{ xPercent: -15, opacity: 0 },
				{
					xPercent: 15,
					opacity: 1,
					duration: 1.5,
					ease: "power1.inOut",
				}
			),
			gsap.fromTo(
				".intro--bottom--role--text",
				{ xPercent: 15, opacity: 0 },
				{
					xPercent: -15,
					opacity: 1,
					duration: 1.5,
					ease: "power1.inOut",
				}
			),
		]);
	});

	return (
		<div class="intro--container">
			<div class="intro--sub--container">
				<div class="intro--text--container intro--text--container--start">
					<div class="intro--text">
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
						<div class="intro--role--text--container">
							<div class="intro--role--text intro--top--role--text">
								Creative
							</div>
						</div>
						<div class="intro--role--text--container">
							<div class="intro--role--text intro--center--role--text">
								Software
							</div>
						</div>
						<div class="intro--role--text--container">
							<div class="intro--role--text intro--bottom--role--text">
								Developer
							</div>
						</div>
					</div>
				</div>

				<div class="intro--text--container intro--text--container--end">
					<div class="intro--text ">
						<For
							each={`Currently, I live in Seattle. In my personal life, I
							love to travel with my backpack, watch documentaries
							about geography, and explore new traditional music.`.split(" ")}
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
