import { Component, createSignal } from "solid-js";
import "./footer.scss";
import DoubleStackedText from "../../double-stacked-text";

const FooterHeader: Component<{}> = () => {

	const [latitude] = createSignal<number>(6.4563278);
	const [longitude] = createSignal<number>(3.4468312);

	const formattedLocation = `${latitude().toFixed(5)}°N, ${Math.abs(
		longitude()
	).toFixed(5)}°W`;

	return (
		<div class="footer--header--container">
			<div class="footer--header--sub--container">
				<DoubleStackedText
					containerClass="footer--year--container"
					subContainerClass="footer--year--sub--container"
					firstStack={<p>Software / Creative Developer</p>}
					secondStack={<p>Portfolio 2024 - 2025</p>}
					firstStackClass="footer--role--text"
					secondStackClass="footer--year--text"
				/>
				<DoubleStackedText
					containerClass="footer--location--container"
					subContainerClass="footer--location--sub--container"
					firstStack={<p>{formattedLocation}</p>}
					secondStack={<p>Available for freelance work</p>}
					firstStackClass="footer--availability--text"
					secondStackClass="footer--location--text"
				/>
			</div>
		</div>
	);
};

export default FooterHeader;
