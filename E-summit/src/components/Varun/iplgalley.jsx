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
    { id: 1, title: 'Squad Deployment', area: 'Sector-01', date: '12-JAN-2025', src: '/gallery/recon1.jpg' },
    { id: 2, title: 'Auction Hall', area: 'Command HQ', date: '14-JAN-2025', src: '/gallery/recon2.jpg' },
    { id: 3, title: 'Tactical Planning', area: 'War Room', date: '15-JAN-2025', src: '/gallery/recon3.jpg' },
    { id: 4, title: 'Unit Formation', area: 'Sector-04', date: '18-JAN-2025', src: '/gallery/recon4.jpg' },
    { id: 5, title: 'Logistics Center', area: 'Supply Depo', date: '20-JAN-2025', src: '/gallery/recon5.jpg' },
    { id: 6, title: 'Operational Brief', area: 'Sector-09', date: '22-JAN-2025', src: '/gallery/recon6.jpg' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
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
                    <h3 className="text-lg font-black uppercase italic text-white leading-none">{file.title}</h3>
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
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
            />
            
            <motion.div 
              layoutId={`card-${selectedId.id}`}
              className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="grid lg:grid-cols-4">
                {/* Main Visual */}
                <div className="lg:col-span-3 relative bg-black aspect-video flex items-center justify-center">
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
                </div>

                {/* Sidebar Info */}
                <div className="p-8 border-l border-slate-800 space-y-8 bg-slate-900">
                  <div className="space-y-2">
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="text-xs font-black text-green-500 flex items-center gap-2 hover:translate-x-1 transition-transform mb-6 cursor-target"
                    >
                      <ChevronLeft size={14} /> RETURN_TO_GRID
                    </button>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Metadata</p>
                    <h3 className="text-3xl font-black uppercase italic text-white leading-tight">{selectedId.title}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Sector</span>
                      <span className="text-xs font-black uppercase text-green-500">{selectedId.area}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Timestamp</span>
                      <span className="text-xs font-black uppercase text-white">{selectedId.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Clearance</span>
                      <span className="text-xs font-black uppercase text-red-500">Level_5</span>
                    </div>
                  </div>

                  <div className="pt-8 space-y-3">
                    <button className="w-full bg-green-600 hover:bg-green-500 text-black font-black p-3 text-xs uppercase flex items-center justify-center gap-2 transition-colors cursor-target">
                      <Download size={14} /> Download_Intel
                    </button>
                    <button className="w-full border border-slate-700 hover:border-slate-500 text-slate-400 font-black p-3 text-xs uppercase flex items-center justify-center gap-2 transition-colors cursor-target">
                      <Monitor size={14} /> View_Full_Feed
                    </button>
                  </div>

                  <div className="mt-auto flex items-center gap-3 opacity-20 pt-8">
                    <Terminal size={14} />
                    <div className="h-[1px] flex-1 bg-slate-100" />
                    <div className="w-2 h-2 bg-green-500" />
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