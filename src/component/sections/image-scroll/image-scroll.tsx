import { Component, createEffect, For } from 'solid-js';
import './image-scroll.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imageScrollContent } from '../../../../contents';
import Image from '../../image';
import { elementObserver } from '../../../../hooks';
gsap.registerPlugin(ScrollTrigger);

const ImageScroll: Component<{}> = () => {

    const imageScrollContainerRefElement: HTMLDivElement[] = []


    createEffect(() => {
        imageScrollContainerRefElement.forEach((element, index) => {
            const targetElement = element.querySelector(".image--container");

            gsap.killTweensOf([
                targetElement
            ]);

            gsap.to(targetElement, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    end: 'bottom top',
                    scrub: true,
                    toggleActions: 'play reverse play reverse',
                },
                perspective: "2000px",
                y: -20,
                rotateX: "-10deg",
                duration: 1,
            })

            elementObserver(targetElement, (entry) => {
                if (entry.isIntersecting) {
                    gsap.to(targetElement, {
                        filter: 'blur(0px)',
                        duration: 0.5,
                    });

                    gsap.to(`.image--scroll--text--span--${index}`, {
                        y: '0cap',
                        ease: "power1.inOut",
                    });

                    if (index > 0) {
                        gsap.to(`.image--scroll--text--span--${index - 1}`, {
                            y: '-3cap',
                            ease: "power1.inOut",
                        });
                    }

                    if (index < imageScrollContent.length - 1) {
                        gsap.to(`.image--scroll--text--span--${index + 1}`, {
                            y: '3cap',
                            ease: "power1.inOut",
                        });
                    }

                } else {
                    gsap.to(targetElement, {
                        filter: 'blur(2px)',
                        duration: 0.5,
                    });

                }
            }, { threshold: 0.9, rootMargin: "-90px 0px -90px 0px" });
        })
    })

    return (
        <div class="image--scroll--container">
            <div class="image--scroll--sub--container">
                <div class="image--scroll--list">
                    <For each={imageScrollContent}>
                        {(item, index) => {
                            return (
                                <div ref={(element) => imageScrollContainerRefElement.push(element)} class={`image--scroll--item image--scroll--item--${index()}`}>
                                    <Image
                                        imageSrc={item?.image?.imageSrc}
                                        imageAlt={item?.image?.imageAlt}
                                        imageClass={item?.image?.imageClass}
                                        imageContainerClass={
                                            item?.image?.imageContainerClass
                                        }
                                        imageSubContainerClass={
                                            item?.image?.imageSubContainerClass
                                        }

                                    />
                                </div>
                            )
                        }}
                    </For>
                </div>

                <div class="image--scroll--text--container"><div class="image--scroll--text--sub--container">
                    <div class="image--scroll--text">
                        <h2 >
                            <For each={imageScrollContent}>
                                {(item, index) => {
                                    return (
                                        <span
                                            style={{
                                                transform: `translateX(-50%) translateY(${index() === 0 ? '0cap' : '3cap'}) translateZ(0px)`,
                                                "z-index": index()
                                            }}
                                            class={`image--scroll--text--span image--scroll--text--span--${index()}`}>
                                            {item?.text}
                                        </span>
                                    )
                                }}
                            </For>
                        </h2>
                    </div>
                </div></div>
            </div>
        </div>
    );
};

export default ImageScroll;
