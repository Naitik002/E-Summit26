

import React from "react";
import { motion } from "framer-motion";

// --- 1. CURRENT DATA (2025) ---
const newSponsors = {
  topTier: [
    { id: 'n1', role: "Powered By", name: "SAGE University", logo: "assets/2026/sage.webp", link: "https://sageuniversity.in/" },
    { id: 'n2', role: "Co-Powered By", name: "B-Nest", logo: "assets/2026/bnest.png", link: "https://bnest.in/" }
  ],
  partners: [
    { id: 'n3', role: "EV Partner", name: "Kinetic Green", logo: "assets/2026/kinetic.jpg", link: "https://kineticgreenvehicles.com/" },
    { id: 'n4', role: "Supporting Partner", name: "Ruh Cafe", logo: "assets/2026/ruh.jpeg", link: "http://zoma.to/r/20889009" },
    { id: 'n5', role: "Supporting Partner", name: "Badastoor", logo: "assets/2026/badastoor.png", link: "https://share.google/sw09s0C5MCo0HjVv3" },
    { id: 'n6', role: "Esport Partner", name: "Meta Space", logo: "assets/2026/metaspace.png", link: "" },
    { id: 'n7', role: "EdTech Partner", name: "Koed", logo: "assets/2026/Koed.png", link: "https://koed.co.in/" },
    { id: 'n8', role: "Venture Partner", name: "Tie Indore", logo: "assets/2026/teindore.JPG", link: "https://indore.tie.org/" },
    { id: 'n9', role: "Your Logo", name: "Join Us", logo: "", isPlaceholder: true, link: "/contact" }
  ]
};

// --- 2. PAST DATA (Split into 3 Tiers for the 3 Rows) ---

