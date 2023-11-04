import gsap from "gsap";
import { Accessor, Component, Setter, createEffect } from "solid-js";
import { elementObserver } from "../../../../hooks";
import FileIcon from "../../../../icon/file-icon";
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

const animateHeaderPosition = (condition: boolean) => {
	gsap.fromTo(
		".header--container",
		{
			position: condition ? "relative" : "fixed",
			top: condition ? "" : "0",
			left: condition ? "" : "0",
		},
		{
			position: condition ? "fixed" : "relative",
			top: condition ? "0" : "",
			left: condition ? "0" : "",
		}
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

const animateOpenFirstHeaderResumeLinkText = () => {
	gsap.to(".first--header--resume--link--text", {
		yPercent: -100,
		duration: 1,
		ease: "power4.out",
	});
};

const animateCloseFirstHeaderResumeLinkText = () => {
	gsap.fromTo(
		".first--header--resume--link--text",
		{ yPercent: -100 },
		{ yPercent: -5 }
	);
};

const animateOpenSecondHeaderResumeLinkText = () => {
	gsap.fromTo(
		".second--header--resume--link--text",
		{
			yPercent: 50,
		},
		{ yPercent: -100 }
	);
};

const animateCloseSecondHeaderResumeLinkText = () => {
	gsap.fromTo(
		".second--header--resume--link--text",
		{ yPercent: -100 },
		{ yPercent: 10 }
	);
};

const Header: Component<{
	isNavigationOpen: Accessor<boolean>;
	setIsNavigationOpen: Setter<boolean>;
}> = (props) => {
	let headerSectionRef: HTMLDivElement | any;

	createEffect(() => {
		props.isNavigationOpen();
		animateHeaderFirstHamburgerIcon(props.isNavigationOpen());
		animateHeaderSecondHamburgerIcon(props.isNavigationOpen());
		animateHeaderLastHamburgerIcon(props.isNavigationOpen());
		animateHeaderPosition(props.isNavigationOpen());
	});

	createEffect(() => {
		elementObserver(headerSectionRef, (entry, observer) => {
			if (entry.isIntersecting) animateHeaderSection();
			observer.unobserve(entry.target);
		});
	});

	return (
		<div
			ref={headerSectionRef}
			style={props.isNavigationOpen() ? { width: "100vw" } : {}}
			class="header--container"
		>
			<div class="header--sub--container">
				<div class="header--logo--container">
					<div class="header--logo">
						<p>Ola.</p>
					</div>
				</div>

				<div class="header--util--container">
					<div class="header--util--sub--container">
						<Link
							children={
								<div class="header--resume--link--inner--container">
									<div class="header--resume--link--text--container">
										<div class="header--resume--link--text first--header--resume--link--text">
											My Resume
										</div>
										<div class="header--resume--link--text second--header--resume--link--text">
											My Resume
										</div>
									</div>
									<FileIcon
										width="20"
										height="20"
										class="header--resume--link--icon"
									/>
								</div>
							}
							onMouseEnter={() => {
								animateOpenFirstHeaderResumeLinkText();
								animateOpenSecondHeaderResumeLinkText();
							}}
							onMouseLeave={() => {
								animateCloseFirstHeaderResumeLinkText();
								animateCloseSecondHeaderResumeLinkText();
							}}
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
