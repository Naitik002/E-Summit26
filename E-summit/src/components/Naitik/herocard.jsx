import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Zap, Crosshair, Wifi, AlertTriangle } from "lucide-react";

const HeroCard = ({ timeLeft }) => {
  // --- 3D TILT LOGIC ---
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;
    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="relative flex items-center justify-center w-full h-[500px] md:h-[600px] perspective-1000"
    >
      {/* --- BACKGROUND GLOW (Behind the card) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-gradient-to-tr from-purple-600 via-cyan-500 to-pink-500 rounded-full blur-[100px] opacity-40 animate-pulse pointer-events-none" />

      {/* --- THE 3D TILT CARD --- */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
        className="relative h-[420px] w-[300px] md:h-[500px] md:w-[360px] rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl cursor-pointer group"
      >

        {/* --- CARD CONTENT LAYERS --- */}
        <div
            style={{ transform: "translateZ(75px)" }}
            className="absolute inset-4 rounded-xl bg-black/80 border border-white/10 overflow-hidden flex flex-col items-center justify-between p-6 shadow-inner"
        >
            {/* 1. TOP HUD */}
            <div className="w-full flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">LIVE EVENT</span>
                </div>
                <Wifi size={16} className="text-gray-500" />
            </div>

            {/* 2. CENTER: THE COUNTDOWN */}
            <div className="flex flex-col items-center justify-center w-full my-auto space-y-4">

                {/* Glitch Title */}
                <h2 className="text-4xl font-black italic text-white uppercase tracking-tighter mix-blend-overlay opacity-80">
                    E-SUMMIT
                </h2>

                {/* Digital Timer */}
                <div className="grid grid-cols-2 gap-3 w-full">
                    {[
                        { val: timeLeft.days, label: "DAYS" },
                        { val: timeLeft.hours, label: "HRS" },
                        { val: timeLeft.minutes, label: "MIN" },
                        { val: timeLeft.seconds, label: "SEC" },
                    ].map((t, i) => (
                        <div key={i} className="bg-zinc-800/50 border border-white/5 p-2 flex flex-col items-center rounded relative overflow-hidden group/time">
                             {/* Scanline on hover */}
                             <div className="absolute top-0 w-full h-[1px] bg-cyan-400 opacity-0 group-hover/time:opacity-100 group-hover/time:animate-scanline"></div>

                             <span className="text-2xl font-mono font-bold text-white group-hover/time:text-cyan-400 transition-colors">
                                {t.val < 10 ? `0${t.val}` : t.val}
                             </span>
                             <span className="text-[8px] text-gray-500 font-bold">{t.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. BOTTOM: CALL TO ACTION */}
            <div className="w-full space-y-3">
                 <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>SERVER_CAPACITY</span>
                    <span>94%</span>
                 </div>
                 {/* Progress Bar */}
                 <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 w-[94%] shadow-[0_0_10px_#a855f7]"></div>
                 </div>

                 <button className="w-full py-3 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors clip-path-gaming">
                    Enter Lobby
                 </button>
            </div>

            {/* --- DECORATIVE HUD ELEMENTS (Corner Crosshairs) --- */}
            <Crosshair className="absolute top-2 left-2 text-white/20 w-4 h-4" />
            <Crosshair className="absolute top-2 right-2 text-white/20 w-4 h-4" />
            <Crosshair className="absolute bottom-2 left-2 text-white/20 w-4 h-4" />
            <Crosshair className="absolute bottom-2 right-2 text-white/20 w-4 h-4" />
        </div>

        {/* --- OUTER CARD REFLECTION/BORDER --- */}
        <div
            style={{ transform: "translateZ(50px)" }}
            className="absolute inset-0 rounded-2xl border-2 border-white/5 group-hover:border-white/20 transition-colors pointer-events-none"
        >
             {/* Moving Gradient Border */}
             <div className="absolute inset-[-2px] -z-10 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 animate-gradient-xy"></div>
        </div>

        {/* --- FLOATING 3D ICONS (Pop out of the card) --- */}
        <div
             style={{ transform: "translateZ(100px)" }}
             className="absolute -top-6 -right-6 bg-zinc-900 border border-white/20 p-3 rounded-lg shadow-xl"
        >
             <Zap size={24} className="text-yellow-400 fill-yellow-400" />
        </div>

        <div
             style={{ transform: "translateZ(120px)" }}
             className="absolute -bottom-4 -left-6 bg-zinc-900 border border-white/20 p-2 px-4 rounded-full shadow-xl flex items-center gap-2"
        >
             <AlertTriangle size={16} className="text-red-500" />
             <span className="text-[10px] font-bold text-white">OP: ALEX</span>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default HeroCard;