// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom"; // Assuming you use React Router

// // --- Data: The "Missions" ---
// const events = [
//   {
//     id: 1,
//     title: "Startup Expo",
//     type: "EXHIBITION",
//     desc: "The ultimate showcase. Deploy your prototype, attract investors, and gain early traction in the market.",
//     icon: "🚀",
//     color: "border-brand-primary",
//     link: "/events/startup-expo"
//   },
//   {
//     id: 2,
//     title: "Business Plan",
//     type: "COMPETITION",
//     desc: "Draft your blueprint. Pitch your master plan to a panel of VCs and secure the funding to scale.",
//     icon: "📜",
//     color: "border-brand-secondary",
//     link: "/events/b-plan"
//   },
//   {
//     id: 3,
//     title: "IPL Auction",
//     type: "STRATEGY",
//     desc: "The war room is open. Manage your budget, bid for players, and build the ultimate dream team.",
//     icon: "🏏",
//     color: "border-brand-accent",
//     link: "/events/ipl-auction"
//   },
//   {
//     id: 4,
//     title: "Stock Trading",
//     type: "SIMULATION",
//     desc: "Master the market. Buy low, sell high, and navigate the volatility of the virtual stock exchange.",
//     icon: "📈",
//     color: "border-green-500",
//     link: "/events/stock-trading"
//   },
//   {
//     id: 5,
//     title: "Case Study",
//     type: "LOGIC",
//     desc: "Crack the code. Solve complex real-world business problems and prove your analytical prowess.",
//     icon: "🧩",
//     color: "border-yellow-500",
//     link: "/events/case-study"
//   },
//   {
//     id: 6,
//     title: "Creator's Camp",
//     type: "CREATIVE",
//     desc: "Unlock your reach. Learn from top influencers on how to build a personal brand and dominate the feed.",
//     icon: "🎨",
//     color: "border-pink-500",
//     link: "/events/creators-camp"
//   },
//   {
//     id: 7,
//     title: "Hackathon",
//     type: "DEV OPS",
//     desc: "36 hours of code. Build, break, and deploy solutions to modern problems before the timer hits zero.",
//     icon: "💻",
//     color: "border-cyan-400",
//     link: "/events/hackathon"
//   },
//   {
//     id: 8,
//     title: "Robo Wars",
//     type: "COMBAT",
//     desc: "Steel meets steel. Design a combat bot and battle it out in the arena for mechanical supremacy.",
//     icon: "🤖",
//     color: "border-red-500",
//     link: "/events/robo-wars"
//   },
//   {
//     id: 9,
//     title: "Intern Fair",
//     type: "RECRUITMENT",
//     desc: "Get hired. Connect with top startups and companies looking for the next generation of talent.",
//     icon: "briefcase", // using text for emoji placeholder, use SVG in real app
//     color: "border-indigo-400",
//     link: "/events/intern-fair"
//   },
//   {
//     id: 10,
//     title: "Gaming Night",
//     type: "ESPORTS",
//     desc: "Blow off steam. compete in Valorant, FIFA, and BGMI tournaments against the best on campus.",
//     icon: "🎮",
//     color: "border-purple-500",
//     link: "/events/gaming-night"
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
//   return (
//     <section className="relative w-full py-24 px-6 bg-gaming-950 overflow-hidden">

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
//               Mission Select
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-heading font-bold text-white uppercase tracking-tighter"
//           >
//             Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Battlefield</span>
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
//               <Link to={event.link} className="block h-full">
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
//                         // ACCESS_GRANTED
//                       </span>

//                       {/* Animated Arrow Button */}
//                       <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={2}
//                           stroke="currentColor"
//                           className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                         </svg>
//                       </div>
//                     </div>

//                   </div>

//                   {/* Decorative Corner (Cyber aesthetic) */}
//                   <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
//                      <svg width="20" height="20" viewBox="0 0 20 20">
//                         <path d="M0 0 H20 V20" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary"/>
//                      </svg>
//                   </div>

//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom Call to Action */}
//         <div className="mt-16 text-center">
//              <button className="px-8 py-3 bg-transparent border border-brand-secondary/50 text-brand-secondary hover:bg-brand-secondary hover:text-white font-heading font-bold tracking-widest uppercase transition-all duration-300 clip-path-gaming">
//                 View Full Rulebook
//              </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default EventsSection;



import React from "react";
import { motion } from "framer-motion";
// Removed Link import since we are using external links (<a>) for Unstop/Expo

