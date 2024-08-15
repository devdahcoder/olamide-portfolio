import { Component, For } from "solid-js";
import "./experience.scss";
import { experienceContent } from "../../../../contents";

const Experience: Component<{}> = (props) => {
	return (
		<div class="experience--container">
			<div class="experience--sub--container">
				<div class="experience--header--title">
					<div class="experience--title">
						<p>Process &</p>
					</div>
					<div class="experience--title">
						<p>Creativity</p>
					</div>
				</div>

				<div class="experience--list">
					<For each={experienceContent}>
						{(experience, index) => (
							<div class="experience--item">
								<div class="experience--title">
									<div class="text-base">
										<span>0{experience?.id}.</span>
									</div>
									<div>
										<p>{experience?.title}</p>
									</div>
								</div>
								<div class="experience--description">
									<p>{experience?.description}</p>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Experience;
