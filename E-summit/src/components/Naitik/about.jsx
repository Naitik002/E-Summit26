import React from "react";
import { motion } from "framer-motion";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60 }
  },
};

// --- Mock Data ---
const stats = [
  { label: "Footfall", value: "30K+" },
  { label: "Startups", value: "50+" },
  { label: "Events", value: "10+" },
  { label: "Investors", value: "100+" },
];

const AboutSection = () => {
  return (
    <section className="relative w-full py-24 px-6 lg:px-20 overflow-hidden bg-gaming-950 border-b border-white/5">

      {/* Background Grid Accent (Subtle) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(to_left,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-size-[40px_100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* --- LEFT COLUMN: CONTENT (The Mission Brief) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                <span className="text-brand-primary font-mono text-sm tracking-widest uppercase">
                  System: Online
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                ABOUT <span className="text-gradient">US</span>
              </h2>
            </motion.div>

            {/* Main Text */}
            <motion.div variants={itemVariants} className="space-y-4 text-gray-300 font-sans leading-relaxed text-lg">
              <p>
                <strong className="text-white">Entrepreneurship Cell MANIT Bhopal is a voluntary, student-run organisation focused on creating a thriving entrepreneurial environment and an innovative startup culture among the youth community.</strong>
              </p>
              <p>
                With a dynamic lineup of events including <span className="text-brand-accent">Startup Expo, IPL Auction Simulation, Business Plan Competition, Keynote sessions, Stock Trading Simulation, and many more</span> under Central India’s largest entrepreneurial fest E-Summit and our official podcast series Pe-Charcha, we aim to feature industry leaders, venture capitalists, alumni founders and investors, to nurture budding innovators and young visionaries. Backed with a strong network of alumni and sponsors, every year E-Cell continues to ignite ambition and inspire bold ideas, empowering the youth to make things happen.
              </p>
            </motion.div>

            {/* Stats HUD */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 glass-card border-l-2 border-brand-secondary rounded-r-md">
                  <div className="text-2xl font-heading font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Action Button */}
            {/* <motion.div variants={itemVariants} className="mt-4">
              <button className="group flex items-center gap-3 text-brand-primary font-heading font-bold tracking-widest uppercase hover:text-white transition-colors">
                <span>Read Full Manifesto</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div> */}

            <motion.div variants={itemVariants} className="mt-4">
              {/* Change <button> to <a> */}
              <a
                href="/broucher.pdf"
                download="Manifesto.pdf"
                className="group flex items-center gap-3 text-brand-primary font-heading font-bold tracking-widest uppercase hover:text-white transition-colors"
              >
                <span>Read Full Manifesto</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>


          </motion.div>


          {/* --- RIGHT COLUMN: VIDEO TERMINAL & SPONSOR --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col gap-8"
          >
            {/* 1. The Video Frame (Futuristic Monitor Look) */}
            <div className="relative group">
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-brand-primary/20 blur-[50px] -z-10 group-hover:bg-brand-primary/30 transition-all duration-500" />

              {/* The Frame Container */}
              <div className="relative z-10 p-1 bg-linear-to-br from-gray-700 via-gray-900 to-gray-800 rounded-lg clip-path-gaming border border-white/10">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-brand-accent z-20" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-brand-primary z-20" />

                {/* The Video (YouTube Embed Placeholder) */}
                <div className="aspect-video w-full bg-black rounded overflow-hidden relative">
                  {/* Overlay (Removed when video plays in real implementation) */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-10" />

                  {/* Replace this iframe with your actual video ID */}
                  <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/a9lfRswWt0U?si=clkZTFh_In9Ik4qO"
                    title="ESummit Aftermovie"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Label under video */}
              <div className="flex justify-between mt-2 px-2 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                <span>File: Aftrmv_2025.mp4</span>
                <span>Size: 4K Render</span>
              </div>
            </div>

            {/* 2. Strategic Alliance (Sponsor Section) */}
            <div className="relative mt-4">
              <div className="absolute -top-3 left-4 bg-gaming-950 px-2 text-xs text-brand-secondary font-bold tracking-widest uppercase border border-brand-secondary/30 rounded-sm">
                Strategic Alliance
              </div>

              <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center gap-6">
                {/* Sponsor Logo Placeholder */}
                <div className="w-full sm:w-1/3 bg-white p-4 rounded flex items-center justify-center h-16">
                  {/* Use an actual img tag here */}
                  <img src="assets/currentSponsor/Sail_logo.jpg" alt="Steel Authority of India Limited Logo" className="max-h-full object-contain" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-white font-heading font-bold text-lg">Steel Authority of India Limited</h4>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    Driving India's progress for decades. A hallmark of excellence in the nation's steel industry.
                  </p>
                  <a href="#" className="text-brand-accent text-xs mt-2 inline-block hover:underline">
                    Initiate Protocol (Know More) &gt;
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// import React from "react";
// import { motion } from "framer-motion";

// // --- Animation Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { type: "spring", stiffness: 60 },
//   },
// };

// // --- Mock Data ---
// const stats = [
//   { label: "Footfall", value: "30K+" },
//   { label: "Startups", value: "50+" },
//   { label: "Events", value: "10+" },
//   { label: "Investors", value: "100+" },
// ];

// const AboutSection = () => {
//   return (
//     <section className="relative w-full py-24 px-6 lg:px-20 overflow-hidden bg-gaming-950 border-b border-white/5">

//       {/* Background Grid Accent (Subtle) */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(to_left,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-size-[40px_100%] pointer-events-none" />

//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

//           {/* --- LEFT COLUMN: CONTENT (The Mission Brief) --- */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="flex flex-col gap-6"
//           >
//             {/* Header */}
//             <motion.div variants={itemVariants}>
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
//                 <span className="text-brand-primary font-mono text-sm tracking-widest uppercase">
//                   System: Online
//                 </span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
//                 ABOUT <span className="text-gradient">US</span>
//               </h2>
//             </motion.div>

//             {/* Main Text */}
//             <motion.div
//               variants={itemVariants}
//               className="space-y-4 text-gray-300 font-sans leading-relaxed text-lg"
//             >
//               <p>
//                 <strong className="text-white">
//                   Entrepreneurship Cell MANIT Bhopal is a voluntary, student-run
//                   organisation focused on creating a thriving entrepreneurial
//                   environment and an innovative startup culture among the youth
//                   community.
//                 </strong>
//               </p>
//               <p>
//                 With a dynamic lineup of events including{" "}
//                 <span className="text-brand-accent">
//                   Startup Expo, IPL Auction Simulation, Business Plan
//                   Competition, Keynote sessions, Stock Trading Simulation
//                 </span>
//                 , and many more under Central India’s largest entrepreneurial
//                 fest E-Summit and our official podcast series Pe-Charcha, we aim
//                 to feature industry leaders, venture capitalists, alumni
//                 founders and investors, to nurture budding innovators and young
//                 visionaries.
//               </p>
//             </motion.div>

//             {/* Stats HUD */}
//             <motion.div
//               variants={itemVariants}
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
//             >
//               {stats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="p-4 glass-card border-l-2 border-brand-secondary rounded-r-md bg-white/5 backdrop-blur-sm"
//                 >
//                   <div className="text-2xl font-heading font-bold text-white">
//                     {stat.value}
//                   </div>
//                   <div className="text-xs text-gray-400 uppercase tracking-wider">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>

//             {/* Action Button */}
//            <motion.div variants={itemVariants} className="mt-6">
//   <a
//     href="/brochure.pdf"
//     download="MANIT_ECell_Manifesto.pdf"
//     className="group relative z-10 inline-flex items-center gap-3 text-indigo-400 font-bold tracking-widest uppercase hover:text-white transition-colors"
//   >
//     <span>Read Full Manifesto</span>
//     <span className="group-hover:translate-x-1 transition-transform">
//       →
//     </span>
//   </a>
// </motion.div>
//           </motion.div>

//           {/* --- RIGHT COLUMN: VIDEO TERMINAL & SPONSOR --- */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative flex flex-col gap-8"
//           >
//             {/* 1. The Video Frame (Futuristic Monitor Look) */}
//             <div className="relative group">
//               {/* Glow Behind */}
//               <div className="absolute inset-0 bg-brand-primary/20 blur-[50px] -z-10 group-hover:bg-brand-primary/30 transition-all duration-500" />

//               {/* The Frame Container */}
//               <div className="relative z-10 p-1 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-800 rounded-lg clip-path-gaming border border-white/10">
//                 {/* Decorative Corners */}
//                 <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-brand-accent z-20" />
//                 <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-brand-primary z-20" />

//                 {/* The Video */}
//                 <div className="aspect-video w-full bg-black rounded overflow-hidden relative">
//                   <iframe
//                     className="w-full h-full object-cover"
//                     src="https://www.youtube.com/embed/a9lfRswWt0U?si=clkZTFh_In9Ik4qO"
//                     title="ESummit Aftermovie"
//                     loading="lazy"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>

//               {/* Label under video */}
//               <div className="flex justify-between mt-2 px-2 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
//                 <span>File: Aftrmv_2025.mp4</span>
//                 <span>Size: 4K Render</span>
//               </div>
//             </div>

//             {/* 2. Strategic Alliance (Sponsor Section) */}
//             <div className="relative mt-4">
//               <div className="absolute -top-3 left-4 bg-gaming-950 px-2 text-xs text-brand-secondary font-bold tracking-widest uppercase border border-brand-secondary/30 rounded-sm z-10">
//                 Strategic Alliance
//               </div>

//               <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center gap-6 bg-white/5 hover:bg-white/10 transition-colors">
//                 {/* Sponsor Logo */}
//                 <div className="w-full sm:w-1/3 bg-white p-4 rounded flex items-center justify-center h-16">
//                   <img
//                     src="assets/currentSponsor/Sail_logo.jpg"
//                     alt="SAIL Logo"
//                     className="max-h-full object-contain"
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.parentNode.innerText = 'Logo Unavailable';
//                       e.target.parentNode.classList.add('text-black', 'text-xs', 'font-bold');
//                     }}
//                   />
//                 </div>

//                 <div className="flex-1 text-center sm:text-left">
//                   <h4 className="text-white font-heading font-bold text-lg">
//                     Steel Authority of India Limited
//                   </h4>
//                   <p className="text-sm text-gray-400 mt-1 line-clamp-2">
//                     Driving India's progress for decades. A hallmark of
//                     excellence in the nation's steel industry.
//                   </p>
//                   <a
//                     href="https://www.sail.co.in"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-brand-accent text-xs mt-2 inline-block hover:underline"
//                   >
//                     Initiate Protocol (Know More) &gt;
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;