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

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);

	return (
		<>
			<GlobalProjectImage />
			<Navigation isNavigationOpen={isNavigationOpen} />
			<Header
				isNavigationOpen={isNavigationOpen}
				setIsNavigationOpen={setIsNavigationOpen}
			/>
			<Hero isNavigationOpen={isNavigationOpen()} />
			<AboutMe />
			<Intro />
			<Project />
			<div class=" py-44">
				<About />
				<Slider />
			</div>
			<Experience />
			<Service />
			<Footer />
		</>
	);
}

export default App;
