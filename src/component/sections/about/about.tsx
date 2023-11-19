import { Component } from "solid-js";
import "./about.scss";

const About: Component<{}> = () => {
	return (
		<div class="about--container">
			<div class="about--sub--container">
				<div class="about--text--header">
					<p>
						Hello! I'm Olamide, a passionate full-stack developer
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
								work and [contact me](#contact). Excited for the
								next chapter of innovation and creativity!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
