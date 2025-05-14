import { createRoot } from "solid-js";
import { createStore } from "solid-js/store";

const GlobalState = createRoot(() => {
	const [state, setState] = createStore({
		hasPageLoaded: false,
	});

	const pageLoaded = () => setState("hasPageLoaded", true);
	
	return { state, pageLoaded };
});

export default GlobalState;
