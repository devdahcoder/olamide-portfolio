import { Component, createEffect, createSignal } from "solid-js";
import "./about.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Quote from "../quote/quote";
import { QuoteApiType } from "../../../../types";
gsap.registerPlugin(ScrollTrigger);

const About: Component<{}> = () => {
	const [quote] = createSignal<QuoteApiType>({
		author: "Olamide Adigun",
		category: "programming",
		quote: "FOCUSED TO CRAFT POWERFUL BRANDS AND MEMORABLE DIGITAL PRODUCTS TO BE TIMELESS.",
	});

	createEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".about--container",
				start: `top top`,
				scrub: 0.8,
				end: `+=1000px`,
				pin: true,
				toggleActions: "play none none reverse",
			},
		});


		tl.to(".image--sub--container", {
			clipPath: `inset(0% 0%)`,
			scale: 1,
			duration: 1,
		});

		tl.to(".image--shadow", {
			scrollTrigger: {
				trigger: ".image--shadow",
				start: `center top`,
				end: `+=300`,
				scrub: 0.8,
				toggleActions: "play none none reverse",
			},
			opacity: 1,
			yPercent: 0,
			duration: 0.4,
		});

		tl.fromTo(
			".quote--text",
			{
				color: "hsl(0, 4%, 14%)",
			},
			{
				scrollTrigger: {
					trigger: ".quote--container",
					start: `top 20%`,
					end: `+=500`,
					scrub: 2,
					toggleActions: "play none none reverse",
				},
				duration: 1.5,
				color: "white",
				ease: "sine.in",
				stagger: 1.2,
			}
		);

		tl.to(".quote--container", {
			scrollTrigger: {
				trigger: ".quote--container",
				start: `top 20%`,
				end: `+=500`,
				scrub: true,
				toggleActions: "play none none reverse",
			},
			duration: 2,
			ease: "sine.in",
			y: -450,
		});
	});

	return (
		<div class="about--container">
			<div class="about--sub--container">
				<div class="image--container">
					<div class=" image--sub--container">
						<img
							src={`/images/pexels-fotorobot.jpg`}
							alt=""
							sizes=""
							srcset=""
							class="image"
						/>
						<div class="image--shadow"></div>

						<Quote quote={quote()} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
