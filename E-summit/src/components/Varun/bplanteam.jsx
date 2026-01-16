import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Laptop, Landmark, Zap, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const BplanTeam = () => {
  const colors = {
    sapGreen: "#47761E",
    jasmine: "#FED985",
    darkSalmon: "#F09E71",
    iceberg: "#61B5CB",
  };

  const crewMembers = [
    {
      name: "Harsh Malik",
      specialty: "Public Relations Lead",
      color: "#61B5CB", // iceberg
      img: "./teambplan/Harsh malik.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/harsh13malik",
        insta: "https://www.instagram.com/harsh_._malik?igsh=MXI4NXhqdjcxYmlvaA==",
        mail: "mailto:harshmalik96433@gmail.com",
        phone: "tel:+918770377416"
      }
    },
    {
      name: "Gurleen Kaur",
      specialty: "Public Relations Secretary",
      color: "#FED985", // jasmine
      img: "./teambplan/Gurleen Kaur Bhatia.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/gurleen-kaur-bhatia-8613a2290/",
        insta: "https://instagram.com/gurleenkaurbhatia_/",
        mail: "mailto:gurleenbhatia211359@gmail.com",
        phone: "tel:+919009027777"
      }
    },
    {
      name: "Abhinav Ashok",
      specialty: "Operations Lead",
      color: "#FF9F9F", // Pastel Red
      img: "./team_images/Abhinav Ashok.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/abhinav-ashok-2163b0290",
        insta: "https://www.instagram.com/abhi.nav_4?igsh=MXR1N25taDh3eWc4MA==",
        mail: "mailto:abhinav.ashok04@gmail.com",
        phone: "tel:+919771747257"
      }
    },
    {
      name: "Sannidhya Srivastava",
      specialty: "Strategic Lead",
      color: "#A29BFE", // Pastel Purple
      img: "./team_images/Sannidhya Srivastava.webp",
      socials: {
        linkedin: "https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/",
        insta: "https://www.instagram.com/_sann1dh_/",
        mail: "mailto:sannidhya123567@gmail.com",
        phone: "tel:+917607476106"
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
              CONTACT <span style={{ color: colors.sapGreen }}>TEAM</span>
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
        <div className="mx-auto flex flex-wrap max-w-7xl justify-center gap-8 md:gap-6">
          {crewMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group w-[280px]"
            >
              {/* Character Card */}
              <div className="relative overflow-hidden bg-black p-1 transition-all duration-300 group-hover:-translate-y-4 border border-white/5 group-hover:border-white/20">
                {/* The Character Image */}
                <div className="relative h-[300px] overflow-hidden transition-all duration-500 border-b-4" style={{ borderBottomColor: member.color }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover contrast-110 brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Skill/Role Tag Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <div className="flex items-center gap-2 mb-1" style={{ color: member.color }}>
                      <span className="text-[10px] font-black uppercase tracking-widest">{member.specialty}</span>
                    </div>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-5 bg-[#151515]">
                  <h3 className="text-md font-black text-white uppercase italic tracking-tighter mb-4">
                    {member.name}
                  </h3>

                  {/* Social HUD - Updated to include Mail and Phone */}
                  <div className="flex gap-4 pt-4 border-t border-white/5 justify-between">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={18}/>
                    </a>

                    <a
                      href={member.socials.mail}
                      className="text-white/30 hover:text-white transition-colors"
                      title="Email"
                    >
                      <Mail size={18}/>
                    </a>

                    <a
                      href={member.socials.insta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white transition-colors"
                      title="Instagram"
                    >
                      <Instagram size={18}/>
                    </a>

                    <a
                      href={member.socials.phone}
                      className="text-white/30 hover:text-white transition-colors"
                      title="Call"
                    >
                      <Phone size={18}/>
                    </a>
                  </div>
                </div>

                {/* Corner Label (GTA Character Style) */}
                <div
                  className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
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