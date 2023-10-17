import { Component } from "solid-js";
import CopyRightIcon from "../../../../icon/copy-right-icon";
import "./footer.scss";
import UpArrowIcon from '../../../../icon/up-arrow-icon';

const FooterCopyRightYear: Component<{}> = (props) => {
	return (
		<div class="footer--copy--right--year--container">
			<div class="footer--copy--right--year--sub--container">
				<button class="footer--back--to--top--button">
					Back to top
					<UpArrowIcon width="15" height="15" />
				</button>
				<div class="footer--copy--right">
					<CopyRightIcon
						width="20"
						height="20"
						class="footer--copy--right--icon"
					/>
					2023 - All Rights Reserved
				</div>
			</div>
		</div>
	);
};

export default FooterCopyRightYear;
