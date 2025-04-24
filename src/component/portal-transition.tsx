// import { Component, onMount, onCleanup, createEffect } from 'solid-js';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./component.scss";
// import Particles from './particles';
// gsap.registerPlugin(ScrollTrigger);

// const PortalTransition: Component<{}> = () => {
// 	let sectionRef: HTMLDivElement | undefined;
// 	let circleRef: HTMLDivElement | undefined;

// 	createEffect(() => {
// 		if (sectionRef && circleRef) {
// 			const tl = gsap.timeline({
// 				scrollTrigger: {
// 					trigger: sectionRef,
// 					start: "top top",
// 					end: "+=100%",
// 					scrub: true,
// 					pin: true,
// 				},
// 			});

// 			tl.to(circleRef, {
// 				scale: "100%",
// 				clipPath: "circle(100%)",
// 				duration: 1,
// 			});

// 			tl.to(
// 				sectionRef,
// 				{
// 					backgroundColor: "#000",
// 					color: "#fff",
// 					duration: 0.5,
// 				},
// 				"-=0.5"
// 			);

// 			// Fade in particles as the portal opens
// 			tl.fromTo(
// 				".particles-container", // Add a class to the particles container
// 				{ opacity: 0 },
// 				{ opacity: 1, duration: 0.5 },
// 				"-=0.5"
// 			);

// 			tl.to(
// 				".content",
// 				{
// 					opacity: 1,
// 					duration: 0.2,
// 				},
// 				"-=0.5"
// 			);
// 		}

// 		onCleanup(() => {
// 			ScrollTrigger.getAll().forEach((t) => t.kill());
// 		});
// 	});

// 	return (
// 		<div ref={sectionRef} class="portal-section">
// 			<div ref={circleRef} class="portal-circle"></div>
// 			<div
// 				class={
// 					"w-full h-full flex flex-col items-center justify-center"
// 				}
// 			>
// 				<div
// 					style={{
// 						width: "100%",
// 						height: "600px",
// 						position: "relative",
// 					}}
// 				>
// 					<Particles
// 						particleColors={["#ffffff", "#ffffff"]}
// 						particleCount={200}
// 						particleSpread={10}
// 						speed={0.1}
// 						particleBaseSize={100}
// 						moveParticlesOnHover={true}
// 						alphaParticles={false}
// 						disableRotation={false}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PortalTransition;