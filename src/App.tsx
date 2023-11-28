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

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);

	return (
		<>
			<Navigation isNavigationOpen={isNavigationOpen} />
			<Header
				isNavigationOpen={isNavigationOpen}
				setIsNavigationOpen={setIsNavigationOpen}
			/>
			<Hero isNavigationOpen={isNavigationOpen()} />
			<About />
			<Quote />
			{/* <Work /> */}
			{/* <InfiniteTextScroll /> */}
			<Project />
			<WorkFlow />
			<Footer />
		</>
	);
}

export default App;
