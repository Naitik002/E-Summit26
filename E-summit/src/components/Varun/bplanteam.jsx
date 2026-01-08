import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Laptop, Landmark, Zap, Instagram, Linkedin } from 'lucide-react';

const BplanTeam = () => {
  const colors = {
    sapGreen: "#47761E",
    jasmine: "#FED985",
    darkSalmon: "#F09E71",
    iceberg: "#61B5CB",
  };

  const crewMembers = [
    {
      name: "Athak Ramgir",
      role: "The Fixer", // Event Manager
      specialty: "Mission Coordination",
      icon: <ShieldCheck size={20} />,
      color: "#61B5CB", // iceberg
      img: "./teambplan/Athak Ramgir.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/athak-ramgir-717a94323/",
        insta: "https://www.instagram.com/athak_ramgir/",
        mail: "mailto:athakramgir39@gmail.com"
      }
    },
    {
      name: "Harsh Salunkhe",
      role: "The Architect", // Web Developer
      specialty: "System Infiltration",
      icon: <Laptop size={20} />,
      color: "#FED985", // jasmine
      img: "./teambplan/Harsh Salunkhe.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/harsh-salunkhe-136638337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        insta: "https://www.instagram.com/harsh_salunkhe05?igsh=a3JmNDNzY3FqcWNm",
        mail: "mailto:harshsalunkhe120526@gmail.com"
      }
    },
    {
      name: "Samridhi Bhargava",
      role: "The Intel", // Content Writer
      specialty: "Manifesto & Comms",
      icon: <Zap size={20} />,
      color: "#D5A0C4", // orchid
      img: "./teambplan/Samridhi.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/samridhi-bhargava-aab847358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        insta: "https://www.instagram.com/sam.ridhi_bhargava?igsh=dm8ya2g5bjkyZGp5",
        mail: "mailto:samridhibhargava2432005@gmail.com"
      }
    },
    {
      name: "Yashika Agrawal",
      role: "The Enforcer", // Event Manager
      specialty: "Field Operations & Logistics",
      icon: <Landmark size={20} />,
      color: "#F09E71", // darkSalmon
      img: "./teambplan/Yashika Agrawal.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/yashika-agrawal-965bb6313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        insta: "https://www.instagram.com/_yashikaagrawal?igsh=MW04ZzZ3NmNhY3pnZw==",
        mail: "mailto:27yashikaagrawal@gmail.com"
      }
    }
];

  return (
    <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      {/* Background HUD Decorative Text */}
      <div className="absolute top-0 left-0 w-full text-[15vw] font-black text-white/[0.02] select-none uppercase italic leading-none pt-10">
        The Crew
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-none">
              CREW <span style={{ color: colors.sapGreen }}>MEMBERS</span>
            </h2>
            <p className="mt-4 text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Assemble the ultimate syndicate for the big pitch</p>
          </motion.div>
          
          <div className="hidden md:block h-px flex-1 mx-10 bg-white/10 mb-6"></div>
          
          <div className="text-right">
             <div className="text-white/20 font-mono text-xs uppercase mb-1">Status: Active</div>
             <div className="h-1 w-32 bg-red-600 ml-auto"></div>
          </div>
        </div>

        {/* Crew Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {crewMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Character Card */}
              <div className="relative overflow-hidden bg-black p-1 transition-all duration-300 group-hover:-translate-y-4">
                {/* The Character Image */}
                <div className="relative aspect-[3/4] overflow-hidden transition-all duration-500 border-b-8" style={{ borderBottomColor: member.color }}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover contrast-110 brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Skill/Role Tag Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                     <div className="flex items-center gap-2 mb-1" style={{ color: member.color }}>
                        {member.icon}
                        <span className="text-[10px] font-black uppercase tracking-widest">{member.role}</span>
                     </div>
                  </div>
                </div>

                {/* Back of Card / Info Overlay on Hover (Optional) */}
                <div className="p-5 bg-[#151515]">
                  <h3 className="text-md font-black text-white uppercase italic tracking-tighter mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                    {member.specialty}
                  </p>
                  
                  {/* Social HUD */}
                  <div className="flex gap-4 pt-4 border-t border-white/5">
                     <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram size={18}/></a>
                     <a href="#" className="text-white/30 hover:text-white transition-colors"><Linkedin size={18}/></a>
                  </div>
                </div>

                {/* Corner Label (GTA Character Style) */}
                <div 
                    className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: member.color }}
                >
                    <span className="text-black font-black text-lg italic">0{index + 1}</span>
                </div>
              </div>

              {/* Decorative Shadow Blur */}
              <div 
                className="absolute -z-10 inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: member.color }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retro scanline overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[length:100%_2px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
    </section>
  );
};

export default BplanTeam;