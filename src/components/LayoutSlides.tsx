
import { motion } from 'framer-motion';
import { staggerContainer, bounceItem } from '../utils/animations';
import { BoldText } from './SpecialSlides';

// ─── Two-column: bullet list left + stats right ───────────────────────────
export const TwoColSlide = ({ slide }: { slide: any }) => (
    <motion.div
        className="flex flex-col md:flex-row gap-5 w-full h-full mt-2"
        variants={staggerContainer}
        initial="enter"
        animate="center"
        exit="exit"
    >
        {/* Left column */}
        <div className="flex-[1.4] flex flex-col gap-3 justify-center">
            {slide.points?.map((pt: string, i: number) => (
                <motion.div key={i} variants={bounceItem}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 hover:border-[#E05A8A]/40 transition-colors">
                        <BoldText text={pt} />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Right: stat panels */}
        {slide.stats && slide.stats.length > 0 && (
            <motion.div className="flex-[0.9] flex flex-col gap-4 items-stretch justify-center" variants={bounceItem}>
                {slide.stats.map((stat: { value: string; label: string; color?: string }, i: number) => (
                    <div
                        key={i}
                        className={`rounded-3xl border flex flex-col items-center justify-center py-8 px-4 text-center
                            ${stat.color === 'pink'
                                ? 'border-[#E05A8A]/30 bg-[#E05A8A]/10'
                                : 'border-[#FF8C42]/30 bg-[#FF8C42]/10'}`}
                    >
                        <span className={`text-4xl lg:text-5xl font-extrabold
                            ${stat.color === 'pink'
                                ? 'text-[#E05A8A] drop-shadow-[0_0_15px_rgba(224,90,138,0.8)]'
                                : 'text-[#FF8C42] drop-shadow-[0_0_15px_rgba(255,140,66,0.8)]'}`}>
                            {stat.value}
                        </span>
                        <p className="text-gray-300 text-xs mt-2 font-medium">{stat.label}</p>
                    </div>
                ))}
            </motion.div>
        )}
    </motion.div>
);

// ─── 2x2 Grid ─────────────────────────────────────────────────────────────
export const GridSlide = ({ slide }: { slide: any }) => (
    <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1 w-full h-full"
        variants={staggerContainer}
        initial="enter"
        animate="center"
        exit="exit"
    >
        {slide.points?.map((pt: string, i: number) => (
            <motion.div key={i} variants={bounceItem} className="h-full">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#E05A8A]/30 hover:-translate-y-1 transition-all h-full duration-300">
                    <BoldText text={pt} />
                </div>
            </motion.div>
        ))}
    </motion.div>
);

// ─── Timeline / Stepped flow ──────────────────────────────────────────────
export const TimelineSlide = ({ slide }: { slide: any }) => {
    const badges = ['Phase 1', 'Phase 2', 'Phase 3', 'Partners'];
    const colors = [
        'bg-[#E05A8A]',
        'bg-[#FF8C42]',
        'bg-[#7C5CBF]',
        'bg-[#5B8AE0]',
    ];
    return (
        <motion.div
            className="flex flex-col gap-3 w-full h-full mt-2"
            variants={staggerContainer}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {slide.points?.map((pt: string, i: number) => (
                <motion.div key={i} variants={bounceItem} className="flex gap-3 items-start">
                    <div className={`${colors[i] || 'bg-gray-600'} text-white text-xs font-bold px-2 py-1.5 rounded-lg shrink-0 mt-0.5 min-w-[68px] text-center`}>
                        {badges[i] || `Step ${i + 1}`}
                    </div>
                    <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-[#E05A8A]/30 transition-colors">
                        <BoldText text={pt} />
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};
