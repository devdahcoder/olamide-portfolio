import { Component } from "solid-js";

const Noise: Component<{}> = () => {
    // let grainRef: HTMLCanvasElement;

    // createEffect(() => {
	// 	const patternSize = 250;
	// 	const patternScaleX = 1;
	// 		const patternScaleY = 1;
	// 		const patternRefreshInterval = 2;
	// 		const patternAlpha = 15;
	// 	const canvas = grainRef;
	// 	if (!canvas) return;

	// 	const ctx = canvas.getContext("2d");
	// 	if (!ctx) return;

	// 	let frame = 0;

	// 	const patternCanvas = document.createElement("canvas");
	// 	patternCanvas.width = patternSize;
	// 	patternCanvas.height = patternSize;
	// 	const patternCtx = patternCanvas.getContext("2d");
	// 	if (!patternCtx) return;

	// 	const patternData = patternCtx.createImageData(
	// 		patternSize,
	// 		patternSize
	// 	);
	// 	const patternPixelDataLength = patternSize * patternSize * 4;

	// 	const resize = () => {
	// 		if (!canvas) return;
	// 		canvas.width = window.innerWidth * window.devicePixelRatio;
	// 		canvas.height = window.innerHeight * window.devicePixelRatio;

	// 		ctx.scale(patternScaleX, patternScaleY);
	// 	};

	// 	const updatePattern = () => {
	// 		for (let i = 0; i < patternPixelDataLength; i += 4) {
	// 			const value = Math.random() * 255;
	// 			patternData.data[i] = value;
	// 			patternData.data[i + 1] = value;
	// 			patternData.data[i + 2] = value;
	// 			patternData.data[i + 3] = patternAlpha;
	// 		}
	// 		patternCtx.putImageData(patternData, 0, 0);
	// 	};

	// 	const drawGrain = () => {
	// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 		const pattern = ctx.createPattern(patternCanvas, "repeat");
	// 		if (pattern) {
	// 			ctx.fillStyle = pattern;
	// 			ctx.fillRect(0, 0, canvas.width, canvas.height);
	// 		}
	// 	};

	// 	const loop = () => {
	// 		if (frame % patternRefreshInterval === 0) {
	// 			updatePattern();
	// 			drawGrain();
	// 		}
	// 		frame++;
	// 		window.requestAnimationFrame(loop);
	// 	};

	// 	window.addEventListener("resize", resize);
	// 	resize();
	// 	loop();

	// 	return () => {
	// 		window.removeEventListener("resize", resize);
	// 	};
	// });

	// return <canvas class="noise-overlay fixed top-0 left-0 w-screen h-screen" ref={grainRef} />;
	return <></>
};

export default Noise