'use client'

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  Cpu, Zap, Gamepad2, Sparkles, Paintbrush, Camera,
  Music, Trophy, Rocket, MapPin, Terminal
} from 'lucide-react';
import FinalTeamSection from '../components/Varun/speakerTeam';
import MusicPlayer from '../components/Varun/music';

// Data Arrays
const Keynotes = [
  {
    id: 1,
    name: "Ashneer Grover",
    power: "Shark Logic",
    icon: <Zap size={14} />,
    img: "/guests/ashneer-grover.avif"
  },
  {
    id: 2,
    name: "Tanu Jain",
    power: "Visionary Admin",
    icon: <Sparkles size={14} />,
    img: "/guests/tanu-jain.jpeg"
  },
  {
    id: 3,
    name: "Prafull Billore",
    power: "Brewing Success",
    icon: <Rocket size={14} />,
    img: "/guests/prafull-billore.jpeg"
  },
  {
    id: 4,
    name: "Sandeep Jain",
    power: "Algorithm Master",
    icon: <Terminal size={14} />,
    img: "/guests/sandeep-jain.jpeg"
  },
  {
    id: 5,
    name: "Anubhav Dubey",
    power: "Chai Empire",
    icon: <Gamepad2 size={14} />,
    img: "/guests/anubhav-dubey.jpg"
  },
  {
    id: 6,
    name: "Nitin Vijay",
    power: "Motion Physics",
    icon: <Cpu size={14} />,
    img: "/guests/nitin-vijay.jpeg"
  },
  {
    id: 7,
    name: "Dr. Gajendra Purohit",
    power: "Maths Wizard",
    icon: <Sparkles size={14} />,
    img: "/guests/gajendra-purohit.jpeg"
  },
  {
    id: 8,
    name: "Zev Siegl",
    power: "Global Roast",
    icon: <Zap size={14} />,
    img: "/guests/zey-siegel.jpeg"
  },
  {
    id: 9,
    name: "Sanjeev Agrawal",
    power: "Sage Wisdom",
    icon: <Trophy size={14} />,
    img: "/guests/sanjeev-agrawal.jpeg"
  },
  {
    id: 10,
    name: "Vikas Swarup",
    power: "Diplomatic Script",
    icon: <MapPin size={14} />,
    img: "/guests/vikas-swarup.jpeg"
  },
  {
    id: 11,
    name: "Siddharth Chaturvedi",
    power: "Skill Architect",
    icon: <Cpu size={14} />,
    img: "/guests/siddharth-chaturvedi.jpg"
  },
  {
    id: 12,
    name: "Uttaran Nayak",
    power: "Creative Flow",
    icon: <Paintbrush size={14} />,
    img: "/guests/uttaran-nayak.jpg"
  },
];

const Creators = [
  {
    id: 1,
    name: "Abhishek Upmanyu",
    style: "Stand-up Comic",
    icon: <Music size={18} />,
    img: "/guests/abhishek-upmanyu.jpg"
  },
  {
    id: 2,
    name: "Haseeb Khan",
    style: "Stand-up Comic",
    icon: <Zap size={18} />,
    img: "/guests/haseeb-khan.jpeg"
  },
  {
    id: 3,
    name: "Nidhi Narwal",
    style: "Live Performer",
    icon: <Sparkles size={18} />,
    img: "/guests/nidhi-narwal.jpeg"
  },
  {
    id: 4,
    name: "Gaurav Juyal",
    style: "Experience Designer",
    icon: <Paintbrush size={18} />,
    img: "/guests/gaurav-juyal.jpeg"
  },
  {
    id: 5,
    name: "Laksh Maheshwari",
    style: "Storyteller",
    icon: <Camera size={18} />,
    img: "/guests/laksh-maheshwari.jpeg"
  },
  {
    id: 7,
    name: "Mohit Yodha",
    style: "Pop Culture",
    icon: <Gamepad2 size={18} />,
    img: "/guests/mohit-yodha.png"
  }
];

