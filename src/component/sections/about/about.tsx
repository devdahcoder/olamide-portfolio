import { Component, createEffect, createSignal } from "solid-js";
import "./about.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Quote from "../quote/quote";
import { QuoteApiType } from "../../../../types";
gsap.registerPlugin(ScrollTrigger);

const About: Component<{}> = () => {
	const [quote, setQuote] = createSignal<QuoteApiType>({
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

				{/* <Quote quote={quote()} /> */}
				{/* <div class="about--text--header">
					<p>
						Hello! I'm Olamide, a passionate software developer
						from Nigeria, who crafts beautiful web and mobile
						experiences and digital solutions with a real impact.
					</p>
				</div>

				<div class="about--text--container">
					<div class="about--text--title">
						<p>
							I am very passionate about technology and how things
							work how i got here you ask?
						</p>
					</div>
					<div class="about--text">
						<div>
							<p>
								My tech journey began early, sparked by a
								computer game I played called Bow and Arrow. It
								ignited my love for coding and problem-solving.
								I create user-friendly, end-to-end solutions and
								have experience streamlining operations and
								crafting engaging interfaces.
							</p>
						</div>
						<div>
							<p>
								Beyond coding, I'm dedicated to sharing my
								knowledge through articles, workshops, and
								community engagement.
							</p>
						</div>
						<div>
							<p>
								I'm eager for new challenges and collaborations,
								so whether you're a fellow developer, potential
								client, or someone with a great idea, let's
								connect and create something amazing. Explore my
								work and <span class="contact"><a href="http://" target="_blank" rel="noopener noreferrer">adigunolamide200@gmail.com</a></span>. Excited for the
								next chapter of innovation and creativity!
							</p>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default About;
