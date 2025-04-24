// import { createEffect, createSignal, onCleanup } from "solid-js";
// import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

// interface ParticlesProps {
// 	particleCount?: number;
// 	particleSpread?: number;
// 	speed?: number;
// 	particleColors?: string[];
// 	moveParticlesOnHover?: boolean;
// 	particleHoverFactor?: number;
// 	alphaParticles?: boolean;
// 	particleBaseSize?: number;
// 	sizeRandomness?: number;
// 	cameraDistance?: number;
// 	disableRotation?: boolean;
// 	className?: string;
// }


// const defaultColors: string[] = ["#ffffff", "#ffffff", "#ffffff"];

// const hexToRgb = (hex: string): [number, number, number] => {
// 	hex = hex.replace(/^#/, "");
// 	if (hex.length === 3) {
// 		hex = hex
// 			.split("")
// 			.map((c) => c + c)
// 			.join("");
// 	}
// 	const int = parseInt(hex, 16);
// 	const r = ((int >> 16) & 255) / 255;
// 	const g = ((int >> 8) & 255) / 255;
// 	const b = (int & 255) / 255;
// 	return [r, g, b];
// };

// const vertex = /* glsl */ `
//   attribute vec3 position;
//   attribute vec4 random;
//   attribute vec3 color;
  
//   uniform mat4 modelMatrix;
//   uniform mat4 viewMatrix;
//   uniform mat4 projectionMatrix;
//   uniform float uTime;
//   uniform float uSpread;
//   uniform float uBaseSize;
//   uniform float uSizeRandomness;
  
//   varying vec4 vRandom;
//   varying vec3 vColor;
  
//   void main() {
//     vRandom = random;
//     vColor = color;
    
//     vec3 pos = position * uSpread;
//     pos.z *= 10.0;
    
//     vec4 mPos = modelMatrix * vec4(pos, 1.0);
//     float t = uTime;
//     mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
//     mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
//     mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
//     vec4 mvPos = viewMatrix * mPos;
//     gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
//     gl_Position = projectionMatrix * mvPos;
//   }
// `;

// const fragment = /* glsl */ `
//   precision highp float;
  
//   uniform float uTime;
//   uniform float uAlphaParticles;
//   varying vec4 vRandom;
//   varying vec3 vColor;
  
//   void main() {
//     vec2 uv = gl_PointCoord.xy;
//     float d = length(uv - vec2(0.5));
    
//     if(uAlphaParticles < 0.5) {
//       if(d > 0.5) {
//         discard;
//       }
//       gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
//     } else {
//       float circle = smoothstep(0.5, 0.4, d) * 0.8;
//       gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
//     }
//   }
// `;

// const Particles = ({
// 	particleCount = 200,
// 	particleSpread = 10,
// 	speed = 0.1,
// 	particleColors,
// 	moveParticlesOnHover = false,
// 	particleHoverFactor = 1,
// 	alphaParticles = false,
// 	particleBaseSize = 100,
// 	sizeRandomness = 1,
// 	cameraDistance = 20,
// 	disableRotation = false,
// 	className,
// }: ParticlesProps) => {
// 	let containerRef: HTMLDivElement | undefined;
// 	const [mouseRef, setMouseRef] = createSignal({ x: 0, y: 0 });

// 	createEffect(() => {
// 		const container = containerRef;
// 		if (!container) return;

// 		const renderer = new Renderer({ depth: false, alpha: true });
// 		const gl = renderer.gl;
// 		container.appendChild(gl.canvas);
// 		gl.clearColor(0, 0, 0, 0);

// 		const camera = new Camera(gl, { fov: 15 });
// 		camera.position.set(0, 0, cameraDistance);

// 		const resize = () => {
// 			const width = container.clientWidth;
// 			const height = container.clientHeight;
// 			renderer.setSize(width, height);
// 			camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
// 		};
// 		window.addEventListener("resize", resize);
// 		resize();

// 		// Scroll-based Animation
// 		const handleScroll = () => {
// 			const scrollTop = window.scrollY;
// 			const maxScroll =
// 				document.documentElement.scrollHeight - window.innerHeight;
// 			const scrollFactor = Math.min(scrollTop / maxScroll, 1); // Normalize between 0-1

// 			// Move camera backward as user scrolls
// 			camera.position.z = cameraDistance + scrollFactor * 50; // Adjust zooming effect
// 			camera.fov = 15 + scrollFactor * 20; // Increase FOV for a deeper effect
// 			camera.updateProjectionMatrix();

// 			// (Optional) Trigger section appearance
// 			const section = document.getElementById("new-section");
// 			if (section) {
// 				section.style.opacity = scrollFactor.toString();
// 				section.style.transform = `translateY(${
// 					100 - scrollFactor * 100
// 				}%)`; // Moves up
// 			}
// 		};

// 		window.addEventListener("scroll", handleScroll);

// 		onCleanup(() => {
// 			window.removeEventListener("resize", resize);
// 			window.removeEventListener("scroll", handleScroll);
// 		});

// 		// Animation Loop
// 		let animationFrameId: number;
// 		let lastTime = performance.now();
// 		let elapsed = 0;

// 		const update = (t: number) => {
// 			animationFrameId = requestAnimationFrame(update);
// 			const delta = t - lastTime;
// 			lastTime = t;
// 			elapsed += delta * speed;

// 			program.uniforms.uTime.value = elapsed * 0.001;
// 			renderer.render({ scene: particles, camera });
// 		};

// 		animationFrameId = requestAnimationFrame(update);
// 	});


// 	return (
// 		<div ref={containerRef} class={`relative w-full h-full ${className} z[9999999999999]`} />
// 	);
// };

// export default Particles;
