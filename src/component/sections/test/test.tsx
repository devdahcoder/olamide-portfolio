import { Component, createEffect, createSignal } from "solid-js";
import "./test.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Test: Component<{}> = () => {


    return (
        <div class="Test--container">
            
        </div>
    );
};

export default Test;
