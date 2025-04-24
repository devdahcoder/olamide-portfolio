import gsap from "gsap";
import { Accessor, Component, For, Setter, createEffect, onCleanup } from "solid-js";
import { headerLinksContent, socialMediaContent } from "../../../../contents";
import ParallaxCharacter from "../../parallax-character";
import "./navigation.scss";
import Button from "../../button";

let navigationLinkRef: HTMLDivElement[][] = [];
let navigationLinkContainerRef: HTMLAnchorElement[] = [];

const animateNavigationMainContainer = (show: boolean) => {
	const target = ".navigation--container";
	const duration = 1.2;

	if (show) {
		gsap.fromTo(
			target,
			{
				yPercent: -100,
				position: "relative",
				opacity: 0,
				zIndex: "-100",
				pointerEvents: "none",
				visibility: "hidden",
				display: "none",
			},
			{
				top: 0,
				left: 0,
				yPercent: 0,
				duration,
				opacity: 1,
				visibility: "visible",
				position: "fixed",
				zIndex: "90",
				pointerEvents: "auto",
				ease: "power4.out",
				display: "flex",
			}
		);
	} else {
		gsap.to(target, {
			yPercent: -100,
			duration,
			position: "absolute",
			delay: 1.3,
		});
	}
};

const animateNavigationSubContainer = (show: boolean) => {
	const target = ".navigation--sub--container";
	const duration = show ? 1.7 : 1;
	const ease = "power4.out";

	if (show) {
		gsap.fromTo(
			target,
			{
				opacity: 0,
				pointerEvents: "none",
				display: "none",
			},
			{
				opacity: 1,
				pointerEvents: "auto",
				display: "flex",
				duration,
				ease,
			}
		);
	} else {
		gsap.to(target, {
			opacity: 0,
			pointerEvents: "none",
			display: "none",
			delay: 1.2,
		});
	}
};

const animateNavigationGrid = (show: boolean) => {
	const target = ".navigation--grid";
	const duration = 1.2;
	const ease = "power4.out";
	const yPercent = -100;

	if (show === true) {
		gsap.fromTo(
			target,
			{
				yPercent,
			},
			{
				yPercent: 0,
				stagger: 0.3,
				duration,
				ease,
			}
		);
	} else {
		gsap.to(target, {
			yPercent,
			stagger: -0.2,
			duration,
			ease,
			delay: 0.1,
		});
	}
};

const animateNavigationContentMainContainer = (show: boolean) => {
	const target = ".navigation--content--main--container";
	const duration = show ? 1.7 : 1;
	const ease = "power4.out";

	if (show) {
		gsap.fromTo(
			target,
			{
				opacity: 0,
				display: "none",
			},
			{
				opacity: 1,
				display: "flex",
				duration,
				ease,
			}
		);
	} else {
		gsap.to(target, {
			opacity: 0,
			display: "none",
			delay: 1,
		});
	}
};

const animateContentSubContainer = (show: boolean) => {
	const target = ".navigation--content--sub--container";
	const duration = show ? 1.7 : 1;
	const ease = "power4.out";

	if (show) {
		gsap.fromTo(
			target,
			{
				opacity: 0,
				display: "none",
			},
			{
				opacity: 1,
				display: "flex",
				duration,
				ease,
			}
		);
	} else {
		gsap.to(target, {
			opacity: 0,
			display: "none",
			delay: 1,
		});
	}
};

const animateNavigationLink = (show: boolean, onComplete?: () => void) => {
	const target = ".navigation--link";
	const duration = 1;
	const stagger = show ? 0.2 : -0.2;
	const delay = show ? 0.5 : 0.1;

	gsap.fromTo(
		target,
		{
			yPercent: show ? 500 : 0,
			opacity: show ? 0 : 1,
			scale: show ? 0.5 : 1,
		},
		{
			yPercent: show ? 0 : 500,
			opacity: show ? 1 : 0,
			scale: 1,
			stagger,
			duration,
			delay,
			onComplete: () => {
				gsap.to(".navigation--link--button", {
					opacity: 1,
					scale: 1,
					ease: "back.inOut",
				});
				if (onComplete) onComplete();
			},
		}
	);
};

