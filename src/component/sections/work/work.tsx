import { Component, For } from "solid-js";
import { workContent } from "../../../../contents";
import Image from "../../image";
import "./work.scss";
import IconButton from "../../icon-button";

const Work: Component<{}> = () => {
	return (
		<div class="work--container">
			<div class="work--sub--container">
				<div class="work--list">
					<For each={workContent}>
						{(props) => (
                            <div class="work--item--container">
                                
                                <div class="work--item--details--container">
                                    <div class="work--item--details">
                                        <div class="work--item--company--name"><p>{ props?.companyName }</p></div>
                                        <div class="work--item--description"><p>{ props.description }</p></div>
                                        <div class="work--item-date"><p>{ props.date }</p></div>
                                    </div>
                                    <div class="work--item--icon--container">
                                        {/* <IconButton /> */}hello world
                                    </div>
                                </div>

                                <div class="work--item--image--container">
                                    <div class="work--item--title">
                                        <p>/{ props.title }</p>
                                    </div>
									<Image
										imageSrc={props?.image?.imageSrc}
										imageAlt={props?.image?.imageAlt}
										imageClass={props?.image?.imageClass}
										imageContainerClass={
											props?.image?.imageContainerClass
										}
										imageSubContainerClass={
											props?.image?.imageSubContainerClass
										}
									/>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
};

export default Work;
