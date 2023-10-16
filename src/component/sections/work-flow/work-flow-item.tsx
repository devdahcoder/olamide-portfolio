import { Component } from "solid-js";
import "./work-flow.scss";

type Props = {
	id: number;
	figure: number;
	text: string;
	class?: string;
};

const WorkFlowItem: Component<Props> = (props: Props) => {
	return (
		<div class="work--flow--item--container">
			<div class="work--flow--item--sub--container">
				<div class="work--flow--digit">
					<span>{props.id <= 9 ? 0 : ""}</span>
					<span>{props.id}</span>
				</div>
				<div class="work--flow--item--text">{props.text}</div>
			</div>
		</div>
	);
};

export default WorkFlowItem;
