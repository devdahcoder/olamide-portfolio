import { Component } from "solid-js";

const Image: Component<{

	imageSrc: string;
	imageAlt?: string;
	imageClass?: string;
	imageContainerClass?: string;
	imageSubContainerClass?: string;

}> = (props) => {
	return (
		<div class={props.imageContainerClass}>
			<div class={props.imageSubContainerClass}>
				<div>
					<img
						class={props.imageClass}
						src={props.imageSrc}
						alt={props.imageAlt}
						sizes=""
						srcset=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Image;
