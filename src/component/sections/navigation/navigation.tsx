import gsap from "gsap";
import { Accessor, Component, For, createEffect } from "solid-js";
import "./navigation.scss";

const animateOpenNavigationContainer = () => {
	gsap.fromTo(
		".navigation--container",
		{
			opacity: 0,
			visibility: "hidden",
			position: "relative",
			zIndex: "-100",
			pointerEvents: "none",
		},
		{
			opacity: 1,
			visibility: "visible",
			position: "fixed",
			zIndex: "90",
			pointerEvents: "auto",
			ease: "power4.out",
			duration: 1.7,
			// onComplete: () => animateOpenNavigationGrid(),
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
		},
		{
			opacity: 0,
			visibility: "hidden",
			position: "relative",
			zIndex: "-100",
			pointerEvents: "none",
			ease: "power4.out",
			duration: 1,
		}
	);
};

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
			onComplete: () => {
				condition !== true
					? animateCloseNavigationContainer()
					: () => {};
			},
		}
	);
};

const Navigation: Component<{ isNavigationOpen: Accessor<boolean> }> = (
	props
) => {
	createEffect(() => {
		if (props.isNavigationOpen()) {
			animateOpenNavigationContainer();
			// animateOpenNavigationGrid();
		} else {
			animateCloseNavigationContainer();
			// animateCloseNavigationGrid(props.isNavigationOpen());
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
				{/* <For each={Array.of(1, 2, 3, 4, 5, 6)}>
					{() => <div class="navigation--grid"></div>}
				</For> */}
			</div>
		</div>
	);
};

export default Navigation;
