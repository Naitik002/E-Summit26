import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-20 py-20">

      {/* --- Ambient Background Glows (Using Brand Colors) --- */}
      {/* Top Left Glow (Primary Pink) */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
      {/* Bottom Right Glow (Secondary Purple) */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none" />

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
              Start . Grind . Conquer
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
            <span className="block text-7xl md:text-9xl text-gradient filter drop-shadow-lg">
              SUMMIT
            </span>
            <span className="block text-5xl md:text-7xl text-transparent stroke-text opacity-50 mt-2">
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
            Enter the arena of innovation. Join founders, investors, and disruptors in the ultimate battle for the future. The game is on—are you ready to play?
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            {/* Primary Button - Clipped 'Sci-Fi' Shape */}
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-brand-primary text-white font-bold font-heading tracking-wider uppercase clip-path-gaming group overflow-hidden"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)"
              }}
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>

            {/* Secondary Button - Glass Effect */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white font-heading font-semibold tracking-wider uppercase hover:border-brand-accent/50 hover:text-brand-accent transition-colors glass-card"
            >
              ▶ Watch Aftermovie
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Visuals (The "Boss Level" Graphic) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center"
        >
           {/* Abstract Floating Tech Elements - Using CSS & Divs only (No external assets) */}
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

                {/* Mock Image Placeholder */}
                <div className="w-full h-40 bg-gaming-900/80 rounded-lg border border-white/10 mb-4 flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent" />
                   <span className="text-brand-accent font-heading tracking-widest text-sm">ESUMMIT_26_LOADED</span>
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-1">LEVEL UP</h3>
                <p className="text-sm text-gray-400 font-sans mb-4">
                  Unlock networking opportunities, funding, and mentorship.
                </p>

                <div className="flex justify-between items-center text-xs text-brand-accent font-mono">
                  <span>STATUS: ONLINE</span>
                  <span>PING: 12ms</span>
                </div>
             </div>

             {/* Orbiting Elements */}
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-[340px] h-[340px] md:w-[450px] md:h-[450px] border border-dashed border-white/10 rounded-full"
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_#d946ef]" />
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