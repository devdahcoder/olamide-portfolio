import {
	Accessor,
	Component,
	createEffect,
	createSignal,
	For,
} from "solid-js";
import { usePercentageLoaderHook } from "../../hooks";
import "./component.scss";
import PercentageDisplay from "./percentage-display";
import { animateLoader, animatePercentage } from "../../animation";

const Loader: Component<{
	isLoadedComplete: Accessor<boolean>;
	setIsLoadedComplete: (value: boolean) => void;
}> = (props) => {
	let container: HTMLDivElement | undefined;
	const { isLoaded, loadingPercentage } = usePercentageLoaderHook();
	const [currentCount, setCurrentCount] = createSignal<string>("0");
	const [prevCount, setPrevCount] = createSignal("0");

	createEffect(() => {
		if (isLoaded()) {
			animateLoader(container, props.setIsLoadedComplete);
		}
	});

	createEffect(() => {
		const currentPercentage = loadingPercentage();

		if (currentPercentage > 9) {
			setPrevCount(currentCount());
			setCurrentCount(currentPercentage.toString()[0]);
		}

		animatePercentage(currentPercentage, currentCount(), prevCount());
	});

	return (
		<div ref={container} class="loader--container">
			<div class="loader--cover"></div>

			<div class="loader--grid--container">
				<For each={[1, 2, 3, 4, 5, 6]}>
					{() => <div class="loader--grid"></div>}
				</For>
			</div>

			<PercentageDisplay percentage={loadingPercentage()} />
		</div>
	);
};

export default Loader;