const MultiThemeGallery = () => {
  // GSAP REFS FOR INFINITE LOGIC
  const keynoteTrackRef = useRef(null);
  const keynoteTween = useRef(null);
  const creatorTrackRef = useRef(null);
  const creatorTween = useRef(null);

  useEffect(() => {
    // Keynote Animation Logic
    if (keynoteTrackRef.current) {
      const kWidth = keynoteTrackRef.current.scrollWidth / 2;
      keynoteTween.current = gsap.to(keynoteTrackRef.current, {
        x: -kWidth,
        duration: 40,
        ease: 'none',
        repeat: -1
      });
    }

    // Creator Animation Logic
    if (creatorTrackRef.current) {
      const cWidth = creatorTrackRef.current.scrollWidth / 2;
      creatorTween.current = gsap.to(creatorTrackRef.current, {
        x: -cWidth,
        duration: 25,
        ease: 'none',
        repeat: -1
      });
    }

    return () => {
      keynoteTween.current?.kill();
      creatorTween.current?.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden font-sans scroll-smooth">
      <MusicPlayer musicUrl="ss-theme.mp3" stationName="Subway Radio" accentColor="#2BA4D9" />

      {/* --- SECTION 1: GAMING UI KEYNOTES --- */}
      <section
        className="relative py-12 md:py-18 bg-[#020617] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.95)), url('https://r.jina.ai/i/0f10c634b33b499997ca6834160a0f82')` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 border-2 border-dashed border-cyan-500/10 rounded-full pointer-events-none"
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-row justify-between items-start lg:items-end gap-4 mb-10 md:mb-16">
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-cyan-500 mb-2 md:mb-4 font-mono uppercase tracking-[0.2em] text-[9px] md:text-xs"
              >
                <div className="w-6 md:w-12 h-[1px] bg-cyan-500 animate-pulse" /> [ Accessing Intel ]
              </motion.div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-[0.9] md:leading-tight relative">
                Keynote <span className="text-cyan-500 underline decoration-cyan-500/30">Sessions</span>
                <span className="absolute -top-1 -left-1 text-cyan-500/10 blur-[1px] select-none text-2xl md:text-5xl opacity-50">Keynote Sessions</span>
              </h2>
              <div className="hidden sm:block bg-slate-900/40 border border-cyan-500/20 p-4 md:p-5 rounded-sm backdrop-blur-md relative mt-6 md:mt-8 max-w-md lg:max-w-none shadow-2xl">
                <div className="absolute -top-px left-4 w-12 md:w-20 h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <div className="text-slate-300 font-mono text-[10px] md:text-sm leading-relaxed">
                  <Terminal className="inline mr-2 text-cyan-500" size={14} />
                  <p className="inline">Step into the next stage with your favourite influential creators and artists who share their journeys to success and recognition. Engage, interact and level up your entrepreneurial game through inspiring talks and dynamic Q&A rounds.</p>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: [5, 12, 5], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="text-cyan-400/30 md:text-cyan-400/40 shrink-0 pt-2"
            >
              <Gamepad2 className="w-16 h-16 sm:w-32 sm:h-32 md:w-[200px] md:h-[200px]" strokeWidth={2} />
            </motion.div>
          </div>

          <p className="block sm:hidden text-slate-400 font-mono text-[10px] mb-8 leading-tight border-l border-cyan-500/50 pl-3">
            Industry titans deconstruct the future of interactive media.
          </p>

          {/* INFINITE KEYNOTE TRACK */}
          <div
            className="relative flex overflow-hidden py-6 md:py-10 -mx-4 md:mx-0"

          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-cyan-500/40 z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-cyan-500/40 z-20 pointer-events-none" />

            <div ref={keynoteTrackRef} className="flex gap-4 md:gap-8 whitespace-nowrap w-max"
            onMouseEnter={() => keynoteTween.current?.pause()}
            onMouseLeave={() => keynoteTween.current?.play()}
            >
              {[...Keynotes, ...Keynotes].map((s, idx) => (
                <div key={idx} className="w-[220px] md:w-[320px] group flex-shrink-0 cursor-crosshair">
                  <div className="bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 p-1 clip-path-gaming transition-all duration-500 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative overflow-hidden aspect-[1/1]">
                      <img src={s.img} alt={s.name} className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4">
                        <span className="bg-cyan-600 text-[7px] md:text-[10px] px-1.5 py-0.5 md:px-2 md:py-1 font-bold text-black uppercase shadow-[1px_1px_0px_#000]">
                          {s.power}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 md:p-4 flex justify-between items-center bg-slate-950/90">
                      <h3 className="text-white text-[11px] md:text-base font-bold tracking-tight italic uppercase group-hover:text-cyan-400 transition-colors">
                        {s.name}
                      </h3>
                      <div className="text-cyan-500 scale-75 md:scale-100">{s.icon}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* --- DIVIDER --- */}
      <div className="relative h-24 md:h-40 bg-[#020617] overflow-hidden -mt-[1px]">
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-[#28b3eb] translate-y-[1px]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)' }}
        />
      </div>

      {/* --- SECTION 2: CREATORS CAMP --- */}
      <section className="py-16 md:py-24 bg-[#28b3eb] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:opacity-40 bg-blend-multiply pointer-events-none"
          style={{ backgroundImage: `url('/ccBg.png')`, maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
        />

        <div className="mx-auto container px-4 md:px-6 relative z-10 mb-12 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative pt-8 md:pt-10 text-center lg:text-left">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-top-10 lg:-left-10 bg-pink-500 text-white font-black px-4 py-1 md:px-6 md:py-2 rotate-[-5deg] lg:rotate-[-15deg] border-2 md:border-4 border-black z-20 text-sm md:text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                COMING SOON..
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] uppercase leading-[0.9] tracking-tighter">
                CREATOR'S <br /> <span className="inline-block mt-2">CAMP</span>
              </h2>
            </div>

            <motion.div
              whileHover={{ rotate: 1 }}
              className="bg-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative rotate-1 mx-auto max-w-md lg:max-w-none"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <Rocket size={24} className="text-pink-600 md:w-8 md:h-8" />
                <h4 className="font-black text-xl md:text-3xl text-black italic uppercase">The Vibe Check</h4>
              </div>
              <p className="text-black font-bold text-sm md:text-lg leading-snug">
                Join our creators for hands-on workshops in street-style fashion and beat-making. 🛹
              </p>
            </motion.div>
          </div>
        </div>

        {/* INFINITE CREATOR TRACK */}
        <div
          className="relative w-full overflow-hidden py-8 md:py-12"
          onMouseEnter={() => creatorTween.current?.pause()}
          onMouseLeave={() => creatorTween.current?.play()}
        >
          <div ref={creatorTrackRef} className="flex gap-6 md:gap-12 whitespace-nowrap px-4 w-max">
            {[...Creators, ...Creators].map((c, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15, rotate: 0, scale: 1.02, shadow: "15px 15px 0px 0px rgba(0,0,0,1)" }}
                initial={{ rotate: idx % 2 === 0 ? 1 : -1 }}
                className="w-[240px] md:w-[300px] flex-shrink-0 bg-white border-4 border-black p-4 md:p-5 rounded-[40px] md:rounded-[50px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
              >
                <div className="rounded-[30px] md:rounded-[40px] overflow-hidden border-2 md:border-4 border-black aspect-square mb-4 md:mb-5 relative">
                  <motion.img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <motion.div whileHover={{ scale: 1.2 }} className="absolute top-3 right-3 md:top-4 md:right-4 bg-white p-1.5 md:p-2 rounded-full border-2 border-black shadow-sm">
                    <MapPin size={14} className="text-pink-600" />
                  </motion.div>
                </div>
                <div className="flex justify-between items-center text-black px-1">
                  <div>
                    <h3 className="font-black italic text-lg md:text-2xl uppercase tracking-tighter group-hover:text-pink-600 transition-colors">{c.name}</h3>
                    <p className="font-bold text-[10px] text-slate-500 uppercase tracking-widest">{c.style}</p>
                  </div>
                  <motion.div whileHover={{ rotate: 360 }} className="bg-green-400 p-2 md:p-3 rounded-xl md:rounded-2xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {React.cloneElement(c.icon, { size: 16 })}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER TRANSITION --- */}
      <div className="relative h-20 md:h-32 bg-[#28b3eb] overflow-hidden -mt-[1px]">
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-[#020617] translate-y-[1px]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 0 0)' }}
        />
      </div>

      <FinalTeamSection members={Creators} />

      <style jsx>{`
        .clip-path-gaming { clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%); }
      `}</style>
    </div>
  );
};

export default MultiThemeGallery;