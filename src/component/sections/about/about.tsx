import { Component } from "solid-js";
import StarIcon from "../../../../icon/star-icon";
import IconButton from "../../icon-button";
import "./about.scss";

const AboutMe: Component<{}> = () => {
	return (
		<div class="about--me--container">
			<div class="about--me--sub--container">
				<div class="about--me--header--container">
					<div class="about--me--sub--header--container">
						<p>About me, Story</p>{" "}
						<IconButton
							icon={<StarIcon height="20" width="20" />}
							iconButtonClass=""
							iconButtonContainerClass=""
						/>
					</div>
				</div>

				<div>
					<div>
						<p>
							Hello! I'm Olamide, a passionate full-stack
							developer with a love for crafting digital solutions
							that make an impact. My journey in the world of
							development has been an exciting and dynamic one. My
							fascination with technology began at a young age. I
							vividly remember my first encounter with a computer,
							and from that moment, I was hooked. It was a simple
							game called Bow and Arrow that ignited a fire within
							me, driving me to explore and experiment with
							technology. I embarked on a journey of continuous
							learning. Through countless hours of coding,
							debugging, and problem-solving, I acquired a deep
							understanding of both front-end and back-end
							development. This knowledge empowered me to create
							end-to-end solutions that are not only functional
							but also user-friendly. Building Solutions Over the
							years, I've had the privilege of working on diverse
							projects, from web applications that streamline
							business operations to dynamic user interfaces that
							engage and captivate. The thrill of bringing an idea
							to life through code is what drives me every day.
							### A Passion for Sharing Beyond coding, I have a
							strong passion for sharing my knowledge. I've found
							that there's no better way to learn and grow than by
							teaching and mentoring others. You'll often find me
							writing technical articles, conducting workshops, or
							engaging with the tech community. I'm excited to
							continue this incredible journey, and I'm always
							open to new challenges and collaborations. Whether
							you're a fellow developer, potential client, or
							someone with a great idea, I'd love to connect and
							explore how we can create something amazing
							together. Thank you for visiting my portfolio. Feel
							free to explore my work, and if you'd like to get in
							touch, don't hesitate to [contact me](#contact).
							Looking forward to the next chapter of innovation
							and creativity! [Your Name]
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
