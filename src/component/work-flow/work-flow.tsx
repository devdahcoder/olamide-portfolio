import { Component } from "solid-js";
import "./work-flow.scss";
import WorkFlowList from "./work-flow-list";
import { workFlowArrayContent } from '../../../contents/index';

const WorkFlow: Component<{}> = (props) => {
	return (
		<div class="work--flow--container">
            <div class="work--flow--sub--container">
                <WorkFlowList workFlowArrayContentProps={workFlowArrayContent} />
            </div>
		</div>
	);
};

export default WorkFlow;
