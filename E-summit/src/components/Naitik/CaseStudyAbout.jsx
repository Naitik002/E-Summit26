import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Database, Lock, Eye, AlertTriangle, ShieldCheck, Users, Layers } from 'lucide-react';

const CaseStudyAbout = () => {
  return (
    <section className="py-24 px-6 bg-[#000000] relative overflow-hidden " id="caseabout">

      {/* --- LAYER 1: ATMOSPHERE --- */}
      {/* Digital Noise */}
      <div className="absolute inset-0 opacity-10  pointer-events-none"></div>


      <div className="absolute top-20 right-0 text-[10rem] md:text-[20rem] font-black text-white/15 opacity-20 pointer-events-none select-none writing-vertical-rl font-serif z-0">
        E-cell
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>


      {/* --- LAYER 2: CONTENT --- */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10 items-center">

        {/* --- LEFT COLUMN: THE "ENCRYPTED FILE" VISUAL --- */}
        <div className="lg:col-span-5 relative group perspective-1000">

          {/* Rotating Borders */}
          <div className="absolute -inset-4 border border-dashed border-purple-50/20 rounded-lg animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute -inset-8 border border-dotted border-cyan-50/10 rounded-lg animate-[spin_30s_linear_infinite_reverse]"></div>

          <motion.div
            whileHover={{ rotateY: 5, rotateX: 5 }}
            className="relative border border-purple-500/30 bg-black/80 p-2 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Tech Corners */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-purple-500"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-purple-500"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>

            {/* The Image Container */}
            {/* The Image Container - NEW CONCEPT: DIGITAL STRATEGY MAP */}
            <div className="aspect-[3/4] bg-[#0a0a0a] relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-shadow duration-500">

              {/* Background subtle grid/circuit pattern */}
              <div className="absolute inset-0 ')] opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80"></div>

              {/* --- THE HOLOGRAPHIC NETWORK VISUALIZATION --- */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center">

                {/* Top Label */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  <div className="text-xs font-mono text-red-400/70 group-hover:text-cyan-400 transition-colors">
                    DATA_STREAM: <span className="animate-pulse">LIVE</span>
                  </div>
                  <Database size={16} className="text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                </div>

                {/* The Network Container */}
                <div className="relative h-64 w-full">

                  {/* Connecting Lines (The "Strategy Paths") - Animate on hover */}
                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    {/* Line 1: Top Left to Center */}
                    <line x1="20%" y1="20%" x2="50%" y2="50%" className="stroke-red-900/30 stroke-2 group-hover:stroke-cyan-400 transition-all duration-700 delay-100" strokeDasharray="5,5" />
                    {/* Line 2: Bottom Left to Center */}
                    <line x1="25%" y1="80%" x2="50%" y2="50%" className="stroke-red-900/30 stroke-2 group-hover:stroke-purple-400 transition-all duration-700 delay-200" strokeDasharray="5,5" />
                    {/* Line 3: Right to Center */}
                    <line x1="80%" y1="40%" x2="50%" y2="50%" className="stroke-red-900/30 stroke-2 group-hover:stroke-cyan-400 transition-all duration-700 delay-300" strokeDasharray="5,5" />
                  </svg>

                  {/* Node 1: Raw Data (Top Left) */}
                  <div className="absolute top-[10%] left-[10%] p-3 bg-zinc-900/80 border border-red-900/50 rounded-lg backdrop-blur-md group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-500 z-10">
                    <AlertTriangle size={20} className="text-red-500 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-[10px] font-mono text-red-300/50 mt-1 group-hover:text-cyan-200/70">PROBLEM_SET</p>
                  </div>

                  {/* Node 2: Market Intel (Bottom Left) */}
                  <div className="absolute bottom-[10%] left-[15%] p-3 bg-zinc-900/80 border border-red-900/50 rounded-lg backdrop-blur-md group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-500 delay-150 z-10">
                    <Layers size={20} className="text-red-500 group-hover:text-purple-400 transition-colors" />
                    <p className="text-[10px] font-mono text-red-300/50 mt-1 group-hover:text-purple-200/70">MARKET_INTEL</p>
                  </div>

                  {/* Node 3: The Core Strategy (Center Target) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-black/90 border-2 border-red-600 rounded-full backdrop-blur-xl group-hover:border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-700 z-20 flex flex-col items-center justify-center">
                    <ShieldCheck size={32} className="text-red-600 group-hover:text-cyan-300 transition-colors duration-500" />
                  </div>
                  <div className="absolute top-[58%] left-1/2 -translate-x-1/2 text-center z-30 mt-4 w-full">
                    <h3 className="text-xl font-black uppercase tracking-widest text-red-600 group-hover:text-white transition-colors duration-500">
                      <span className="group-hover:hidden">Fragmented</span>
                      <span className="hidden group-hover:inline text-cyan-400 text-shadow-glow">Strategy Aligned</span>
                    </h3>
                  </div>

                  {/* Node 4: Outcome (Right) */}
                  <div className="absolute top-[30%] right-[10%] p-3 bg-zinc-900/80 border border-red-900/50 rounded-lg backdrop-blur-md group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-500 delay-300 z-10">
                    <Eye size={20} className="text-red-500 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-[10px] font-mono text-red-300/50 mt-1 group-hover:text-cyan-200/70">VISION</p>
                  </div>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm border-t border-white/5 flex justify-between items-center font-mono text-xs z-30">
                <div className="text-gray-500 group-hover:text-cyan-400/80 transition-colors">
                  STATUS: <span className="text-red-500 font-bold group-hover:hidden">DISCONNECTED</span><span className="text-cyan-400 font-bold hidden group-hover:inline animate-pulse">OPTIMIZED</span>
                </div>
                <div className="text-gray-600">V.20.24</div>
              </div>


            </div>
          </motion.div>
        </div>


        {/* --- RIGHT COLUMN: THE "BRIEFING" --- */}
        <div className="lg:col-span-7 space-y-10">

          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></span>
              <span className="text-cyan-500 font-mono text-sm uppercase tracking-[0.2em] text-shadow-glow">Competition Briefing</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none">
              Crack The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500 animate-pulse">Case.</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-zinc-800 pl-6">
            {/* The Case Study Competition is an intellectually stimulating event designed to challenge participants with <strong className="text-white">real-world business problems</strong>.
            It is the ultimate test of your <span className="text-cyan-400 font-mono">analytical_skills</span> and strategic thinking. */}

            The Case Study Competition drops you into a simulated business battlefield where every decision matters.<strong className="text-white"> Analyze real-world scenarios </strong>, uncover hidden patterns and deploy solutions that can survive scrutiny.


          </p>

          {/* Feature Cards - UPDATED WITH YOUR STATS */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Database />,
                title: "700+ Teams",
                desc: "A massive nationwide scale, garnering 23,200+ media impressions on Unstop."
              },
              {
                icon: <Eye />,
                title: "3 Dynamic Rounds",
                desc: "From online quizzes to detailed PowerPoint submissions and on-campus presentations."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(168,85,247,0.05)" }}
                className="bg-zinc-900/30 border border-zinc-800 p-8 relative overflow-hidden group transition-all"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-black border border-zinc-700 rounded-sm flex items-center justify-center mb-4 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-500 font-mono leading-relaxed group-hover:text-gray-400">{item.desc}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-zinc-800 group-hover:border-r-purple-500/50 transition-all"></div>
              </motion.div>
            ))}
          </div>

          {/* Warning Box - UPDATED WITH OUTCOME TEXT */}
          <div className="p-1 bg-gradient-to-r from-yellow-600/20 to-transparent border-l-4 border-yellow-500">
            <div className="bg-black/40 backdrop-blur-sm p-4 flex gap-4 items-start">
              <AlertTriangle className="text-yellow-500 shrink-0 mt-1" size={20} />
              <div>
                <p className="text-yellow-500 font-mono text-xs uppercase font-bold mb-1 tracking-widest">Opportunity Detected:</p>
                <p className="text-gray-400 text-sm">
                  Step into the shoes of business strategists. <span className="text-white font-bold">Transform ideas into actionable strategies.</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudyAbout;