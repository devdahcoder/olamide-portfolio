import { Component, For } from "solid-js";
import { workContent } from "../../../../contents";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import IconButton from "../../icon-button";
import Image from "../../image";
import "./work.scss";

const Work: Component<{}> = () => {
	return (
		<div class="work--container">
			<div class="work--sub--container">
				<div class="work--header--container">
					<div>
						<p>Selected Work</p>
					</div>
				</div>
				<div class="work--list">
					<For each={workContent}>
						{(props) => (
							<div
								class={`work--item--container ${props.className}`}
							>
								<div class="work--item--sub--container">
									<div class="work--item--details--container">
										<div class="work--item--details">
											<div class="work--item--company--name">
												<p>{props?.companyName}</p>
											</div>
											<div class="work--item--description">
												<p>{props.description}</p>
											</div>
											<div class="work--item-date">
												<p>{props.date}</p>
											</div>
										</div>

										<div class="work--item--icon--text--container">
											<IconButton
												icon={
													<UpArrowIcon
														width="17"
														height="17"
														class="work--item--icon"
													/>
												}
												iconButtonClass="work--item--icon--button"
												iconButtonContainerClass="work--item--icon--container"
											/>
											<p>About Project</p>
										</div>
									</div>

									<div class="work--item--image--container">
										<div class="work--item--title">
											<p>/{props.title}</p>
										</div>
										<Image
											imageSrc={props?.image?.imageSrc}
											imageAlt={props?.image?.imageAlt}
											imageClass={
												props?.image?.imageClass
											}
											imageContainerClass={
												props?.image
													?.imageContainerClass
											}
											imageSubContainerClass={
												props?.image
													?.imageSubContainerClass
											}
										/>
									</div>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Work;
