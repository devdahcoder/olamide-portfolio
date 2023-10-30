import { Component } from "solid-js";
import "./about.scss";

const About: Component<{}> = () => {

	return (
		<div class="about--container">
			<div class="about--sub--container">
				<div class="about--text">
					Hello! I'm Olamide, a passionate full-stack developer who
					crafts digital solutions with a real impact. My tech journey
					began early, sparked by a computer game I played called Bow and
					Arrow. It ignited my love for coding and problem-solving. I
					create user-friendly, end-to-end solutions and have
					experience streamlining operations and crafting engaging
					interfaces. Beyond coding, I'm dedicated to sharing my
					knowledge through articles, workshops, and community
					engagement. I'm eager for new challenges and collaborations,
					so whether you're a fellow developer, potential client, or
					someone with a great idea, let's connect and create
					something amazing. Explore my work and [contact
					me](#contact). Excited for the next chapter of innovation
					and creativity!
				</div>
				<div class="about--author">&lt;/Olamide Adigun&gt;</div>
			</div>
		</div>
	);
};

export default About;
