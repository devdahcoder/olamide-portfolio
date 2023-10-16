import { Component } from "solid-js";
import "./quote.scss";

const Quote: Component<{}> = (props) => {
	return (
		<div class="quote--container">
			<div class="quote--sub--container">
				<div class="quote--text">
					"Code is like humor. When you have to explain it, it's bad."
					<span class="quote--author">- &lt;/Cory House&gt;</span>
				</div>
			</div>
		</div>
	);
};

export default Quote;
