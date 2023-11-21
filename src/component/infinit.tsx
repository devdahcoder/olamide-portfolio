import { gsap } from "gsap";
import { For, createEffect, onCleanup } from "solid-js";
import "../styles/index.scss";

const InfinityTextScroller = () => {
    let textRef: HTMLDivElement | any;
    const textss = ["Text 1", "Text 2", "Text 3"];
    createEffect(() => {
		const texts = textss || [];
		const textWidth = textRef.current.offsetWidth;
		const animationDuration = textWidth / 100; // Adjust the animation duration as needed

		let timeline = gsap.timeline({
			repeat: -1, // Repeats the animation infinitely
			yoyo: true, // Reverses the animation at the end of each cycle
		})
			.fromTo(
				textRef.current,
				{ xPercent: 0 },
				{ xPercent: -100, duration: animationDuration }
			)
			.fromTo(
				textRef.current,
				{ xPercent: -100 },
				{ xPercent: 0, duration: animationDuration }
			);

		timeline.current.play();
	});

	return (
		<div class="text-scroller">
			<div ref={textRef} class="scrolling-text">
				<For each={textss}>
					{(text) => <span >{text}</span>}
				</For>
			</div>
		</div>
	);
};

export default InfinityTextScroller;
