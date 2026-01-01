import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Users, Mail, Phone, ChevronRight, ShieldAlert, Plus, Trash2, Terminal, AlertTriangle } from 'lucide-react';

const Bplanform = () => {
  const [isLocked, setIsLocked] = useState(true); // TOGGLE THIS FOR LOCKED/ACTIVE
  const [regType, setRegType] = useState('individual');
  const [teamMembers, setTeamMembers] = useState([{ name: '', email: '' }]);

  const colors = {
    sapGreen: "#47761E",
    jasmine: "#FED985",
    darkSalmon: "#F09E71",
  };

  const addMember = () => setTeamMembers([...teamMembers, { name: '', email: '' }]);
  const removeMember = (index) => setTeamMembers(teamMembers.filter((_, i) => i !== index));

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

                {/* Heist Timer */}
                {/* <div className="inline-grid grid-cols-4 gap-2 bg-black p-4 border-b-4 border-red-600 shadow-2xl font-mono">
                   {['02', '14', '55', '09'].map((unit, i) => (
                     <div key={i} className="flex flex-col">
                        <span className="text-3xl md:text-5xl font-black text-white px-2">{unit}</span>
                        <span className="text-[8px] text-red-600 font-bold uppercase">{['Days', 'Hrs', 'Min', 'Sec'][i]}</span>
                     </div>
                   ))}
                </div> */}

                <div className="mt-12">
                   <button 
                    onClick={() => alert('Just Kidding, wait for the launch!')}
                    className="text-[10px] font-black text-white/20 uppercase hover:text-white transition-all tracking-[0.4em]"
                   >
                     [ Click to Force Override Encryption ]
                   </button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ==========================================
               PHASE 2: ACTIVE FORM (TEAM/INDIVIDUAL) 
               ========================================== */
            <motion.div
              key="active-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#151515] border-t-8 p-6 md:p-12 shadow-[30px_30px_0px_rgba(0,0,0,0.5)]"
              style={{ borderTopColor: colors.sapGreen }}
            >
              <div className="flex justify-between items-start mb-10">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                  THE <span style={{ color: colors.sapGreen }}>RECRUITMENT</span>
                </h2>
                <Terminal className="text-white/20" size={32} />
              </div>

              {/* TOGGLE */}
              <div className="flex bg-black p-2 gap-2 mb-10 border border-white/10">
                <button 
                  onClick={() => setRegType('individual')}
                  className={`flex-1 py-3 font-black uppercase italic transition-all ${regType === 'individual' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                >
                  Solo
                </button>
                <button 
                  onClick={() => setRegType('team')}
                  className={`flex-1 py-3 font-black uppercase italic transition-all ${regType === 'team' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                >
                  Strike Team
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">{regType === 'team' ? 'Leader Name' : 'Alias'}</label>
                    <div className="relative group"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-white" size={18} />
                      <input type="text" placeholder="FRANKLIN_V" className="w-full bg-black border border-white/10 p-4 pl-12 text-white font-bold focus:border-white transition-all uppercase" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Secure Line (Phone)</label>
                    <div className="relative group"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-white" size={18} />
                      <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-black border border-white/10 p-4 pl-12 text-white font-bold focus:border-white transition-all" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Comm-Link ID (Email)</label>
                  <div className="relative group"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-white" size={18} />
                    <input type="email" placeholder="UPLINK@LS_NETWORK.COM" className="w-full bg-black border border-white/10 p-4 pl-12 text-white font-bold focus:border-white transition-all uppercase" />
                  </div>
                </div>

                {/* TEAM MEMBER DYNAMIC FIELDS */}
                {regType === 'team' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-6 border-t border-white/10 space-y-4">
                    <h4 className="text-sm font-black text-white uppercase italic mb-4">Additional Crew (Min. 1 Required)</h4>
                    {teamMembers.map((member, index) => (
                      <div key={index} className="grid md:grid-cols-2 gap-4 p-4 bg-black/40 border-l-4 relative" style={{ borderColor: colors.darkSalmon }}>
                        <input type="text" placeholder={`Crew Member #${index + 2} Name`} className="bg-black border border-white/5 p-3 text-white text-xs font-bold uppercase" />
                        <input type="email" placeholder="Member Email" className="bg-black border border-white/5 p-3 text-white text-xs font-bold uppercase" />
                        {teamMembers.length > 1 && (
                          <button type="button" onClick={() => removeMember(index)} className="absolute -right-2 -top-2 bg-red-600 p-1 text-white"><Trash2 size={12} /></button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={addMember} className="w-full py-2 border border-dashed border-white/10 text-white/30 text-[10px] font-black uppercase hover:text-white transition-all">+ Add Crew Member</button>
                  </motion.div>
                )}

                <div className="pt-8">
                  <button type="button" className="w-full group relative p-1 transition-transform active:scale-[0.98]" style={{ backgroundColor: colors.sapGreen }}>
                    <div className="bg-black group-hover:bg-transparent text-white group-hover:text-black font-black px-10 py-5 flex items-center justify-center gap-3 uppercase text-2xl transition-all italic">
                      Execute Mission <ChevronRight size={28} />
                    </div>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Bplanform;