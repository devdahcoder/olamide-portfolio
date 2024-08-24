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
    const imageRefElements: HTMLImageElement[] = [];

    createEffect(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.image--scroll--container',
        //         start: 'top top',
        //         end: 'bottom bottom',
        //         scrub: true,
        //         markers: true
        //     },
        // });

        imageScrollContainerRefElement.forEach((element, index) => {
            const targetElement = element.querySelector(".image--container")
            gsap.to(targetElement, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    end: 'bottom top',
                    // scrub: 2,
                    // markers: true,
                    scrub: true,
                    toggleActions: 'play reverse play reverse',
                },
                perspective: "2000px",
                y: -20,
                rotateX: "-10deg",
                // filter: "blur(0px)",
                duration: 1,
            })
            elementObserver(targetElement, (entry, observer) => {
                if (entry.isIntersecting) {
                    gsap.to(targetElement, {
                        // scrollTrigger: {
                        //     trigger: element,
                        //     // start: 'top 85%',
                        //     // end: 'bottom top',
                        //     // scrub: 2,
                        //     // markers: true,
                        //     scrub: true,
                        //     toggleActions: 'play reverse play reverse',
                        // },
                        filter: "blur(0px)"
                    })
                    // observer.unobserve(entry.target);
                }
            }, { threshold: 0.8, rootMargin: "-90px 0px -90px 0px" });
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
                                    {/* <img src={item.src} alt={item.alt} /> */}
                                </div>
                            )
                        }}
                    </For>
                </div>

                <div class="image--scroll--text--container"><div class="image--scroll--text--sub--container">
                    <div class="image--scroll--text">
                        <h2><span >Secrid</span>
                        </h2>
                    </div>
                </div></div>
                <div class='image--scroll--shadow'></div>
            </div>
        </div>
    );
};

export default ImageScroll;
