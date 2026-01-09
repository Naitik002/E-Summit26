import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Users, Mail, Phone, ChevronRight, ShieldAlert, Plus, Trash2, Terminal, AlertTriangle, ExternalLink } from 'lucide-react';

const Bplanform = () => {
  // SET THIS TO false TO SHOW THE FORM, OR KEEP true TO SHOW THE LOCKED SCREEN
  const [isLocked, setIsLocked] = useState(true) 
  const [regType, setRegType] = useState('individual');

  const UNSTOP_LINK = "https://unstop.com/your-competition-link-here"; // REPLACE WITH YOUR LINK

  const colors = {
    sapGreen: "#47761E",
    jasmine: "#FED985",
    darkSalmon: "#F09E71",
  };

  const handleRedirect = () => {
    // Adding a small delay or sound effect here can enhance the "heist" feel
    window.open(UNSTOP_LINK, '_blank');
  };

  return (
    <section id='form' className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden min-h-screen flex items-center">
      {/* Background HUD Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          {isLocked ? (
            /* ==========================================
               PHASE 1: MISSION LOCKED (COMING SOON) 
               ========================================== */
            <motion.div 
              key="locked-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              className="relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-600 text-white px-10 py-2 font-[1000] uppercase italic -skew-x-12 border-4 border-white z-20 shadow-lg animate-pulse">
                Access Restricted
              </div>

              <div className="bg-[#111] border-4 border-white/10 p-8 md:p-16 text-center shadow-[30px_30px_0px_rgba(0,0,0,0.5)]">
                <div className="mb-8 flex justify-center">
                  <div className="relative p-6 rounded-full bg-black border-2 border-red-600/50 text-red-600">
                    <Lock size={64} />
                  </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-[1000] text-white uppercase italic tracking-tighter mb-4">
                  THE <span style={{ color: colors.jasmine }}>SYNDICATE</span>
                </h2>

                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-10 max-w-sm mx-auto">
                  Uplink encrypted. Recruitment terminal offline. <br/>
                  Awaiting High Command authorization.
                </p>

                <div className="mt-12">
                   <button 
                    onClick={() => alert('Encryption sequence not yet complete. Stand by.')}
                    className="text-[10px] font-black text-white/20 uppercase hover:text-white transition-all tracking-[0.4em]"
                   >
                     [ Click to Force Override Encryption ]
                   </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ==========================================
               PHASE 2: REDIRECT / ACTIVE TERMINAL
               ========================================== */
            <motion.div
              key="active-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#151515] border-t-8 p-6 md:p-12 shadow-[30px_30px_0px_rgba(0,0,0,0.5)] text-center"
              style={{ borderTopColor: colors.sapGreen }}
            >
              <div className="flex justify-center mb-8">
                <Terminal className="text-white/20" size={64} />
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
                MISSION <span style={{ color: colors.sapGreen }}>PORTAL</span>
              </h2>

              <div className="bg-black/50 border border-white/10 p-6 mb-10 text-left font-mono">
                <p className="text-gray-400 text-xs uppercase mb-2">/root/ls_network/terminal_v5.exe</p>
                <p className="text-white text-sm"> {'>'} CONNECTION ESTABLISHED</p>
                <p className="text-white text-sm"> {'>'} TARGET: UNSTOP_EXTERNAL_SERVER</p>
                <p className="text-white text-sm"> {'>'} STATUS: AWAITING DEPLOYMENT</p>
              </div>

              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-10 max-w-md mx-auto">
                Official registration and mission briefings are handled via the Unstop secure uplink.
              </p>

              <div className="pt-4">
                <button 
                  onClick={handleRedirect}
                  className="w-full group relative p-1 transition-transform active:scale-[0.98]" 
                  style={{ backgroundColor: colors.sapGreen }}
                >
                  <div className="bg-black group-hover:bg-transparent text-white group-hover:text-black font-black px-10 py-6 flex items-center justify-center gap-4 uppercase text-2xl md:text-3xl transition-all italic">
                    Open Secure Uplink <ExternalLink size={32} />
                  </div>
                </button>
                <p className="mt-4 text-[10px] text-white/20 font-black uppercase tracking-widest animate-pulse">
                  Warning: You are leaving LS_NETWORK. Stay Frosty.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Bplanform;