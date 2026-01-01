import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Crosshair, DollarSign, Flag, Map, Zap } from 'lucide-react';

const GTATimeline = () => {
    const colors = {
        sapGreen: "#47761E",
        jasmine: "#FED985",
        darkSalmon: "#F09E71",
        iceberg: "#61B5CB",
        darkSeaGreen: "#93B592",
        orchid: "#D5A0C4"
    };

    const steps = [
        {
            phase: "Setup 01",
            title: "Casing the Joint",
            date: "OCT 01 - OCT 15",
            desc: "Registration opens. Submit your initial blueprint and assemble your core crew.",
            icon: <Map size={20} />,
            color: colors.iceberg
        },
        {
            phase: "Setup 02",
            title: "Acquiring Assets",
            date: "OCT 20",
            desc: "Shortlisted teams get access to exclusive workshops and mentor networking.",
            icon: <Zap size={20} />,
            color: colors.orchid
        },
        {
            phase: "The Heist",
            title: "The Big Pitch",
            date: "NOV 05",
            desc: "The main event. High-stakes pitching in front of the city's industry kingpins.",
            icon: <Crosshair size={20} />,
            color: colors.sapGreen
        },
        {
            phase: "The Score",
            title: "The Payout",
            date: "NOV 06",
            desc: "Winner announcements, incubation offers, and post-mission networking.",
            icon: <Flag size={20} />,
            color: colors.jasmine
        }
    ];

    return (
        <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            {/* Background "Map Grid" effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `linear-gradient(${colors.sapGreen}22 1px, transparent 1px), linear-gradient(90deg, ${colors.sapGreen}22 1px, transparent 1px)`, backgroundSize: '100px 100px' }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="inline-block px-4 py-1 mb-4 text-black font-black uppercase italic -skew-x-12"
                        style={{ backgroundColor: colors.jasmine }}
                    >
                        Infiltration Roadmap
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
                        THE <span style={{ color: colors.sapGreen }}>TIMELINE</span>
                    </h2>
                </div>

                {/* Timeline Line & Steps */}
                <div className="relative max-w-4xl mx-auto">
                    
                    {/* Vertical Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center justify-between md:justify-normal w-full group ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* The Dot on the line */}
                                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 flex items-center justify-center z-20">
                                    <div 
                                        className="w-4 h-4 rounded-full border-4 border-[#0a0a0a] ring-4 group-hover:scale-150 transition-transform duration-300"
                                        style={{ backgroundColor: step.color, ringColor: `${step.color}44` }}
                                    ></div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-5/12 ml-12 md:ml-0">
                                    <div 
                                        className="bg-[#151515] p-6 border-l-4 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] transition-all hover:bg-[#1a1a1a]"
                                        style={{ borderLeftColor: step.color }}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: step.color }}>
                                                {step.phase}
                                            </span>
                                            <div className="flex items-center gap-1 text-gray-500 font-bold text-[10px] uppercase italic">
                                                <Calendar size={12} />
                                                {step.date}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2 group-hover:text-yellow-400 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-bold uppercase leading-tight">
                                            {step.desc}
                                        </p>
                                        
                                        {/* Status Icon */}
                                        <div className="mt-4 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: step.color }}>
                                            {step.icon}
                                            <span className="text-[10px] font-black tracking-widest uppercase italic">Secure Area</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default GTATimeline;