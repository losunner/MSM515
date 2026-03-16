
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export const MouseFollowCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}
            onMouseMove={onMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(224,90,138,0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative h-full w-full">{children}</div>
        </motion.div>
    );
};
