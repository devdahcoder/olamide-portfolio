import gsap from "gsap";
import {
	Component,
	Show,
	createEffect,
	createSignal,
	onCleanup,
} from "solid-js";
import "./footer.scss";

const FooterHero: Component<{}> = (props) => {
	let emailRef: HTMLAnchorElement | any;
	let emailContainerRef: HTMLDivElement | undefined;

	const handleMouseOverOutAnimation = (show: boolean) => {
		const element = ".footer--email--copy--button";
		const yHidden = 30;
		const yVisible = 0;

		if (show) {
			gsap.fromTo(
				element,
				{
					visibility: "hidden",
					opacity: 0,
					y: yHidden,
				},
				{
					visibility: "visible",
					opacity: 1,
					y: yVisible,
					duration: 1,
					ease: "power4.out",
				}
			);
		} else {
			gsap.fromTo(
				element,
				{
					visibility: "visible",
					opacity: 1,
					y: yVisible,
				},
				{
					visibility: "visible",
					opacity: 0,
					y: yHidden,
					duration: 1,
					ease: "power4.out",
				}
			);
		}
	};

	const handleCopyEmail = async () => {
		try {
			await navigator.clipboard.writeText(emailRef.text);
		} catch (err) {
			console.log("Failed to copy");
		}
	};

	createEffect(() => {
		if (!emailRef) return;

		const handleMouseEnter = (e: MouseEvent) => {
			const targetElement = e.currentTarget
				? (e.currentTarget as HTMLAnchorElement)
				: null;
			const emailButtonElement: HTMLDivElement =
				emailContainerRef?.querySelector(
					".footer--email--copy--button"
				) as HTMLDivElement;
			gsap.killTweensOf([e.target, emailButtonElement]);

			gsap.to(emailButtonElement, {
				visibility: "visible",
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power4.out",
				overwrite: true,
			});
		};
		const handleMouseLeave = (e: MouseEvent) => {
			const targetElement = e.currentTarget
				? (e.currentTarget as HTMLAnchorElement)
				: null;
			const emailButtonElement: HTMLDivElement =
				emailContainerRef?.querySelector(
					".footer--email--copy--button"
				) as HTMLDivElement;
			gsap.killTweensOf([e.target, emailButtonElement]);

			gsap.to(emailButtonElement, {
				// visibility: "hidden",
				opacity: 0,
				y: 30,
				duration: 1,
				ease: "power4.out",
				overwrite: true
			});
		};

		emailRef.addEventListener("mouseenter", (e) => handleMouseEnter(e));
		emailRef.addEventListener("mouseleave", (e) => handleMouseLeave(e));

		onCleanup(() => {
			emailRef.removeEventListener("mouseenter", (e) =>
				handleMouseEnter(e)
			);
			emailRef.removeEventListener("mouseleave", (e) =>
				handleMouseLeave(e)
			);
		});
	});

	return (
		<div class="footer--hero--container">
			<div class="footer--hero--sub--container">
				<div class="footer--hero--text">
					<p>
						interested in <br /> working together?
					</p>
				</div>
				<div
					ref={emailContainerRef}
					class="footer--hero--email--container"
				>
					<div class="footer--hero--email--text">
						<p>Drop me an email:</p>
					</div>
					<div class="footer--hero--email">
						<a
							ref={emailRef} 
							href="http://"
						>
							adigunolamide200@gmail.com
						</a>
					</div>
					<div class="footer--email--copy--button email--copy--button">
						Copied
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterHero;
