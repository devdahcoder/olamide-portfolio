import {
	Accessor,
	Component,
	createEffect,
	createSignal,
	For,
	Setter,
} from "solid-js";
import gsap from "gsap";
import { usePercentageLoaderHook } from "../../hooks";
import "./component.scss";

const Loader: Component<{
	isLoadedComplete: Accessor<boolean>;
	setIsLoadedComplete: Setter<boolean>;
}> = (props) => {
	let container: any = null;
	const { isLoaded, loadingPercentage } = usePercentageLoaderHook();
	const [firstCount, setFirstCount] = createSignal<string>("0");
	const firstPercentageCountRefElement: HTMLDivElement[] = [];
	const [prevFirstCount, setPrevFirstCount] = createSignal("0");

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
		const currentPercentage = loadingPercentage();

		if (currentPercentage > 9) {
			setPrevFirstCount(firstCount());
			setFirstCount(currentPercentage.toString()[0]);
			gsap.to(`.percentage--number--0`, {
				yPercent: -100,
				duration: 0.4,
				ease: "power1.out",
			});
		}

		if (loadingPercentage() === 99) {
			gsap.to(
				[
					".first--loader--percentage--sign",
					".third--loader--percentage--number",
				],
				{
					yPercent: -100,
					duration: 0.5,
					ease: "power1.inOut",
				}
			);
			gsap.to(".second--loader--percentage--sign", {
				yPercent: 100,
				duration: 0.5,
				ease: "power1.inOut",
			});
		}

		const currentDigit = Number(firstCount());
		const prevDigit = Number(prevFirstCount());
		const tl = gsap.timeline();

		if (
			currentDigit > prevDigit ||
			(currentDigit === 1 && prevDigit === 0)
		) {
			tl.to(`.percentage--number--${currentDigit}`, {
				yPercent: -100,
				duration: 0.5,
				ease: "power1.inOut",
			}).to(`.percentage--number--${currentDigit}`, {
				yPercent: -200,
				duration: 0.5,
				ease: "power1.inOut",
			});
		}

		if (currentDigit === 1 && prevDigit === 9) {
			tl.to(`.percentage--number--${10}`, {
				yPercent: -100,
				duration: 0.5,
				ease: "power1.inOut",
			});
		}

	});

	return (
		<div ref={container} class={`loader--container`}>
			<div class="loader--cover"></div>

			<div class="loader--grid--container">
				<For each={[1, 2, 3, 4, 5, 6]}>
					{() => <div class="loader--grid"></div>}
				</For>
			</div>

			<div class={`loader--percentage--container`}>
				<div class="loader--percentage--sub--container absolute left-0 bottom-0 -translate-x-0 -translate-y-0">
					<div class="loader--percentage--number--container overflow-y-hidden  relative">
						{
							<For each={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
								{(digit, index) => (
									<div
										tabIndex={digit}
										ref={(element: HTMLDivElement) =>
											(firstPercentageCountRefElement[
												digit
											] = element)
										}
										style={{
											transform: `${
												digit === 0
													? "translate(0px, 0%)"
													: "translate(0px, 100%)"
											}`,

											"z-index": `${digit}`,
											position: "absolute",
										}}
										class={`loader--percentage--number first--loader--percentage--number percentage--number--${digit}`}
									>
										<p class="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk">
											{digit === 10
												? digit.toString()[0]
												: digit}
										</p>
									</div>
								)}
							</For>
						}
					</div>
					<div class="loader--percentage--number--container overflow-y-hidden  relative">
						<p class="percentage--count percentage--count--2 text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk ">
							{loadingPercentage() < 10
								? loadingPercentage().toString().split("")[0]
								: loadingPercentage().toString().split("")[1]}
						</p>
					</div>
					<div class="loader--percentage--number--container overflow-y-hidden  relative">
						<div
							style={{
								transform: `${"translate(0px, 0%)"}`,
								"z-index": `20`,
								position: "absolute",
							}}
							class={`loader--percentage--sign first--loader--percentage--sign`}
						>
							<p class="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk">
								%
							</p>
						</div>
						<div
							style={{
								transform: `${"translate(0px, 100%)"}`,
								"z-index": `10`,
								position: "absolute",
							}}
							class={`loader--percentage--number third--loader--percentage--number`}
						>
							<p class="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk">
								0
							</p>
						</div>
					</div>
					<div class="loader--percentage--number--container overflow-y-hidden  relative">
						<div
							style={{
								transform: `${"translate(0px, -100%)"}`,
								"z-index": `20`,
								position: "absolute",
							}}
							class={`loader--percentage--sign second--loader--percentage--sign`}
						>
							<p class="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk">
								%
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
