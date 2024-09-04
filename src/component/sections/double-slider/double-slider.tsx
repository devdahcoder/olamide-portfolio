
import { Component } from "solid-js";
import TechnologySlider from "../../TechnologySlider";
import "./double-slider.scss"
import LeftSlider from "./left-slider";
import RightSlider from "./right-slder";

const technologies = [
    "React", "Solid.js", "TypeScript", "JavaScript", "Node.js",
    "Express", "MongoDB", "PostgreSQL", "GraphQL", "Docker",
    "AWS", "Git", "HTML5", "CSS3", "Sass",
    // Add more technologies as needed
];

const DoubleSlider: Component = () => {
    return (
        <div class="double--slider--container">
            <LeftSlider />
            <RightSlider  />
        </div>
    );
};

export default DoubleSlider;

