import gsap from "gsap";
import { Accessor, Component, Setter, createEffect, onMount } from "solid-js";
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
	gsap.fromTo(
		".header--resume--link--border",
		{ width: "0", backgroundColor: "white" },
		{ width: "100%", backgroundColor: "white" }
	);
};

const animateHeaderFirstHamburgerIcon = (condition: boolean) => {
	gsap.fromTo(
		".first--dropdown--icon",
		{
			rotate: condition ? "0deg" : "47deg",
			top: condition ? "30%" : "50%",
		},
		{
			rotate: condition ? "47deg" : "0deg",
			top: condition ? "50%" : "30%",
			ease: "back.inOut(1.7)",
		}
	);
};

const animateHeaderSecondHamburgerIcon = (condition: boolean) => {
	gsap.fromTo(
		".second--dropdown--icon",
		{ width: condition ? "1.5rem" : "0rem" },
		{ width: condition ? "0rem" : "1.5rem", ease: "back.inOut(1.7)" }
	);
};

const animateHeaderLastHamburgerIcon = (condition: boolean) => {
	gsap.fromTo(
		".last--dropdown--icon",
		{
			rotate: condition ? "0deg" : "-47deg",
			bottom: condition ? "30%" : "50%",
		},
		{
			rotate: condition ? "-47deg" : "0deg",
			bottom: condition ? "50%" : "30%",
			ease: "back.inOut(1.7)",
		}
	);
};

const Header: Component<{
	isNavigationOpen: Accessor<boolean>;
	setIsNavigationOpen: Setter<boolean>;
}> = (props) => {
	onMount(() => {
		animateHeaderSection();
	});

	createEffect(() => {
		props.isNavigationOpen();
		animateHeaderFirstHamburgerIcon(props.isNavigationOpen());
		animateHeaderSecondHamburgerIcon(props.isNavigationOpen());
		animateHeaderLastHamburgerIcon(props.isNavigationOpen());
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
					<div class="header--util--sub--container">
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
							onClick={() =>
								props.setIsNavigationOpen(
									!props.isNavigationOpen()
								)
							}
							children={
								<>
									<div class="dropdown--icon first--dropdown--icon"></div>
									<div class="dropdown--icon second--dropdown--icon"></div>
									<div class="dropdown--icon last--dropdown--icon"></div>
								</>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
