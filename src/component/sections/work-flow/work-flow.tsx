import gsap from "gsap";
import { Component, createEffect, createSignal, onMount } from "solid-js";
import { workFlowArrayContent } from "../../../../contents/index";
import WorkFlowList from "./work-flow-list";
import WorkFlowText from "./work-flow-text";
import { elementObserver } from "../../../../hooks/index";
import "./work-flow.scss";

const animateSectionElement = (element: HTMLDivElement) => {
	gsap.fromTo(
		element,
		{ opacity: 0 },
		{ opacity: 1, duration: 2.5, ease: "power2.out" }
	);
};

const WorkFlow: Component<{}> = (props) => {
	const [isSectionInView, setIsSectionInView] = createSignal<boolean>(false);

	let workFlowSectionElement:
		| HTMLDivElement
		| ((el: HTMLDivElement) => void)
		| undefined
		| any;

	createEffect(() => {

		elementObserver(workFlowSectionElement, (entry, observer) => {
			if (entry.isIntersecting) {
				animateSectionElement(workFlowSectionElement);
				setIsSectionInView(true)
			};
		});

	})
	
	return (
		<div ref={workFlowSectionElement} class="work--flow--container">
			<div class="work--flow--sub--container">
				<WorkFlowText />
				<WorkFlowList
					workFlowArrayContentProps={workFlowArrayContent}
				/>
			</div>
		</div>
	);
};

export default WorkFlow;
