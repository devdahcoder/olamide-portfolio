import { Component, createEffect, createSignal, For } from "solid-js";
import "./stack.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Stack: Component<{}> = (props) => {
	const [card, setCard] = createSignal<string[]>(["1", "2", "3", "4"]);

	let cardRef: HTMLDivElement[] = [];

	createEffect(() => {
		cardRef = cardRef.slice(0, card().length);
	});
const handlePlus = () => {
	if (cardRef.length > 0) {
		const currentCard = cardRef?.pop();
		if (currentCard !== undefined) {
			gsap.to(currentCard, {
				// rotate: 10,
				// x: 200,
				duration: 0.5,
				ease: "power3.out",
				opacity: 0.4,
				onComplete: () => {
					for (let i = 0; i < card().length; i++) {
						gsap.to(cardRef[i], {
							zIndex: `${i + 1}`,
							y: (i + 1) * 50,
							scale: (0.8 + i) * 0.1,
							duration: 0.5,
							ease: "power3.out",
						});
					}
					gsap.to(currentCard, {
						rotate: 0,
						x: 0,
						zIndex: 0,
						y: 0,
						duration: 0.5,
						scale: 0.8,
						ease: "power3.out",
						opacity: 1,
						onComplete: () => {
							cardRef.unshift(currentCard);
						},
					});
				},
			});
		}
	}
};
	createEffect(() => {

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".card--container",
				start: `top top`,
				end: `top top`,
				scrub: 5,
				markers: true,
			}
		});
		// cardRef.forEach((card, index) => {
		// 	gsap.timeline({
		// 		scrollTrigger: {
		// 			trigger: ".card--container",
		// 			start: `top+=${index * 200} top`,
		// 			end: `top+=${(index + 1) * 100} top`,
		// 			scrub: 5,
		// 			markers: true,
		// 		},
		// 	})
		// 		.fromTo(card, { x: 0 }, { x: 200, duration: 2 })
		// 		.to(card, { x: 0, duration: 2 });
		// });

		// gsap.to(".card--container", {
		// 	scrollTrigger: {
		// 		trigger: ".card--container",
		// 		start: "top top",
		// 		end: `+=${cardRef.length * 300}`,
		// 		pin: true,
		// 		markers: true,
		// 	},
		// });
	});

	return (
		<div class="border stack--container">
			<div class="stack--sub--container border">
				<button onclick={handlePlus} class="text-white absolute top-0 left-0">+</button>
				{/* <div>
					<p>
						We are a strategic creative agency working to evoke
						emotions and long lasting connections.
					</p>
				</div> */}

				<div class="card--container">
					<For each={card()}>
						{(card, index) => (
							<div
								ref={(element: HTMLDivElement) =>
									(cardRef[index()] = element)
								}
								class={`card text-white border`}
								tabIndex={index()}
								style={{
									"z-index": index(),
									border: `1px solid #${89 + index()}`,
									translate: `0 ${index() * 50}px`,
									scale: 0.8 + index() * 0.1,
								}}
							>
								{card} hello world
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Stack;
