import gsap from "gsap";

export const animateLoader = (
    container: HTMLDivElement | undefined,
    setIsLoadedComplete: (value: boolean) => void
) => {
    const tl = gsap.timeline();
    tl.to(".loader--grid--container", { visibility: "visible" })
        .to(".loader--grid", {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.9,
            ease: "power4.out",
        })
        .to(
            ".loader--cover",
            {
                y: 0,
                duration: 1,
                ease: "sine.inOut",
                onComplete: () => {
                    setIsLoadedComplete(true);
                },
            },
            "-=0.99"
        )
        .to(".loader--container", {
            yPercent: 100,
            duration: 1,
            ease: "expo.inOut",
            onComplete: () => {
                gsap.to(".loader--container", {
                    display: "none",
                });
            },
        });
};

export const animatePercentage = (
    currentPercentage: number,
    currentCount: string,
    prevCount: string
) => {
    if (currentPercentage > 9) {
        gsap.to(`.percentage--number--0`, {
            yPercent: -100,
            duration: 0.4,
            scale: 0.6,
            ease: "power1.out",
        });
    }

    if (currentPercentage === 99) {
        gsap.to(
            [
                ".first--loader--percentage--sign",
                ".third--loader--percentage--number",
            ],
            {
                yPercent: -100,
                duration: 0.5,
                ease: "power1.inOut",
            }
        );
        gsap.to(".second--loader--percentage--sign", {
            yPercent: 100,
            duration: 0.5,
            scale: 1,
            ease: "power1.inOut",
        });
    }

    const currentDigit = Number(currentCount);
    const prevDigit = Number(prevCount);
    const tl = gsap.timeline();

    if (currentDigit > prevDigit || (currentDigit === 1 && prevDigit === 0)) {
        tl.to(`.percentage--number--${currentDigit}`, {
            yPercent: -100,
            duration: 0.5,
            ease: "power1.inOut",
        }).to(`.percentage--number--${currentDigit}`, {
            yPercent: -200,
            scale: 0.6,
            duration: 0.5,
            ease: "power1.inOut",
        });
    }

    if (currentDigit === 1 && prevDigit === 9) {
        tl.to(`.percentage--number--10`, {
            yPercent: -100,
            duration: 0.5,
            ease: "power1.inOut",
        });
    }
};