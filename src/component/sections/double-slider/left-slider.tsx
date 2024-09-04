import { Component, onMount } from "solid-js";
import "./double-slider.scss"
import TechnologySlider from "../../TechnologySlider";
import gsap from "gsap";


const LeftSlider: Component<{
}> = (props) => {

    const technologies = [
        "React", "Solid.js", "TypeScript", "JavaScript", "Node.js",
        "Express", "MongoDB", "PostgreSQL", "GraphQL", "Docker",
        "AWS", "Git", "HTML5", "CSS3", "Sass",
    ];

    let sliderContainerRef: HTMLDivElement | undefined;
    let sliderSubContainerRef: HTMLDivElement | undefined;

    onMount(() => {
        if (sliderContainerRef && sliderSubContainerRef) {

            sliderSubContainerRef.innerHTML += sliderSubContainerRef.innerHTML;

            gsap.to(sliderSubContainerRef, {
                x: `-50%`,
                duration: 20,
                ease: "linear",
                repeat: -1,
            });
        }
    });

    return <TechnologySlider contents={technologies} sliderContainerRef={sliderContainerRef} sliderSubContainerRef={sliderSubContainerRef} />
};

export default LeftSlider;
