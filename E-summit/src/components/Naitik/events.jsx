
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ExternalLink, ArrowRight, Info } from "lucide-react";

// // --- Data Configuration ---
// const events = [
//   {
//     id: 1,
//     title: "Startup Expo",
//     type: "EXHIBITION",
//     desc: "Startup Expo, the flagship event of E-Summit, provides a dynamic platform for early-stage startups to pitch their ideas to industry experts, investors, and incubators. The event aims to provide funding, networking and mentorship opportunities for promising ventures. In its last edition, Startup Expo brought together 55+ innovative startups, 85+ investors and incubators, 5000+ professionals and 30,000+ attendees.",
//     icon: "🚀",
//     color: "border-brand-primary",
//     registerLink: "https://expo.ecellnitb.in/",
//     knowMoreLink: "https://esummit.ecellnitb.in/#"
//   },
//   {
//     id: 2,
//     title: "Business Plan",
//     type: "COMPETITION",
//     desc: "Business Plan Junior Competition is an exclusive event for the first and second year students to compete among themselves in the quest of finding an idea that has the potential to become a startup, putting their problem solving capacity to test and encouraging them to innovate and strategize to take their ideas from ideation to validation phase under the mentorship of seasoned industry professionals.",
//     icon: "📜",
//     color: "border-brand-secondary",
//     registerLink: "https://unstop.com/competitions/business-plan-pitching-competition-25-e-summit25-maulana-azad-national-institute-of-technology-manit-bhopal-1320920",
//     knowMoreLink: "/bplan"
//   },
//   {
//     id: 3,
//     title: "Case Study",
//     type: "LOGIC",
//     desc: "The Case Study competition is a game of strategy that forces participants to challenge conventional thinking patterns. As they compete to find the most creative solutions, the event enables them to experience real world problems faced by business ventures and startups. Building the participants’ ability to tackle them, the competition enables them to hone their problem solving and critical thinking skills crucial for aspiring changemakers.",
//     icon: "🧩",
//     color: "border-yellow-500",
//     registerLink: "https://unstop.com/competitions/case-study-competition-25-e-summit25-maulana-azad-national-institute-of-technology-manit-bhopal-1334977",
//     knowMoreLink: "/casestudy"
//   },
//   {
//     id: 4,
//     title: "Creator's Camp",
//     type: "CREATIVE",
//     desc: "The Creator's Camp hosts a variety of influential creators and artists who share their journey to success and recognition followed by light hearted QnA rounds and informative fan interactions. Guests range from contemporary icons to comics as well as storytellers and motivational speakers, providing entertainment amidst a variety of entrepreneurial events.",
//     icon: "🎨",
//     color: "border-pink-500",
//     registerLink: null,
//     knowMoreLink: null
//   },
//   {
//     id: 5,
//     title: "IPL Auction",
//     type: "STRATEGY",
//     desc: "IPL Auction Simulation is where strategy and decision matches timely precision, emulating the real IPL auction with ten teams competing in a bidding process to assemble the best squad with limited virtual currency. The event is specially designed to evaluate the entrepreneurial capability within the participants with every bid influencing their strategy and leading to the selection of their final eleven.",
//     icon: "🏏",
//     color: "border-brand-accent",
//     registerLink: "https://unstop.com/competitions/ipl-auction-simulation-25-e-summit25-maulana-azad-national-institute-of-technology-manit-bhopal-1322745",
//     knowMoreLink: "/iplauction"
//   },
//   {
//     id: 6,
//     title: "Stock Trading",
//     type: "SIMULATION",
//     desc: "Stock Trading Simulation puts financial foresight to test, offering a real time virtual market where sharp decisions race against the clock. In this risk free environment, it empowers the participants to leap into real world markets with courage and clarity. ",
//     icon: "📈",
//     color: "border-green-500",
//     registerLink: "https://unstop.com/competitions/central-indias-largest-stock-trading-simulation-25-e-summit25-maulana-azad-national-institute-of-technology-1323639",
//     knowMoreLink: null
//   },
//   {
//     id: 7,
//     title: "Keynote Session",
//     type: "SPEAKER",
//     desc: "Igniting ambition and ideas, the keynote sessions are electric exchanges that challenge conventions and empower the entrepreneurial drive and spark bold visions for the future. From startup struggles to success secrets, they fuel ideas, change perspectives and inspire the next generation of changemakers.",
//     icon: "🎤",
//     color: "border-purple-500",
//     registerLink: null,
//     knowMoreLink: "/keynote"
//   },
//   {
//     id: 8,
//     title: "Innovation Conclave",
//     type: "INDUSTRY",
//     desc: "Engaging panel discussions on critical issues. Offers valuable insights, strategic perspectives and facilitates meaningful conversations among industry leaders.",
//     icon: "🤝",
//     color: "border-cyan-500",
//     registerLink: null,
//     knowMoreLink: null
//   },
//   {
//     id: 9,
//     title: "Book Fair",
//     type: "EXHIBITION",
//     desc: "The Book Fair is a vibrant event offering a collection of books on topics ranging from fiction, finance, technology to self-improvement. It provides an unique experience of sharing a community with like minded individuals, successfully engaging young minds by exposing them to vast intellectual resources and opportunities, while simultaneously fostering a renewed interest in reading.",
//     icon: "📚",
//     color: "border-orange-500",
//     registerLink: null,
//     knowMoreLink: null
//   },
//   {
//     id: 10,
//     title: "Junior B-Plan",
//     type: "JUNIOR",
//     desc: "Gives 1st and 2nd year students a platform to showcase entrepreneurial skills. Pitch ideas to a jury of experts and turn passion into opportunities.",
//     icon: "📝",
//     color: "border-red-500",
//     registerLink: "#",
//     knowMoreLink: null
//   },
// ];

