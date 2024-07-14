import { Component, For } from "solid-js";
import "./service.scss";
import { serviceContent } from "../../../../contents";

type Props = {};

const Service: Component<Props> = (props) => {
	return (
		<div class="service--container">
			<div class="service--sub--container">
				<div class="service--text--container">
					<For each={serviceContent}>
						{({ id, services }) => (
							<div class="service--text--sub--container">
								<div class="dele">
									<For each={services}>
										{(service, index) => (
											<div class="service--text">
												{index() % 2 !== 0 ? "" : "*"}
												{service}
												{index() % 2 === 0 ? "" : "*"}
											</div>
										)}
									</For>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Service;
