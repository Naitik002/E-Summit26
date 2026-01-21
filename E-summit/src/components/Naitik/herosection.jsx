
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Headphones, Zap} from 'lucide-react';
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  // --- COUNTDOWN LOGIC ---
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownDate = new Date("Feb 13, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? `0${days}` : days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    // FIXED: Added 'bg-gaming-950' and 'border-b' to match other sections exactly
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-20 py-5 md:py-10 bg-gaming-950 border-b border-white/5">

      {/* --- Ambient Background Glows (Refined) --- */}
      {/* Increased size and blur for smoother blending */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Optional: Internal Grid Overlay to ensure texture matches exactly */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-20" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* --- Left Column: Content --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2"
        >
          {/* Badge / Top Label */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-brand-accent border border-brand-accent/30 bg-brand-accent/10 rounded-sm font-heading uppercase">
             #Make Things Happen
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold leading-[0.9] tracking-tighter"
          >
            <span className="block text-4xl md:text-6xl text-white mb-2">
              ENTREPRENEURSHIP
            </span>

            {/* Gradient Emphasis */}
            <span className="block text-7xl md:text-9xl text-gradient filter drop-shadow-lg mb-1">
              SUMMIT
            </span>

            {/* --- CLEAN 2026 STYLE --- */}
            <span className="block text-6xl md:text-8xl font-black text-transparent mt-0 tracking-widest opacity-50 hover:opacity-100 hover:text-white transition-all duration-500 cursor-default"
                  style={{ WebkitTextStroke: '1px white' }}>
              2026
            </span>

          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-white mt-6"
          >
            Central India’s Largest <span className="text-brand-primary">Entrepreneurial Fest</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="mt-4 max-w-lg text-lg text-gray-400 border-l-2 border-brand-secondary/50 pl-4">
         Enter a new era of innovation with E-Summit'26, uniting ambitious minds and bold strategists. Each level is a new challenge to overcome in every battlefield of games.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            {/* Primary Button */}
            <motion.a
href="#ScheduleSection"
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-brand-primary text-white font-bold font-heading tracking-wider uppercase clip-path-gaming group overflow-hidden"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
              }}
            >
              <span className="relative z-10">Know More</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>

            {/* Secondary Button */}
           <motion.a
              href="https://www.youtube.com/watch?v=IUHNSvzvLxc"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white font-heading font-semibold tracking-wider uppercase hover:border-brand-accent/50 hover:text-brand-accent transition-colors glass-card inline-block text-center"
            >
              ▶ Watch Aftermovie
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Visuals --- */}

 <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="relative h-[400px] md:h-[600px] flex items-center justify-center"
>
    {/* Abstract Floating Tech Elements */}
    <motion.div
      variants={floatingAnimation}
      animate="animate"
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Back Layer: Grid Ring */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-brand-secondary/20 rounded-full animate-pulse" />

      {/* Middle Layer: Glowing Core */}
      <div className="absolute w-[200px] h-[200px] bg-gradient-to-tr from-brand-secondary to-brand-primary rounded-full blur-[60px] opacity-60" />

      {/* Front Layer: The "Card" */}
      <div className="relative z-10 glass-card p-6 md:p-8 rounded-2xl border-t border-brand-accent/50 w-[280px] md:w-[350px] shadow-2xl backdrop-blur-xl">
        {/* Decoration Lines */}
        <div className="flex justify-between mb-4 opacity-50">
           <div className="h-1 w-10 bg-brand-accent rounded-full" />
           <div className="h-1 w-2 bg-white rounded-full" />
        </div>

        {/* --- COUNTDOWN TIMER CONTAINER --- */}
        <div className="w-full h-40 bg-gaming-900/80 rounded-lg border border-white/10 mb-4 flex flex-col items-center justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent" />

           <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] mb-2 z-10 uppercase">
             T-Minus to Launch
           </span>

           <div className="flex gap-3 z-10">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-mono font-bold text-white">{timeLeft.days}</span>
                <span className="text-[8px] text-brand-accent font-bold">DAYS</span>
              </div>
              <span className="text-2xl md:text-3xl font-mono text-gray-600">:</span>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-mono font-bold text-white">{timeLeft.hours}</span>
                <span className="text-[8px] text-brand-accent font-bold">HRS</span>
              </div>
              <span className="text-2xl md:text-3xl font-mono text-gray-600">:</span>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-mono font-bold text-white">{timeLeft.minutes}</span>
                <span className="text-[8px] text-brand-accent font-bold">MIN</span>
              </div>
              <span className="text-2xl md:text-3xl font-mono text-gray-600">:</span>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-mono font-bold text-brand-primary animate-pulse">{timeLeft.seconds}</span>
                <span className="text-[8px] text-brand-primary font-bold">SEC</span>
              </div>
           </div>
        </div>

        <h3 className="text-2xl font-heading font-bold text-white mb-1">LEVEL UP</h3>
        <p className="text-sm text-gray-400 font-sans mb-4">
          Unlock networking opportunities, funding, and mentorship.
        </p>

        <div className="flex justify-between items-center text-xs text-brand-accent font-mono">
          <span>STATUS: ONLINE</span>
          <div className="flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span>LIVE</span>
          </div>
        </div>
      </div>

      {/* --- ORBIT 1: OUTER RING (Clockwise) --- */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] border border-dashed border-white/10 rounded-full"
      >
         {/* Icon 1: Gamepad (Top) */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-gaming-950 border border-brand-primary/50 rounded-full shadow-[0_0_15px_#d946ef] flex items-center justify-center">
             <Gamepad2 size={20} className="text-brand-primary drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
         </div>

         {/* Icon 2: Headphones (Bottom) */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 bg-gaming-950 border border-cyan-500/50 rounded-full shadow-[0_0_15px_#06b6d4] flex items-center justify-center">
             <Headphones size={20} className="text-cyan-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
         </div>
      </motion.div>

      {/* --- ORBIT 2: INNER RING (Counter-Clockwise) --- */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] border border-dotted border-brand-accent/30 rounded-full"
      >
         {/* Icon 3: Zap/Energy (Right side) */}
         <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2  p-2 bg-gaming-950 border border-yellow-500/50 rounded-full shadow-[0_0_15px_#eab308] flex items-center justify-center">
             <Zap size={18} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
         </div>
      </motion.div>

    </motion.div>
</motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">Scroll to Start</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>

    </section>
  );
};

export default HeroSection;