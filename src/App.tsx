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
import Loader from "./component/loader";

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);
	const [isLoadedComplete, setIsLoadedComplete] =
		createSignal<boolean>(false);

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

			<Service isLoadedComplete={isLoadedComplete} />
			<Footer />
		</>
	);
}

export default App;
