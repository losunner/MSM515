import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slides } from './content';
import { slideVariants } from './utils/animations';
import { FluidBackground } from './components/FluidBackground';
import { TitleSlide, OutroSlide } from './components/SpecialSlides';
import { TwoColSlide, GridSlide, TimelineSlide } from './components/LayoutSlides';

const App: React.FC = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.focus();
        }
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const goToNextSlide = useCallback(() => {
        if (currentSlideIndex < slides.length - 1) {
            setDirection(1);
            setCurrentSlideIndex(prev => prev + 1);
        }
    }, [currentSlideIndex]);

    const goToPrevSlide = useCallback(() => {
        if (currentSlideIndex > 0) {
            setDirection(-1);
            setCurrentSlideIndex(prev => prev - 1);
        }
    }, [currentSlideIndex]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
            goToNextSlide();
        } else if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        }
    }, [goToNextSlide, goToPrevSlide]);

    const slide = slides[currentSlideIndex];

    const renderSlideContent = () => {
        if (slide.id === 1) return <TitleSlide slide={slide} />;
        if (slide.id === 20) return <OutroSlide slide={slide} />;

        switch (slide.layout) {
            case 'twoCol':
                return <TwoColSlide slide={slide} />;
            case 'grid':
                return <GridSlide slide={slide} />;
            case 'timeline':
                return <TimelineSlide slide={slide} />;
            default:
                return <GridSlide slide={slide} />;
        }
    };

    const isTitle = slide.id === 1;
    const isOutro = slide.id === 20;

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={`relative w-screen h-screen overflow-hidden flex items-center justify-center outline-none ${isTitle ? 'bg-black' : ''}`}
        >
            {!isTitle && <FluidBackground />}

            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={slide.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={`${isTitle
                        ? 'transparent border border-[#E05A8A]/20 breathing-glow rounded-3xl'
                        : 'glass-panel breathing-glow'} w-[90vw] max-w-7xl h-[85vh] p-4 md:p-8 flex flex-col justify-start relative`}
                >
                    {/* Corner Decorations */}
                    {!isTitle && (
                        <>
                            <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-[#E05A8A] opacity-50" />
                            <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-[#E05A8A] opacity-50" />
                            <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-[#E05A8A] opacity-50" />
                            <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-[#E05A8A] opacity-50" />
                        </>
                    )}

                    {/* Section badge */}
                    {!isTitle && !isOutro && slide.section && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mb-1 shrink-0"
                        >
                            <span className="text-[10px] uppercase tracking-[0.15em] font-semibold px-3 py-1 rounded-full border border-[#E05A8A]/40 text-[#E05A8A] bg-[#E05A8A]/10">
                                {slide.section}
                            </span>
                        </motion.div>
                    )}

                    {/* Slide Header */}
                    {!isTitle && (
                        <>
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 15 }}
                                className="text-xl md:text-2xl font-bold mb-1 text-white shrink-0 flex items-center gap-3"
                            >
                                <div className="w-1 h-6 bg-gradient-to-b from-[#E05A8A] to-[#FF8C42] rounded-full shrink-0" />
                                {slide.title}
                            </motion.h1>

                            {slide.subtitle && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xs text-[#E05A8A] mb-3 ml-4 font-medium"
                                >
                                    {slide.subtitle}
                                </motion.p>
                            )}
                        </>
                    )}

                    {/* Slide Content */}
                    <div className="flex-1 w-full overflow-hidden flex flex-col items-center justify-center">
                        {renderSlideContent()}
                    </div>

                    {/* Slide number indicator */}
                    <div className="absolute bottom-5 right-6 text-[10px] text-white/25 font-mono tracking-wider">
                        {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </div>

                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 rounded-b-3xl overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#E05A8A] to-[#FF8C42]"
                            animate={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Click navigation: left quarter = prev */}
            <div
                onClick={goToPrevSlide}
                className="absolute left-0 top-0 w-1/5 h-full z-40 cursor-pointer flex items-center justify-start opacity-0 hover:opacity-10 transition-opacity"
                title="上一页 (Previous)"
            >
                <div className="w-16 h-32 bg-white/20 blur-2xl rounded-r-full" />
            </div>

            {/* Click navigation: right quarter = next */}
            <div
                onClick={goToNextSlide}
                className="absolute right-0 top-0 w-1/5 h-full z-40 cursor-pointer flex items-center justify-end opacity-0 hover:opacity-10 transition-opacity"
                title="下一页 (Next)"
            >
                <div className="w-16 h-32 bg-white/20 blur-2xl rounded-l-full" />
            </div>

            {/* Mouse-follow glow */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-screen"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(224,90,138,0.07), transparent 60%)`
                }}
            />
        </div>
    );
};

export default App;
