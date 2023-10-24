import gsap from "gsap";
import { Component, onMount } from "solid-js";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import Button from "../../button";
import Link from "../../link";
import "./header.scss";

const animateHeaderSection = () => {
	gsap.fromTo(
		".header--sub--container",
		{ yPercent: -200, opacity: 0 },
		{ yPercent: 0, duration: 1, opacity: 1 }
	);
};

const animateHeaderResumeLinkBorder = () => {
	console.log("helo");
	
	gsap.fromTo(
		".header--resume--link--border",
		{ width: "0", backgroundColor: "white" },
		{ width: "100%", backgroundColor: "white" }
	);
};

const Header: Component<{}> = () => {
	onMount(() => {
		animateHeaderSection();
	});

	return (
		<div class="header--container">
			<div class="header--sub--container">
				<div class="header--logo--container">
					<div class="header--logo">
						<p>Ola.</p>
					</div>
				</div>

				<div class="header--util--container">
					<div
						class="header--util--sub--container"
					>
						<Link
							onMouseEnter={() => animateHeaderResumeLinkBorder()}
							children={
								<div class="header--resume--link--inner--container">
									My Resume
									<UpArrowIcon
										width="20"
										height="20"
										class="header--resume--link--icon"
									/>
								</div>
							}
							href="https://drive.google.com/file/d/1XczXvDS15_odPtNFfZgvdVQ3zm5gguSS/view?usp=sharing"
							linkClass="header--resume--link"
							linkContainerClass="header--resume--link--container"
						/>

						<Button
							buttonClass="header--dropdown--button"
							buttonContainerClass="header--dropdown--button--container"
							children={
								<div class="header--dropdown--icon--container">
									<div class="dropdown--icon"></div>
									<div class="dropdown--icon"></div>
									<div class="dropdown--icon"></div>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