// // --- Animations ---
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const cardVariant = {
//   hidden: { opacity: 0, scale: 0.9 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 50 }
//   }
// };

// const EventsSection = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   return (
//     <section className="relative w-full py-24 px-6 bg-gaming-950 overflow-hidden min-h-screen" id="events-section">

//       {/* Background Ambience */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gaming-800 via-gaming-950 to-gaming-950 opacity-40 -z-10" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -z-10" />

//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block px-4 py-1 border border-brand-accent/30 rounded-full bg-brand-accent/5 mb-4"
//           >
//             <span className="text-brand-accent font-mono text-xs tracking-[0.2em] uppercase">
//               Join Events
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter"
//           >
//             What's in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Box?</span>
//           </motion.h2>

//           <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
//             Unlock new skills, earn rewards, and level up your portfolio. Select an event to view details.
//           </p>
//         </div>

//         {/* The Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//         >
//           {events.map((event) => (
//             <motion.div key={event.id} variants={cardVariant}>
//               {/* Card - Purely onClick, no anchor tags */}
//               <div
//                 onClick={() => setSelectedEvent(event)}
//                 className="cursor-pointer h-full"
//               >
//                 <div className="group relative h-full bg-gaming-900/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300">

//                   {/* --- Hover Glow Effect --- */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                   {/* --- Card Content --- */}
//                   <div className="p-6 relative z-10 flex flex-col h-full">

//                     {/* Top Row: Type & Icon */}
//                     <div className="flex justify-between items-start mb-4">
//                       {/* Type Badge */}
//                       <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/5 border ${event.color} text-gray-300 group-hover:bg-brand-primary/20 group-hover:text-white transition-colors`}>
//                         [{event.type}]
//                       </span>

//                       {/* Icon Container (Floating Badge) */}
//                       <div className={`w-12 h-12 rounded-lg bg-gaming-950 border border-white/10 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:border-brand-primary transition-all duration-300 ${event.color.replace('border', 'shadow')}/20`}>
//                         {event.icon}
//                       </div>
//                     </div>

//                     {/* Title */}
//                     <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
//                       {event.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
//                       {event.desc}
//                     </p>

//                     {/* Bottom Action Area */}
//                     <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
//                       <span className="text-xs text-gray-500 font-mono group-hover:text-brand-accent transition-colors">
//                         // EXPAND_DETAILS
//                       </span>

//                       {/* Animated Arrow Button */}
//                       <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
//                         <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>

//       {/* --- EVENT DETAILS OVERLAY (MODAL) --- */}
//       <AnimatePresence>
//         {selectedEvent && (
//             <div className="fixed inset-0 z-101 flex items-center justify-center px-4">

//                 {/* 1. Backdrop (Deep Black & Blur) */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     onClick={() => setSelectedEvent(null)}
//                     // Added bg-black/90 for darker overlay
//                     className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
//                 />

//                 {/* 2. Modal Content (Black Glassmorphism) */}
//                 <motion.div
//                     initial={{ scale: 0.95, opacity: 0, y: 30 }}
//                     animate={{ scale: 1, opacity: 1, y: 0 }}
//                     exit={{ scale: 0.95, opacity: 0, y: 30 }}
//                     // Added bg-black/80 and backdrop-blur-xl for premium glass feel
//                     className="relative w-full max-w-xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,1)] overflow-hidden"
//                 >
//                     {/* Decorative Header Line (Glows with event color) */}
//                     <div className={`h-1 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-70 ${selectedEvent.color.replace('border-', 'text-')}`} />

//                     <div className="p-8 md:p-10"> {/* Increased padding */}

//                         {/* Close Button */}
//                         <button
//                             onClick={() => setSelectedEvent(null)}
//                             className="absolute top-5 right-5 p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
//                         >
//                             <X size={24} />
//                         </button>

//                         {/* Modal Header */}
//                         <div className="flex items-start gap-5 mb-8">
//                             <div className={`w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-2xl ${selectedEvent.color.replace('border', 'shadow')}/20`}>
//                                 {selectedEvent.icon}
//                             </div>
//                             <div>
//                                 <p className={`font-mono text-xs uppercase tracking-[0.2em] mb-2 ${selectedEvent.color.replace('border-', 'text-')}`}>
//                                     {selectedEvent.type}
//                                 </p>
//                                 <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase italic leading-none">
//                                     {selectedEvent.title}
//                                 </h3>
//                             </div>
//                         </div>

//                         {/* Description - Added Spacing and Background */}
//                         <div className="bg-white/5 p-6 rounded-xl border border-white/5 mb-10">
//                             <p className="text-gray-300 text-lg leading-loose font-light">
//                                 {selectedEvent.desc}
//                             </p>
//                         </div>

//                         {/* ACTION BUTTONS */}
//                         <div className="flex flex-col gap-4">

//                             {/* OPTION 1: REGISTER (UNSTOP) */}
//                             {selectedEvent.registerLink && (
//                                 <a
//                                     href={selectedEvent.registerLink}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-black font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-3 rounded-lg transition-all shadow-lg hover:shadow-brand-primary/20"
//                                 >
//                                     Register Now <ExternalLink size={20} />
//                                 </a>
//                             )}

//                             {/* OPTION 2: KNOW MORE (INTERNAL) */}
//                             {selectedEvent.knowMoreLink && (
//                                 <a
//                                     href={selectedEvent.knowMoreLink}
//                                     className="w-full py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-3 rounded-lg transition-all"
//                                 >
//                                     Know More <Info size={20} />
//                                 </a>
//                             )}

//                             {/* If no buttons are available */}
//                             {!selectedEvent.registerLink && !selectedEvent.knowMoreLink && (
//                                 <div className="text-center py-4 bg-white/5 rounded-lg border border-white/5 text-gray-500 font-mono text-sm uppercase tracking-widest">
//                                     // REGISTRATION_CLOSED_OR_COMING_SOON
//                                 </div>
//                             )}
//                         </div>

//                     </div>
//                 </motion.div>
//             </div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// };

// export default EventsSection;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  ArrowRight,
  Info,
  Rocket,
  Briefcase,
  Puzzle,
  Palette,
  Gavel,
  TrendingUp,
  Mic,
  Handshake,
  BookOpen,
  Lightbulb
} from "lucide-react";

