import { Component } from "solid-js";
import "./about-me.scss";
import Arrow from "../../../../public/icon/arrow";

const AboutMe: Component<{}> = (props) => {
	return (
		<div class="about--me--container">
			<div class="about--me--sub--container">
				<div class="about--me--title--and--social--container">
					<div class="about--me--title">
						<p>About Me</p>
						<div>
							<Arrow />
						</div>
					</div>

					{/* <div class="about--me--social--container">

						<div class="about--me--social--title">
							<p>Social Links</p>
						</div>

						<div class="about--me--social--links--container">

						</div>

					</div> */}
				</div>
				<div class="about--me--text--container">
					<div class="about--me--text">
						<p>
							Hello! I'm <span>Olamide</span>, a passionate
							software developer, who crafts beautiful web and
							mobile experiences and digital solutions with a real
							impact that helps businesses grow and connect with
							their audience all over the world.
						</p>
					</div>
					<div class="about--me--text">
						<p>
							I'm eager for new challenges and collaborations, so
							whether you're a fellow developer, potential client,
							or someone with a great idea, let's connect and
							create something amazing. Explore my work and .
							Excited for the next chapter of innovation and
							creativity!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
