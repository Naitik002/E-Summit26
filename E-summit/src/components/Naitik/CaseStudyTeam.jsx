import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram, Shield, Cpu } from 'lucide-react';

const CaseStudyTeam = () => {
   // REPLACE THESE WITH REAL ORGANIZERS
   const team = [
      { name: "Sanskar Srivastava", role: "Web Development Lead", img: "./teamCase/Sanskar Shrivastava.jpeg", linkedin: "https://www.linkedin.com/in/sanskar-shrivastava-813322206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    insta: "https://www.instagram.com/sanskar.shrivastava_95?igsh=a2VpbWEyemwweXRv",
    mail: "mailto:snskrshrvstv@gmail.com"},
      { name: "Hiya Sanghvi", role: "Events Lead", img: "./teamCase/Hiya Sanghvi.webp",linkedin: "http://www.linkedin.com/in/hiya-sanghvi10",
    insta: "https://instagram.com/_._hiyaaa_._/",
    mail: "mailto:hiyasanghvi037@gmail.com" },
   ];

   return (
      <section className="py-24 px-6 bg-black border-t border-zinc-900 relative overflow-hidden">

         {/* Background Elements to match previous sections */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-900 to-transparent"></div>

         <div className="max-w-7xl mx-auto relative z-10">

            {/* Header */}
            <div className="text-center mb-20">
               <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 rounded-full bg-zinc-900/50 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Operators Online</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
                  Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Centre</span>
               </h2>
            </div>

            <div className="flex md:flex-row flex-col max-3xl mx-auto items-center justify-center gap-8">
               {team.map((member, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="group relative"
                  >
                     {/* Card Container - "ID Badge Style" */}
                     <div className="relative bg-zinc-900/50 backdrop-blur-sm border-l-2 border-zinc-800 hover:border-purple-500 transition-all duration-300 h-full overflow-hidden">

                        {/* Top Bar Decoration */}
                        <div className="h-1 w-full bg-gradient-to-r from-zinc-800 to-transparent group-hover:from-purple-500 transition-all duration-500"></div>

                        {/* Image Area (Square/Rectangular for tech look) */}
                        <div className="relative h-[300px] overflow-hidden border-b border-zinc-800">
                           <div className="absolute inset-0 bg-purple-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay"></div>

                           {/* Scanning Line Effect */}

                           <img
                              src={member.img}
                              alt={member.name}
                              className="w-full h-full object-cover  group-hover:-0 scale-100 group-hover:scale-110 transition-all duration-700"
                           />

                           {/* Corner Tech bits */}
                           <div className="absolute bottom-2 right-2 z-20">
                              <Cpu size={16} className="text-white/50 group-hover:text-cyan-400 transition-colors" />
                           </div>
                        </div>

                        {/* Info Area */}
                        <div className="p-6">
                           <div className="flex justify-between items-start mb-2">
                              <div>
                                 <h3 className="text-lg font-bold text-white uppercase tracking-wide group-hover:text-purple-400 transition-colors">{member.name}</h3>
                                 <p className="text-xs text-cyan-500 font-mono tracking-widest uppercase">{member.role}</p>
                              </div>
                              <Shield size={16} className="text-zinc-700 group-hover:text-purple-500 transition-colors" />
                           </div>

                           {/* Divider */}
                           <div className="h-px w-full bg-zinc-800 my-4 group-hover:bg-zinc-700 transition-colors"></div>

                           {/* Socials */}
                           <div className="flex gap-4">
                              <a href={member.linkedin} className="text-gray-500 hover:text-white hover:bg-blue-600/20 p-1.5 rounded-sm transition-all"><Linkedin size={16} /></a>
                              <a href={member.mail} className="text-gray-500 hover:text-white hover:bg-purple-600/20 p-1.5 rounded-sm transition-all"><Mail size={16} /></a>
                              <a href={member.insta} className="text-gray-500 hover:text-white hover:bg-pink-600/20 p-1.5 rounded-sm transition-all"><Instagram size={16} /></a>
                           </div>
                        </div>

                        {/* Background Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default CaseStudyTeam;