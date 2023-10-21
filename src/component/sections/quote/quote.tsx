import { Component, createEffect, createSignal } from "solid-js";
import "./quote.scss";
import { QuoteApiType } from "../../../../types";

const headers = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		"X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY,
	},
};

const Quote: Component<{}> = () => {

	const [quote, setQuote] = createSignal<QuoteApiType>({
		author: "Cory House",
		category: "programming",
		quote: "Code is like humor. When you have to explain it, it's bad.",
	});

	createEffect(async () => {
		try {
			const response = await fetch(
				"https://api.api-ninjas.com/v1/quotes?category=happiness",
				headers
			);

			if (response.ok) {
				const data = await response.json();
				setQuote(data[0]);
			} else {
				console.error("Error:", response.status);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	});

	return (
		<div class="quote--container">
			<div class="quote--sub--container">
				<div class="quote--text">{quote()?.quote}</div>
				<div class="quote--author">&lt;/{quote()?.author}&gt;</div>
			</div>
		</div>
	);
};

export default Quote;
