import gsap from 'gsap';
import { GsapFadeElementType } from '../types/index';

gsap.registerEffect({
    name: "fade",
    defaults: { duration: 2 },
    effect: (target, config) => {
        return gsap.to(target, { duration: config.duration, opacity: 0 })
    },
    extendTimeline: true,
})