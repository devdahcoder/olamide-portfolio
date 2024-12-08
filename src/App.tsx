import { createSignal } from "solid-js";
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
import WorkFlow from "./component/sections/work-flow/work-flow.tsx";

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(true);
	const [isLoadedComplete, setIsLoadedComplete] =
		createSignal<boolean>(false);

	return (
		<>
			{/*<Loader*/}
			{/*	isLoadedComplete={isLoadedComplete}*/}
			{/*	setIsLoadedComplete={setIsLoadedComplete}*/}
			{/*/>*/}
			<WorkFlow isLoadedComplete={ true} />
			<Navigation isNavigationOpen={isNavigationOpen} />
			{/*<Header*/}
			{/*	isLoadedComplete={isLoadedComplete}*/}
			{/*	isNavigationOpen={isNavigationOpen}*/}
			{/*	setIsNavigationOpen={setIsNavigationOpen}*/}
			{/*/>*/}
			{/*<Hero*/}
			{/*	isLoadedComplete={isLoadedComplete}*/}
			{/*	isNavigationOpen={isNavigationOpen()}*/}
			{/*/>*/}
			{/*<AboutMe isLoadedComplete={isLoadedComplete} />*/}
			{/*<Intro isLoadedComplete={isLoadedComplete} />*/}
			{/*<Project isLoadedComplete={isLoadedComplete} />*/}
			{/*<About />*/}
			{/*<ImageScroll />*/}
			{/*<PortalTransition />*/}
			{/*<Experience />*/}
			{/*/!*<Stack />*!/*/}

			{/*<Service isLoadedComplete={isLoadedComplete} />*/}
			<Footer />
		</>
	);
}

export default App;
