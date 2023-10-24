import { Component, createEffect, createSignal } from "solid-js";
import "./quote.scss";
import { QuoteApiType } from "../../../../types";
import { quoteContent } from "../../../../contents";

const headers = {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		"X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY,
	},
};

const Quote: Component<{}> = () => {

	const [quote, setQuote] = createSignal<QuoteApiType>();

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
			setQuote(quoteContent);
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
