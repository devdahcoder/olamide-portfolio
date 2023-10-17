import { Component } from "solid-js";
import "./footer.scss";

const FooterCredit: Component<{}> = (props) => {
	return (
		<div class="footer--credit--container">
			<div class="footer--credit--sub--container">
				<div class="footer--credit--design--text">
					Designs from:{" "}
					<span>
						<a href="http://">Behance</a>
					</span>
				</div>
				<div class="footer--credit--developer--text">
					Developed by: <span><div>Olamide Adigun</div></span>
				</div>
			</div>
		</div>
	);
};

export default FooterCredit;
