import { Component, createEffect, For, onCleanup } from "solid-js";
import { socialMediaContent } from "../../../../contents";
import "./footer.scss";
import gsap from "gsap";

const FooterSocialMedia: Component<{}> = () => {
	let socialMediaLinkRef: HTMLDivElement[] = [];

	createEffect(() => {
		if (!socialMediaLinkRef) return;

		const handleMouseEnter = (e: MouseEvent) => {
			const targetElement: any = e.currentTarget;
			const secondarySocialLinkElement: HTMLDivElement =
				targetElement?.querySelector(
					".secondary--social--media--link"
				) as HTMLDivElement;
			gsap.killTweensOf([e.target, secondarySocialLinkElement]);
			gsap.to(targetElement, { borderColor: "grey" });
			gsap.fromTo(
				secondarySocialLinkElement,
				{ y: 100 },
				{ y: 0, duration: 0.5, scale: 1, ease: "power2.inOut", overwrite: true }
			);
		};
		const handleMouseLeave = (e: MouseEvent) => {
			const targetElement: any = e.currentTarget;
			const secondarySocialLinkElement: HTMLDivElement =
				targetElement?.querySelector(
					".secondary--social--media--link"
				) as HTMLDivElement;
			gsap.killTweensOf([e.target, secondarySocialLinkElement]);
			gsap.to(targetElement, { borderColor: "white" });

			gsap.fromTo(
				secondarySocialLinkElement,
				{ y: 0 },
				{
					y: 100,
					delay: 0.2,
					duration: 0.5,
					scale: 0,
					ease: "power2.inOut",
					overwrite: true,
				}
			);
		};

		Array.from(socialMediaLinkRef).forEach((item) => {
			item.addEventListener("mouseenter", (e) => handleMouseEnter(e));
			item.addEventListener("mouseleave", (e) => handleMouseLeave(e));
		});

		onCleanup(() => {
			Array.from(socialMediaLinkRef).forEach((item) => {
				item.removeEventListener("mouseenter", (e) =>
					handleMouseEnter(e)
				);
				item.removeEventListener("mouseleave", (e) =>
					handleMouseLeave(e)
				);
			});
		});
	});

	return (
		<div class="footer--social--media--container">
			<div class="footer--social--media--sub--container">
				<For each={socialMediaContent}>
					{(props) => (
						<div
							ref={(element) => socialMediaLinkRef.push(element)}
							class="footer--social--media--item"
						>
							<a
								class="primary--social--media--link"
								href={props.link}
							>
								{props.text}
							</a>
							<a
								class="secondary--social--media--link"
								href={props.link}
							>
								{props.text}
							</a>
						</div>
					)}
				</For>
			</div>
		</div>
	);
};

export default FooterSocialMedia;
