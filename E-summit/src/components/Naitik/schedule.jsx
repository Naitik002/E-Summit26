import React from "react";
import { motion } from "framer-motion";

// --- Data: The 3-Day Campaign ---
const scheduleData = [
  {
    id: "day1",
    date: "13",
    month: "FEB",
    dayName: "WEDNESDAY",
    title: "Level 1: The Genesis",
    status: "COMPLETED", // Visual style: Dimmed / Checked
    events: [
      { time: "09:00 AM", title: "Inauguration Ceremony", type: "CEREMONY", location: "Main Auditorium" },
      { time: "11:00 AM", title: "Hackathon Begins", type: "DEV OPS", location: "SAC Hall" },
      { time: "02:00 PM", title: "IPL Auction", type: "STRATEGY", location: "Seminar Block" },
      { time: "05:00 PM", title: "Creator's Camp", type: "CREATIVE", location: "Open Air Theatre" },
    ]
  },
  {
    id: "day2",
    date: "14",
    month: "FEB",
    dayName: "THURSDAY",
    title: "Level 2: The Ascent",
    status: "ACTIVE", // Visual style: Glowing / Pulsing
    events: [
      { time: "10:00 AM", title: "Robo Wars", type: "COMBAT", location: "Arena Ground" },
      { time: "01:00 PM", title: "Stock Trading Sim", type: "FINANCE", location: "Online / Labs" },
      { time: "03:00 PM", title: "Business Plan Pitch", type: "PITCH", location: "VIP Conference Room" },
      { time: "07:00 PM", title: "Cultural Night", type: "SOCIAL", location: "Main Stage" },
    ]
  },
  {
    id: "day3",
    date: "15",
    month: "FEB",
    dayName: "FRIDAY",
    title: "Level 3: The Victory",
    status: "LOCKED", // Visual style: Grayed out / Locked Icon
    events: [
      { time: "09:00 AM", title: "Startup Expo", type: "EXHIBITION", location: "Exhibition Ground" },
      { time: "12:00 PM", title: "Keynote Speaker Sessions", type: "TALK", location: "Main Auditorium" },
      { time: "04:00 PM", title: "Hackathon Finale", type: "DEV OPS", location: "SAC Hall" },
      { time: "06:00 PM", title: "Closing Ceremony & Awards", type: "VICTORY", location: "Main Stage" },
    ]
  }
];

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 }
  }
};

const ScheduleSection = () => {
  return (
    <section id="ScheduleSection" className="relative w-full py-24 px-6 bg-gaming-950 overflow-hidden">

      {/* Background Grid & Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 border border-brand-accent/30 rounded-full bg-brand-accent/5 mb-4">
            <span className="text-brand-accent font-mono text-xs tracking-[0.2em] uppercase">
              Operational Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter">
            THE LEVEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">PLAN</span>
          </h2>
        </div>

        {/* --- The Timeline --- */}
        <div className="relative">

          {/* The Central Laser Beam */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-primary to-transparent -translate-x-1/2 opacity-30 md:opacity-50" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-24"
          >
            {scheduleData.map((day, index) => (
              <motion.div
                key={day.id}
                variants={cardVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* 1. Date Node (The Pivot) */}
                <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  {/* Outer Glow Ring for Active Day */}
                  {day.status === "ACTIVE" && (
                    <div className="absolute w-20 h-20 bg-brand-primary/20 rounded-full animate-pulse blur-md" />
                  )}

                  {/* The Node Itself */}
                  <div className={`w-14 h-14 rounded-xl rotate-45 border-2 flex items-center justify-center bg-gaming-950 shadow-2xl relative z-10 ${
                    day.status === "ACTIVE" ? "border-brand-primary shadow-[0_0_20px_#d946ef]" :
                    day.status === "COMPLETED" ? "border-brand-secondary/50" : "border-gray-800"
                  }`}>
                    <div className="-rotate-45 text-center">
                      <span className={`block text-xl font-bold leading-none ${day.status === "ACTIVE" ? "text-white" : "text-gray-400"}`}>
                        {day.date}
                      </span>
                      <span className="block text-[8px] font-mono font-bold text-brand-accent">
                        {day.month}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Content Card */}
                <div className="flex-1 pl-16 md:pl-0">
                  <div className={`group relative bg-gaming-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/30 transition-all duration-300 ${
                    day.status === "ACTIVE" ? "border-brand-primary/40 ring-1 ring-brand-primary/20" : ""
                  }`}>

                    {/* Header of the Card */}
                    <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
                      <div>
                        <h3 className={`font-heading font-bold text-2xl uppercase ${
                          day.status === "ACTIVE" ? "text-brand-primary" : "text-white"
                        }`}>
                          {day.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-mono tracking-widest">{day.dayName}</p>
                      </div>
                      {/* Icon Status */}
                      <div className="text-2xl">
                        {day.status === "COMPLETED" && <span className="text-brand-secondary">✓</span>}
                        {day.status === "ACTIVE" && <span className="text-brand-primary animate-pulse">◉</span>}
                        {day.status === "LOCKED" && <span className="text-gray-600">🔒</span>}
                      </div>
                    </div>

                    {/* Events List */}
                    <div className="p-6 space-y-4">
                      {day.events.map((event, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                          {/* Time */}
                          <div className="min-w-[80px]">
                            <span className="text-sm font-mono text-brand-accent font-bold">{event.time}</span>
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <h4 className="text-white font-bold">{event.title}</h4>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                              {event.location}
                            </p>
                          </div>

                          {/* Tag */}
                          <div className="mt-2 sm:mt-0">
                             <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-400 group-hover:border-brand-primary/50 group-hover:text-brand-primary transition-colors">
                               [{event.type}]
                             </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Scanline */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* 3. Spacer for Alignment (Desktop) */}
                <div className="hidden md:block flex-1" />

              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <button className="px-8 py-3 bg-brand-primary text-white font-heading font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors clip-path-gaming">
            Download PDF Schedule
          </button>
        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;