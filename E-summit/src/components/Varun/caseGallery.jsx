import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  Cpu, 
  Zap, 
  Wifi, 
  X, 
  HardDrive,
  Activity
} from 'lucide-react';

const CyberGallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const neonFiles = [
    { id: 1, title: 'ARCHIVE_01', sector: 'NIGHT_CITY', status: 'STABLE', src: '/casegallery/case1.jpg' },
    { id: 2, title: 'ARCHIVE_02', sector: 'WATSON', status: 'ENCRYPTED', src: '/casegallery/case2.jpg' },
    { id: 3, title: 'ARCHIVE_03', sector: 'PACIFICA', status: 'BREACHED', src: '/casegallery/case3.jpg' },
    { id: 4, title: 'ACARCHIVE_04', sector: 'DEEP_NET', status: 'CRITICAL', src: '/casegallery/case4.jpg' },
  ];

  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      {/* Background Cyber-Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cyber Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-[#B239EB] font-mono text-xs mb-3">
<Activity size={14} className="animate-pulse" /> SYSTEM_LOG: DATA_STREAM_ACTIVE
          </div>
          <h2 className="text-6xl font-black uppercase tracking-tighter text-white">
            VISUAL_<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B239EB] to-magenta-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">DATABASE</span>
          </h2>
        </div>

        {/* Cyber Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {neonFiles.map((file) => (
            <motion.div
              key={file.id}
              layoutId={`cyber-card-${file.id}`}
              onClick={() => setSelectedId(file)}
              className="group relative cursor-target overflow-hidden border border-cyan-900/30 bg-black/40 aspect-[3/4]"
            >
              {/* Image Layer */}
              <img 
                src={file.src} 
                alt={file.title}
                className="w-full h-full object-cover md:opacity-80 md:contrast-105 md:saturate-80 group-hover:saturate-150 group-hover:opacity-100 transition-all duration-500"
              />

              {/* Holographic Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                 <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-[#B239EB] animate-[scan_2s_linear_infinite]" />
              </div>

              {/* Asymmetric UI Corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#B239EB]" />
              <div className="absolute bottom-0 left-0 w-12 h-2 bg-magenta-600 shadow-[0_0_10px_#db2777]" />

              {/* Card Label */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white tracking-widest leading-none truncate">{file.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Module */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div 
              layoutId={`cyber-card-${selectedId.id}`}
              className="relative w-full max-w-5xl bg-[#0a0a0a] border-l-4 border-[#B239EB] shadow-[0_0_40px_rgba(6,182,212,0.2)] overflow-hidden"
            >
              {/* CLOSE BUTTON */}
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-[110] group cursor-target"
              >
                <div className="flex flex-col items-end">
                   <div className="w-12 h-12 flex items-center justify-center border border-[#B239EB]/50 bg-black group-hover:bg-[#B239EB] transition-all">
                      <X className="text-[#B239EB] group-hover:text-black" size={24} />
                   </div>
                   <span className="text-[9px] font-mono text-[#B239EB] mt-2 tracking-widest group-hover:animate-pulse uppercase">Disconnect_Session</span>
                </div>
              </button>

              <div className="flex flex-col">
                {/* Main Visual Frame */}
                <div className="relative bg-black aspect-video flex items-center justify-center overflow-hidden">
                   {/* Chromatic Aberration Effect placeholder */}
                   <img 
                    src={selectedId.src} 
                    alt={selectedId.title} 
                    className="w-full h-full object-contain saturate-150 contrast-110"
                  />
                  
                  {/* Cyber HUD Overlays */}
                  <div className="absolute inset-0 pointer-events-none">
                     <div className="absolute top-10 left-10 text-[#B239EB] font-mono text-[10px] space-y-1">
                        <p>FILE: {selectedId.title}</p>
                        <p className="flex items-center gap-2"><Wifi size={10} /> ENCRYPT_STRENGTH: 99.8%</p>
                     </div>
                     
                     {/* Floating brackets */}
                       </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-[#0f0f0f] p-4 flex justify-between items-center border-t border-cyan-900/30">
                   <div className="flex gap-8">
                      <div className="flex items-center gap-3">
                         <Cpu size={16} className="text-[#B239EB]" />
                         <div>
                            <p className="text-[8px] text-slate-500 uppercase">Process_Node</p>
                            <p className="text-xs font-mono text-white">X-77_RYZEN_CORE</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <HardDrive size={16} className="text-magenta-500" />
                         <div>
                            <p className="text-[8px] text-slate-500 uppercase">Storage_Path</p>
                            <p className="text-xs font-mono text-white">ROOT://ARCHIVE/INTEL</p>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#B239EB] animate-ping rounded-full" />
                      <span className="text-[10px] font-mono text-[#B239EB]">UPLINK_STABLE</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scan {
          from { top: 0%; }
          to { top: 100%; }
        }
      `}</style>
    </section>
  );
};

export default CyberGallery;