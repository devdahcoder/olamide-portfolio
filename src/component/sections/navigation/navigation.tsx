import gsap from "gsap";
import { Component, For, createEffect } from "solid-js";
import "./navigation.scss";

const animateOpenNavigationContainer = (condition: boolean) => {
	const conditionCheck = true;

	gsap.fromTo(
		".navigation--container",
		{
			opacity: condition === conditionCheck ? 0 : 1,
			visibility: condition === conditionCheck ? "hidden" : "visible",
			position: condition === conditionCheck ? "relative" : "fixed",
			zIndex: condition === conditionCheck ? "-100" : "-100",
			pointerEvents: condition === conditionCheck ? "none" : "auto",
		},
		{
			opacity: condition === conditionCheck ? 1 : 0,
			visibility: condition === conditionCheck ? "visible" : "hidden",
			position: condition === conditionCheck ? "fixed" : "relative",
			zIndex: condition === conditionCheck ? "90" : "90",
			pointerEvents: condition === conditionCheck ? "auto" : "none",
			ease: "power4.out",
			duration: 1.7,
		}
	);
};

const animateNavigationGrid = (condition: boolean) => {
	gsap.fromTo(
		".navigation--grid",
		{
			yPercent: condition ? -100 : 0,
		},
		{
			yPercent: condition ? 0 : -100,
			stagger: 0.2,
			duration: 1.5,
			ease: "power4.out",
		}
	);
};

const Navigation: Component<{ isNavigationOpen: boolean }> = (props) => {
	createEffect(() => {
		console.log(props.isNavigationOpen);
		props.isNavigationOpen;
		// animateNavigationGrid(props.isNavigationOpen);
		animateOpenNavigationContainer(props.isNavigationOpen);
	});

	return (
		<div
			style={
				props.isNavigationOpen ? {
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
			</div>
		</div>
	);
};

export default Navigation;


// import gsap from "gsap";
// import { Component, For, createEffect } from "solid-js";
// import "./navigation.scss";

// const animateOpenNavigationContainer = () => {
// 	gsap.fromTo(
// 		".navigation--container",
// 		{
// 			opacity: 0,
// 			visibility: "hidden",
// 			position: "relative",
// 			zIndex: "-100",
// 			pointerEvents: "none",
// 		},
// 		{
// 			opacity: 1,
// 			visibility: "visible",
// 			position: "fixed",
// 			zIndex: "90",
// 			pointerEvents: "auto",
// 			ease: "power4.out",
// 			duration: 1.7,
// 		}
// 	);
// };

// const animateCloseNavigationContainer = () => {
// 	gsap.fromTo(
// 		".navigation--container",
// 		{
// 			opacity: 1,
// 			visibility: "visible",
// 			position: "fixed",
// 			zIndex: "90",
// 			pointerEvents: "auto",
// 		},
// 		{
// 			opacity: 0,
// 			visibility: "hidden",
// 			position: "relative",
// 			zIndex: "-100",
// 			pointerEvents: "none",
// 			ease: "power4.out",
// 			duration: 2.5,
// 			delay: 2,
// 		}
// 	);
// };

// const animateOpenNavigationGrid = () => {
// 	gsap.fromTo(
// 		".navigation--grid",
// 		{
// 			yPercent: -100,
// 		},
// 		{
// 			yPercent: 0,
// 			stagger: 0.2,
// 			duration: 1.5,
// 			ease: "power4.out",
// 		}
// 	);
// };

// const animateCloseNavigationGrid = () => {
// 	gsap.fromTo(
// 		".navigation--grid",
// 		{
// 			yPercent: 0,
// 		},
// 		{
// 			yPercent: -100,
// 			stagger: 0.2,
// 			duration: 1.5,
// 			ease: "power4.out",
// 		}
// 	);
// };

// const Navigation: Component<{ isNavigationOpen: boolean }> = (props) => {
// 	createEffect(() => {
// 		props.isNavigationOpen;
// 		if (props.isNavigationOpen) {
// 			animateOpenNavigationContainer();
// 			animateOpenNavigationGrid();
// 		} else {
// 			animateCloseNavigationContainer();
// 			animateCloseNavigationGrid();
// 		}
// 	});

// 	return (
// 		<div
// 			style={
// 				props.isNavigationOpen
// 					? {
// 							top: "0",
// 							left: "0",
// 							width: "100vw",
// 							height: "100vh",
// 					  }
// 					: {}
// 			}
// 			class="navigation--container"
// 		>
// 			<div class="navigation--sub--container">
// 				<For each={Array.of(1, 2, 3, 4, 5, 6)}>
// 					{() => <div class="navigation--grid"></div>}
// 				</For>
// 			</div>
// 		</div>
// 	);
// };

// export default Navigation;
