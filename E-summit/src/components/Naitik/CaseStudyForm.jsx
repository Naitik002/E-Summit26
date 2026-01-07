import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, ArrowRight, Wifi } from 'lucide-react';

const CaseStudyRegistration = () => {

  // REPLACE THIS WITH YOUR ACTUAL UNSTOP EVENT LINK
  const unstopLink = "https://unstop.com/";

  return (
    <section className="py-24 px-6 bg-black relative border-t border-purple-900/30">
       <div className="max-w-2xl mx-auto">

          <div className="bg-black border border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-zinc-700 transition-colors">

             {/* Terminal Header */}
             <div className="bg-zinc-900 p-3 flex items-center justify-between border-b border-zinc-800">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                    <Wifi size={12} className="text-green-500 animate-pulse"/>
                    connection_established
                </div>
             </div>

             <div className="p-8 md:p-12 relative z-10 flex flex-col items-center text-center">

                <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                    <Terminal size={40} className="text-purple-500" />
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-2">
                   Join The Protocol
                </h2>
                <p className="text-cyan-500 font-mono text-sm mb-8">
                   Registration Portal Hosted on External Node
                </p>

                {/* Simulated Console Logs */}
                <div className="w-full max-w-md bg-zinc-900/50 p-4 rounded-md border border-zinc-800 font-mono text-xs text-left text-gray-400 mb-8 space-y-2">
                    <p> Initializing uplink...</p>
                    <p> Target: <span className="text-blue-400">UNSTOP_SERVER</span></p>
                    <p> Encryption: <span className="text-green-500">SECURE</span></p>
                    <p> Waiting for user input...<span className="animate-pulse">_</span></p>
                </div>

                {/* THE UNSTOP BUTTON */}
                <a
                    href={unstopLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full md:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 overflow-hidden"
                >
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                    <span className="relative z-10 flex items-center gap-2">
                        Register on Unstop <ExternalLink size={18} />
                    </span>
                </a>

                <p className="mt-4 text-[10px] text-gray-600 font-mono uppercase">
                    Redirecting to third-party secure server
                </p>

                {/* Background Glitch Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-white/5 pointer-events-none select-none z-[-1] whitespace-nowrap">
                   UNSTOP
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};

export default CaseStudyRegistration;