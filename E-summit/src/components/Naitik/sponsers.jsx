// import React from "react";
// import { motion } from "framer-motion";

// // --- Data Structure ---
// // Organized by tiers: Tier 1 (Big), Tier 2 (Grid), Tier 3 (Small/Media)
// const sponsors = {
//   title: [
//     { id: 1, name: "SAIL", logo: "/assets/sponsors/sail.png", alt: "Steel Authority of India" },
//     { id: 2, name: "Unstop", logo: "/assets/sponsors/unstop.png", alt: "Unstop" }
//   ],
//   gold: [
//     { id: 3, name: "Amazon AWS", logo: "/api/placeholder/150/80" },
//     { id: 4, name: "Red Bull", logo: "/api/placeholder/150/80" },
//     { id: 5, name: "GeeksForGeeks", logo: "/api/placeholder/150/80" },
//     { id: 6, name: "Coding Ninjas", logo: "/api/placeholder/150/80" },
//     { id: 7, name: "Domino's", logo: "/api/placeholder/150/80" },
//     { id: 8, name: "EaseMyTrip", logo: "/api/placeholder/150/80" },
//     { id: 9, name: "MyFM", logo: "/api/placeholder/150/80" },
//     { id: 10, name: "MPT Tourism", logo: "/api/placeholder/150/80" },
//   ],
//   media: [
//     { id: 11, name: "News18", logo: "/api/placeholder/120/60" },
//     { id: 12, name: "The Hindu", logo: "/api/placeholder/120/60" },
//     { id: 13, name: "Times of India", logo: "/api/placeholder/120/60" },
//     { id: 14, name: "Dainik Bhaskar", logo: "/api/placeholder/120/60" },
//     { id: 15, name: "Radio Mirchi", logo: "/api/placeholder/120/60" },
//   ]
// };

// // --- Animations ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1 }
// };

// const SponsorsSection = () => {
//   return (
//     <section className="relative w-full py-20 px-6 bg-gaming-950 border-t border-white/5">

//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
//             Our <span className="text-brand-primary">Allies</span>
//           </h2>
//           <p className="text-gray-400 mt-2 font-mono text-sm">
//             Powering the ecosystem through strategic collaboration.
//           </p>
//         </div>

//         {/* --- TIER 1: TITLE SPONSORS (Co-Title) --- */}
//         <div className="mb-20">
//           <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
//             <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-brand-accent"></div>
//             <span className="text-brand-accent font-mono text-xs tracking-[0.3em] uppercase">Headline Sponsors</span>
//             <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-brand-accent"></div>
//           </div>

//           <div className="flex flex-wrap justify-center gap-8 md:gap-12">
//             {sponsors.title.map((sponsor) => (
//               <motion.div
//                 key={sponsor.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="w-64 h-32 md:w-80 md:h-40 bg-white rounded-xl flex items-center justify-center p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all duration-300 relative overflow-hidden group"
//               >
//                 {/* Shine Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

//                 {/* Logo Image */}
//                 <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* --- TIER 2: GOLD / PAST SPONSORS --- */}
//         <div className="mb-20">
//            <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Official Partners</h3>

//            <motion.div
//              variants={containerVariants}
//              initial="hidden"
//              whileInView="visible"
//              viewport={{ once: true }}
//              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
//            >
//              {sponsors.gold.map((sponsor) => (
//                <motion.div
//                  key={sponsor.id}
//                  variants={itemVariants}
//                  className="h-24 bg-gaming-900 border border-white/5 rounded-lg flex items-center justify-center p-4 hover:border-brand-secondary/50 hover:bg-gaming-800 transition-all duration-300 group"
//                >
//                  {/* Replaced White Box with Dark Container + White Logo Logic */}
//                  <div className="w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
//                     {/* Placeholder for text if image missing, else img */}
//                     {sponsor.logo.includes("placeholder") ? (
//                         <span className="text-gray-400 font-bold font-heading text-sm group-hover:text-white">{sponsor.name}</span>
//                     ) : (
//                         <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 w-auto" />
//                     )}
//                  </div>
//                </motion.div>
//              ))}
//            </motion.div>
//         </div>

