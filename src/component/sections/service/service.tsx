import { Accessor, Component, createEffect, createSignal, For } from "solid-js";
import "./service.scss";
import { serviceContent, serviceMobileContent } from "../../../../contents";
import SectionHeader from "../../section-header";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import ParallaxCharacter from "../../parallax-character";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Service: Component<{ isLoadedComplete: Accessor<boolean> }> = (props) => {
	const headerParallaxCharacterElement: HTMLDivElement[][] = [];
	const parallaxCharacterElement: HTMLDivElement[][] = [];
	let serviceSectionRefElement: HTMLDivElement | undefined;

	const [images] = createSignal<string[]>([
		"images/box-1.svg",
		"images/box.svg",
		"images/pyramid-1.svg",
		"images/pyramid.svg",
	]);

	const animateHeaderText = () => {
		gsap.fromTo(
			".service--title--character",
			{
				opacity: 0.4,
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

	createEffect(() => {
		const isLoadedComplete = props?.isLoadedComplete();
		elementObserver(serviceSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting && isLoadedComplete) {
				animateHeaderText();
				observer.unobserve(entry.target);
			}
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".service--container",
				start: `top 40%`,
				end: `+=1000px`,
				once: true,
				toggleActions: "play none none reverse",
			},
		});

		tl.fromTo(
			".service--text--character",
			{
				opacity: 0.4,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power3.out",
			}
		);

		tl.fromTo(
			".service--image",
			{
				opacity: 0.4,
				scale: 0.5,
			},
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				ease: "power3.out",
			},
			"-=0.9"
		);
	});

	return (
		<div ref={serviceSectionRefElement} class="service--container">
			<div class="service--sub--container">
				<SectionHeader
					parallaxCharacterElement={headerParallaxCharacterElement}
					title="Services"
					characterClassName="service--title--character shiny-text"
					class="service--header--title"
					titleContainerClassNam="service--header--container"
				/>

				<div class="service--list">
					<For each={serviceContent}>
						{({ services }) => (
							<div class="service--item">
								<div class="service--item--container">
									<For each={services}>
										{(service, index) => (
											<div class="service--text--container">
												{index() % 2 !== 0 ? (
													""
												) : (
													<img
														class="service--image"
														src={`${
															images()[
																Math.floor(
																	Math.random() *
																		images()
																			.length
																)
															]
														}`}
														alt=""
													/>
												)}

												<div class="service--text--sub--container">
													<For
														each={service?.split(
															""
														)}
													>
														{(character, index) => (
															<ParallaxCharacter
																index={index()}
																class={`service--text`}
																characterClass={`service--text--character`}
																children={
																	character
																}
																parallaxCharacterElement={
																	parallaxCharacterElement
																}
															/>
														)}
													</For>
												</div>
												{index() % 2 === 0 ? (
													""
												) : (
													<img
														class="service--image"
														src={`${
															images()[
																Math.floor(
																	Math.random() *
																		images()
																			.length
																)
															]
														}`}
														alt=""
													/>
												)}
											</div>
										)}
									</For>
								</div>
							</div>
						)}
					</For>
					<For each={serviceMobileContent}>
						{({ services }) => (
							<div class="service--item--mobile">
								<div class="service--item--container">
									<div class="service--text--container">
										<div class="service--text--sub--container">
											<For each={services?.split("")}>
												{(character, index) => (
													<ParallaxCharacter
														index={index()}
														class={`service--text`}
														characterClass={`service--text--character`}
														children={character}
														parallaxCharacterElement={
															parallaxCharacterElement
														}
													/>
												)}
											</For>
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

export default Service;
