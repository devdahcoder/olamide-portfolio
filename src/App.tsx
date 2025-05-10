import { createSignal, onMount } from "solid-js";
import Loader from "./component/loader.tsx";
import AboutMe from "./component/sections/about-me/about-me";
// import About from "./component/sections/about/about";
import Experience from "./component/sections/experience/experience.tsx";
import Footer from "./component/sections/footer/footer";
import Header from "./component/sections/header/header";
import Hero from "./component/sections/hero/hero";
import Intro from "./component/sections/intro/intro";
import Navigation from "./component/sections/navigation/navigation";
import Project from "./component/sections/project/project";
import Service from "./component/sections/service/service";
// import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);
	const [isLoadedComplete, setIsLoadedComplete] = createSignal<boolean>(false);

	onMount(() => {
		ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1.5,
			effects: true, // looks for data-speed and data-lag attributes
			smoothTouch: 0.1,
		});

		// Example ScrollTrigger animation (add your animations here)
		// gsap.to(".hero-title", {
		// 	scrollTrigger: {
		// 		trigger: ".hero-section",
		// 		start: "top center",
		// 		end: "bottom center",
		// 		scrub: true,
		// 		markers: true, // helpful for debugging, remove in production
		// 	},
		// 	y: 100,
		// 	opacity: 0.5,
		// });

		// Optional: Implement Lenis for additional smooth scrolling features
		/*
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			touchMultiplier: 2,
			infinite: false,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
		*/

		// onCleanup(() => {
		// 	// Clean up all ScrollTrigger instances
		// 	ScrollTrigger.killAll();
		// 	// If using Lenis, uncomment the following:
		// 	// lenis.destroy();
		// });
	});

	return (
		<div id="smooth-wrapper">
			<div id="smooth-content">
				<Loader
					isLoadedComplete={isLoadedComplete}
					setIsLoadedComplete={setIsLoadedComplete}
				/>
				<Navigation
					isNavigationOpen={isNavigationOpen}
					setIsNavigationOpen={setIsNavigationOpen}
				/>
				<Header
					isLoadedComplete={isLoadedComplete}
					isNavigationOpen={isNavigationOpen}
					setIsNavigationOpen={setIsNavigationOpen}
				/>

				<Hero
					isLoadedComplete={isLoadedComplete}
					isNavigationOpen={isNavigationOpen()}
				/>
				<AboutMe isLoadedComplete={isLoadedComplete} />
				<Intro isLoadedComplete={isLoadedComplete} />
				{/* <About isLoadedComplete={isLoadedComplete} /> */}
				<Project isLoadedComplete={isLoadedComplete} />
				<Experience isLoadedComplete={isLoadedComplete} />
				<Service isLoadedComplete={isLoadedComplete} />
				<Footer />
			</div>
		</div>
	);
}

export default App;
