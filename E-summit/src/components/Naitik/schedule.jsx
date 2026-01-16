// import React from "react";
// import { motion } from "framer-motion";

// // --- Data: The 3-Day Campaign ---
// const scheduleData = [
//   {
//     id: "day1",
//     date: "13",
//     month: "FEB",
//     dayName: "WEDNESDAY",
//     title: "Level 1: The Genesis",
//     status: "COMPLETED", // Visual style: Dimmed / Checked
//     events: [
//       { time: "09:00 AM", title: "Inauguration Ceremony", type: "CEREMONY", location: "Main Auditorium" },
//       { time: "11:00 AM", title: "Hackathon Begins", type: "DEV OPS", location: "SAC Hall" },
//       { time: "02:00 PM", title: "IPL Auction", type: "STRATEGY", location: "Seminar Block" },
//       { time: "05:00 PM", title: "Creator's Camp", type: "CREATIVE", location: "Open Air Theatre" },
//     ]
//   },
//   {
//     id: "day2",
//     date: "14",
//     month: "FEB",
//     dayName: "THURSDAY",
//     title: "Level 2: The Ascent",
//     status: "ACTIVE", // Visual style: Glowing / Pulsing
//     events: [
//       { time: "10:00 AM", title: "Robo Wars", type: "COMBAT", location: "Arena Ground" },
//       { time: "01:00 PM", title: "Stock Trading Sim", type: "FINANCE", location: "Online / Labs" },
//       { time: "03:00 PM", title: "Business Plan Pitch", type: "PITCH", location: "VIP Conference Room" },
//       { time: "07:00 PM", title: "Cultural Night", type: "SOCIAL", location: "Main Stage" },
//     ]
//   },
//   {
//     id: "day3",
//     date: "15",
//     month: "FEB",
//     dayName: "FRIDAY",
//     title: "Level 3: The Victory",
//     status: "LOCKED", // Visual style: Grayed out / Locked Icon
//     events: [
//       { time: "09:00 AM", title: "Startup Expo", type: "EXHIBITION", location: "Exhibition Ground" },
//       { time: "12:00 PM", title: "Keynote Speaker Sessions", type: "TALK", location: "Main Auditorium" },
//       { time: "04:00 PM", title: "Hackathon Finale", type: "DEV OPS", location: "SAC Hall" },
//       { time: "06:00 PM", title: "Closing Ceremony & Awards", type: "VICTORY", location: "Main Stage" },
//     ]
//   }
// ];

// // --- Animations ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 }
//   }
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 60, damping: 12 }
//   }
// };

// const ScheduleSection = () => {
//   return (
//     <section id="ScheduleSection" className="relative w-full py-24 px-6 bg-gaming-950 overflow-hidden">

//       {/* Background Grid & Ambience */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-5xl mx-auto relative z-10">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-block px-3 py-1 border border-brand-accent/30 rounded-full bg-brand-accent/5 mb-4">
//             <span className="text-brand-accent font-mono text-xs tracking-[0.2em] uppercase">
//               Operational Timeline
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter">
//             THE LEVEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">PLAN</span>
//           </h2>
//         </div>

//         {/* --- The Timeline --- */}
//         <div className="relative">

//           {/* The Central Laser Beam */}
//           <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-primary to-transparent -translate-x-1/2 opacity-30 md:opacity-50" />

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="space-y-12 md:space-y-24"
//           >
//             {scheduleData.map((day, index) => (
//               <motion.div
//                 key={day.id}
//                 variants={cardVariants}
//                 className={`relative flex flex-col md:flex-row gap-8 ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >

//                 {/* 1. Date Node (The Pivot) */}
//                 <div className="absolute left-[27px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
//                   {/* Outer Glow Ring for Active Day */}
//                   {day.status === "ACTIVE" && (
//                     <div className="absolute w-20 h-20 bg-brand-primary/20 rounded-full animate-pulse blur-md" />
//                   )}

//                   {/* The Node Itself */}
//                   <div className={`w-14 h-14 rounded-xl rotate-45 border-2 flex items-center justify-center bg-gaming-950 shadow-2xl relative z-10 ${
//                     day.status === "ACTIVE" ? "border-brand-primary shadow-[0_0_20px_#d946ef]" :
//                     day.status === "COMPLETED" ? "border-brand-secondary/50" : "border-gray-800"
//                   }`}>
//                     <div className="-rotate-45 text-center">
//                       <span className={`block text-xl font-bold leading-none ${day.status === "ACTIVE" ? "text-white" : "text-gray-400"}`}>
//                         {day.date}
//                       </span>
//                       <span className="block text-[8px] font-mono font-bold text-brand-accent">
//                         {day.month}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* 2. Content Card */}
//                 <div className="flex-1 pl-16 md:pl-0">
//                   <div className={`group relative bg-gaming-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/30 transition-all duration-300 ${
//                     day.status === "ACTIVE" ? "border-brand-primary/40 ring-1 ring-brand-primary/20" : ""
//                   }`}>

//                     {/* Header of the Card */}
//                     <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
//                       <div>
//                         <h3 className={`font-heading font-bold text-2xl uppercase ${
//                           day.status === "ACTIVE" ? "text-brand-primary" : "text-white"
//                         }`}>
//                           {day.title}
//                         </h3>
//                         <p className="text-xs text-gray-400 font-mono tracking-widest">{day.dayName}</p>
//                       </div>
//                       {/* Icon Status */}
//                       <div className="text-2xl">
//                         {day.status === "COMPLETED" && <span className="text-brand-secondary">✓</span>}
//                         {day.status === "ACTIVE" && <span className="text-brand-primary animate-pulse">◉</span>}
//                         {day.status === "LOCKED" && <span className="text-gray-600">🔒</span>}
//                       </div>
//                     </div>

