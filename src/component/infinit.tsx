import gsap from "gsap";
import { createEffect, createSignal } from "solid-js";

const skills = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Node.js",
	"Python",
	"Java",
	"C#",
	"Vue.js",
	"Angular",
	"TypeScript",
	"Git",
	"SQL",
	"MongoDB",
	"Express.js",
	"Redux",
	"Sass",
	"Bootstrap",
	"RESTful API",
	"GraphQL",
];

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const InfiniteTextScroll = () => {
	const [scrollPosition, setScrollPosition] = createSignal(0);
	const [direction, setDirection] = createSignal(1);
	const [scrollInterval, setScrollInterval] = createSignal(null);

	const startScrolling = () => {
		if (!scrollInterval()) {
			let dele = setInterval(() => {
				const newScrollPosition = scrollPosition() + direction();
				gsap.to(scrollPosition, {
					duration: 1,
					ease: "power2.inOut",
					value: newScrollPosition,
				});

				if (newScrollPosition === content.length) {
					setDirection(-1);
				} else if (newScrollPosition === -content.length) {
					setDirection(1);
				}
			}, 2000);
			setScrollInterval(dele);// Adjust the interval to change the scrolling speed
		}
	};

	const stopScrolling = () => {
		if (scrollInterval()) {
			clearInterval(scrollInterval());
			setScrollInterval(null)
		}
	};

	createEffect(() => {
		startScrolling();
		return () => {
			stopScrolling();
		};
	});

	return (
		<div class="infinite-text-scroll">
			<div class="text-container">
				<div
					class="text"
					style={`transform: translateY(${
						scrollPosition() * direction()
					}px)`}
				>
					{content}
				</div>
			</div>
		</div>
	);
};

export default InfiniteTextScroll;