const animateBodyPosition = (show: boolean) => {
	const target = "body";
	const duration = 1;
	const ease = "power4.in";
	const positionProps = show
		? { position: "fixed" }
		: { position: "relative" };

	gsap.fromTo(target, positionProps, { duration, ease });
};


const animateNavigationFooter = (show: boolean) => {
    const target = ".navigation--footer--container";
    const duration = 1;
    const ease = "power4.out";

    if (show) {
        gsap.fromTo(
            target,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration,
                ease,
            }
        );
    } else {
        gsap.to(target, {
            opacity: 0,
            y: 50,
            duration,
            ease,
        });
    }
};



const Navigation: Component<{
	isNavigationOpen: Accessor<boolean>;
	setIsNavigationOpen: Setter<boolean>;
}> = (props) => {
	createEffect(() => {
		// props.isNavigationOpen();
		// animateNavigationMainContainer(props.isNavigationOpen());
		// animateBodyPosition(props.isNavigationOpen());
		// animateNavigationGrid(props.isNavigationOpen());
		// animateNavigationSubContainer(props.isNavigationOpen());
		// animateNavigationContentMainContainer(props.isNavigationOpen());
		// animateContentSubContainer(props.isNavigationOpen());
		// animateNavigationLink(props.isNavigationOpen());

		props.isNavigationOpen();
		animateNavigationMainContainer(props.isNavigationOpen());
		animateBodyPosition(props.isNavigationOpen());
		animateNavigationGrid(props.isNavigationOpen());
		animateNavigationSubContainer(props.isNavigationOpen());
		animateNavigationContentMainContainer(props.isNavigationOpen());
		animateContentSubContainer(props.isNavigationOpen());
		animateNavigationLink(props.isNavigationOpen(), () => {
			animateNavigationFooter(props.isNavigationOpen());
		});

		let observe = new IntersectionObserver(
			(entries) => {
				entries.forEach(() => {
					// let link = entry?.target?.querySelector(
					// 	".navigation--link"
					// ) as HTMLAnchorElement;
					// if (entry.isIntersecting) {
					// 	animateLinkFocus(entry.target, link, true);
					// } else {
					// 	animateLinkFocus(entry.target, link, false);
					// }
				});
			},
			{
				threshold: 0.1,
				rootMargin: "-47% 0px -47%",
			}
		);

		navigationLinkContainerRef.forEach((element) =>
			observe.observe(element)
		);

		onCleanup(() => {
			observe.disconnect();
		});
	});

	return (
		<div class="navigation--container">
			<div class="navigation--sub--container">
				<For each={Array.of(1, 2, 3, 4, 5, 6)}>
					{() => <div class="navigation--grid"></div>}
				</For>

				<div class="navigation--content--main--container">
					<div class="navigation--list">
						<For each={headerLinksContent}>
							{(prop, index) => (
								<a
									href={`${prop.href}`}
									ref={(element) =>
										navigationLinkContainerRef.push(element)
									}
									class="navigation--link"
									onClick={() => {
										props.setIsNavigationOpen(false);
									}}
								>
									<div class="navigation--link--text--container">
										<div class="navigation--link--text">
											<For
												each={prop.text
													?.trim()
													?.split("")}
											>
												{(character) => (
													<ParallaxCharacter
														index={index()}
														class="navigation--link--character shiny-text"
														children={character}
														parallaxCharacterElement={
															navigationLinkRef
														}
													/>
												)}
											</For>
										</div>
										<div class="navigation--link--index">
											(0{prop?.id})
										</div>
									</div>

									<Button buttonClass="navigation--link--button">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 12h16.5M13.5 5.25 20.25 12l-6.75 6.75"
												stroke="#fff"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</Button>
								</a>
							)}
						</For>
					</div>

					<div class="navigation--footer--container">
						<div class="navigation--social--container">
							<For each={socialMediaContent}>
								{(props) => (
									<a
										href={`${props?.link}`}
										class="navigation--social--link"
									>
										{props.text}
									</a>
								)}
							</For>
						</div>

						<div class="navigation--footer--container--dev">
							<p>
								Developed by{" "}
								<a href="https://github.com/thedevsaddam">
									Olamide Adigun
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
