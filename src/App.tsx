import { createSignal, onCleanup, onMount } from "solid-js";
import Loader from "./component/loader.tsx";
import Navigation from "./component/sections/navigation/navigation";
import Lenis from "@studio-freight/lenis";

function App() {
	const [isNavigationOpen, setIsNavigationOpen] =
		createSignal<boolean>(false);
	const [isLoadedComplete, setIsLoadedComplete] = createSignal<boolean>(false);

	// Initialize smooth scroll using Lenis
	onMount(() => {
		const lenis = new Lenis({
			// smoothTouch: true,
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

	return (
		<div>
			<Loader
				isLoadedComplete={isLoadedComplete}
				setIsLoadedComplete={setIsLoadedComplete}
			/>
			<Navigation
				isNavigationOpen={isNavigationOpen}
				setIsNavigationOpen={setIsNavigationOpen}
			/>
			
		</div>
	);
}

export default App;