//         {/* --- TIER 3: MEDIA PARTNERS --- */}
//         <div>
//            <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Media & Outreach</h3>

//            <motion.div
//              variants={containerVariants}
//              initial="hidden"
//              whileInView="visible"
//              viewport={{ once: true }}
//              className="flex flex-wrap justify-center gap-4"
//            >
//              {sponsors.media.map((sponsor) => (
//                <motion.div
//                  key={sponsor.id}
//                  variants={itemVariants}
//                  className="w-40 h-16 bg-black/40 border border-white/5 rounded flex items-center justify-center p-2 hover:border-brand-accent/30 transition-colors"
//                >
//                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">{sponsor.name}</span>
//                </motion.div>
//              ))}
//            </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SponsorsSection;




import React from "react";
import { motion } from "framer-motion";

// --- Data: Populated from your HTML ---
const sponsors = {
  headline: [
    { id: 1, name: "SAIL", logo: "assets/currentSponsor/Sail_logo.jpg", link: "https://www.sail.co.in/en" },
    { id: 2, name: "Unstop", logo: "assets/currentSponsor/unstop.png", link: "https://unstop.com/" }
  ],
  current: [
    { id: 3, name: "AIC-RNTU", logo: "assets/Sponsors/aicrntu.webp", link: "https://www.aicrntu.com/" },
    { id: 4, name: "Raphe mPhibr", logo: "assets/Sponsors/raphe-mphibr.png", link: "https://www.raphe.com/" },
    { id: 5, name: "SIDBI", logo: "assets/Sponsors/sidbi.jpg", link: "https://www.sidbi.in/" },
    { id: 6, name: "B-Nest", logo: "assets/currentSponsor/bnest.png", link: "https://bnest.in/index.html" },
    { id: 7, name: "Ekspe", logo: "assets/currentSponsor/ekspe.png", link: "https://ekspeindia.com/" },
    { id: 8, name: "Reliance Trends", logo: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/organization/6513dff2b47f991415b97010/theme/assets/logo.585ee55e92cbfa83ebf252e23e095a4b.png", link: "https://reliancetrends.com/" },
    { id: 9, name: "PVR Cinemas", logo: "assets/currentSponsor/pvr.png", link: "https://www.pvrcinemas.com/" },
    { id: 10, name: "Starbucks", logo: "assets/currentSponsor/starbucks.png", link: "https://www.starbucks.in/" },
    { id: 11, name: "Wadhwani Foundation", logo: "assets/currentSponsor/wadhwani.jpg", link: "https://wadhwanifoundation.org/" },
    { id: 12, name: "Hyundai Surjeet", logo: "assets/currentSponsor/images (3).jpg", link: "https://surjeet.hyundaimotor.in/" },
    { id: 13, name: "StartupNews.fyi", logo: "assets/currentSponsor/startupnewsfyi.jpeg", link: "https://startupnews.fyi/" },
    { id: 14, name: "Utho", logo: "assets/currentSponsor/utho.png", link: "https://utho.com/" },
    { id: 15, name: "Interview Buddy", logo: "assets/currentSponsor/interviewbuddy.svg", link: "https://interviewbuddy.net/" },
    { id: 16, name: "MP Tie", logo: "assets/currentSponsor/mptie.png", link: "https://mp.tie.org/" },
    { id: 17, name: "JITO JIIF", logo: "assets/currentSponsor/jito-jiif.webp", link: "https://www.jitojiif.com/" },
    { id: 18, name: "Impactful Pitch", logo: "assets/currentSponsor/impactfulpitch-logo.png", link: "https://www.impactfulpitch.com/" },
    { id: 19, name: "Greensole", logo: "assets/currentSponsor/greensole.png", link: "https://www.greensole.com/" },
    { id: 20, name: "EaseMyTrip", logo: "assets/currentSponsor/easemytrip.png", link: "https://www.easemytrip.com/" },
    { id: 21, name: "StartLabs", logo: "assets/currentSponsor/startlabss.jpg", link: "https://startlabs.co/" },
    { id: 22, name: "Startupholic Catalyst", logo: "assets/currentSponsor/startuppholiccatalyst.jpeg", link: "https://www.linkedin.com/company/startupholiccatalyst/?originalSubdomain=in" },
    { id: 23, name: "Startup Visors", logo: "assets/currentSponsor/startupvisors.png", link: "https://startupvisors.com/" },
    { id: 24, name: "StockEdge", logo: "assets/currentSponsor/stockedge.png", link: "https://stockedge.com/" },
    { id: 25, name: "Starworks", logo: "assets/currentSponsor/starworks.jpeg", link: "https://starworks.world/" },
    { id: 26, name: "WeStraty", logo: "assets/currentSponsor/westraty.jpeg", link: "https://westraty.com/" },
    { id: 27, name: "Purpose", logo: "assets/currentSponsor/purpose.png", link: "#" },
    { id: 28, name: "StockGro", logo: "assets/currentSponsor/stockgro.webp", link: "https://www.stockgro.club/" },
    { id: 29, name: "Lawgical Startup", logo: "assets/currentSponsor/lawgical.png", link: "https://lawgicalstartup.com/" },
    { id: 30, name: "CallerDesk", logo: "assets/currentSponsor/callerdesk.svg", link: "https://callerdesk.io/" },
    { id: 31, name: "Feeding Trends", logo: "assets/currentSponsor/feedingtrends.jpeg", link: "https://feedingtrends.com/" },
    { id: 32, name: "The Education Tree", logo: "assets/currentSponsor/educationtree.png", link: "https://www.theeducationtree.com/" },
    { id: 33, name: "The Startup Lab", logo: "assets/currentSponsor/startuplab.png", link: "https://thestartuplab.in/" },
    { id: 34, name: "TiE Udaipur", logo: "assets/currentSponsor/tieud.png", link: "https://udaipur.tie.org/" },
    { id: 35, name: "Stories Beyond Frames", logo: "assets/currentSponsor/SBF.jpg", link: "https://www.instagram.com/storiesbeyondframes/" },
    { id: 36, name: "TechStory", logo: "assets/currentSponsor/techstory.jpg", link: "https://techstory.in/" },
    { id: 37, name: "The Product Folks", logo: "assets/currentSponsor/TPF.png", link: "https://www.theproductfolks.com/" },
    { id: 38, name: "Delhi Angels Den", logo: "assets/currentSponsor/dad.jpeg", link: "https://www.linkedin.com/company/delhiangelsden/?originalSubdomain=in" },
    { id: 39, name: "EnsureKar", logo: "assets/currentSponsor/ensurekar.jpeg", link: "https://www.ensurekar.in/" },
    { id: 40, name: "Karo Startup", logo: "assets/currentSponsor/karostartup.png", link: "https://thekarostartup.com/" },
    { id: 41, name: "India Accelerator", logo: "assets/currentSponsor/ia.png", link: "https://www.indiaaccelerator.co/" },
    { id: 42, name: "Instax", logo: "assets/currentSponsor/instax.png", link: "https://www.instax.in/" },
    { id: 43, name: "Lapinoz Pizza", logo: "assets/currentSponsor/lapino.png", link: "https://lapinozpizza.in/" },
    { id: 44, name: "AA Gaming", logo: "assets/currentSponsor/aa gaming.jpg", link: "https://www.linkedin.com/company/i-s-a/?originalSubdomain=in" },
    { id: 45, name: "Nainaa's Kitchen", logo: "assets/currentSponsor/nainaa.png", link: "https://nainaaskitchen.com/" },
    { id: 46, name: "PW School of Startups", logo: "assets/currentSponsor/powsos.jpg", link: "https://www.linkedin.com/company/pw-school-of-startups/?originalSubdomain=in" },
  ],
  media: [
    { id: 101, name: "StartupNews.fyi", logo: "assets/currentSponsor/startupnewsfyi.jpeg", link: "https://startupnews.fyi/" },
    { id: 102, name: "TechStory", logo: "assets/currentSponsor/techstory.jpg", link: "https://techstory.in/" },
    { id: 103, name: "Karo Startup", logo: "assets/currentSponsor/karostartup.png", link: "https://thekarostartup.com/" },
    { id: 104, name: "The Global Hues", logo: "assets/currentSponsor/globalhues.webp", link: "https://theglobalhues.com/" },
    { id: 105, name: "Entrepreneurs of India", logo: "assets/currentSponsor/entofindia.png", link: "https://www.theentrepreneursofindia.in/" },
    { id: 106, name: "Feedbox", logo: "assets/currentSponsor/feedbox.png", link: "https://feedbox.co.in/" },
    { id: 107, name: "Dailyhunt", logo: "assets/currentSponsor/dailyhunt.svg", link: "https://m.dailyhunt.in/" },
    { id: 108, name: "NoticeBard", logo: "assets/currentSponsor/noticeboard.png", link: "https://noticebard.com/" },
    { id: 109, name: "ED Times", logo: "assets/currentSponsor/edtimes.jpg", link: "https://edtimes.in/" },
    { id: 110, name: "OhCampus", logo: "assets/currentSponsor/OhCampus.png", link: "ohcampus.com" },
    { id: 111, name: "Public Vani", logo: "assets/media-partner/publicvani.jpg", link: "https://www.publicvaninews.com/" },
  ],
  past: [
    { id: 201, name: "Adani", logo: "assets/Sponsors/adani.webp", link: "https://www.adani.com/" },
    { id: 202, name: "Rupeezy", logo: "assets/Sponsors/rupeexy.webp", link: "https://rupeezy.com/" },
    { id: 203, name: "AIC-RNTU", logo: "assets/Sponsors/aicrntu.webp", link: "https://www.aicrntu.com/" },
    { id: 204, name: "CoinGape", logo: "assets/Sponsors/coingape.png", link: "https://coingape.com/" },
    { id: 205, name: "Raphe mPhibr", logo: "assets/Sponsors/raphe-mphibr.png", link: "https://www.raphemphibr.com/" },
    { id: 206, name: "IIMCIP", logo: "assets/Sponsors/iimip.jpg", link: "https://www.iimcip.org/" },
    { id: 207, name: "Bank of Baroda", logo: "assets/Sponsors/bob.webp", link: "https://www.bankofbaroda.in/" },
    { id: 208, name: "Bhopal Angels", logo: "assets/Sponsors/bhopal_angels.webp", link: "https://bhopalangels.com/" },
    { id: 209, name: "Wadhwani Foundation", logo: "assets/Sponsors/Wadhwani-Foundation-Logo.png", link: "https://www.wfglobal.org/" },
    { id: 210, name: "AWS", logo: "assets/Sponsors/aws.webp", link: "https://aws.amazon.com/" },
    { id: 211, name: "Canva", logo: "assets/Sponsors/Canva.webp", link: "https://www.canva.com/" },
    { id: 212, name: "Taskade", logo: "assets/Sponsors/Taskade.webp", link: "https://www.taskade.com/" },
    { id: 213, name: "Startup Visors", logo: "assets/Sponsors/startupvisors.webp", link: "https://www.startupvisors.com/" },
    { id: 214, name: "ReckLabs", logo: "assets/Sponsors/RECKLABS.webp", link: "https://recklabs.com/" },
    { id: 215, name: "MSG91", logo: "assets/Sponsors/MSG91.webp", link: "https://msg91.com/" },
    { id: 216, name: "I Am Startup", logo: "assets/Sponsors/iamstartup.jpg", link: "https://www.iamstartup.co/" },
    { id: 217, name: "Give My Certificate", logo: "assets/Sponsors/arrow.webp", link: "https://givemycertificate.com/" },
    { id: 218, name: "JioSaavn", logo: "assets/Sponsors/jiosaavn.webp", link: "https://www.jiosaavn.com/" },
    { id: 219, name: "Sixth Sense", logo: "assets/Sponsors/sixthsenselogo.webp", link: "https://sixthsensecrm.com/" },
    { id: 220, name: "iCreate", logo: "assets/Sponsors/Icreate.webp", link: "https://icreate.org.in/" },
    { id: 221, name: "Kitab Lovers", logo: "assets/Sponsors/kitab_lovers.webp", link: "https://kitablovers.com/" },
    { id: 222, name: "Unstop", logo: "assets/Sponsors/unstop.webp", link: "https://unstop.com/" },
    { id: 223, name: "MGU", logo: "assets/Sponsors/logo-small-mgu.png", link: "https://www.mgu.ac.in/" },
    { id: 224, name: "Inshorts", logo: "assets/media-partner/inshorts.jpg", link: "https://inshorts.com/" },
    { id: 225, name: "Teachnook", logo: "assets/Sponsors/teachnook.webp", link: "https://teachnook.com/" },
    { id: 226, name: "PaperTrade", logo: "assets/Sponsors/papertrade.webp", link: "https://papertrade.io/" },
    { id: 227, name: "SheKunj", logo: "assets/Sponsors/shekunj.svg", link: "https://shekunj.com/" },
    { id: 228, name: "Boudhik", logo: "assets/Sponsors/boudhik.webp", link: "https://boudhik.in/" },
    { id: 229, name: "Red FM", logo: "assets/Sponsors/redfm.webp", link: "https://www.redfmindia.in/" },
  ]
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
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

        {/* --- TIER 1: HEADLINE SPONSORS (SAIL & Unstop) --- */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-8 opacity-70">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-brand-accent"></div>
            <span className="text-brand-accent font-mono text-xs tracking-[0.3em] uppercase">Headline Sponsors</span>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-brand-accent"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {sponsors.headline.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="w-64 h-32 md:w-80 md:h-40 bg-white rounded-xl flex items-center justify-center p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  {/* Logo Image */}
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </motion.div>
              </a>
            ))}
          </div>
        </div>

        {/* --- TIER 2: OFFICIAL PARTNERS (Current) --- */}
        <div className="mb-20">
           <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Official Partners</h3>

           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
           >
             {sponsors.current.map((sponsor) => (
               <a key={sponsor.id} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                 <motion.div
                   variants={itemVariants}
                   className="h-24 bg-gaming-900 border border-white/5 rounded-lg flex items-center justify-center p-4 hover:border-brand-secondary/50 hover:bg-gaming-800 transition-all duration-300 group relative overflow-hidden"
                 >
                   <div className="w-full h-full flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                      <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain" />
                   </div>
                 </motion.div>
               </a>
             ))}
           </motion.div>
        </div>

        {/* --- TIER 3: MEDIA PARTNERS --- */}
        <div className="mb-20">
           <h3 className="text-center text-xl font-heading font-bold text-white mb-8">Media & Outreach</h3>

           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="flex flex-wrap justify-center gap-4"
           >
             {sponsors.media.map((sponsor) => (
               <a key={sponsor.id} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                 <motion.div
                   variants={itemVariants}
                   className="w-40 h-16 bg-black/40 border border-white/5 rounded flex items-center justify-center p-2 hover:border-brand-accent/30 transition-colors group relative"
                 >
                   {/* Logo inside media box */}
                   <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                 </motion.div>
               </a>
             ))}
           </motion.div>
        </div>

        {/* --- TIER 4: PAST SPONSORS --- */}
        <div>
           <div className="flex items-center justify-center gap-4 mb-8 opacity-50 mt-20">
               <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">Past Allies</span>
           </div>

           <motion.div
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500"
           >
             {sponsors.past.map((sponsor) => (
               <a key={sponsor.id} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                 <motion.div
                   variants={itemVariants}
                   className="h-20 bg-black/20 border border-white/5 rounded flex items-center justify-center p-3 hover:bg-white/5 transition-colors"
                 >
                   <img src={sponsor.logo} alt={sponsor.name} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all" />
                 </motion.div>
               </a>
             ))}
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SponsorsSection;