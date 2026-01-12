import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Maximize2, X, Download, Share2 } from 'lucide-react';

const GTAGallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const colors = {
        sapGreen: "#47761E",
        jasmine: "#FED985",
        darkSalmon: "#F09E71",
        iceberg: "#61B5CB",
        darkSeaGreen: "#93B592",
        orchid: "#D5A0C4"
    };

    const pastEvents = [
        { id: 1, loc: "Sector A", color: colors.iceberg, img: "./bplanImgs/img1.jpg" },
        { id: 2, loc: "The Hub", color: colors.darkSalmon, img: "./bplanImgs/img2.jpg" },
        { id: 3, loc: "Main Stage", color: colors.sapGreen, img: "./bplanImgs/img3.jpg" },
        { id: 4, loc: "Pitch Room", color: colors.jasmine, img: "./bplanImgs/img4.jpg" },
        { id: 5, loc: "VIP Lounge", color: colors.orchid, img: "./bplanImgs/img5.jpg" },
        { id: 6, loc: "Tech Expo", color: colors.darkSeaGreen, img: "./bplanImgs/img6.jpg" },
    ];

    return (
        <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-white/50">
                            <Camera size={20} />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Business Plan 2025</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
                            PAST <span style={{ color: colors.jasmine }}>MISSIONS</span>
                        </h2>
                    </div>
                    <div className="h-1 flex-1 mx-8 bg-white/10 mb-4 hidden lg:block"></div>
                    <div className="text-right">
                        <span className="text-white font-black italic uppercase text-2xl tracking-tighter">
                            E-SUMMIT <span style={{ color: colors.sapGreen }}>2025</span>
                        </span>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? 1 : -1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ rotate: 0, scale: 1.02, zIndex: 20 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedImg(event)}
                            className="relative group cursor-pointer bg-white p-3 shadow-[15px_15px_0px_rgba(0,0,0,0.5)] transition-all"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-black">
                                <img 
                                    src={event.img} 
                                    alt="Mission Intel"
                                    className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 contrast-125 brightness-75 group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity" style={{ backgroundColor: event.color }}></div>
                                
                                {/* HUD corners */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50 group-hover:border-white"></div>
                                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50 group-hover:border-white"></div>
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/80 p-3 border border-white/20">
                                        <Maximize2 className="text-white" size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                
                                <span> // ARCHIVE_0{event.id}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* FULLSCREEN MISSION INTEL MODAL */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedImg(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full bg-[#111] border-4 border-white/10 p-2 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal HUD Header */}
                            <div className="flex justify-between items-center bg-black p-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-red-600 animate-pulse rounded-full"></div>
                                    <span className="text-white font-black italic uppercase tracking-widest text-xs">ARCHIVE_{selectedImg.id}</span>
                                </div>
                                <button onClick={() => setSelectedImg(null)} className="text-white/50 hover:text-white transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-4 p-2 md:p-4">
                                {/* Large Image */}
                                <div className="relative">
                                    <img src={selectedImg.img} className="w-full h-full object-cover border border-white/10" alt="Full Intel" />
                                    <div className="absolute top-4 left-4 bg-black/80 px-4 py-2 text-[10px] font-mono text-[#FED985] uppercase tracking-[0.2em] border-l-4 border-[#FED985]">
                                        
                                    </div>
                                </div>

                                {/* Intel Panel */}
                                {/* <div className="lg:w-1/3 flex flex-col justify-between bg-black p-6 border border-white/10">
                                    <div>
                                        <h3 className="text-3xl font-black italic uppercase text-white mb-4 tracking-tighter">Event <span style={{ color: selectedImg.color }}>Archive</span></h3>
                                        <p className="text-gray-500 text-xs font-bold uppercase leading-relaxed mb-6">
                                            Field data suggests a high success rate for this operation. Multiple syndicate partners were established during this briefing.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-[10px] font-black text-gray-400 uppercase">Threat Level</span>
                                                <span className="text-[10px] font-black text-red-500 uppercase italic">Maximum Payoff</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/5 pb-2">
                                                <span className="text-[10px] font-black text-gray-400 uppercase">Sector</span>
                                                <span className="text-[10px] font-black text-white uppercase italic">{selectedImg.loc}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal Actions */}
                                    {/* <div className="mt-8 flex gap-2">
                                        <button className="flex-1 bg-white text-black py-3 font-black uppercase italic text-xs flex items-center justify-center gap-2 hover:bg-[#FED985] transition-colors">
                                            <Download size={14} /> Download
                                        </button>
                                        <button className="p-3 bg-white/5 text-white hover:bg-white/10 transition-colors">
                                            <Share2 size={16} />
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background HUD Decorative Elements */}
            <div className="absolute top-1/4 -left-20 text-[180px] font-black text-white/[0.02] select-none uppercase -rotate-90 italic">
                Snapmatic
            </div>
        </section>
    );
};

export default GTAGallery;