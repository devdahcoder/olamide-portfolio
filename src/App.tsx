import { createSignal, onCleanup, onMount } from "solid-js";
import Loader from "./component/loader.tsx";
import AboutMe from "./component/sections/about-me/about-me";
import About from "./component/sections/about/about";
import Experience from "./component/sections/experience/experience.tsx";
import Footer from "./component/sections/footer/footer";
import Header from "./component/sections/header/header";
import Hero from "./component/sections/hero/hero";
import Intro from "./component/sections/intro/intro";
import Navigation from "./component/sections/navigation/navigation";
import Project from "./component/sections/project/project";
import Service from "./component/sections/service/service";
import Lenis from "@studio-freight/lenis";
// import Mantra from "./component/sections/mantra/mantra.tsx";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);
	const [isLoadedComplete, setIsLoadedComplete] = createSignal<boolean>(false);

	// Initialize smooth scroll using Lenis
	onMount(() => {
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

		onCleanup(() => {
			lenis.destroy();
		});
	});

	// Initialize ScrollTrigger and ScrollSmoother
	// createEffect(() => {
	// 	// create the scrollSmoother before your scrollTriggers
	// 	ScrollSmoother.create({
	// 		smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
	// 		effects: true, // looks for data-speed and data-lag attributes on elements
	// 		smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
	// 	});
	// })

	return (
		<div>
			<Loader
				isLoadedComplete={isLoadedComplete}
				setIsLoadedComplete={setIsLoadedComplete}
			/>
			{isLoadedComplete() && (
				<>
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
					<About isLoadedComplete={isLoadedComplete} />
					<Project isLoadedComplete={isLoadedComplete} />
					{/* <Mantra /> */}
					<Experience isLoadedComplete={isLoadedComplete} />
					<Service isLoadedComplete={isLoadedComplete} />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
