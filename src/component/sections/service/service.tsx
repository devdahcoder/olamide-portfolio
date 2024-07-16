import { Component, createSignal, For } from "solid-js";
import "./service.scss";
import { serviceContent } from "../../../../contents";

type Props = {};

const Service: Component<Props> = (props) => {
	const [images, setImages] = createSignal<string[]>([
		"images/box-1.svg",
		"images/box.svg",
		"images/pyramid-1.svg",
		"images/pyramid.svg",
	]);

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
												{index() % 2 !== 0 ? (
													""
												) : (
													<img
														src={`${
															images()[
																Math.floor(
																	Math.random() *
																		images()
																			.length
																)
															]
														}`}
														alt=""
													/>
												)}
												<div>{service}</div>
												{index() % 2 === 0 ? (
													""
												) : (
													<img
														src={`${
															images()[
																Math.floor(
																	Math.random() *
																		images()
																			.length
																)
															]
														}`}
														alt=""
													/>
												)}
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
