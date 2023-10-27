import { createSignal } from "solid-js";
import AboutMe from "./component/sections/about/about";
import Footer from "./component/sections/footer/footer";
import Header from "./component/sections/header/header";
import Hero from "./component/sections/hero/hero";
import Quote from "./component/sections/quote/quote";
import WorkFlow from "./component/sections/work-flow/work-flow";
import Work from "./component/sections/work/work";
import Navigation from "./component/sections/navigation/navigation";

function App() {

	const [isNavigationOpen, setIsNavigationOpen] = createSignal<boolean>(false);

	return (
		<>
			<Navigation isNavigationOpen={isNavigationOpen()} />
			<div>
				<Header
					isNavigationOpen={isNavigationOpen}
					setIsNavigationOpen={setIsNavigationOpen}
				/>
				<Hero isNavigationOpen={isNavigationOpen()} />
				<AboutMe />
				{/* <Quote /> */}
				<Work />
				<WorkFlow />
				<Footer />
			</div>
		</>
	);
}

export default App;
