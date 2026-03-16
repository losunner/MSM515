
import { motion } from 'framer-motion';

export const FluidBackground = () => {
    return (
        <>
            <svg width="0" height="0" className="absolute hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 30 -12"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
            <div className="fluid-bg">
                <motion.div
                    className="blob blob-1"
                    animate={{
                        x: ['-10%', '110%', '50%', '-10%'],
                        y: ['-10%', '20%', '110%', '-10%'],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    style={{ top: '10%', left: '20%' }}
                />
                <motion.div
                    className="blob blob-2"
                    animate={{
                        x: ['110%', '-10%', '30%', '110%'],
                        y: ['110%', '50%', '-10%', '110%'],
                        scale: [1.1, 0.9, 1.3, 1.1],
                    }}
                    transition={{
                        duration: 28,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 2
                    }}
                    style={{ top: '40%', left: '50%' }}
                />
                <motion.div
                    className="blob blob-3"
                    animate={{
                        x: ['40%', '-20%', '120%', '40%'],
                        y: ['-20%', '120%', '50%', '-20%'],
                        scale: [0.9, 1.4, 1, 0.9],
                    }}
                    transition={{
                        duration: 32,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 5
                    }}
                    style={{ top: '60%', left: '10%' }}
                />
            </div>
        </>
    );
};
