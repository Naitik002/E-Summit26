import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Split Data into Two Teams for the Rows ---
const allSpeakers = [
  // ... (Your existing array of 12 speakers here)
  { id: 1, name: "Ashneer Grover", role: "Founder, BharatPe", image: "/assets/speakers/ashneer.jpg", color: "from-blue-500 to-cyan-400" },
  { id: 2, name: "Dr. Mohan Yadav", role: "CM, Madhya Pradesh", image: "/assets/speakers/mohan-yadav.jpg", color: "from-orange-500 to-yellow-400" },
  { id: 3, name: "Nitin Vijay", role: "Founder, Motion Edu", image: "/assets/speakers/nitin-vijay.jpg", color: "from-green-500 to-emerald-400" },
  { id: 4, name: "Anubhav Dubey", role: "CSB Founder", image: "/assets/speakers/anubhav.jpg", color: "from-red-500 to-pink-500" },
  { id: 5, name: "Dr. Tanu Jain", role: "Civil Servant", image: "/assets/speakers/tanu-jain.jpg", color: "from-purple-500 to-indigo-400" },
  { id: 6, name: "UK07 Rider", role: "Creator", image: "/assets/speakers/uk07.jpg", color: "from-yellow-400 to-red-500" },
  { id: 7, name: "Abhishek Upmanyu", role: "Comedian", image: "/assets/speakers/abhishek.jpg", color: "from-pink-500 to-rose-400" },
  { id: 8, name: "Prafull Billore", role: "MBA Chai Wala", image: "/assets/speakers/prafull.jpg", color: "from-teal-400 to-blue-500" },
  { id: 9, name: "Physics Wallah", role: "EdTech Unicorn", image: "/api/placeholder/400/500", color: "from-indigo-500 to-blue-600" },
  { id: 10, name: "Sandeep Jain", role: "Founder, GFG", image: "/api/placeholder/400/500", color: "from-green-400 to-lime-500" },
  { id: 11, name: "Aman Dhattarwal", role: "Influencer", image: "/api/placeholder/400/500", color: "from-orange-400 to-red-500" },
  { id: 12, name: "Shark Investor", role: "Angel Investor", image: "/api/placeholder/400/500", color: "from-gray-200 to-white" }
];

const row1 = allSpeakers.slice(0, 6);
const row2 = allSpeakers.slice(6, 12);

// --- The Card Component ---
const SpeakerCard = ({ speaker }) => (
  <div className="relative group w-[280px] h-[160px] flex-shrink-0 mx-4 cursor-pointer">
    {/* Base Container */}
    <div className="absolute inset-0 bg-gaming-900 border border-white/10 rounded-lg overflow-hidden flex transition-all duration-300 group-hover:scale-110 group-hover:border-white/40 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] z-0 group-hover:z-20">

      {/* Image Half */}
      <div className="w-1/2 h-full relative">
        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
        <div className={`absolute inset-0 bg-gradient-to-r ${speaker.color} mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity`} />
      </div>

      {/* Text Half */}
      <div className="w-1/2 h-full bg-gaming-950 p-4 flex flex-col justify-center border-l border-white/5 relative overflow-hidden">
        {/* Animated Background Line */}
        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${speaker.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

        <h3 className="text-white font-heading font-bold text-lg leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {speaker.name}
        </h3>
        <p className="text-gray-500 text-xs font-mono uppercase tracking-tighter line-clamp-2">
          {speaker.role}
        </p>

        {/* Micro-Interaction Arrow */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
      </div>
    </div>
  </div>
);

// --- The Marquee Component ---
const MarqueeRow = ({ items, direction = "left", speed = 30 }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-6 group/track">
      {/* The Trick: We render the list TWICE.
         We animate the container to move -50% (halfway), then reset instantly to 0.
         This creates a perfect infinite loop.
      */}
      <motion.div
        className="flex"
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        // The "Time Freeze" Hack: When hovering the track, we slow animation way down (or pause if you prefer)
        style={{ width: "fit-content" }}
      >
        {/* Render duplicate sets for seamless loop */}
        {[...items, ...items, ...items, ...items].map((speaker, idx) => (
          <SpeakerCard key={`${speaker.id}-${idx}`} speaker={speaker} />
        ))}
      </motion.div>

      {/* Vignette Fades on Edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gaming-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gaming-950 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

const SpeakersSection = () => {
  return (
    <section className="relative w-full py-20 bg-gaming-950 overflow-hidden border-b border-white/5">

      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10">

        {/* Compact Header */}
        <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
               <span className="text-red-500 font-mono text-xs tracking-widest uppercase">Live Roster</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-none">
              LEGENDS <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">ARCHIVE</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <p className="text-gray-400 text-sm font-mono max-w-xs text-right">
               /// HOVER TO DECRYPT <br/>
               /// PAST_SPEAKERS_DB.JSON
             </p>
          </div>
        </div>

        {/* --- The Infinite Streams --- */}
        <div className="flex flex-col gap-2">
          {/* Row 1: Moves Left */}
          <div className="hover:z-20 relative transition-all">
             <MarqueeRow items={row1} direction="left" speed={40} />
          </div>

          {/* Row 2: Moves Right */}
          <div className="hover:z-20 relative transition-all -mt-4 md:-mt-6">
             <MarqueeRow items={row2} direction="right" speed={45} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpeakersSection;