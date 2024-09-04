import gsap from "gsap";
import { Component, onMount } from "solid-js";
import "./component.scss";

const TechnologySlider: Component<{
    sliderContainerRef: HTMLDivElement | undefined;
    sliderSubContainerRef: HTMLDivElement | undefined;
    contents: string[]
}> = (props) => {
    let sliderContainerRef: HTMLDivElement | undefined;
    let sliderSubContainerRef: HTMLDivElement | undefined;

    onMount(() => {
        if (sliderContainerRef && sliderSubContainerRef) {
            // Clone the content for seamless looping
            sliderSubContainerRef.innerHTML += sliderSubContainerRef.innerHTML;

            gsap.set(sliderSubContainerRef, { x: "-50%" });


            // Set up the GSAP animation
            gsap.to(sliderSubContainerRef, {
                x: `0%`,
                duration: 20,
                ease: "linear",
                repeat: -1,
                onRepeat: () => {
                    gsap.set(sliderSubContainerRef, { x: "-50%" });
                },
            });
        }
    });

    return (
        <div class="technology--slider--container" ref={sliderContainerRef}>
            <div class="technology-slider-content" ref={sliderSubContainerRef}>
                {props.contents.map((content) => (
                    <div class="technology-item">{content}</div>
                ))}
            </div>
        </div>
    );
};

export default TechnologySlider;