import { Component, onMount, onCleanup, Accessor } from 'solid-js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./component.scss";
import Service from "./sections/service/service";

gsap.registerPlugin(ScrollTrigger);

const PortalTransition: Component<{
	isLoadedComplete: Accessor<boolean>;
}> = (props) => {
	let sectionRef: HTMLDivElement | undefined;
	let circleRef: HTMLDivElement | undefined;

	onMount(() => {
		if (sectionRef && circleRef) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef,
					start: "top top",
					end: "+=100%",
					scrub: true,
					pin: true,
				},
			});

			tl.to(circleRef, {
                scale: 80,
                clipPath: "circle(100%)",
				duration: 1,
			});

			tl.to(
				sectionRef,
				{
					backgroundColor: "#000",
					color: "#fff",
					duration: 0.5,
				},
				"-=0.5"
            );
            
			tl.to(
				".content",
				{
					opacity: 1,
					duration: 0.2,
				},
				"-=0.5"
			);
		}

		onCleanup(() => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		});
	});

	return (
		<div ref={sectionRef} class="portal-section">
			<div ref={circleRef} class="portal-circle"></div>
			<div class="content text-white border z-50">
				<h2>Welcome to the Next Section</h2>
				<p>This content appears as the circle expands.</p>
			</div>
			{/* <Service isLoadedComplete={props?.isLoadedComplete} /> */}
		</div>
	);
};

export default PortalTransition;