import { createEffect, createSignal, onCleanup } from "solid-js";

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

export const usePercentageLoaderHook = (duration = 5000) => {
    const [loadingPercentage, setLoadingPercentage] = createSignal<number>(0);
    const [isLoaded, setIsLoaded] = createSignal<boolean>(false);

    const startLoading = () => {
        const interval = setInterval(() => {
            setLoadingPercentage((prevPercentage) => {
                if (prevPercentage >= 100) {
                    clearInterval(interval);
                    setIsLoaded(true);
                    return 100;
                }
                return prevPercentage + 1;
            });
        }, duration / 100);

        onCleanup(() => {
            clearInterval(interval);
        });
    };

    createEffect(() => {
        if (typeof window !== 'undefined') {
            if (document.readyState === 'complete') {
                startLoading();
            } else {
                window.addEventListener('load', startLoading);
                onCleanup(() => {
                    window.removeEventListener('load', startLoading);
                });
            }
        }
    });

    return { loadingPercentage, isLoaded }
}

// export const usePercentageLoaderHook = () => {
//     const [loadingPercentage, setLoadingPercentage] = createSignal<number>(0);
//     const [isLoaded, setIsLoaded] = createSignal<boolean>(false);

//     createEffect(() => {
//         const interval = setInterval(() => {
//             setLoadingPercentage((prevPercentage) => {
//                 if (prevPercentage === 100) {
//                     clearInterval(interval);
//                     setIsLoaded(true);
//                     return 100;
//                 }
//                 return prevPercentage + 1;
//             });
//         }, 50);
//         onCleanup(() => {
//             clearInterval(interval);
//         });
//     });

//     return { loadingPercentage, isLoaded }
// }

export const useIsLoadedStateHook = () => {
    const [isLoadedComplete, setIsLoadedComplete] = createSignal<boolean>(false);
    return { isLoadedComplete, setIsLoadedComplete }
}