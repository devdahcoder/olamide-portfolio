import { Component, createSignal, For, onMount } from "solid-js";
import "./component.scss"
import gsap from "gsap";

const Slider: Component<{}> = (props) => {

    const [sliderText, setSliderText] = createSignal<string[]>([
		"build",
		"creativity",
		"elegance",
		"aesthetics",
		"solution",
		"build",
		"creativity",
		"elegance",
		"aesthetics",
		"solution",
		"build",
		"creativity",
		"elegance",
		"aesthetics",
		"solution",
		"build",
		"creativity",
		"elegance",
		"aesthetics",
		"solution",
		"build",
		"creativity",
		"elegance",
		"aesthetics",
		"solution",
	]);

    let slider: HTMLDivElement;

	onMount(() => {
		const words = gsap.utils.toArray(".slider");
		const totalWidth: any = words.reduce(
			(acc, word: any) => acc + word.offsetWidth,
			0
		);

		// Duplicate the words to create a seamless loop
		const sliderElement = slider;
		sliderElement.innerHTML += sliderElement.innerHTML;

		const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
		tl.to(".slider", {
			x: `-=${totalWidth}`,
			duration: 10,
			ease: "linear",
			modifiers: {
				x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
			},
		});
	});

return (
	<div
		class="slider--container"
		style={{
			"--width": "100px",
			"--height": "100px",
			"--quantity": `${sliderText().length}`,
		}}
	>
		<div
			class="slider--sub--container"
			ref={(el) => (slider = el)}
			style={{ overflow: "hidden", "white-space": "nowrap" }}
		>
			<For each={sliderText()}>
				{(text, index) => (
					<div class="slider">
						<span>{text}</span> 
					</div>
				)}
			</For>
		</div>
	</div>
);
};

export default Slider;