//                     {/* Events List */}
//                     <div className="p-6 space-y-4">
//                       {day.events.map((event, idx) => (
//                         <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
//                           {/* Time */}
//                           <div className="min-w-[80px]">
//                             <span className="text-sm font-mono text-brand-accent font-bold">{event.time}</span>
//                           </div>

//                           {/* Details */}
//                           <div className="flex-1">
//                             <h4 className="text-white font-bold">{event.title}</h4>
//                             <p className="text-xs text-gray-500 flex items-center gap-1">
//                               <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
//                               {event.location}
//                             </p>
//                           </div>

//                           {/* Tag */}
//                           <div className="mt-2 sm:mt-0">
//                              <span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-gray-400 group-hover:border-brand-primary/50 group-hover:text-brand-primary transition-colors">
//                                [{event.type}]
//                              </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Decorative Scanline */}
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                   </div>
//                 </div>

//                 {/* 3. Spacer for Alignment (Desktop) */}
//                 <div className="hidden md:block flex-1" />

//               </motion.div>
//             ))}
//           </motion.div>

//         </div>

//         {/* Footer CTA */}
//         <div className="mt-20 text-center">
//           <button className="px-8 py-3 bg-brand-primary text-white font-heading font-bold uppercase tracking-widest hover:bg-brand-secondary transition-colors clip-path-gaming">
//             Download PDF Schedule
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ScheduleSection;





import React from "react";
import { motion } from "framer-motion";
import { Lock, Clock, ShieldAlert } from "lucide-react"; // Assuming you have lucide-react, or use any icon library

// --- Data: Dates Confirmed, Events Hidden ---
const scheduleData = [
  {
    id: "day1",
    date: "13",
    month: "FEB",
    dayName: "WEDNESDAY",
    title: "Level 1: The Genesis",
    status: "LOCKED",
    events: [] // Empty array triggers the "Revealing Soon" UI
  },
  {
    id: "day2",
    date: "14",
    month: "FEB",
    dayName: "THURSDAY",
    title: "Level 2: The Ascent",
    status: "LOCKED",
    events: []
  },
  {
    id: "day3",
    date: "15",
    month: "FEB",
    dayName: "FRIDAY",
    title: "Level 3: The Victory",
    status: "LOCKED",
    events: []
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
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Briefing</span>
          </h2>
        </div>

        {/* --- The Timeline --- */}
        <div className="relative">

          {/* The Central Laser Beam */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-brand-primary/50 to-transparent -translate-x-1/2 opacity-30 md:opacity-50" />

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
                  {/* The Node Itself */}
                  <div className={`w-14 h-14 rounded-xl rotate-45 border-2 flex items-center justify-center bg-gaming-950 shadow-2xl relative z-10 border-brand-primary/30 shadow-[0_0_15px_rgba(var(--brand-primary),0.2)]`}>
                    <div className="-rotate-45 text-center">
                      <span className="block text-xl font-bold leading-none text-white">
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
                  <div className="group relative bg-gaming-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-brand-primary/30 transition-all duration-300">

                    {/* Header of the Card */}
                    <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
                      <div>
                        <h3 className="font-heading font-bold text-2xl uppercase text-white/90">
                          {day.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-mono tracking-widest">{day.dayName}</p>
                      </div>
                      <div className="text-gray-500">
                        {/* Simple Lock Icon representation if you don't have lucide */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      </div>
                    </div>

                    {/* Content Area: Logic to show events OR 'Revealing Soon' */}
                    <div className="p-8 relative min-h-[160px] flex flex-col items-center justify-center text-center">

                      {day.events.length > 0 ? (
                        // Existing code for when you DO add events back later
                        <div className="space-y-4 w-full">
                           {/* ... Event mapping code would go here ... */}
                        </div>
                      ) : (
                        // "Revealing Soon" Placeholder UI
                        <div className="space-y-3 z-10">
                           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-brand-primary mb-2 animate-pulse">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                           </div>

                           <h4 className="text-lg font-bold text-white tracking-widest uppercase">
                             Access Restricted
                           </h4>

                           <p className="text-sm font-mono text-brand-accent/70">
                             // Intel decrypting... <br/>
                             Full schedule revealing soon.
                           </p>
                        </div>
                      )}

                      {/* Cool blurred 'Redacted' background effect */}
                      {day.events.length === 0 && (
                        <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6 opacity-10 pointer-events-none select-none">
                            <div className="h-4 w-3/4 bg-white rounded blur-sm mx-auto"/>
                            <div className="h-4 w-full bg-white rounded blur-sm"/>
                            <div className="h-4 w-5/6 bg-white rounded blur-sm mx-auto"/>
                            <div className="h-4 w-2/3 bg-white rounded blur-sm"/>
                        </div>
                      )}

                    </div>

                    {/* Decorative Scanline */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-50" />
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
          <p className="text-gray-400 mb-4 text-sm font-mono">STAY TUNED FOR UPDATES</p>
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-brand-primary/30 rounded bg-brand-primary/5 text-brand-primary text-xs font-mono uppercase">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Live Updates Incoming
          </div>
        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;