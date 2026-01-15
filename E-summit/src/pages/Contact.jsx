import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, MapPin, Globe, Gamepad2, Headphones, MousePointer2, Zap, Sword, Linkedin, Instagram, Phone, CheckCircle, Loader2 } from 'lucide-react';

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE";


// Reusable Floating Element
const FloatingItem = ({ children, delay = 0, xOffset = 50, yOffset = 50, duration = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        x: [-xOffset, xOffset, -xOffset],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
      className="absolute z-0 opacity-20 pointer-events-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  // --- TEAM DATA ---
 const team = [
  {
    name: "Nachiket Bakshi",
    role: "Joint Secretary",
    img: "./team_images/Nachiket Bakshi.webp",
    color: "from-cyan-500 to-blue-500",
    socials: {
        linkedin: "https://www.linkedin.com/in/BakshiNachiket",
        insta: "https://instagram.com/nachiketbakshi",
        mail: "mailto:nachiket11bakshi@gmail.com",
        phone: "7000616813"
    }
  },
  {
    name: "Khushi Verma",
    role: "Administrative Lead",
    img: "./team_images/Khushi Verma.webp",
    color: "from-purple-500 to-pink-500",
    socials: {
        linkedin: "https://www.linkedin.com/in/khushi-verma-966416290",
        insta: "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
        mail: "mailto:kv6265@gmail.com",
        phone: "6265872942"
    }
  },
  {
    name: "Nidhi Singh Thakur",
    role: "Promotions Lead",
    img: "./team_images/Nidhi Singh Thakur.webp",
    color: "from-yellow-500 to-orange-500",
    socials: {
        linkedin: "https://www.linkedin.com/in/nidhi-singh-thakur-17a69a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        insta: "https://www.instagram.com/_nidhiix_?igsh=MWgzc3BpYm9tYndndQ==",
        mail: "mailto:pvt.nidhisingh07@gmail.com",
        phone: "9479606424"
    }
  },
  {
    name: "Sannidhya Srivastava",
    role: "Strategic Lead",
    img: "./team_images/Sannidhya Srivastava.webp",
    color: "from-green-500 to-emerald-500",
    socials: {
        linkedin: "https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/",
        insta: "https://www.instagram.com/_sann1dh_/",
        mail: "mailto:sannidhya123567@gmail.com",
        phone: "7024107999"
    }
  },
  {
    name: "Hiya Sanghvi",
    role: "Events Lead",
    img: "./team_images/Hiya Sanghvi.webp",
    color: "from-rose-500 to-red-500",
    socials: {
        linkedin: "http://www.linkedin.com/in/hiya-sanghvi10",
        insta: "https://instagram.com/_._hiyaaa_._/",
        mail: "mailto:hiyasanghvi037@gmail.com",
        phone: "7000092259"
    }
  }
];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
    })
    .then((res) => {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000); // Reset after 5 seconds
    })
    .catch((err) => {
        console.error(err);
        setFormStatus("error");
    });
  };

  return (
    <section className="min-h-screen bg-[#000000] text-white relative overflow-hidden py-24 px-6 flex items-center justify-center font-sans">

      {/* --- BACKGROUND FX --- */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/40 rounded-full blur-[150px] opacity-40 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-cyan-900/40 rounded-full blur-[150px] opacity-40 animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-20"></div>

      {/* Floating Props */}
      <div className="absolute top-20 left-20"><FloatingItem><Gamepad2 size={120} className="text-purple-500/30" /></FloatingItem></div>
      <div className="absolute bottom-40 right-20"><FloatingItem delay={5}><Headphones size={150} className="text-cyan-500/30" /></FloatingItem></div>


      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="text-center mb-12">
             <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 animate-gradient-x">
                Contact <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Nexus</span>
             </h2>
             <p className="text-cyan-400 font-mono text-lg mt-2 uppercase tracking-widest">Establish Uplink // Send Data</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* --- LEFT: COMPACT FORM --- */}
          <div>
               <div className="relative bg-zinc-900/80 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">

                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-cyan-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10"></div>

                  {formStatus === "success" ? (
                      <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                          <CheckCircle size={64} className="text-green-500 animate-bounce" />
                          <h3 className="text-2xl font-black uppercase italic">Transmission Complete</h3>
                          <p className="text-gray-400">Our agents will contact you shortly.</p>
                      </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        {/* Name Input */}
                        <div className="relative group/input">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-cyan-400 transition-colors">
                                <User size={20} />
                            </div>
                            <input
                                name="Name" // For Google Sheets
                                type="text"
                                required
                                placeholder="Gamertag / Name"
                                className="w-full bg-black/60 border border-white/10 rounded-lg py-3 pl-12 text-white font-bold focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all placeholder:text-gray-600"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative group/input">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-purple-400 transition-colors">
                                <Mail size={20} />
                            </div>
                            <input
                                name="Email" // For Google Sheets
                                type="email"
                                required
                                placeholder="Comm Link (Email)"
                                className="w-full bg-black/60 border border-white/10 rounded-lg py-3 pl-12 text-white font-bold focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all placeholder:text-gray-600"
                            />
                        </div>

                        {/* Textarea */}
                        <div className="relative group/input">
                            <div className="absolute left-4 top-4 text-gray-500 group-focus-within/input:text-cyan-400 transition-colors">
                                <MessageSquare size={20} />
                            </div>
                            <textarea
                                name="Message" // For Google Sheets
                                required
                                rows="4"
                                placeholder="Mission Briefing..."
                                className="w-full bg-black/60 border border-white/10 rounded-lg py-3 pl-12 text-white font-bold focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all placeholder:text-gray-600 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            disabled={formStatus === "submitting"}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-black uppercase text-xl rounded-lg relative overflow-hidden group/btn shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover/btn:left-[100%] transition-all duration-700"></div>

                            {formStatus === "submitting" ? (
                                <><Loader2 className="animate-spin" /> Transmitting...</>
                            ) : (
                                <><Send size={24} strokeWidth={3} /> Transmit Data</>
                            )}
                        </motion.button>
                    </form>
                  )}
               </div>
          </div>


          {/* --- RIGHT: BIG TEAM CARDS (With Icons) --- */}
          <div className="space-y-6">
              <div className="flex items-center gap-3 pl-2">
                   <Sword size={24} className="text-cyan-400" />
                   <h3 className="text-2xl font-black uppercase italic text-white">Active Agents</h3>
              </div>

              <div className="flex flex-col gap-5">
                {team.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="relative h-32 bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden group cursor-pointer flex"
                    >
                        {/* Gradient Border Line */}
                        <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${member.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20`}></div>

                        {/* Avatar Image */}
                        <div className="w-32 relative z-10 overflow-hidden shrink-0">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/80"></div>
                        </div>

                        {/* Info & Icons */}
                        <div className="flex-1 p-4 flex flex-col justify-center relative z-10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-xl font-black text-white uppercase italic group-hover:text-cyan-400 transition-colors">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 font-mono uppercase tracking-widest flex items-center gap-2 mb-2">
                                        <Zap size={12} className="fill-purple-500 text-purple-500" /> {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* SOCIAL ICONS ROW (Reveals/Brightens on Hover) */}
                            <div className="flex gap-4 mt-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={member.socials.linkedin} className="hover:text-blue-500 hover:scale-110 transition-all"><Linkedin size={18} /></a>
                                <a href={member.socials.insta} className="hover:text-pink-500 hover:scale-110 transition-all"><Instagram size={18} /></a>
                                <a href={member.socials.mail} className="hover:text-white hover:scale-110 transition-all"><Mail size={18} /></a>
                             <a href={`tel:${member.socials.phone}`} className="hover:text-green-500 hover:scale-110 transition-all"><Phone size={18} /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;