import { createSignal } from "solid-js";
import About from "./component/sections/about/about";
import Footer from "./component/sections/footer/footer";
import Header from "./component/sections/header/header";
import Hero from "./component/sections/hero/hero";
import Navigation from "./component/sections/navigation/navigation";
import WorkFlow from "./component/sections/work-flow/work-flow";
import Work from "./component/sections/work/work";
import Quote from "./component/sections/quote/quote";
import Project from "./component/sections/project/project";
import InfiniteTextScroll from "./component/infinit";
import "./styles/index.scss"
import GlobalProjectImage from "./component/global-project-image";
import Card from "./component/sections/card/card";
import Stack from "./component/sections/stack/stack";
import Service from "./component/sections/service/service";
import AboutMe from "./component/sections/about-me/about-me";
import Intro from "./component/sections/intro/intro";

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
			<About />
			<Intro />
			<Project />
			{/* Experience */}
			<Service />
			{/* <Stack /> */}
			<Footer />
			{/* <AboutMe /> */}
			{/* <WorkFlow /> */}
			{/* <Stack /> */}
			{/* <Card /> */}
			{/* <Work /> */}
			{/* <InfiniteTextScroll /> */}
		</>
	);
}

export default App;
