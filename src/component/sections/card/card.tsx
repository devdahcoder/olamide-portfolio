import { Component } from "solid-js";
import "./card.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Card: Component<{}> = () => {

    // createEffect(() => {
    //     const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: ".card--container",
	// 			start: `top top`,
	// 			scrub: 3,
	// 			markers: true,
	// 			end: `+=1000px`,
	// 			pin: true,
	// 			toggleActions: "play none none reverse",
	// 		},
	// 	});


    // })
	return (
		<div class="card--container">
            <div class="card--sub--container">
                <div class="card--title--container">
                    <h1 class="card--title">Card Title</h1>
                </div>

                <div class="card--list--container">
                    <div class="card--list">
jjj
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Card;
