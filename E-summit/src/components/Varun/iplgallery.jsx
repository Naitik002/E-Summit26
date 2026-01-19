import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Database, 
  Eye, 
  Monitor, 
  Download,
  Terminal
} from 'lucide-react';

const TacticalGallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Mock Intel Data - Replace with your actual gallery images
  const intelFiles = [
    { id: 1, title: 'Squad Deployment', area: 'ARCHIVE_01', date: '12-JAN-2025', src: '/iplGallery/ipl1.jpg' },
    { id: 2, title: 'Auction Hall', area: 'ARCHIVE_02', date: '14-JAN-2025', src: '/iplGallery/ipl2.jpg' },
    { id: 3, title: 'Tactical Planning', area: 'ARCHIVE_03', date: '15-JAN-2025', src: '/iplGallery/ipl3.jpg' },
    { id: 4, title: 'Unit Formation', area: 'ARCHIVE_04', date: '18-JAN-2025', src: '/iplGallery/ipl4.jpg' },
    { id: 5, title: 'Logistics Center', area: 'ARCHIVE_05', date: '20-JAN-2025', src: '/iplGallery/ipl5.jpg' },
    { id: 6, title: 'Operational Brief', area: 'ARCHIVE_06', date: '22-JAN-2025', src: '/iplGallery/ipl6.jpg' },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-green-500 font-black text-xs tracking-[0.3em] mb-2 uppercase">
              <Database size={14} /> Intelligence Archive
            </div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">
              Field <span className="text-green-500">Recon</span>
            </h2>
          </div>
          <div className="text-slate-500 text-[10px] font-mono uppercase text-right leading-relaxed">
            [SYS_LOG: ARCHIVE_SYNC_COMPLETE] <br />
            [TOTAL_RECORDS: {intelFiles.length}]
          </div>
        </div>

        {/* Tactical Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {intelFiles.map((file) => (
            <motion.div
              key={file.id}
              layoutId={`card-${file.id}`}
              onClick={() => setSelectedId(file)}
              className="group relative cursor-target overflow-hidden border border-slate-800 bg-slate-900 aspect-[4/3]"
            >
              {/* Image Layer */}
              <img 
                src={file.src} 
                alt={file.title}
                className="w-full h-full object-cover md:opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* HUD Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />

              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-green-500/40 group-hover:border-green-500 transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-green-500/40 group-hover:border-green-500 transition-colors" />

              {/* Data Overlay */}
              <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1">ID: {file.area}</p>
                  </div>
                  <div className="p-2 bg-green-500 text-black">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded View (Modal) */}
      <AnimatePresence>
  {selectedId && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedId(null)}
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-md cursor-target"
      />
      
      <motion.div 
        layoutId={`card-${selectedId.id}`}
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* --- CLOSE BUTTON --- */}
        <button 
          onClick={() => setSelectedId(null)}
          className="absolute top-4 right-4 z-[110] group/close cursor-target"
        >
          <div className="relative flex items-center justify-center w-10 h-10 border border-slate-700 bg-slate-900/80 backdrop-blur-md transition-all group-hover/close:border-red-500 group-hover/close:bg-red-500/10">
            {/* Tactical corner brackets for the button itself */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-red-500 opacity-0 group-hover/close:opacity-100" />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-red-500 opacity-0 group-hover/close:opacity-100" />
            
            <span className="text-slate-400 group-hover/close:text-red-500 group-hover/close:rotate-90 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </div>
          <p className="text-[8px] font-black text-slate-500 uppercase mt-1 tracking-tighter opacity-0 group-hover/close:opacity-100 transition-opacity">
            [Terminate]
          </p>
        </button>
        {/* --------------------- */}

        <div className="">
          {/* Main Visual */}
          <div className="relative bg-black aspect-video flex items-center justify-center">
             <img 
              src={selectedId.src} 
              alt={selectedId.title} 
              className="w-full h-full object-contain"
            />
            
            {/* Tactical Crosshair overlay on modal */}
            <div className="absolute inset-0 pointer-events-none border-[40px] border-transparent group">
               <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-green-500/20" />
               <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-green-500/20" />
            </div>

            {/* Bottom HUD Data on Image */}
            <div className="absolute bottom-4 left-4 flex gap-4">
               <div className="bg-black/60 backdrop-blur-md px-3 py-1 border-l-2 border-green-500">
                  <p className="text-[10px] font-mono text-green-500 uppercase">Archive_ID: {selectedId.id}</p>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </section>
  );
};

export default TacticalGallery;