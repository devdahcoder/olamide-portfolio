import {
	Component,
	createEffect,
	createSignal,
	For,
	onCleanup,
} from "solid-js";
import { usePercentageLoaderHook } from "../../hooks";
import "./component.scss";
import PercentageDisplay from "./percentage-display";
import { animatePercentage } from "../../animation";
import gsap from "gsap";
import GlobalState from "../store";

const Loader: Component<{}> = () => {
	let container: HTMLDivElement | undefined;
	const { state, pageLoaded } = GlobalState;
	const { isLoaded, loadingPercentage } = usePercentageLoaderHook();
	const [currentCount, setCurrentCount] = createSignal<string>("0");
	const [prevCount, setPrevCount] = createSignal("0");

	createEffect(() => {
		if (!state.hasPageLoaded) {
			document.body.style.overflow = "hidden";
			document.body.style.position = "fixed";
			document.body.style.top = "0";
		} else {
			document.body.style.removeProperty("overflow");
			document.body.style.removeProperty("position");
			document.body.style.removeProperty("top");
		}
		onCleanup(() => {
			document.body.style.removeProperty("overflow");
			document.body.style.removeProperty("position");
			document.body.style.removeProperty("top");
		});
	});

	createEffect(() => {
		if (!isLoaded()) return;

		const tl = gsap.timeline();

		tl.to(".loader--grid--container", { visibility: "visible" })
			.to(".loader--grid", {
				opacity: 1,
				y: 0,
				stagger: 0.2,
				duration: 0.9,
				ease: "power4.out",
			})
			.to(
				".loader--cover",
				{
					y: 0,
					duration: 1,
					ease: "sine.inOut",
					onComplete: () => {
						pageLoaded();
					},
				},
				"-=0.99"
			)
			.to(".loader--container", {
				yPercent: 100,
				duration: 1,
				ease: "expo.inOut",
				onComplete: () => {
					gsap.set(".loader--container", { display: "none" });
				},
			});

		return () => {
			tl.kill();
		};
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
