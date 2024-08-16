import { Accessor, Component, createEffect, For } from "solid-js";
import "./playground.scss";
import { playgroundContent } from "../../../../contents";
import ParallaxCharacter from "../../parallax-character";
import { elementObserver, useIsLoadedStateHook } from "../../../../hooks";
import gsap from "gsap";
import SectionHeader from "../../section-header";

const Playground: Component<{ isLoadedComplete: Accessor<boolean> }> = (
	props
) => {
	const headerParallaxCharacterElement: HTMLDivElement[][] = [];
	let playgroundSectionRefElement: HTMLDivElement | undefined;


	const animateHeaderText = () => {
		gsap.fromTo(
			".playground--title--character",
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
		props?.isLoadedComplete();
		elementObserver(playgroundSectionRefElement, (entry, observer) => {
			if (entry.isIntersecting && props?.isLoadedComplete()) {
				animateHeaderText();
				observer.unobserve(entry.target);
			}
		});
	});

	return (
		<div ref={playgroundSectionRefElement} class="playground--container">
			<div class="playground--sub--container">
				<div class="playground--header--container">
					{/* <div class="playground--title--empty"></div> */}
					<div class="playground--title--container">
						<div class="playground--title--sub--container">
							<div class="playground--header--title">
								<For each={"Playground".split("")}>
									{(character, index) => (
										<ParallaxCharacter
											index={index()}
											class="playground--title"
											characterClass="playground--title--character"
											children={character}
											parallaxCharacterElement={
												headerParallaxCharacterElement
											}
										/>
									)}
								</For>
							</div>
							<SectionHeader
								parallaxCharacterElement={
									headerParallaxCharacterElement
								}
								title="Services"
								characterClassName="service--title--character"
								class="service--header--title"
								titleContainerClassNam="service--header--container"
							/>
							<div class="playground--sub--title">
								<p>
									Our vast experience and range of services
									help solve complex business problems with a
									personalized approach to each task
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="playground--list">
					<For each={playgroundContent}>
						{(playground, index) => (
							<div class="playground--item--container">
								<div class="playground--item--sub--container">
									<div class="playground--index">
										<p>0{index() + 1}</p>
									</div>

									<div class="playground--title--container">
										<div class="playground--title">
											<p>{playground.name}</p>
										</div>
										<div class="playground--tool--list">
											<For each={playground.tools}>
												{(tools, id) => (
													<div class="playground--tool--item">
														<span>{tools}</span>
													</div>
												)}
											</For>
										</div>
									</div>
								</div>
								<div class="playground--link--container h-20 border"></div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Playground;