// ROW 1: THE GIANTS (Big Corps, Banks, Famous Brands)
const pastRow1 = [
  { id: 201, logo: "assets/Sponsors/adani.webp" },
  { id: 8, logo: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/organization/6513dff2b47f991415b97010/theme/assets/logo.585ee55e92cbfa83ebf252e23e095a4b.png" },
  { id: 210, logo: "assets/Sponsors/aws.webp" },
  { id: 10, logo: "assets/currentSponsor/starbucks.png" },
  { id: 1, logo: "assets/currentSponsor/Sail_logo.jpg" },
  { id: 5, logo: "assets/Sponsors/sidbi.jpg" },
  { id: 207, logo: "assets/Sponsors/bob.webp" },
  { id: 9, logo: "assets/currentSponsor/pvr.png" },
  { id: 211, logo: "assets/Sponsors/Canva.webp" },
  { id: 218, logo: "assets/Sponsors/jiosaavn.webp" },
  { id: 42, logo: "assets/currentSponsor/instax.png" },
  { id: 43, logo: "assets/currentSponsor/lapino.png" },
];

// ROW 2: ECOSYSTEM & TECH
const pastRow2 = [
  { id: 2, logo: "assets/currentSponsor/unstop.png" },
  { id: 11, logo: "assets/currentSponsor/wadhwani.jpg" },
  { id: 4, logo: "assets/Sponsors/raphe-mphibr.png" },
  { id: 3, logo: "assets/Sponsors/aicrntu.webp" },
  { id: 20, logo: "assets/currentSponsor/easemytrip.png" },
  { id: 224, logo: "assets/media-partner/inshorts.jpg" },
  { id: 107, logo: "assets/currentSponsor/dailyhunt.svg" },
  { id: 229, logo: "assets/Sponsors/redfm.webp" },
  { id: 220, logo: "assets/Sponsors/Icreate.webp" },
  { id: 204, logo: "assets/Sponsors/coingape.png" },
  { id: 102, logo: "assets/currentSponsor/techstory.jpg" },
  { id: 24, logo: "assets/currentSponsor/stockedge.png" },
  { id: 12, logo: "assets/currentSponsor/images (3).jpg" },
];

// ROW 3: STARTUPS & COMMUNITY
const pastRow3 = [
  { id: 101, logo: "assets/currentSponsor/startupnewsfyi.jpeg" },
  { id: 213, logo: "assets/Sponsors/startupvisors.webp" },
  { id: 226, logo: "assets/Sponsors/papertrade.webp" },
  { id: 225, logo: "assets/Sponsors/teachnook.webp" },
  { id: 14, logo: "assets/currentSponsor/utho.png" },
  { id: 15, logo: "assets/currentSponsor/interviewbuddy.svg" },
  { id: 19, logo: "assets/currentSponsor/greensole.png" },
  { id: 31, logo: "assets/currentSponsor/feedingtrends.jpeg" },
  { id: 37, logo: "assets/currentSponsor/TPF.png" },
  { id: 46, logo: "assets/currentSponsor/powsos.jpg" },
  { id: 32, logo: "assets/currentSponsor/educationtree.png" },
  { id: 34, logo: "assets/currentSponsor/tieud.png" },
];

const SponsorsSection = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gaming-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Our <span className="text-brand-primary">Allies</span>
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm">
            Powering the ecosystem through strategic collaboration.
          </p>
        </div>

        {/* --- 1. CURRENT HEADLINERS --- */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-4 mb-10 opacity-70">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-brand-accent"></div>
            <span className="text-brand-accent font-mono text-xs tracking-[0.3em] uppercase text-center">
              Powered & Co-Powered By
            </span>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-brand-accent"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {newSponsors.topTier.map((sponsor) => (
              <div key={sponsor.id} className="flex flex-col items-center gap-3">
                <span className="text-white/60 font-mono text-[10px] uppercase tracking-widest">
                  {sponsor.role}
                </span>
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-64 h-32 md:w-80 md:h-40 bg-white rounded-xl flex items-center justify-center p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                  </motion.div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* --- 2. CURRENT PARTNERS (Fixed Overlapping) --- */}
        <div className="mb-24">
          <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Official Partners</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {newSponsors.partners.map((sponsor) => (
              <a key={sponsor.id} href={sponsor.link} target={sponsor.isPlaceholder ? "_self" : "_blank"} rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  // FIX: Added 'justify-between' and specific padding. Removed absolute positioning.
                  className={`w-40 h-32 md:w-48 md:h-36 bg-white border border-white/5 rounded-lg flex flex-col items-center justify-between p-4 hover:shadow-lg transition-all duration-300 group relative ${sponsor.isPlaceholder ? "opacity-80 border-dashed border-gray-400 bg-transparent justify-center" : ""}`}
                >
                  {sponsor.isPlaceholder ? (
                    <div className="flex flex-col items-center text-gray-400 group-hover:text-gray-600">
                      <span className="text-2xl mb-1">+</span>
                      <span className="text-xs font-mono">Partner With Us</span>
                    </div>
                  ) : (
                    <>
                      {/* FIX: Dedicated container for the logo that takes up space but doesn't overlap */}
                      <div className="w-full h-20 flex items-center justify-center overflow-hidden">
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                      </div>

                      {/* FIX: Static text block that sits under the logo */}
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter text-center w-full leading-tight">
                        {sponsor.role}
                      </span>
                    </>
                  )}
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* --- 3. PAST SPONSORS (3 SLIDING ROWS) --- */}
        <div className="pt-10 border-t border-white/5">
          <div className="flex items-center justify-center gap-4 mb-12 opacity-50">
            <span className="text-white font-mono text-xs tracking-widest uppercase">Legacy & Past Allies</span>
          </div>

          <div className="flex flex-col gap-6 relative">

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-gaming-950 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-gaming-950 to-transparent pointer-events-none"></div>

            <MarqueeRow items={pastRow1} direction="left" speed={40} />
            <MarqueeRow items={pastRow2} direction="right" speed={30} />
            <MarqueeRow items={pastRow3} direction="left" speed={45} />

          </div>
        </div>

      </div>
    </section>
  );
};

// --- Reusable Marquee Row Component ---
const MarqueeRow = ({ items, direction = "left", speed }) => {
  return (
    <div className="relative flex overflow-x-hidden group">
      <motion.div
        className="flex gap-4"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity
        }}
        style={{ width: "fit-content" }}
      >
        {[...items, ...items].map((sponsor, idx) => (
          <div
            key={`${sponsor.id}-${idx}`}
            className="w-40 h-20 bg-white border border-white/5 rounded flex-shrink-0 flex items-center justify-center p-3 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img src={sponsor.logo} alt="sponsor" className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SponsorsSection;