// --- Data Configuration ---
const events = [
  {
    id: 1,
    title: "Startup Expo",
    type: "EXHIBITION",
    desc: "Startup Expo, the flagship event of E-Summit, provides a dynamic platform for early-stage startups to pitch their ideas to industry experts, investors, and incubators. The event aims to provide funding, networking and mentorship opportunities for promising ventures.",
    icon: <Rocket className="w-6 h-6" />,
    color: "border-brand-primary",
    registerLink: "https://startupexpo.ecellnitb.in/",
    knowMoreLink: "https://startupexpo.ecellnitb.in/"
  },
  {
    id: 2,
    title: "Business Plan",
    type: "COMPETITION",
    desc: "Business Plan Junior Competition is an exclusive event for the first and second year students to compete among themselves in the quest of finding an idea that has the potential to become a startup.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "border-brand-secondary",
    registerLink: "https://unstop.com/competitions/business-plan-pitching-competition26-e-summit26--1625734",
    knowMoreLink: "/bplan"
  },
  {
    id: 3,
    title: "Case Study",
    type: "LOGIC",
    desc: "The Case Study competition is a game of strategy that forces participants to challenge conventional thinking patterns. As they compete to find the most creative solutions, the event enables them to experience real world problems.",
    icon: <Puzzle className="w-6 h-6" />,
    color: "border-yellow-500",
    registerLink: "https://unstop.com/competitions/case-study-competition-e-summit26--1625099",
    knowMoreLink: "/casestudy"
  },
  {
    id: 4,
    title: "Creator's Camp",
    type: "CREATIVE",
    desc: "The Creator's Camp hosts a variety of influential creators and artists who share their journey to success and recognition followed by light hearted QnA rounds and informative fan interactions.",
    icon: <Palette className="w-6 h-6" />,
    color: "border-pink-500",
    registerLink: null,
    knowMoreLink: null
  },
  {
    id: 5,
    title: "IPL Auction",
    type: "STRATEGY",
    desc: "IPL Auction Simulation is where strategy and decision matches timely precision, emulating the real IPL auction with ten teams competing in a bidding process to assemble the best squad with limited virtual currency.",
    icon: <Gavel className="w-6 h-6" />,
    color: "border-brand-accent",
    registerLink: "https://unstop.com/competitions/ipl-auction-simulation-26-e-summit26--1624967",
    knowMoreLink: "/iplauction"
  },
  {
    id: 6,
    title: "Stock Trading",
    type: "SIMULATION",
    desc: "Stock Trading Simulation puts financial foresight to test, offering a real time virtual market where sharp decisions race against the clock. In this risk free environment, it empowers the participants to leap into real world markets.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "border-green-500",
    registerLink: "https://unstop.com/competitions/central-indias-largest-stock-trading-simulation-25-e-summit25-maulana-azad-national-institute-of-technology-1323639",
    knowMoreLink: null
  },
  {
    id: 7,
    title: "Keynote Session",
    type: "SPEAKER",
    desc: "Igniting ambition and ideas, the keynote sessions are electric exchanges that challenge conventions and empower the entrepreneurial drive and spark bold visions for the future.",
    icon: <Mic className="w-6 h-6" />,
    color: "border-purple-500",
    registerLink: null,
    knowMoreLink: "/keynote"
  },
  {
    id: 8,
    title: "Innovation Conclave",
    type: "INDUSTRY",
    desc: "Engaging panel discussions on critical issues. Offers valuable insights, strategic perspectives and facilitates meaningful conversations among industry leaders.",
    icon: <Handshake className="w-6 h-6" />,
    color: "border-cyan-500",
    registerLink: null,
    knowMoreLink: null
  },
  {
    id: 9,
    title: "Book Fair",
    type: "EXHIBITION",
    desc: "The Book Fair is a vibrant event offering a collection of books on topics ranging from fiction, finance, technology to self-improvement. It provides an unique experience of sharing a community with like minded individuals.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "border-orange-500",
    registerLink: null,
    knowMoreLink: null
  },
  {
    id: 10,
    title: "Junior B-Plan",
    type: "JUNIOR",
    desc: "Gives 1st and 2nd year students a platform to showcase entrepreneurial skills. Pitch ideas to a jury of experts and turn passion into opportunities.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "border-red-500",
    registerLink: "#",
    knowMoreLink: null
  },
];

