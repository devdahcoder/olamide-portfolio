import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Component, For } from "solid-js";
import { QuoteApiType } from "../../../../types";
import "./quote.scss";

gsap.registerPlugin(ScrollTrigger);

type Props = {
	quote: QuoteApiType
};

const Quote: Component<Props> = (props) => {

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
			</div>
		</div>
	);
};

export default Quote;