// --- Data: Content from HTML, Design from React ---
const events = [
  {
    id: 1,
    title: "Startup Expo",
    type: "EXHIBITION",
    desc: "Startup Expo provides an ultimate stage for ambitious startups to script their success story. Unlock a vault of opportunities, pitch to investors, and network with industry experts.",
    icon: "🚀", // Kept your cool icon
    color: "border-brand-primary",
    link: "https://expo.ecellnitb.in/"
  },
  {
    id: 2,
    title: "Business Plan",
    type: "COMPETITION",
    desc: "A dynamic platform empowering teams to step into the spotlight, pitch their ideas to a panel of incubators and VCs, and secure funding.",
    icon: "📜",
    color: "border-brand-secondary",
    link: "https://unstop.com/competitions/business-plan-pitching-competition-25-e-summit25-maulana-azad-national-institute-of-technology-manit-bhopal-1320920"
  },
  {
    id: 3,
    title: "Case Study",
    type: "LOGIC",
    desc: "Challenges participants with real-world business problems, fostering critical thinking and nurturing an entrepreneurial mindset through practical problem solving.",
    icon: "🧩",
    color: "border-yellow-500",
    link: "https://unstop.com/competitions/case-study-competition-25-e-summit25-maulana-azad-national-institute-of-technology-manit-bhopal-1334977"
  },
  {
    id: 4,
    title: "Creator's Camp",
    type: "CREATIVE",
    desc: "Explore the process of transforming ideas into impactful realities by learning from top creators and storytellers, gaining new skills and insights.",
    icon: "🎨",
    color: "border-pink-500",
    link: "#"
  },
  {
    id: 5,
    title: "IPL Auction",
    type: "STRATEGY",
    desc: "Step into the thrill of the bidding process and build your dream cricket team. Challenge yourself to take on the role of team owner in this simulation.",
    icon: "🏏",
    color: "border-brand-accent",
    link: "https://unstop.com/competitions/ipl-auction-simulation-25-e-summit25-maulana-azad-national-institute-of-technology-manit-bhopal-1322745"
  },
  {
    id: 6,
    title: "Stock Trading",
    type: "SIMULATION",
    desc: "Immerse yourself in the world of trading. Test strategies and feel the thrill of the market in a risk-free environment preparing you for the real world.",
    icon: "📈",
    color: "border-green-500",
    link: "https://unstop.com/competitions/central-indias-largest-stock-trading-simulation-25-e-summit25-maulana-azad-national-institute-of-technology-1323639"
  },
  {
    id: 7,
    title: "Keynote Session",
    type: "SPEAKER",
    desc: "Sessions led by renowned personalities offering impactful lessons that shaped their life journey. Ignite motivation and gain invaluable knowledge.",
    icon: "🎤", // Added icon for new HTML content
    color: "border-purple-500",
    link: "#"
  },
  {
    id: 8,
    title: "Innovation Conclave",
    type: "INDUSTRY",
    desc: "Engaging panel discussions on critical issues. Offers valuable insights, strategic perspectives and facilitates meaningful conversations among industry leaders.",
    icon: "🤝", // Added icon for new HTML content
    color: "border-cyan-500",
    link: "#"
  },
  {
    id: 9,
    title: "Book Fair",
    type: "EXHIBITION",
    desc: "A paradise for readers. Whether drawn to thrilling fiction or thought-provoking non-fiction, it’s the perfect place to discover your next favorite read.",
    icon: "📚", // Added icon for new HTML content
    color: "border-orange-500",
    link: "#"
  },
  {
    id: 10,
    title: "Junior B-Plan",
    type: "JUNIOR",
    desc: "Gives 1st and 2nd year students a platform to showcase entrepreneurial skills. Pitch ideas to a jury of experts and turn passion into opportunities.",
    icon: "📝", // Added icon for new HTML content
    color: "border-red-500",
    link: "#"
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
  return (
    <section className="relative w-full py-24 px-6 bg-gaming-950 overflow-hidden">

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

        {/* The Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={cardVariant}>
              {/* Changed Link to <a> for External Links */}
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="block h-full">
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

                      {/* Icon Container (Floating Badge) */}
                      <div className={`w-12 h-12 rounded-lg bg-gaming-950 border border-white/10 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:border-brand-primary transition-all duration-300 ${event.color.replace('border', 'shadow')}/20`}>
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
                        // ACCESS_GRANTED
                      </span>

                      {/* Animated Arrow Button */}
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>

                  </div>

                  {/* Decorative Corner (Cyber aesthetic) */}
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M0 0 H20 V20" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary"/>
                      </svg>
                  </div>

                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
             <button className="px-8 py-3 bg-transparent border border-brand-secondary/50 text-brand-secondary hover:bg-brand-secondary hover:text-white font-heading font-bold tracking-widest uppercase transition-all duration-300 clip-path-gaming">
                View Full Rulebook
             </button>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;