import { Component, For } from "solid-js";
import "./playground.scss";
import { playgroundContent } from "../../../../contents";

const Playground: Component<{}> = (props) => {



	return (
		<div class="playground--container">
			<div class="playground--sub--container">
				<div class="playground--header--container">
					<div class="playground--title--empty"></div>
					<div class="playground--title--container">
						<div class="playground--title--sub--container">
							<div class="playground--title">
								<p>Playground</p>
							</div>
							<div class="playground--sub--title">
								<p>
									Our vast experience and range of services
									help solve complex business problems with a
									personalized approach to each task
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="playground--list">
					<For each={playgroundContent}>
						{(playground, index) => (
							<div class="playground--item--container">
								<div class="playground--item--sub--container">
									<div class="playground--index">
										<p>0{index() + 1}</p>
									</div>

									<div class="playground--title--container">
										<div class="playground--title">
											<p>{playground.name}</p>
										</div>
										<div class="playground--tool--list">
											<For each={playground.tools}>
												{(tools, id) => (
													<div class="playground--tool--item">
														<span>{tools}</span> 
													</div>
												)}
											</For>
										</div>
									</div>
                                </div>
                                <div class="playground--link--container h-20 border"></div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Playground;
