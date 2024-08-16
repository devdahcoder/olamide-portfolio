import { Accessor, Component, createEffect, For, Setter } from "solid-js";
import gsap from "gsap";
import { useIsLoadedStateHook, usePercentageLoaderHook } from "../../hooks";
import "./component.scss";

const Loader: Component<{
	isLoadedComplete: Accessor<boolean>;
	setIsLoadedComplete: Setter<boolean>;
}> = (props) => {
	let container: any = null;
	const { isLoaded, loadingPercentage } = usePercentageLoaderHook();
	createEffect(() => {
		if (isLoaded()) {
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
							props?.setIsLoadedComplete(true);
						},
					},
					"-=0.99"
				)
				.to(".loader--container", {
					yPercent: 100,
					duration: 1,
					ease: "expo.inOut",
					onComplete: () => {
						gsap.to(".loader--container", {
							display: "hidden",
						});
					},
				});
		}
	});

	createEffect(() => {
		loadingPercentage();
		console.log("somethig", loadingPercentage().toString().split("")[0]);

		gsap.to(".percentage--count", {
			duration: 1,
			// innerHTML: "100%",
			roundProps: "innerHTML",
			ease: "power1.inOut",
		});
	});

	return (
		<div ref={container} class={`loader--container`}>
			<div class="loader--cover"></div>

			<div class="loader--grid--container">
				<For each={[1, 2, 3, 4, 5, 6]}>
					{() => <div class="loader--grid"></div>}
				</For>
			</div>

			<div class={` relative bg-white w-full h-full`}>
				<p class="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk absolute left-0 bottom-0 -translate-x-0 -translate-y-0">
					{loadingPercentage()}%
				</p>
			</div>
		</div>
	);
};

export default Loader;
