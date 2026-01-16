import React from 'react';
import { motion } from 'framer-motion';
import { Play, Target, Map, Briefcase, Zap, Globe, Shield, Users, Trophy, BarChart3, Star } from 'lucide-react';
import GTAGallery from '../components/Varun/bplangallery';
import GTATimeline from '../components/Varun/bplantimeline';
import BplanForm from '../components/Varun/bplanform';
import BplanTeam from '../components/Varun/bplanteam';
import GTACursor from '../components/Varun/bplancursor';
import MusicPlayer from '../components/Varun/music';

const GTAPitchHero = () => {
    const colors = {
        sapGreen: "#47761E",
        jasmine: "#FED985",
        darkSalmon: "#F09E71",
        iceberg: "#61B5CB",
        darkSeaGreen: "#93B592",
        orchid: "#D5A0C4"
    };

    return (
        <section className="relative min-h-screen w-full  overflow-x-hidden font-sans pt-20 md:pt-10 pb-12 md:py-0">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

            {/* 2. BACKGROUND & TEXTURE */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('bplanbg.jpg')`,
                    filter: 'contrast(1.1) brightness(0.35)'
                }}
            >
                {/* Subtle vignette to focus the center */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>
            {/* Background with stylized tint */}


            <div className="relative z-10 container mx-auto h-full px-4 md:px-6 flex flex-col justify-center">

                {/* Top Right "Rockstar" Logo - Adjusted for mobile visibility */}
                <div className="absolute top-0 right-4 md:top-8 md:right-10 z-30">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-12 h-12 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg border border-white/20"
                    >
                        <img src="rockstar.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-2 md:mt-4">
                    {/* LEFT COLUMN: TEXT CONTENT */}
                    <div className="text-left">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="mb-4 inline-flex items-center gap-3 px-4 py-1.5 md:px-6 md:py-2 font-black uppercase tracking-tighter -skew-x-12 text-sm md:text-base"
                            style={{ backgroundColor: colors.jasmine, color: '#000' }}
                        >
                            <Target size={18} />
                            <span>Objective: Grand Pitching Opportunity</span>
                        </motion.div>

                        {/* Main Title - Scaled for screens */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-[120px] font-black text-white italic leading-[0.85] tracking-tighter uppercase drop-shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
                                THE <br />
                                <span style={{ color: colors.sapGreen }}>
                                    {/* BIG PITCH */}
                                    B-PLAN COMPETITION
                                    </span>
                            </h1>
                        </motion.div>

                        {/* Category Tags - Centered on mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6"
                        >
                            {[
                                { label: 'FinTech', color: colors.iceberg, icon: <Zap size={14} /> },
                                { label: 'GreenTech', color: colors.darkSeaGreen, icon: <Globe size={14} /> },
                                { label: 'SaaS', color: colors.orchid, icon: <Briefcase size={14} /> },
                                { label: 'Retail', color: colors.darkSalmon, icon: <Map size={14} /> }
                            ].map((tag) => (
                                <div
                                    key={tag.label}
                                    className="flex items-center gap-2 px-3 py-1 text-[10px] md:text-xs font-black uppercase italic tracking-widest bg-black/60 border-l-4"
                                    style={{ borderColor: tag.color, color: tag.color }}
                                >
                                    {tag.icon} {tag.label}
                                </div>
                            ))}
                        </motion.div>

                        {/* Body Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="mt-6 max-w-xl mx-auto lg:mx-0 text-base md:text-xl text-white font-semibold italic uppercase tracking-tight leading-tight"
                        >
                         The startup world is waiting for the next breakthrough. <br className="hidden md:block" />
                            <span className="text-gray-400">Assemble your deck, gear up your ideas, and prepare to seize the market.</span>
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
                        >
                            <button
                                className="px-10 py-4 font-black uppercase flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-[6px_6px_0px_rgba(0,0,0,1)] text-white"
                                style={{ backgroundColor: colors.sapGreen }}
                                onClick={() => { window.location.href = '#form' }}
                            >
                                <Play size={20} fill="white" />
                                Enter Lobby
                            </button>

                            <button
                                className="border-4 px-10 py-4 font-black uppercase transition-all hover:bg-white/10 shadow-[6px_6px_0px_rgba(0,0,0,0.5)]"
                                style={{ borderColor: colors.jasmine, color: colors.jasmine }}
                                onClick={() => window.location.href = '#about'}
                            >
                                View Intel
                            </button>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: THE CREW CARD */}
                    <div className="order-1 lg:order-2 relative flex flex-col items-center justify-center py-8 lg:py-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative scale-75 sm:scale-90 md:scale-100"
                        >
                            <div className="absolute inset-0 -m-3 border-4 -skew-x-2 z-0 opacity-40" style={{ borderColor: colors.jasmine }}></div>

                            <div className="relative z-10 bg-black p-1 shadow-[20px_20px_0px_rgba(0,0,0,0.5)] overflow-hidden">
                                <div className="absolute top-6 right-10 z-30 pointer-events-none">
                                    <div className="absolute top-8 right-8 border-4 border-red-600/40 px-4 py-2 text-red-600/80 font-black text-2xl uppercase italic -rotate-12 select-none pointer-events-none">
                                        WANTED
                                    </div>
                                </div>
                                <img
                                    src="heroright.png"
                                    alt="The Crew"
                                    className="w-[300px] sm:w-[400px] lg:w-[450px] aspect-[4/5] object-cover contrast-[1.1] hover:scale-105 transition-transform duration-300"
                                />

                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
                                    <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: colors.iceberg }}>Crew Status</p>
                                    <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">The Innovators</h3>
                                </div>
                            </div>

                            {/* HUD Element - Hidden on very small screens to prevent overlap */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -bottom-6 -right-6 md:-right-12 z-20 bg-[#0a0a0a] border-l-4 p-3 w-48 md:w-64 shadow-2xl hidden sm:block"
                                style={{ borderLeftColor: colors.darkSalmon }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="animate-pulse w-2 h-2 rounded-full bg-red-500"></div>
                                    <span className="text-[10px] font-black text-gray-400 uppercase">Live Intel Feed</span>
                                </div>
                                <p className="text-[10px] md:text-xs text-white font-bold uppercase">Target: Scalable business ideas.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none "></div>
        </section>
    );
};

const GTAAbout = () => {
    const colors = {
        sapGreen: "#47761E",
        jasmine: "#FED985",
        darkSalmon: "#F09E71",
        iceberg: "#61B5CB",
        darkSeaGreen: "#93B592",
        orchid: "#D5A0C4"
    };

    const objectives = [
        {
            title: "THE STRATEGY",
            desc: "Present a clear, data-backed business plan focused on problem, solution, market opportunity, and scalability.",
            icon: <Shield size={32} />,
            color: colors.iceberg
        },
        {
            title: "THE NETWORK",
            desc: "Engage with experienced founders, mentors, and investors shaping the next generation of ventures.",
            icon: <Users size={32} />,
            color: colors.orchid
        },
        {
            title: "THE PITCH",
            desc: "Pitch to a panel of industry leaders and investors. Demonstrate clarity, feasibility, and growth potential.",
            icon: <Trophy size={32} />,
            color: colors.jasmine
        },
        {
            title: "THE IMPACT",
            desc: "Build credibility through execution. Strong ideas earn recognition, trust, and long-term value.",
            icon: <BarChart3 size={32} />,
            color: colors.darkSalmon
        }
    ];

    return (
        <section id='about' className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden border-t-4 border-white/10">

            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{ y: ["-100%", "250%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="w-full h-[40vh] opacity-[0.1]"
                    style={{
                        background: `linear-gradient(to bottom, transparent, ${colors.sapGreen}, transparent)`
                    }}
                />
            </div>

            {/* 2. Floating HUD Particles - Added a 'scale' animation to make them pop */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: "110vh" }} // Start below the viewport
                        animate={{
                            opacity: [0, 0.3, 0],
                            y: "-110vh", // Move to above the viewport
                        }}
                        transition={{
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2,
                        }}
                        className="absolute font-mono font-bold whitespace-nowrap text-[10px]"
                        style={{
                            left: `${(i * 12) + 5}%`, // Distribute across the width
                            color: i % 2 === 0 ? colors.iceberg : colors.jasmine
                        }}
                    >
                        {`ANALYZING_MARKET_0${i}... OK`}
                    </motion.div>
                ))}
            </div>

            {/* 3. Grid Texture */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(${colors.iceberg} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>
            {/* Background Texture (Blueprint Grid) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(${colors.iceberg} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 container mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter"
                        >
                            Mission <span style={{ color: colors.sapGreen }}>Briefing</span>
                        </motion.h2 >
                        <div className="h-2 w-32 mt-2" style={{ backgroundColor: colors.sapGreen }}></div>
                        <p className="mt-6 text-xl text-gray-400 max-w-2xl font-bold uppercase italic tracking-tight">
                           An idea is the beginning. Execution and presentation defines success. Step onto the path to convert your ideas to scalable innovation and business with clarity and confidence.
                        </p>
                    </div>

                    {/* NEW ELEMENT: GTA Style Wanted Level / HUD */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex flex-col items-end"
                    >
                        <div className="flex gap-2 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={32}
                                    fill={star <= 3 ? colors.jasmine : "transparent"}
                                    stroke={star <= 3 ? colors.jasmine : "#333"}
                                    className={star <= 3 ? "animate-pulse" : ""}
                                />
                            ))}
                        </div>
                        <div className="bg-black/80 border-r-4 px-4 py-1 text-right" style={{ borderColor: colors.jasmine }}>
                            <span className="block text-[10px] font-mono text-gray-500 leading-none">THREAT LEVEL</span>
                            <span className="text-xl font-black italic text-white uppercase tracking-widest">High Stakes</span>
                        </div>
                        <div className="mt-2 text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                            Loc: Los_Santos_Sector_B
                        </div>
                    </motion.div>
                </div>

                {/* Objectives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {objectives.map((obj, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#151515] p-8 border-b-8 transition-all hover:-translate-y-2"
                            style={{ borderBottomColor: obj.color }}
                        >
                            {/* Icon HUD */}
                            <div className="mb-6 inline-block p-4 bg-black/50 rounded-full border border-white/10 group-hover:scale-110 transition-transform"
                                style={{ color: obj.color }}>
                                {obj.icon}
                            </div>

                            <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tighter">
                                {obj.title}
                            </h3>

                            <p className="text-gray-500 font-bold text-sm leading-relaxed uppercase">
                                {obj.desc}
                            </p>

                            {/* Decorative Corner HUD */}
                            <div className="absolute top-4 right-4 text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                                OBJ_00{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "The Boss" Quote Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-8 border-4 border-dashed border-white/10 bg-white/5 flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shrink-0 grayscale group-hover:grayscale-0 transition-all">
                        <img src="rockstar.jpg" alt="Organizer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-2xl font-black italic uppercase leading-none mb-2">
                            "Opportunity is like a heist. You prep for months, execute in minutes, and reap the rewards forever."
                        </p>
                        <span className="text-sm font-black tracking-widest uppercase" style={{ color: colors.darkSeaGreen }}>— The Management</span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom HUD Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 opacity-20 flex">
                <div className="flex-1" style={{ backgroundColor: colors.sapGreen }}></div>
                <div className="flex-1" style={{ backgroundColor: colors.jasmine }}></div>
                <div className="flex-1" style={{ backgroundColor: colors.darkSalmon }}></div>
                <div className="flex-1" style={{ backgroundColor: colors.iceberg }}></div>
            </div>
        </section>
    );
};

const Bplan = () => {
    return (
        <div className="bg-black text-white min-h-screen ">
            <GTAPitchHero />
            <GTACursor />
            <MusicPlayer musicUrl="sa.mp3"
                stationName="San Andreas Radio"
                accentColor="#47761E" />
            <GTAAbout />
            <GTAGallery />
            <GTATimeline />
            <BplanForm />
            <BplanTeam />
        </div>
    );
}
export default Bplan;