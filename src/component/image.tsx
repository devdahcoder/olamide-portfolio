import { Component } from "solid-js";

const Image: Component<{
	imageRef?: HTMLDivElement | any;
	imageSrc: string;
	imageAlt?: string;
	imageClass?: string;
	imageContainerClass?: string;
	imageSubContainerClass?: string;
}> = (props) => {
	return (
		<div ref={props.imageRef} class={props.imageContainerClass}>
			<div class={props.imageSubContainerClass}>
				<img
					class={props.imageClass}
					src={props.imageSrc}
					alt={props.imageAlt}
					sizes=""
					srcset=""
				/>
			</div>
		</div>
	);
};

export default Image;
