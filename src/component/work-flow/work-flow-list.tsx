import { Component, For } from "solid-js";
import "./work-flow.scss";
import { WorkFlowTypes } from "../../../types";
import WorkFlowItem from "./work-flow-item";

type Props = {
	workFlowArrayContentProps: Array<WorkFlowTypes>;
};

const WorkFlowList: Component<Props> = (props: Props) => {
	return (
		<div class="work--flow--list--container">
			<For each={props.workFlowArrayContentProps}>
				{(props: WorkFlowTypes) => (
					<WorkFlowItem
						id={props.id}
						figure={props.figure}
						text={props.text}
						class={props.class}
					/>
				)}
			</For>
		</div>
	);
};

export default WorkFlowList;
