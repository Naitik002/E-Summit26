import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  // Simulated Loading Progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random jump in progress to look like real data loading
        const jump = Math.floor(Math.random() * 10) + 1;
        return Math.min(old + jump, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-mono">

      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20 animate-scanline"></div>

      {/* --- CENTRAL REACTOR --- */}
      <div className="relative w-64 h-64 flex items-center justify-center mb-12">

        {/* Layer 1: Outer Rotating Ring (Cyan) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"
        />

        {/* Layer 2: Counter-Rotating Ring (Purple) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-dotted border-purple-500/30"
        />

        {/* Layer 3: Pulsing Core */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-xl"
        />

        {/* Layer 4: The Icon */}
        <div className="relative z-10 p-6 bg-black border border-white/10 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <Cpu size={48} className="text-cyan-400 animate-pulse" />
            <div className="absolute top-0 right-0">
               <Zap size={16} className="text-purple-500 fill-purple-500 animate-bounce" />
            </div>
        </div>

        {/* Orbiting Particle */}
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0"
        >
           <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_white]"></div>
        </motion.div>

      </div>

      {/* --- TEXT READOUTS --- */}
      <div className="w-64 space-y-2">

         {/* Status Text */}
         <div className="flex justify-between text-xs text-cyan-500 uppercase tracking-widest">
            <span>SYSTEM_BOOT</span>
            <span>{progress}%</span>
         </div>

         {/* The Progress Bar */}
         <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 relative"
              style={{ width: `${progress}%` }}
            >
                {/* Glowing Leading Edge */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-[2px] shadow-[0_0_10px_white]"></div>
            </motion.div>
         </div>

         {/* Changing Loading Messages */}
         <div className="text-center h-6">
            <p className="text-[10px] text-gray-500 mt-2">
                {progress < 30 && "INITIALIZING KERNEL..."}
                {progress >= 30 && progress < 70 && "ESTABLISHING SECURE UPLINK..."}
                {progress >= 70 && "DECRYPTING ASSETS..."}
            </p>
         </div>

      </div>

      {/* --- CORNER DECORATIONS --- */}
      <div className="absolute bottom-8 text-center">
         <p className="text-[10px] text-gray-700 font-mono">ID: E-SUMMIT-2026 // VER: 2.0.1</p>
      </div>

    </div>
  );
};

export default LoadingScreen;