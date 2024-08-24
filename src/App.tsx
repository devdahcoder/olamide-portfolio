import { createSignal } from "solid-js";
import About from "./component/sections/about/about";
import Footer from "./component/sections/footer/footer";
import Header from "./component/sections/header/header";
import Hero from "./component/sections/hero/hero";
import Navigation from "./component/sections/navigation/navigation";
import Project from "./component/sections/project/project";
import GlobalProjectImage from "./component/global-project-image";
import Service from "./component/sections/service/service";
import AboutMe from "./component/sections/about-me/about-me";
import Intro from "./component/sections/intro/intro";
import Slider from "./component/slider";
import Experience from "./component/sections/experience/experience";
import Loader from "./component/loader";
import ImageScroll from "./component/sections/image-scroll/image-scroll";
import Expertise from "./component/sections/experties/expertise";

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);
	const [isLoadedComplete, setIsLoadedComplete] =
		createSignal<boolean>(false);

	return (
		<>
			<GlobalProjectImage />
			{/* <Loader
				isLoadedComplete={isLoadedComplete}
				setIsLoadedComplete={setIsLoadedComplete}
			/> */}
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
			<ImageScroll isLoadedComplete={isLoadedComplete}
				isNavigationOpen={isNavigationOpen()} />
			{/* <AboutMe isLoadedComplete={isLoadedComplete} />
			<Intro isLoadedComplete={isLoadedComplete} />
			<Project isLoadedComplete={isLoadedComplete} />
			<div class=" py-44">
				<About />
				<Slider />
			</div>
			<Experience />
			
			<Service isLoadedComplete={isLoadedComplete} /> */}
			<Experience />
			<Footer />
		</>
	);
}

export default App;
