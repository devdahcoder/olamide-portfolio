import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Component, createEffect, createSignal, onMount } from "solid-js";
import { quoteContent } from "../../../../contents";
import { QuoteApiType } from "../../../../types";
import "./quote.scss";

gsap.registerPlugin(ScrollTrigger);

const headers = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		"X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY,
	},
};

let sectionRef: HTMLDivElement | undefined | any;

const Quote: Component<{}> = () => {
	// const [quote, setQuote] = createSignal<QuoteApiType>();
	const [quote, setQuote] = createSignal<QuoteApiType>({
		author: "Cory House",
		category: "programming",
		quote: "Code is like humor. When you have to explain it, it's bad.",
	});

	// createEffect(async () => {
	// 	try {
	// 		const response = await fetch(
	// 			"https://api.api-ninjas.com/v1/quotes?category=happiness",
	// 			headers
	// 		);

	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setQuote(data[0]);
	// 		} else {
	// 			console.error("Error:", response.status);
	// 		}
	// 	} catch (error) {
	// 		console.error("Error:", error);
	// 		setQuote(quoteContent);
	// 	}
    // });
    let elRef: HTMLDivElement | any;

    createEffect(() => {
		gsap.fromTo(
			".quote--sub--container",
			{ opacity: 0, scale: 0 },
			{
				opacity: 1,
				duration: 2,
				ease: "sine.out",
				scale: 1,
				scrollTrigger: {
					trigger: ".quote--container",
					start: "top 70%",
					markers: true,
				},
			}
		);
	});

	return (
		<div class="quote--container">
			<div class="quote--sub--container">
				<div class="quote--text">{quote()?.quote}</div>
				<div ref={sectionRef} class="quote--author">
					&lt;/{quote()?.author}&gt;
				</div>
			</div>
		</div>
	);
};

export default Quote;
