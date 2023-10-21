import { Component } from "solid-js";
import UpArrowIcon from "../../../../icon/up-arrow-icon";
import IconButton from "../../icon-button";
import Link from "../../link";
import "./hero.scss";

const Hero: Component<{}> = () => {
	return (
		<div class="hero--container">
			<div class="hero--sub--container">
				<div class="hero--text--container">
					<div class="hero--main--text--container">
						<div class="hero--main--text">
							<p>Full-Stack Developer</p>
						</div>
					</div>

					<div class="hero--sub--text--container">
						<div class="hero--sub--text">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Id maxime, amet odio modi,
								necessitatibus explicabo molestiae eaque
								assumenda pariatur laboriosam, nisi quos! Dicta
								consectetur beatae ipsam, repellendus commodi
								quos accusantium! Lorem ipsum dolor sit amet
							</p>
						</div>

						<div class="hero--sub--text">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Id maxime, amet odio modi,
								necessitatibus explicabo molestiae eaque
								assumenda pariatur laboriosam, nisi quos! Dicta
								consectetur beatae ipsam, repellendus commodi
								quos accusantium! Lorem ipsum dolor sit amet
								consectetur adipisicing elit.
							</p>
						</div>
					</div>
				</div>

				<Link
					children={
						<div class="hero--link--inner--container">
							See Blog Posts Here
							<UpArrowIcon
								width="20"
								height="20"
								class="hero--link--icon"
							/>
						</div>
					}
					linkClass="hero--link"
					linkContainerClass="hero--link--container"
				/>

				<div class="hero--scroll--more--container">
					<div class="hero--scroll--more--sub--container">
						<p>Scroll Down</p>

						<UpArrowIcon
							width="20"
							height="20"
							class="hero--scroll--more----icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
