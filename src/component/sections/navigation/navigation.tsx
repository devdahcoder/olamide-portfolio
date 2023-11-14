import gsap from "gsap";
import {
	Accessor,
	Component,
	For,
	createEffect,
	createSignal,
	onCleanup,
} from "solid-js";
import { headerLinksContent } from "../../../../contents";
import ParallaxCharacter from "../../parallax-character";
import "./navigation.scss";

let contentContainerRef: HTMLDivElement | undefined;
let linkRef: HTMLDivElement[][] = [];
let linkListContainer: HTMLDivElement[] = [];

const animateNavigationLink = (show: boolean) => {
	const target = ".navigation--link--container";
	const duration = 1;
	const stagger = show ? 0.2 : -0.2;
	const delay = show ? 0.5 : 0.1;

	gsap.fromTo(
		target,
		{
			yPercent: show ? 500 : 0,
			opacity: show ? 0 : 1,
		},
		{
			yPercent: show ? 0 : 500,
			opacity: show ? 1 : 0,
			stagger,
			duration,
			delay,
		}
	);
};

const animateLinkContainer = (show: boolean) => {
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

const animateNavigationGrid = (show: boolean) => {
	const target = ".navigation--grid";
	const duration = 1.2;
	const ease = "power4.out";

	if (show === true) {
		gsap.fromTo(
			target,
			{
				yPercent: -100,
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
			yPercent: -100,
			stagger: -0.2,
			duration,
			ease,
			delay: 0.1,
			onComplete: () => {
				// You can perform additional actions here if needed
			},
		});
	}
};

const animateNavigationContentContainer = (show: boolean) => {
	const target = ".navigation--sub--container";
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

const animateNavigationSubContainer = (show: boolean) => {
	const target = ".navigation--sub--container";
	const duration = show ? 1.7 : 1;
	const ease = "power4.out";

	if (show) {
		gsap.fromTo(
			target,
			{
				opacity: 0,
				// visibility: "hidden",
				// position: "relative",
				// zIndex: "-100",
				// pointerEvents: "none",
				display: "none",
			},
			{
				opacity: 1,
				// top: 0,
				// left: 0,
				// visibility: "visible",
				// position: "fixed",
				// zIndex: "90",
				// pointerEvents: "auto",
				display: "flex",
				duration,
				ease,
			}
		);
	} else {
		gsap.to(target, {
			opacity: 0,
			// visibility: "hidden",
			// position: "relative",
			// zIndex: "-100",
			// pointerEvents: "none",
			display: "none",
			// duration,
			// ease,
			delay: 1.2,
		});
	}
};

const animateNavigationContainer = (show: boolean) => {
	const target = ".navigation--container";
	const duration = 1.2;

	if (show === true) {
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

const animateBodyPosition = (show: boolean) => {
	const target = "body";
	const duration = 1;
	const ease = "power4.in";
	const positionProps = show
		? { position: "fixed" }
		: { position: "relative" };

	gsap.fromTo(target, positionProps, { duration, ease });
};

const resetAnchor = (element: HTMLDivElement) => {
	gsap.to(element, {
		scale: 1,
		delay: 0.3,
		duration: 0.8,
		color: "#FFFFFF",
		fontFamily: `Zodiak, Satoshi, -apple-system, Helvetica Neue, sans-serif`,
	});
};

const animateNavigationLinkText = (index: number) => {
	linkRef[index].forEach((element, index) =>
		gsap.fromTo(
			element,
			{
				scale: 1,
				color: "#ffffff",
				fontFamily: `Zodiak, Satoshi, -apple-system, Helvetica Neue, sans-serif`,
			},
			{
				scale: 1.2,
				duration: 0.8,
				delay: 0.1 + index * 0.1,
				color: "#F96F21",
				fontFamily: `Tanker, -apple-system, Helvetica Neue, sans-serif`,
				onComplete: () => {
					resetAnchor(element);
				},
			}
		)
	);
};


const Navigation: Component<{ isNavigationOpen: Accessor<boolean> }> = (
	props
) => {

	createEffect(() => {
		props.isNavigationOpen();
		animateNavigationContainer(props.isNavigationOpen());
		animateBodyPosition(props.isNavigationOpen());
		animateNavigationSubContainer(props.isNavigationOpen());
		animateNavigationContentContainer(props.isNavigationOpen());
		animateNavigationGrid(props.isNavigationOpen());
		animateLinkContainer(props.isNavigationOpen());
		animateNavigationLink(props.isNavigationOpen());
	});

	return (
		<div class="navigation--container">
			<div class="navigation--sub--container">
				<For each={Array.of(1, 2, 3, 4, 5, 6)}>
					{() => <div class="navigation--grid"></div>}
				</For>

				<div
					ref={contentContainerRef}
					class="navigation--content--container"
				>
					<div class="navigation--content--sub--container">
						<For each={headerLinksContent}>
							{(props, index) => (
								<div
									ref={(element) =>
										linkListContainer.push(element)
									}
									onMouseEnter={() =>
										animateNavigationLinkText(index())
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
														linkRef
													}
												/>
											)}
										</For>
									</a>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
