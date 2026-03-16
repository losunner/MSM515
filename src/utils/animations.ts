import type { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
    enter: {},
    center: { transition: { staggerChildren: 0.12, delayChildren: 0.24 } },
    exit: { transition: { staggerChildren: 0.06 } }
};

export const bounceItem: Variants | any = {
    enter: { opacity: 0, y: 30, scale: 0.9 },
    center: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.2 } }
};

export const slideVariants: Variants | any = {
    enter: (direction: number) => ({
        x: direction > 0 ? '50%' : '-50%',
        y: direction > 0 ? 40 : -40,
        opacity: 0,
        scale: 0.85,
        rotateZ: direction > 0 ? 3 : -3,
        filter: "blur(10px)"
    }),
    center: {
        zIndex: 1,
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '50%' : '-50%',
        y: direction < 0 ? 40 : -40,
        opacity: 0,
        scale: 0.85,
        rotateZ: direction < 0 ? 3 : -3,
        filter: "blur(10px)",
        transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 }
    })
};
