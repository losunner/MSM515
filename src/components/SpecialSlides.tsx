
import { motion } from 'framer-motion';
import { staggerContainer, bounceItem } from '../utils/animations';
import { Heart } from 'lucide-react';

// ─── Title Slide ────────────────────────────────────────────────
export const TitleSlide = ({ slide }: { slide: any }) => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-full text-center"
            variants={staggerContainer}
            initial="enter"
            animate="center"
            exit="exit"
        >
            <motion.div variants={bounceItem} className="mb-6 relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E05A8A] to-[#FF8C42] flex items-center justify-center shadow-[0_0_40px_rgba(224,90,138,0.5)]">
                    <Heart className="w-12 h-12 text-white" fill="white" />
                </div>
                <div className="absolute -inset-2 rounded-full border border-[#E05A8A]/30" style={{ animation: 'ping 2s infinite' }} />
            </motion.div>

            <motion.h1 variants={bounceItem} className="text-5xl md:text-7xl font-black mb-2 text-white leading-tight tracking-tight">
                {slide.title.split('\n')[0]}
            </motion.h1>
            <motion.p variants={bounceItem} className="text-xl md:text-2xl font-medium text-[#E05A8A] mb-2 tracking-widest">
                {slide.title.split('\n')[1] || ''}
            </motion.p>

            {slide.subtitle && (
                <motion.div variants={bounceItem} className="mt-6 flex flex-col gap-2 text-gray-400 max-w-2xl">
                    {slide.subtitle.split('\n').map((line: string, i: number) => (
                        <p key={i} className={i === 0 ? 'text-base text-gray-200 font-medium' : 'text-sm text-gray-500'}>{line}</p>
                    ))}
                </motion.div>
            )}

            <motion.div variants={bounceItem} className="mt-10 flex gap-3 flex-wrap justify-center">
                {["Physical AI", "具身智能", "SaS Model", "GBA 2026"].map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full text-xs font-semibold border border-[#E05A8A]/40 text-[#E05A8A] bg-[#E05A8A]/10">
                        {tag}
                    </span>
                ))}
            </motion.div>
        </motion.div>
    );
};

// ─── Conclusion / Outro Slide ────────────────────────────────────────────────
export const OutroSlide = ({ slide }: { slide: any }) => {
    return (
        <motion.div
            className="flex flex-col gap-4 w-full h-full justify-center"
            variants={staggerContainer}
            initial="enter"
            animate="center"
            exit="exit"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                {slide.points?.map((pt: string, i: number) => (
                    <motion.div key={i} variants={bounceItem} className={i === (slide.points.length - 1) ? 'md:col-span-2' : ''}>
                        <div className={`rounded-2xl border p-4 h-full transition-all
                            ${i === 0 ? 'border-[#E05A8A]/40 bg-[#E05A8A]/10' :
                                i === 1 ? 'border-[#FF8C42]/30 bg-[#FF8C42]/5' :
                                    i === (slide.points.length - 1) ? 'border-[#7C5CBF]/40 bg-[#7C5CBF]/10 text-center' :
                                        'border-white/10 bg-white/5'}`}
                        >
                            <BoldText text={pt} />
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div variants={bounceItem} className="text-center py-3">
                <span className="text-2xl md:text-4xl font-black bg-gradient-to-r from-[#E05A8A] to-[#FF8C42] bg-clip-text text-transparent">
                    Q&A · Thank You · 谢谢
                </span>
            </motion.div>
        </motion.div>
    );
};

// ─── Inline bold text helper ─────────────────────────────────────────────────
export const BoldText = ({ text }: { text: string }) => (
    <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
        {text.split('\n').map((line, li) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <span key={li} className="block mb-0.5">
                    {parts.map((part, pi) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={pi} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                        }
                        return <span key={pi}>{part}</span>;
                    })}
                </span>
            );
        })}
    </div>
);
