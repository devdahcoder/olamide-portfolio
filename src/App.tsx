import { createEffect, createSignal, onMount } from "solid-js";
import About from "./component/sections/about/about";
import Footer from "./component/sections/footer/footer";
import Header from "./component/sections/header/header";
import Hero from "./component/sections/hero/hero";
import Navigation from "./component/sections/navigation/navigation";
import Project from "./component/sections/project/project";
import Service from "./component/sections/service/service";
import AboutMe from "./component/sections/about-me/about-me";
import Intro from "./component/sections/intro/intro";
import PortalTransition from "./component/portal-transition.tsx";
import ImageScroll from "./component/sections/image-scroll/image-scroll.tsx";
import Experience from "./component/sections/experience/experience.tsx";
import Loader from "./component/loader.tsx";

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);
	const [isLoadedComplete, setIsLoadedComplete] =
		createSignal<boolean>(false);

	const smoothScrollTo = (element: any, to: any, duration = 500) => {
		const start = Date.now();
		const from = element.scrollTop;

		const animate = () => {
			const progress = (Date.now() - start) / duration;
			const value = from + (to - from) * Math.min(progress, 1);
			element.scrollTop = value;

			if (progress < 1) {
				requestAnimationFrame(animate);
			}
		};

		requestAnimationFrame(animate);
	};

	onMount(() => {
		const myElement = document.getElementById("myElement");

		createEffect(() => {
			smoothScrollTo(myElement, 100);
		});
	});

	return (
		<>
			<Loader
				isLoadedComplete={isLoadedComplete}
				setIsLoadedComplete={setIsLoadedComplete}
			/>
			<Navigation isNavigationOpen={isNavigationOpen} />
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
			<Project isLoadedComplete={isLoadedComplete} />
			<About />
			<ImageScroll />
			<PortalTransition />
			<Experience />

			<Service isLoadedComplete={isLoadedComplete} />
			<Footer />
		</>
	);
}

export default App;
