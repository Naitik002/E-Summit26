import React from "react";
import { motion } from "framer-motion";

// --- Data Structure ---
// Organized by tiers: Tier 1 (Big), Tier 2 (Grid), Tier 3 (Small/Media)
const sponsors = {
  title: [
    { id: 1, name: "SAIL", logo: "/assets/sponsors/sail.png", alt: "Steel Authority of India" },
    { id: 2, name: "Unstop", logo: "/assets/sponsors/unstop.png", alt: "Unstop" }
  ],
  gold: [
    { id: 3, name: "Amazon AWS", logo: "/api/placeholder/150/80" },
    { id: 4, name: "Red Bull", logo: "/api/placeholder/150/80" },
    { id: 5, name: "GeeksForGeeks", logo: "/api/placeholder/150/80" },
    { id: 6, name: "Coding Ninjas", logo: "/api/placeholder/150/80" },
    { id: 7, name: "Domino's", logo: "/api/placeholder/150/80" },
    { id: 8, name: "EaseMyTrip", logo: "/api/placeholder/150/80" },
    { id: 9, name: "MyFM", logo: "/api/placeholder/150/80" },
    { id: 10, name: "MPT Tourism", logo: "/api/placeholder/150/80" },
  ],
  media: [
    { id: 11, name: "News18", logo: "/api/placeholder/120/60" },
    { id: 12, name: "The Hindu", logo: "/api/placeholder/120/60" },
    { id: 13, name: "Times of India", logo: "/api/placeholder/120/60" },
    { id: 14, name: "Dainik Bhaskar", logo: "/api/placeholder/120/60" },
    { id: 15, name: "Radio Mirchi", logo: "/api/placeholder/120/60" },
  ]
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const SponsorsSection = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gaming-950 border-t border-white/5">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Our <span className="text-brand-primary">Allies</span>
          </h2>
          <p className="text-gray-400 mt-2 font-mono text-sm">
            Powering the ecosystem through strategic collaboration.
          </p>
        </div>

        {/* --- TIER 1: TITLE SPONSORS (Co-Title) --- */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-brand-accent"></div>
            <span className="text-brand-accent font-mono text-xs tracking-[0.3em] uppercase">Headline Sponsors</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-brand-accent"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {sponsors.title.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="w-64 h-32 md:w-80 md:h-40 bg-white rounded-xl flex items-center justify-center p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                {/* Logo Image */}
                <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- TIER 2: GOLD / PAST SPONSORS --- */}
        <div className="mb-20">
           <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Official Partners</h3>

           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
           >
             {sponsors.gold.map((sponsor) => (
               <motion.div
                 key={sponsor.id}
                 variants={itemVariants}
                 className="h-24 bg-gaming-900 border border-white/5 rounded-lg flex items-center justify-center p-4 hover:border-brand-secondary/50 hover:bg-gaming-800 transition-all duration-300 group"
               >
                 {/* Replaced White Box with Dark Container + White Logo Logic */}
                 <div className="w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    {/* Placeholder for text if image missing, else img */}
                    {sponsor.logo.includes("placeholder") ? (
                        <span className="text-gray-400 font-bold font-heading text-sm group-hover:text-white">{sponsor.name}</span>
                    ) : (
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 w-auto" />
                    )}
                 </div>
               </motion.div>
             ))}
           </motion.div>
        </div>

        {/* --- TIER 3: MEDIA PARTNERS --- */}
        <div>
           <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Media & Outreach</h3>

           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="flex flex-wrap justify-center gap-4"
           >
             {sponsors.media.map((sponsor) => (
               <motion.div
                 key={sponsor.id}
                 variants={itemVariants}
                 className="w-40 h-16 bg-black/40 border border-white/5 rounded flex items-center justify-center p-2 hover:border-brand-accent/30 transition-colors"
               >
                 <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{sponsor.name}</span>
               </motion.div>
             ))}
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;