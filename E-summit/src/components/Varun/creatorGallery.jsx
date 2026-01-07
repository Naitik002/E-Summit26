import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Train, Navigation, Info, ArrowRight } from 'lucide-react';

const Creators = [
  { id: 1, name: "Zane Jet", style: "Graffiti", img: "https://images.unsplash.com/photo-1523381235312-302418b52304", color: "#FF006E" },
  { id: 2, name: "Lulu Dash", style: "Vlogger", img: "https://images.unsplash.com/photo-1529139513075-1231282c6506", color: "#3A86FF" },
  { id: 3, name: "Tricky T", style: "Beatbox", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6", color: "#FFBE0B" },
  { id: 4, name: "Fresh P", style: "Skater", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9", color: "#FB5607" },
  { id: 5, name: "Ghost", style: "Artist", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f", color: "#8338EC" },
  { id: 6, name: "Mina Neo", style: "DJ", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", color: "#00F5D4" },
  { id: 7, name: "Jax Speed", style: "Parkour", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", color: "#FF9F1C" },
  { id: 8, name: "Yuki Zoom", style: "Director", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04", color: "#E0E1DD" },
];

const CreativeGallery = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden font-sans">
      
      <div className="relative w-full max-w-5xl px-10">
        
        {/* The Transit Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />
        
        {/* The Map Stops */}
        <div className="relative flex justify-between items-center w-full">
          {Creators.map((c, idx) => (
            <div key={c.id} className="relative flex flex-col items-center">
              
              {/* Stop Label (Static) */}
              <p className="absolute -bottom-8 text-[10px] font-mono text-white/40 uppercase tracking-tighter whitespace-nowrap">
                Stop_0{c.id}
              </p>

              {/* Interactive Node */}
              <motion.button
                onMouseEnter={() => setActiveId(c.id)}
                onMouseLeave={() => setActiveId(null)}
                className="relative z-20 w-4 h-4 rounded-full border-2 border-white bg-black transition-colors"
                animate={{ 
                  scale: activeId === c.id ? 2 : 1,
                  backgroundColor: activeId === c.id ? c.color : "#000"
                }}
              />

              {/* The "Bloom" Card */}
              <AnimatePresence>
                {activeId === c.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-full mb-8 z-50 pointer-events-none"
                  >
                    <div className="w-64 bg-white p-1 rounded-sm shadow-[20px_20px_0px_rgba(255,255,255,0.05)]">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={`${c.img}?auto=format&fit=crop&w=500&q=80`} 
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className="absolute inset-0 opacity-40" 
                          style={{ backgroundColor: c.color, mixBlendMode: 'multiply' }}
                        />
                      </div>
                      
                      <div className="p-4 text-black">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-black italic text-2xl uppercase leading-none tracking-tighter">
                            {c.name}
                          </h3>
                          <Navigation size={14} />
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Specialization: {c.style}
                        </p>
                      </div>
                    </div>
                    
                    {/* Connecting Thread */}
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 32 }}
                      className="w-[2px] bg-white mx-auto"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Dynamic HUD Details */}
        <div className="absolute -top-32 left-0 w-full flex justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <Train className="text-white" size={20} />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest">Line_Alpha</p>
              <p className="text-white/40 text-[9px] font-mono">Status: High_Speed_Discovery</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white text-xs font-bold uppercase">2026_Global_Tour</p>
            <p className="text-white/40 text-[9px] font-mono">Coord: 34.0522° N, 118.2437° W</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreativeGallery;