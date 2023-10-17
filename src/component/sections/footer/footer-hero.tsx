import { Component } from "solid-js";
import "./footer.scss"

const FooterHero: Component<{}> = (props) => {
	return (
		<div class="footer--hero--container">
			<div class="footer--hero--sub--container">
				<div class="footer--hero--text">
					<p>
						interested in <br /> working together?
					</p>
				</div>
				<div class="footer--hero--email--container">
					<div class="footer--hero--email--text">
						<p>Drop me an email:</p>
					</div>
					<div class="footer--hero--email">
						<a href="http://">adigunolamide200@gmail.com</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterHero;
