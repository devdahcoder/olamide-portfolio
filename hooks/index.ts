import { onCleanup } from "solid-js";

export const elementObserver = (
    ElementRef: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined | any,
    entriesCallbackFunction: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
    options?: IntersectionObserverInit // Optional IntersectionObserver options
) => {
    if (!ElementRef) {
        return; // Do nothing if ElementRef is not valid
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => entriesCallbackFunction(entry, observer));
        },
        options || { threshold: 0.2 } // Use provided options or default threshold
    );

    observer.observe(ElementRef);

    onCleanup(() => {
        observer.disconnect();
    });

};