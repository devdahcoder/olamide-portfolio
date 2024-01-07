import { Component } from "solid-js";
import "./hero.scss"

const HeroSubText: Component<{ refElement?: HTMLDivElement | undefined }> = (
	props
) => {
	return (
		<div ref={props.refElement} class="hero--sub--text--container">
			<div class="hero--sub--text">
				<p>
					Hi, My name is Olamide. I'm a passionate software engineer
					with a strong background in software technologies. I thrive
					on the dynamic nature of the tech industry and constantly
					seek out innovative solutions to everyday problems. My
					journey in software development has been marked by an
					unwavering eagerness to tackle more complex challenges and a
					commitment to finding ways to maximize user efficiency .
				</p>
				{/* <div class="hero--sub--text--icon">✺</div> */}
			</div>

			<div class="hero--sub--text">
				<p>
					Spanning both backend and frontend development, my expertise
					enables me to deliver holistic solutions that excel in
					functionality and user experience. When I'm not immersed in
					code, debugging, or reading tech articles, I'm sharing my
					latest tech interests and learning experiences through
					writing which you can check out the link to my blog posts
					down below. I am excited about the limitless possibilities
					that lie ahead in the ever-evolving tech landscape .
				</p>
				{/* <div class="hero--sub--text--icon">❋</div> */}
			</div>
		</div>
	);
};

export default HeroSubText;