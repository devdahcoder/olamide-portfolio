import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Component, For, createEffect, createSignal, onMount } from "solid-js";
import { quoteContent } from "../../../../contents";
import { QuoteApiType } from "../../../../types";
import ParallaxCharacter from "../../parallax-character";
import "./quote.scss";

gsap.registerPlugin(ScrollTrigger);

let sectionRef: HTMLDivElement | undefined | any;

type Props = {
	quote: QuoteApiType
};

const Quote: Component<Props> = (props) => {
	// const [quote, setQuote] = createSignal<QuoteApiType>({
	// 	author: "Olamide Adigun",
	// 	category: "programming",
	// 	quote: "FOCUSED TO CRAFT POWERFUL BRANDS AND MEMORABLE DIGITAL PRODUCTS TO BE TIMELESS.",
	// });

	// createEffect(() => {
	// 	gsap.fromTo(
	// 		".quote--text",
	// 		{
	// 			color: "hsl(0, 4%, 14%)",
	// 		},
	// 		{
	// 			scrollTrigger: {
	// 				trigger: ".quote--container",
	// 				start: "top top",
	// 				// end: "bottom center",
	// 				end: `+=${quote().quote.split(' ').length * 100}`,
	// 				scrub: true,
	// 				pin: true,
	// 			},
	// 			duration: 3,
	// 			color: "white",
	// 			ease: "sine.in",
	// 			stagger: 2,
	// 		}
	// 	);
	// });

	return (
		<div class="quote--container">
			<div class="quote--sub--container">
				<div class="quote--text--container">
					<For each={props?.quote?.quote?.split(" ")}>
						{(props) => (
							<div class="quote--text">
								{props === " " ? (
									<div style={{ margin: "0rem 1rem" }}></div>
								) : (
									props
								)}
							</div>
						)}
					</For>
				</div>

				<div ref={sectionRef} class="quote--author">
					&lt;/{props?.quote?.author}&gt;
				</div>
			</div>
		</div>
	);
};

export default Quote;
