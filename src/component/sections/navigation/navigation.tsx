import gsap from "gsap";
import { Accessor, Component, For, createEffect, onCleanup } from "solid-js";
import { headerLinksContent, socialMediaContent } from "../../../../contents";
import ParallaxCharacter from "../../parallax-character";
import "./navigation.scss";

let navigationLinkRef: HTMLDivElement[][] = [];
let navigationLinkContainerRef: HTMLDivElement[] = [];

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

const animateNavigationLinkContainer = (show: boolean) => {
	const target = ".navigation--link--container";
	const duration = 1;
	const stagger = show ? 0.2 : -0.2;
	const delay = show ? 0.5 : 0.1;

	gsap.fromTo(
		target,
		{
			yPercent: show ? 500 : 0,
			opacity: show ? 0 : 1,
			// scale: show ? 0.5 : 1
		},
		{
			yPercent: show ? 0 : 500,
			opacity: show ? 1 : 0,
			scale: 1,
			stagger,
			duration,
			delay,
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

const Navigation: Component<{ isNavigationOpen: Accessor<boolean> }> = (
	props
) => {
	createEffect(() => {
		props.isNavigationOpen();
		animateNavigationMainContainer(props.isNavigationOpen());
		animateBodyPosition(props.isNavigationOpen());
		animateNavigationGrid(props.isNavigationOpen());
		animateNavigationSubContainer(props.isNavigationOpen());
		animateNavigationContentMainContainer(props.isNavigationOpen());
		animateContentSubContainer(props.isNavigationOpen());
		animateNavigationLinkContainer(props.isNavigationOpen());

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
							{(props, index) => (
								<div
									ref={(element) =>
										navigationLinkContainerRef.push(element)
									}
									class="navigation--link--container"
								>
									<a
										href={`${props.href}`}
										class="navigation--link"
									>
										<For
											each={props.text?.trim()?.split("")}
										>
											{(character) => (
												<ParallaxCharacter
													index={index()}
													class="navigation--link--text"
													children={character}
													parallaxCharacterElement={
														navigationLinkRef
													}
												/>
											)}
										</For>
									</a>
									<div class="navigation--link--container--border"></div>
								</div>
							)}
						</For>
					</div>

					<div class="navigation--footer--container">
						<div class="navigation--social--container">
							<For each={socialMediaContent}>
								{(props) => (
									<a href={`${props?.link}`} class="navigation--social--link">
										{props.text}
									</a>
								)}
							</For>
						</div>

						<div class="navigation--footer--container--dev">
							<p>Developed by <a href="https://github.com/thedevsaddam">Olamide Adigun</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
