import gsap from "gsap";
import { Accessor, Component, Setter, createEffect, onCleanup } from "solid-js";
import { elementObserver } from "../../../../hooks";
import FileIcon from "../../../../icon/file-icon";
import Button from "../../button";
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
		".header--main--container",
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
		".first--navigation--icon",
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
		".second--navigation--icon",
		{ width: condition ? "1.5rem" : "0rem" },
		{ width: condition ? "0rem" : "1.5rem", ease: "back.inOut(1.7)" }
	);
};

const animateHeaderLastHamburgerIcon = (condition: boolean) => {
	gsap.fromTo(
		".last--navigation--icon",
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
	let headerSectionRef: HTMLDivElement | any;
	let resumeLinkRefElement: HTMLAnchorElement;

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

	createEffect(() => {
		if (!resumeLinkRefElement) return;
		const handleMouseEnter = (e: MouseEvent) => {
			const targetedElement: any = e.currentTarget as HTMLAnchorElement;
			const targetContainerElement: HTMLDivElement =
				targetedElement?.querySelector(
					".header--resume--link--children--container"
				) as HTMLDivElement;
			const targetSubContainerElement: HTMLDivElement =
				targetContainerElement?.querySelector(
					".header--resume--link--children--text--container"
				) as HTMLDivElement;
			const targetFirstLinkElementText: HTMLDivElement =
				targetSubContainerElement?.querySelector(
					".first--header--resume--link--children--text"
				) as HTMLDivElement;
			const targetSecondLinkElementText: HTMLDivElement =
				targetSubContainerElement?.querySelector(
					".second--header--resume--link--children--text"
				) as HTMLDivElement;

			gsap.killTweensOf([
				e.target,
				targetContainerElement,
				targetSubContainerElement,
				targetFirstLinkElementText,
				targetSecondLinkElementText,
			]);
			gsap.to(e.target, {
				scale: 1,
				duration: 0.3,
				overwrite: true,
			});
			gsap.to(targetFirstLinkElementText, {
				yPercent: -100,
				duration: 0.8,
				ease: "back.in(3)",
				overwrite: true,
			});
			gsap.to(targetSecondLinkElementText, {
				yPercent: -100,
				duration: 0.6,
				delay: 0.8,
				ease: "bounce.out",
			});
		};

		const handleMouseLeave = (e: MouseEvent) => {
			const targetedElement: any = e.currentTarget as HTMLAnchorElement;
			const targetContainerElement: HTMLDivElement =
				targetedElement?.querySelector(
					".header--resume--link--children--container"
				) as HTMLDivElement;
			const targetSubContainerElement: HTMLDivElement =
				targetContainerElement?.querySelector(
					".header--resume--link--children--text--container"
				) as HTMLDivElement;
			const targetFirstLinkElementText: HTMLDivElement =
				targetSubContainerElement?.querySelector(
					".first--header--resume--link--children--text"
				) as HTMLDivElement;
			const targetSecondLinkElementText: HTMLDivElement =
				targetSubContainerElement?.querySelector(
					".second--header--resume--link--children--text"
				) as HTMLDivElement;

			gsap.killTweensOf([
				e.target,
				targetContainerElement,
				targetSubContainerElement,
				targetFirstLinkElementText,
				targetSecondLinkElementText,
			]);
			gsap.to(e.target, {
				scale: 1,
				duration: 0.3,
				overwrite: true,
			});
			gsap.to(
				targetFirstLinkElementText,
				{ yPercent: -5, ease: "back.out(3)", delay: 0.2 }
			);

			gsap.to(targetSecondLinkElementText, { yPercent: 10 });
		};
		resumeLinkRefElement.addEventListener("mouseenter", (e) =>
			handleMouseEnter(e)
		);
		resumeLinkRefElement.addEventListener("mouseleave", (e) =>
			handleMouseLeave(e)
		);
		onCleanup(() => {
			resumeLinkRefElement.removeEventListener("mouseenter", (e) =>
				handleMouseEnter(e)
			);
			resumeLinkRefElement.removeEventListener("mouseleave", (e) =>
				handleMouseLeave(e)
			);
		});
	});

	return (
		<div
			ref={headerSectionRef}
			style={props.isNavigationOpen() ? { width: "100vw" } : {}}
			class="header--main--container"
		>
			<div class="header--sub--container">
				<div class="header--logo--container">
					<div class="header--logo">
						<p>Ola.</p>
					</div>
				</div>

				<div class="header--util--main--container">
					<div class="header--util--sub--container">
						<div class="header--resume--link--container">
							<a
								href="https://drive.google.com/file/d/1XczXvDS15_odPtNFfZgvdVQ3zm5gguSS/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								class="header--resume--link"
								ref={resumeLinkRefElement}
							>
								<div class="header--resume--link--children--container">
									<div class="header--resume--link--children--text--container">
										<div class="header--resume--link--children--text first--header--resume--link--children--text">
											My Resume
										</div>
										<div class="header--resume--link--children--text second--header--resume--link--children--text">
											My Resume
										</div>
									</div>
									<FileIcon
										width="20"
										height="20"
										class="header--resume--link--icon"
									/>
								</div>
							</a>
						</div>

						<Button
							buttonClass="header--navigation--button"
							buttonContainerClass="header--navigation--button--container"
							onClick={() =>
								props.setIsNavigationOpen(
									!props.isNavigationOpen()
								)
							}
						>
							<div class="navigation--icon first--navigation--icon"></div>
							<div class="navigation--icon second--navigation--icon"></div>
							<div class="navigation--icon last--navigation--icon"></div>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
