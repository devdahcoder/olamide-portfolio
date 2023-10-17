import { Component } from "solid-js";
import "./footer.scss";

const FooterCopyRightYear: Component<{}> = (props) => {
	return (
		<div class="footer--copy--right--year--container">
			<div class="footer--copy--right--year--sub--container">
				<button class="footer--back--to--top--button">
					Back to top
					<span class="">
						<div class=""></div>
					</span>
				</button>
				<div class="footer--copy--right">
					<span>
						<div></div>
					</span>{" "}
					2023 -- Adigun Olamide
				</div>
			</div>
		</div>
	);
};

export default FooterCopyRightYear;