// --- Animations ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedEvent]);

  return (
    <section className="relative w-full py-8 px-6 bg-gaming-950 overflow-hidden min-h-screen" id="events-section">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gaming-800 via-gaming-950 to-gaming-950 opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-brand-accent/30 rounded-full bg-brand-accent/5 mb-4"
          >
            <span className="text-brand-accent font-mono text-xs tracking-[0.2em] uppercase">
              Join Events
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter"
          >
            What's in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Box?</span>
          </motion.h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Unlock new skills, earn rewards, and level up your portfolio. Select an event to view details.
          </p>
        </div>

        {/* THE GRID (Converted to Flex for centering last items)
            w-[calc...] logic ensures items mimic grid columns but center when wrapping.
        */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {events.map((event) => (
            <motion.div
                key={event.id}
                variants={cardVariant}
                // Width calculations to match grid logic:
                // Full width on mobile
                // 50% minus gap on tablet (md)
                // 33% minus gap on desktop (lg)
                // 25% minus gap on large desktop (xl)
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]"
            >
              {/* Card - Purely onClick, no anchor tags */}
              <div
                onClick={() => setSelectedEvent(event)}
                className="cursor-pointer h-full"
              >
                <div className="group relative h-full bg-gaming-900/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300">

                  {/* --- Hover Glow Effect --- */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* --- Card Content --- */}
                  <div className="p-6 relative z-10 flex flex-col h-full">

                    {/* Top Row: Type & Icon */}
                    <div className="flex justify-between items-start mb-4">
                      {/* Type Badge */}
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-white/5 border ${event.color} text-gray-300 group-hover:bg-brand-primary/20 group-hover:text-white transition-colors`}>
                        [{event.type}]
                      </span>

                      {/* Icon Container */}
                      <div className={`w-12 h-12 rounded-lg bg-gaming-950 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-brand-primary transition-all duration-300 ${event.color.replace('border', 'shadow')}/20 text-gray-300 group-hover:text-white`}>
                        {event.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {event.desc}
                    </p>

                    {/* Bottom Action Area */}
                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-mono group-hover:text-brand-accent transition-colors">
                        // EXPAND_DETAILS
                      </span>

                      {/* Animated Arrow Button */}
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* --- EVENT DETAILS OVERLAY (MODAL) --- */}
      <AnimatePresence>
        {selectedEvent && (
            // FIX 1: Wrapper with Z-Index 999 to beat navbars
            <div className="fixed inset-0 z-999 pt-10 overflow-y-auto">

                {/* Scrollable Container ensures top isn't cut off on small screens */}
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

                    {/* 1. Backdrop (Deep Black & Blur) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                    />

                    {/* 2. Modal Content (Black Glassmorphism) */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 30 }}
                        // Added z-10 relative to ensure it sits above backdrop
                        className="relative z-10 w-full max-w-xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,1)] overflow-hidden my-8 text-left"
                    >
                        {/* Decorative Header Line */}
                        <div className={`h-1 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-70 ${selectedEvent.color.replace('border-', 'text-')}`} />

                        <div className="p-8 md:p-10">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-5 right-5 p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
                            >
                                <X size={24} />
                            </button>

                            {/* Modal Header */}
                            <div className="flex items-start gap-5 mb-8">
                                <div className={`w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl ${selectedEvent.color.replace('border', 'shadow')}/20 text-white shrink-0`}>
                                    <div className="scale-150">
                                      {selectedEvent.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className={`font-mono text-xs uppercase tracking-[0.2em] mb-2 ${selectedEvent.color.replace('border-', 'text-')}`}>
                                        {selectedEvent.type}
                                    </p>
                                    <h3 className="text-3xl md:text-4xl font-heading font-black text-white uppercase italic leading-none break-words">
                                        {selectedEvent.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 mb-10">
                                <p className="text-gray-300 text-lg leading-loose font-light">
                                    {selectedEvent.desc}
                                </p>
                            </div>

                            {/* ACTION BUTTONS */}
                            <div className="flex flex-col gap-4">

                                {selectedEvent.registerLink && (
                                    <a
                                        href={selectedEvent.registerLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-brand-primary hover:bg-brand-primary/90 text-black font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-3 rounded-lg transition-all shadow-lg hover:shadow-brand-primary/20"
                                    >
                                        Register Now <ExternalLink size={20} />
                                    </a>
                                )}

                                {selectedEvent.knowMoreLink && (
                                    <a
                                        href={selectedEvent.knowMoreLink}
                                        className="w-full py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-3 rounded-lg transition-all"
                                    >
                                        Know More <Info size={20} />
                                    </a>
                                )}

                                {!selectedEvent.registerLink && !selectedEvent.knowMoreLink && (
                                    <div className="text-center py-4 bg-white/5 rounded-lg border border-white/5 text-gray-500 font-mono text-sm uppercase tracking-widest">
                                        // REGISTRATION_CLOSED_OR_COMING_SOON
                                    </div>
                                )}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EventsSection;