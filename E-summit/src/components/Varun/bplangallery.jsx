import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Maximize2 } from 'lucide-react';

const GTAGallery = () => {
    const colors = {
        sapGreen: "#47761E",
        jasmine: "#FED985",
        darkSalmon: "#F09E71",
        iceberg: "#61B5CB",
        darkSeaGreen: "#93B592",
        orchid: "#D5A0C4"
    };

    const pastEvents = [
        { id: 1,  color: colors.iceberg, img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop" },
        { id: 2,  color: colors.darkSalmon, img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=600&auto=format&fit=crop" },
        { id: 3, color: colors.sapGreen, img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop" },
        { id: 4,  color: colors.jasmine, img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop" },
        { id: 5, color: colors.orchid, img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop" },
        { id: 6, color: colors.darkSeaGreen, img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop" },
    ];

    return (
        <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header with Camera Flash Effect */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-white/50">
                            <Camera size={20} />
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Bussiness Plan 2025</span>
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
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? 2 : -2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ rotate: 0, scale: 1.02, zIndex: 20 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer bg-white p-3 shadow-[15px_15px_0px_rgba(0,0,0,0.5)] transition-all"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-black">
                                <img 
                                    src={event.img} 
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0 contrast-125 brightness-75 group-hover:brightness-100"
                                />
                                
                                {/* Color Tint Overlay */}
                                <div 
                                    className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-300"
                                    style={{ backgroundColor: event.color }}
                                ></div>

                                {/* HUD Viewfinder corners */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>

                                {/* Zoom Icon on Hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/80 p-3 rounded-full border border-white/20">
                                        <Maximize2 className="text-white" size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Label / Intel */}
                            <div className="mt-4 flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                    <MapPin size={10} />
                                    <span>{event.loc} // ARCHIVE_DATA</span>
                                </div>
                            </div>

                            {/* Sticky Note Effect (optional) */}
                            {index === 1 && (
                                <div className="absolute -top-4 -right-4 bg-yellow-300 text-black px-3 py-1 font-black text-[10px] uppercase -rotate-12 border-2 border-black z-30">
                                    MVP Awarded
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background HUD Decorative Elements */}
            <div className="absolute top-1/4 -left-20 text-[180px] font-black text-white/[0.02] select-none uppercase -rotate-90 italic">
                Snapmatic
            </div>
            <div className="absolute bottom-10 right-10 text-white opacity-10 font-mono text-xs uppercase tracking-[0.5em] hidden lg:block">
                SYS.LOG // ENCRYPTION: ACTIVE // LOS SANTOS DATASET
            </div>
        </section>
    );
};

export default GTAGallery;