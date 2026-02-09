import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, X, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ScrollAlert = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Hide the alert if user scrolls more than 50 pixels
            if (window.scrollY > 150) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 500, opacity: 0, transition: { duration: 0.8 } }}
                    className="fixed top-6 right-6 z-[100] w-72 md:w-80"
                >
                    {/* Main Card with Gaming Aesthetic */}
                    <div className="relative glass-card border-l-4 mt-20 border-[#D946EF] bg-gaming-900/90 backdrop-blur-xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden">

                        {/* Background Decorative Element */}
                        <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#D946EF]/10 blur-2xl rounded-full" />

                        <div className="flex gap-4 relative z-10">
                            {/* Icon Section */}
                            <div className="flex-shrink-0">
                                <div className="p-2 bg-[#D946EF]/20 rounded-lg border border-[#D946EF]/40">
                                    <Bell size={20} className="text-[#D946EF] animate-bounce" />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-[#D946EF] uppercase font-mono">
                                        System Alert
                                    </span>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="text-gray-500 hover:text-white transition-colors"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                                <h4 className="text-white font-heading font-bold text-sm">
                                    Results for round 2 of Case Study Competition are Live!
                                </h4>
                                <div className="my-2 flex justify-start">
                                    <motion.button
                                        type="button"
                                        initial="initial"
                                        whileHover="hover"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const targetPath = '/casestudy';
                                            const targetId = 'result';

                                            // If already on the casestudy route, just scroll to the target id
                                            if (window.location.pathname === targetPath) {
                                                const el = document.getElementById(targetId);
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    return;
                                                }
                                            }

                                            // Otherwise navigate to the page, then try to scroll after a short delay
                                            navigate(targetPath);
                                            setTimeout(() => {
                                                const el = document.getElementById(targetId);
                                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }, 400);
                                        }}
                                        className="relative px-6 py-2 text-xs font-bold uppercase tracking-wider text-gaming-950 bg-[#D946EF] transition-all duration-300 hover:shadow-[0_0_20px_#d946ef] active:scale-95 flex items-center justify-center overflow-hidden"
                                        style={{
                                            clipPath: "polygon(0 0, 92% 0, 100% 30%, 100% 100%, 8% 100%, 0 70%)",
                                            minWidth: "120px"
                                        }}
                                    >
                                        {/* Framer Motion Shine Layer */}
                                        <motion.span
                                            variants={{
                                                initial: { x: "-100%", skewX: "-20deg" },
                                                hover: { x: "100%", skewX: "-20deg" }
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            }}
                                            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                                        />

                                        <span className="relative z-10">View Now</span>
                                    </motion.button>
                                </div>
                                {/* Visual Progress/Timer Bar Decor */}
                                <div className="mt-2 w-full h-[2px] bg-white/10 overflow-hidden">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="w-full h-full bg-gradient-to-r from-transparent via-[#D946EF] to-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Corner Accent (Cyberpunk Cut) */}
                        <div
                            className="absolute bottom-0 right-0 w-4 h-4 bg-[#D946EF]"
                            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollAlert;