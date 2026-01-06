import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Cpu, Zap, ChevronRight, Terminal, Globe } from 'lucide-react';

const CaseStudyHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#000000]">

      {/* --- LAYER 1: ATMOSPHERE --- */}
      {/* CRT Scanline Overlay (Subtle Texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-50 mix-blend-overlay"></div>

      {/* Digital Noise / Grain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0"></div>

      {/* Cyber Grid (Floor & Ceiling) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full animate-pulse delay-1000"></div>


      {/* --- LAYER 2: CONTENT --- */}
      <div className="max-w-7xl mx-auto relative z-20 w-full grid lg:grid-cols-12 gap-12 items-center mt-10">

        {/* --- LEFT COLUMN: DATA TERMINAL (Text) --- */}
        <div className="lg:col-span-7 space-y-8">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex items-center gap-4"
          >
            <div className="px-4 py-1 border border-cyan-500/30 bg-cyan-950/10 backdrop-blur-md flex items-center gap-3 rounded-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em]">System_Breach_Detected // v.2.0.4</span>
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </motion.div>

          {/* THE GLITCH TITLE */}
          <div className="relative z-10">
            <h1 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mix-blend-screen">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-white">CASE</span>
              <span className="block relative">
                STUDY
                {/* Decor Line */}
                <div className="absolute -bottom-2 left-0 w-1/2 h-2 bg-purple-600"></div>
              </span>
            </h1>

            {/* Glitch Layer Red */}
            <h1 className="absolute top-0 left-1 text-7xl md:text-9xl font-black text-red-600 uppercase italic tracking-tighter leading-[0.85] opacity-50 mix-blend-screen animate-glitch-1 pointer-events-none -z-10">
              <span className="block">CASE</span>
              <span className="block">STUDY</span>
            </h1>
            {/* Glitch Layer Blue */}
            <h1 className="absolute top-0 -left-1 text-7xl md:text-9xl font-black text-cyan-600 uppercase italic tracking-tighter leading-[0.85] opacity-50 mix-blend-screen animate-glitch-2 pointer-events-none -z-10">
              <span className="block">CASE</span>
              <span className="block">STUDY</span>
            </h1>
          </div>

          {/* Description */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="relative pl-6 border-l-2 border-purple-500"
          >
             <p className="text-gray-400 text-xl md:text-2xl font-mono font-light max-w-lg leading-relaxed">
               Decode the <strong className="text-white font-black">Corporate Matrix</strong>.
               Analyze the data streams.
               <span className="text-cyan-400 font-bold bg-cyan-950/30 px-1">Hack the solution.</span>
             </p>
             <p className="text-xs text-gray-600 mt-4 font-mono uppercase tracking-widest">
               // The future belongs to the disruptors.
             </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            {/* Primary Button */}
            <button className="relative px-8 py-4 bg-purple-600 text-white font-bold uppercase tracking-widest overflow-hidden group hover:bg-purple-500 transition-all clip-path-polygon shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]">
              <span className="relative z-10 flex items-center gap-3">
                Initiate Protocol <ChevronRight size={20} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            </button>

            {/* Secondary Button */}
            <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-950/30 hover:border-cyan-400 transition-all flex items-center gap-2 group">
              <Terminal size={16} className="group-hover:text-cyan-300" />
              <span>Download_Brief.pdf</span>
            </button>
          </motion.div>

        </div>


        {/* --- RIGHT COLUMN: HOLOGRAPHIC CORTEX --- */}
        <div className="lg:col-span-5 relative flex items-center justify-center">

           {/* The Core Container */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "backOut" }}
             className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px]"
           >
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-10 border border-dashed border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-20 border-2 border-dotted border-pink-500/20 rounded-full animate-[spin_30s_linear_infinite]"></div>

              {/* Holographic Image Container */}
              <div className="absolute inset-4 md:inset-12 bg-black overflow-hidden rounded-full border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)] group">
                 {/* IMAGE SOURCE:
                    Cyberpunk City / Data Node.
                    Replacing the placeholder with a high-quality neon city vibe.
                 */}
                 <img
                   src="/casestudy.jpg"
                   alt="Cyberpunk Data Core"
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-110 group-hover:scale-100"
                 />

                 {/* Image Overlays */}
                 <div className="absolute inset-0 bg-purple-900/40 mix-blend-color"></div>
                 <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                 {/* Scanning Bar */}
                 <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400/50 shadow-[0_0_20px_#22d3ee] animate-[scan_3s_linear_infinite]"></div>
              </div>

              {/* Floating Data Widgets around the Core */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 bg-black/80 backdrop-blur border border-cyan-500/30 p-4 rounded-sm shadow-xl"
              >
                 <Globe size={24} className="text-cyan-400 mb-2 animate-spin-slow" />
                 <div className="text-[10px] font-mono text-gray-400 uppercase">Global_Uplink</div>
                 <div className="text-sm font-bold text-white">Online</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-1/4 bg-black/80 backdrop-blur border border-purple-500/30 p-4 rounded-sm shadow-xl flex items-center gap-3"
              >
                 <Cpu size={24} className="text-purple-400" />
                 <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">Processing</div>
                    <div className="text-sm font-bold text-white">88.4 TB/s</div>
                 </div>
              </motion.div>

           </motion.div>
        </div>

      </div>

      {/* --- CUSTOM STYLES (Paste this in your global CSS or use style jsx) --- */}
      <style jsx>{`
        .clip-path-polygon {
          clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        }
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        @keyframes glitch-1 {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch-1 {
          animation: glitch-1 2.5s infinite linear alternate-reverse;
        }
        .animate-glitch-2 {
          animation: glitch-2 3s infinite linear alternate-reverse;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default CaseStudyHero;