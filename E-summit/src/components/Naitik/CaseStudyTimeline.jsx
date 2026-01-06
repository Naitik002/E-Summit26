import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyTimeline = () => {
  // Updated with the specific rounds from your Case Study text
  const steps = [
    {
      phase: "Round 01",
      title: "The Screening",
      date: "Online Mode",
      desc: "A high-stakes online quiz testing analytical skills. In the last edition, 700+ teams battled for the top spots."
    },
    {
      phase: "Round 02",
      title: "Strategy Submission",
      date: "Submission Deadline",
      desc: "Qualified teams transform raw data into actionable strategies via a detailed PowerPoint submission."
    },
    {
      phase: "Round 03",
      title: "The Grand Finale",
      date: "On-Campus",
      desc: "Shortlisted teams present solutions live to industry judges and an audience of 200+. The ultimate test of composure."
    },
  ];

  return (
    <section className="py-24 px-6 bg-black relative">
       {/* Circuit Lines Background */}
       <div className="absolute inset-0 opacity-20 pointer-events-none"></div>

       <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                Mission <span className="text-purple-500">Timeline</span>
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4"></div>
          </div>

          <div className="relative">
             {/* Central Line */}
             <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 md:-translate-x-1/2"></div>

             <div className="space-y-12">
                {steps.map((step, i) => (
                   <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                   >
                      {/* Node Point */}
                      <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-0 md:-translate-x-1/2 bg-black border-4 border-zinc-800 rounded-full z-10 flex items-center justify-center group hover:border-cyan-500 transition-colors">
                         <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      </div>

                      {/* Content Card */}
                      <div className="ml-12 md:ml-0 md:w-[45%] group">
                         <div className="bg-zinc-900/40 border border-zinc-800 p-6 relative hover:bg-zinc-900/80 transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30">
                            {/* Connector Line (Desktop) */}
                            <div className={`hidden md:block absolute top-5 w-8 h-[2px] bg-zinc-800 ${i % 2 === 0 ? '-left-8' : '-right-8'}`}></div>

                            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-1 block">{step.phase} // {step.date}</span>
                            <h3 className="text-xl font-bold text-white uppercase italic mb-3 group-hover:text-purple-400 transition-colors">{step.title}</h3>
                            <p className="text-sm text-gray-400 font-mono leading-relaxed">
                               {step.desc}
                            </p>
                         </div>
                      </div>

                      {/* Empty spacer for grid balance */}
                      <div className="hidden md:block md:w-[45%]"></div>
                   </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default CaseStudyTimeline;