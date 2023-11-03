import gsap from "gsap";
import { Accessor, Component, For, createEffect } from "solid-js";
import { headerLinksContent } from "../../../../contents";
import "./navigation.scss";

const animateOpenNavigationLink = () => {
	gsap.fromTo(
		".navigation--link--container",
		{
			yPercent: 500,
		},
		{
			yPercent: 0,
			stagger: 0.2,
			duration: 1,
			delay: 0.5,
		}
	);
};

const animateCloseNavigationLink = () => {
	gsap.fromTo(
		".navigation--link--container",
		{
			yPercent: 0,
		},
		{
			yPercent: 500,
			stagger: -0.2,
			duration: 1,
			delay: 0.1,
		}
	);
};

// Grid animation
const animateOpenNavigationGrid = () => {
	gsap.fromTo(
		".navigation--grid",
		{
			yPercent: -100,
			delay: 1,
		},
		{
			yPercent: 0,
			stagger: 0.2,
			duration: 1.5,
			ease: "power4.out",
		}
	);
};

const animateCloseNavigationGrid = (condition: boolean) => {
	gsap.fromTo(
		".navigation--grid",
		{
			yPercent: 0,
		},
		{
			yPercent: -100,
			stagger: 0.2,
			duration: 1.5,
			ease: "power4.out",
			delay: 0.3,
			onComplete: () => {
				condition ? animateCloseNavigationContainer() : () => {};
			},
		}
	);
};
// End grid animation

const animateOpenNavigationContainer = () => {
	gsap.fromTo(
		".navigation--container",
		{
			opacity: 0,
			visibility: "hidden",
			position: "relative",
			zIndex: "-100",
			pointerEvents: "none",
			// display: "none",
		},
		{
			opacity: 1,
			visibility: "visible",
			position: "fixed",
			zIndex: "90",
			pointerEvents: "auto",
			ease: "power4.out",
			duration: 1.7,
			// display: "block",
		}
	);
};

const animateCloseNavigationContainer = () => {
	gsap.fromTo(
		".navigation--container",
		{
			opacity: 1,
			visibility: "visible",
			position: "fixed",
			zIndex: "90",
			pointerEvents: "auto",
			// display: "block",
		},
		{
			opacity: 0,
			visibility: "hidden",
			position: "relative",
			zIndex: "-100",
			pointerEvents: "none",
			ease: "power4.out",
			duration: 1,
			delay: 1,
			// display: "none",
		}
	);
};

const animateOpenBodyPosition = () => {
	gsap.fromTo(
		"body",
		{ position: "relative" },
		{ position: "fixed", duration: 1, ease: "power4" }
	);
};

const animateCloseBodyPosition = () => {
	gsap.fromTo(
		"body",
		{ position: "fixed" },
		{ position: "relative", duration: 1, ease: "power4" }
	);
};

const animateOpenNavigationContentContainer = () => {
	gsap.fromTo(
		".navigation--content--container",
		{
			opacity: 0,
			visibility: "hidden",
			position: "relative",
			zIndex: "-100",
			pointerEvents: "none",
			display: "none",
		},
		{
			opacity: 1,
			visibility: "visible",
			position: "fixed",
			zIndex: "90",
			pointerEvents: "auto",
			ease: "power4.out",
			duration: 1.7,
			display: "block",
		}
	);
};

const animateCloseNavigationContentContainer = () => {
	gsap.fromTo(
		".navigation--content--container",
		{
			opacity: 1,
			visibility: "visible",
			position: "fixed",
			zIndex: "90",
			pointerEvents: "auto",
			display: "block",
		},
		{
			opacity: 0,
			visibility: "hidden",
			position: "relative",
			zIndex: "-100",
			pointerEvents: "none",
			ease: "power4.out",
			duration: 1,
			delay: 1,
			display: "none",
		}
	);
};

const Navigation: Component<{ isNavigationOpen: Accessor<boolean> }> = (
	props
) => {
	createEffect(() => {
		props.isNavigationOpen();
		if (props.isNavigationOpen() === true) {
			animateOpenNavigationContainer();
			animateOpenNavigationGrid();
			animateOpenNavigationLink();
			animateOpenBodyPosition();
			animateOpenNavigationContentContainer();
		} else {
			animateCloseNavigationGrid(props.isNavigationOpen());
			animateCloseNavigationLink();
			animateCloseBodyPosition();
			// animateCloseNavigationContentContainer();
		}
	});

	return (
		<div
			style={
				props.isNavigationOpen()
					? {
							top: "0",
							left: "0",
							width: "100vw",
							height: "100vh",
					  }
					: {}
			}
			class="navigation--container"
		>
			<div class="navigation--sub--container">
				<For each={Array.of(1, 2, 3, 4, 5, 6)}>
					{() => <div class="navigation--grid"></div>}
				</For>

				<div class="navigation--content--container">
					<div class="navigation--content--sub--container">
						<For each={headerLinksContent}>
							{(props) => (
								<div class="navigation--link--container">
									<a
										href={`${props.href}`}
										class="navigation--link"
									>
										{props.text}
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
