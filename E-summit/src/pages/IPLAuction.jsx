import React, { useState } from 'react';
import {
  Terminal, Crosshair, Users, Trophy, ChevronRight,
  Activity, Shield, Target, Zap, TrendingUp, AlertTriangle,
  Globe, Clock, MapPin, Eye, Radio,
  Fingerprint,
  ShieldAlert,
  BookOpen,
  Network,
  Cpu,
  Mail, Phone, ShieldCheck, ExternalLink,
  Instagram,
  Linkedin
} from 'lucide-react';
import TargetCursor from '../components/Varun/iplCursor';
import { useNavigate } from 'react-router-dom';
import { User, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import MusicPlayer from '../components/Varun/music';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}
const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}


import {Wifi} from 'lucide-react';



const RecruitmentForm = () => {
  const isLocked = true; 
  const UNSTOP_LINK = "https://unstop.com/your-mission-link";

  const handleDeployment = () => {
    if (isLocked) return;
    window.open(UNSTOP_LINK, '_blank');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="register" className="py-12 px-6  relative overflow-hidden font-mono ">
      {/* Tactical HUD Scanlines Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,2px_100%]"></div>

      <div className="max-w-3xl mx-auto relative z-10 ">
        
        {/* COD STYLE HEADER */}
        <div className="bg-[#0f1115] border-t-2 border-x-2 border-white/10 p-4 flex justify-between items-center ">
          <div className="flex items-center gap-3">
            <Radio size={18} className={isLocked ? "text-red-500" : "text-[#00A63D] animate-pulse"} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                {isLocked ? "COMMS_JAMMED" : "UPLINK_ESTABLISHED_V7.2"}
            </span>
          </div>
          <div className="text-[10px] text-white/20 font-bold">NODE: BPL_CENTRAL</div>
        </div>

        <div className="relative ">
          <motion.div
            className={`bg-[#0f1115]/80 backdrop-blur-md border-2 border-white/10 p-8 md:p-12 shadow-2xl transition-all duration-700  ${isLocked ? 'blur-xl grayscale opacity-30' : ''}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <div className="mb-10 flex justify-between items-start ">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-2">
                    {isLocked ? "ACCESS DENIED" : "JOIN THE STRIKE"}
                </h2>
                <p className="text-[#00A63D]/50 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                    <Wifi size={12} /> External Server: UNSTOP_SECURE_CLOUD
                </p>
              </div>
              <Target className="text-white/10" size={64} />
            </div>

            {/* DEPLOYMENT TERMINAL UI */}
            <div className="space-y-6 bg-black/40 border border-white/5 p-6 mb-8 relative ">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00A63D]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00A63D]" />
                
                <div className="space-y-2 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    <p className="text-white/40">{'>'} INITIALIZING DEPLOYMENT SEQUENCE...</p>
                    <p className="text-white/40">{'>'} ENCRYPTING BIO-SIGNATURES...</p>
                    <p className="text-white/40">{'>'} TARGETING AO: <span className="text-[#00A63D]">UNSTOP_MAIN_HUB</span></p>
                    <p className="text-[#00A63D] animate-pulse mt-4">{'>'} STANDING BY FOR AUTHORIZATION...</p>
                </div>
            </div>

            <button 
                onClick={handleDeployment}
                className="group relative w-full p-1 bg-white/10 hover:bg-[#00A63D]/20 transition-all active:scale-[0.98] cursor-target"
            >
                <div className="bg-[#00A63D] group-hover:bg-[#00A63D] text-black font-black px-10 py-6 flex items-center justify-center gap-4 uppercase text-2xl transition-all italic shadow-[0_0_20px_rgba(0,166,61,0.3)] cursor-target">
                    Initiate Deployment <ChevronRight size={32} />
                </div>
            </button>
            
            <p className="mt-4 text-[9px] text-center text-white/30 uppercase tracking-[0.2em]">
                Clicking above authorizes external data transmission to Unstop servers.
            </p>
          </motion.div>

          {/* SYSTEM LOCKDOWN OVERLAY */}
          {isLocked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 cursor-target">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/90 border-2 border-red-600 p-8 shadow-[0_0_50px_rgba(220,38,38,0.3)] backdrop-blur-2xl cursor-target"
              >
                <AlertTriangle className="text-red-600 mx-auto mb-4 animate-bounce" size={48} />
                <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-2">
                  MISSION CLASSIFIED
                </h3>
                <div className="h-1 w-20 bg-red-600 mx-auto mb-6"></div>
                <p className="text-slate-300 font-bold text-[10px] uppercase tracking-[0.3em] mb-8 leading-loose">
                  Uplink Interrupted by High Command. <br/> 
                  <span className="text-red-600 animate-pulse">Recruitment Terminal: OFFLINE</span>
                </p>
              </motion.div>
            </div>
          )}
        </div>

        {/* HUD FOOTER DATA */}
        <div className="mt-6 flex justify-between items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] cursor-target">
          <div className="flex items-center gap-6">
            <span>GRID: 47_DELTA_9</span>
            <span className="hidden md:inline">ENCRYPTION: AES_256</span>
          </div>
          <div className="flex items-center gap-3">
            <span className={`${isLocked ? 'text-red-600' : 'text-[#00A63D]'} animate-pulse font-black italic`}>
               {isLocked ? "COMM_SILENCE" : "WAITING_ON_GO_SIGNAL"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};



const OrganizingTeamSection = () => {
  const highCommand = [
    {
      imgLink: "./teamipl/Krish Jaiswal.jpg",
      personName: "Krish Jaiswal",
      personVertical: "Event Manager",
      linkedin: "https://www.linkedin.com/in/krish-jaiswal-b6770123b",
      insta: "https://www.instagram.com/philosophical_krish",
      mail: "kjkrishh0982@gmail.com"
    },
    {
      imgLink: "./teamipl/Talha H.jpg",
      personName: "Md. Talha Hussain",
      personVertical: "Event Manager",
      linkedin: "https://www.linkedin.com/in/talha-hussain-9aa84031a",
      insta: "https://www.instagram.com/h_talha147",
      mail: "talhahussain946@gmail.com"
    },
    {
      imgLink: "./teamipl/Gyana Singh.jpg",
      personName: "Gyana Singh",
      personVertical: "Event Manager",
      linkedin: "https://www.linkedin.com/in/gyana-singh-aa9676325",
      insta: "https://www.instagram.com/gyana0905",
      mail: "gyanasingh940@gmail.com"
    },
    {
      imgLink: "./teamipl/Nikunj Mandhanya.jpg",
      personName: "Nikunj Mandhanya",
      personVertical: "Event Manager",
      linkedin: "https://www.linkedin.com/in/nikunj-mandhanya-564666326",
      insta: "https://www.instagram.com/nikunj_mandhanya_05",
      mail: "nikunjmandhanya5@gmail.com"
    },
  ];

  return (


    <section className="py-24 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-green-500 font-black text-xs tracking-widest mb-2">
              <ShieldCheck size={16} /> SECURE COMMS ESTABLISHED
            </div>
            <motion.h2
              className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              High Command
            </motion.h2>
          </div>
          <div className="text-left md:text-right text-slate-500 font-mono text-[10px] uppercase">
            &gt; Authentication: Level 5 Required <br />
            &gt; Status: Online / En-Route
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highCommand.map((member, i) => (
            <motion.div
              key={i}
              className="relative group w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              {/* Card Container */}
              <div className="relative bg-slate-900 border cursor-target border-slate-800 p-6 overflow-hidden transition-all duration-300 group-hover:border-green-500/50 group-hover:bg-slate-900/80 shadow-xl h-full flex flex-col items-center">

                {/* Visual Glitch Decor */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-green-500/5 -mr-6 -mt-6 rotate-45 group-hover:bg-green-500/10 transition-colors"></div>

                <div className="flex flex-col items-center text-center w-full">
                  {/* Profile Image */}
                  <div className="relative w-24 h-24 md:w-40 md:h-40 mb-6 shrink-0">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-500/30 animate-[spin_15s_linear_infinite]"></div>
                    <div className="absolute inset-2 rounded-full border border-slate-700 overflow-hidden bg-slate-800">
                      <img
                        src={member.imgLink}
                        alt={member.personName}
                        className="w-full h-full object-cover contrast-110 group-hover:grayscale-0 group-hover:contrast-125 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Identification */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">{member.personVertical}</p>
                    <h3 className="md:text-md text-lg font-black uppercase italic leading-tight text-slate-100 group-hover:text-green-400 transition-colors">
                      {member.personName}
                    </h3>
                  </div>

                  <div className="mt-4 h-[1px] w-12 bg-green-500/30"></div>

                  {/* Comm-Links */}
                  <div className="mt-8 w-full space-y-2">
                    <a
                      href={member.mail}
                      className="flex items-center cursor-target justify-between p-3 bg-slate-950 border border-slate-800 hover:bg-green-500 hover:text-black transition-all group/link"
                    >
                      <span className="text-[10px] font-black uppercase tracking-tighter">Secure Email</span>
                      <Mail size={14} />
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={member.insta}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center cursor-target justify-center p-3 bg-slate-950 border border-slate-800 hover:border-pink-500 hover:text-pink-500 transition-all"
                      >
                        <Instagram size={16} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center cursor-target justify-center p-3 bg-slate-950 border border-slate-800 hover:border-blue-500 hover:text-blue-500 transition-all"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* HUD Footer Decor */}
              <div className="mt-2 flex justify-between items-center px-2 opacity-30">
                <Terminal size={12} className="text-slate-500" />
                <div className="h-[1px] flex-1 mx-4 bg-slate-800"></div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-green-500"></div>
                  <div className="w-1 h-1 bg-slate-800"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const IPLAuctionWarzone = () => {
  // Fragment to ensure identical content for the infinite loop
  const TickerContent1 = () => (
    <div>
      <span>[TARGET ACQUIRED: R. SHARMA]</span>
      <span>[SQUAD STATUS: ACTIVE]</span>
      <span>[PURSE REMAINING: 850.5 CR]</span>
      <span>[MARKET VOLATILITY: HIGH]</span>
      <span>[UPLINK: SECURE]</span>
      <span>[SIGNAL: OPTIMAL]</span>
    </div>
  );
  const TickerContent2 = () => (
    <div>
      <span>[TARGET ACQUIRED: J. BUMRAH]</span>
      <span>[SQUAD STATUS: ACTIVE]</span>
      <span>[PURSE REMAINING: 810.5 CR]</span>
      <span>[MARKET VOLATILITY: HIGH]</span>
      <span>[UPLINK: SECURE]</span>
      <span>[SIGNAL: OPTIMAL]</span>
    </div>
  );

  const TickerContent3 = () => (
    <div>
      <span>[TARGET ACQUIRED: H. PANDYA]</span>
      <span>[SQUAD STATUS: ACTIVE]</span>
      <span>[PURSE REMAINING: 915.0 CR]</span>
      <span>[MARKET VOLATILITY: MODERATE]</span>
      <span>[UPLINK: SECURE]</span>
      <span>[SIGNAL: OPTIMAL]</span>
    </div>
  );

  const navigate = useNavigate();

  return (
    
    <div className="min-h-screen bg-slate-950 text-slate-100 font-mono selection:bg-green-500/30">

      <MusicPlayer 
    musicUrl="/cod-theme.mp3" 
    stationName="COMMS: OVERLORD" 
    accentColor="#00753A" // Tactical HUD Green
/>

      <TargetCursor
        spinDuration={5}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      {/* 1. INFINITE GLOBAL COMMS TICKER */}
      <div className="bg-black border-b border-green-500/30 py-2 overflow-hidden flex sticky top-0 z-50 backdrop-blur-md">
        <div className="flex animate-marquee whitespace-nowrap gap-10 text-[9px] font-bold uppercase tracking-[0.3em] text-green-500/80">
          <TickerContent1 />
          <TickerContent2 /> {/* Duplicated for seamless transition */}
          <TickerContent3 />
        </div>
      </div>

      {/* 2. HERO SECTION WITH IMAGE BG */}
      <header className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden border-b border-slate-900 mt-5">

        {/* Background Layer: iplbg.png */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: "url('/iplbg.png')" }}
        ></div>

        {/* Tactical Overlays */}
        {/* <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div> */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>

        {/* Floating HUD Element */}
        <div className="absolute top-20 left-10 hidden xl:block border-l border-t border-green-500/20 p-4 z-10">
          <div className="w-48 h-24 bg-slate-900/50 backdrop-blur-sm border border-slate-800 flex items-center justify-center">
            <Radio className="text-green-500 animate-pulse" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {/* Hero Heading */}
            <motion.h1
              className="text-7xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              STRIKE <br />
              <div className="text-transparent md:ml-20 bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">FIRST.</div>
            </motion.h1>

            {/* Hero Badge & Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-3 py-1 px-3 bg-red-500/10 border border-red-500/50 text-red-500 text-[10px] font-black uppercase tracking-widest animate-pulse">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span> Live Combat Simulation
              </motion.div>

              <motion.div variants={fadeUp} className="relative">
                <p className="text-slate-200 text-lg max-w-md leading-tight uppercase font-bold tracking-tight drop-shadow-md">
                  High-Intensity IPL Auction Simulator. <br />
                  <span className="text-green-500 text-sm font-normal normal-case italic">Establish squad dominance through superior financial ballistics.</span>
                </p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => window.location.href = "#form"}
                className="group relative bg-green-600 p-[2px] cursor-target transition-transform active:scale-95"
              >
                <div className="bg-green-600 group-hover:bg-green-500 text-black font-black px-10 py-4 flex items-center gap-3 uppercase text-lg transition-colors">
                  Deploy to AO <ChevronRight size={24} />
                </div>
              </button>
              <button
                onClick={() => window.location.href = "#about"}
                className="border-2 border-slate-100/20 cursor-target hover:border-green-500/50 px-10 py-4 font-black uppercase text-lg transition-all backdrop-blur-md bg-slate-900/40"
              >
                Intel Briefing
              </button>
            </div>
          </div>

          {/* 3. OPERATOR PROFILE CARD */}
          <div className="relative group w-[80vw] md:w-[25vw] mx-auto lg:ml-auto cursor-target">
            <div className="absolute -inset-1 bg-green-500/20 blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-slate-900/90 border border-slate-800 p-1 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(34,197,94,0.05)_50%)] bg-[length:100%_4px] animate-[pulse_2s_infinite]"></div>

              <div className="border border-slate-700/50 p-5 relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[9px] font-black text-green-500 uppercase tracking-widest">Operator Status: Active</p>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">V. KOHLI</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-slate-500 uppercase font-black">Tier</p>
                    <p className="text-xl font-black text-green-500 italic">LEGEND</p>
                  </div>
                </div>

                <div className="relative aspect-square mb-6 border border-slate-800 bg-slate-950 overflow-hidden group">
                  <div
                    className="absolute inset-0 cursor-target bg-cover md:grayscale scale-115 bg-center transition-transform duration-700 group-hover:scale-118 hover:grayscale-0"
                    style={{ backgroundImage: "url('/virat.jpg')" }}
                  ></div>

                  <div className="absolute inset-4 border border-green-500/20 pointer-events-none flex items-center justify-center">
                    <div className="w-4 h-4 border-t border-l border-green-500 absolute top-0 left-0"></div>
                    <div className="w-4 h-4 border-t border-r border-green-500 absolute top-0 right-0"></div>
                    <div className="w-4 h-4 border-b border-l border-green-500 absolute bottom-0 left-0"></div>
                    <div className="w-4 h-4 border-b border-r border-green-500 absolute bottom-0 right-0"></div>
                    <Crosshair size={16} className="text-green-500/30" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 border border-green-500/30">
                    <p className="text-[8px] font-bold text-green-500 uppercase tracking-tighter flex items-center gap-1">
                      <Target size={8} /> Target_ID: 018-IND
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-slate-100">
                  {[
                    { label: "Strike", val: "145.2" },
                    { label: "Impact", val: "9.6" },
                    { label: "Vers.", val: "88%" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-950 border cursor-target border-slate-800 p-2 text-center">
                      <p className="text-[8px] text-slate-500 uppercase font-black mb-1">{stat.label}</p>
                      <p className="font-black text-xs italic">{stat.val}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-[9px] text-slate-500 uppercase font-black flex items-center gap-2">
                    <Zap size={10} className="text-green-500" /> Tactical Perquisites
                  </p>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-green-500/10 border cursor-target border-green-500/30 flex items-center justify-center" title="Clutch Finisher">
                      <Activity size={14} className="text-green-500" />
                    </div>
                    <div className="w-8 h-8 bg-green-500/10 border cursor-target border-green-500/30 flex items-center justify-center" title="Precision Bowler">
                      <Target size={14} className="text-green-500" />
                    </div>
                    <div className="w-8 h-8 bg-green-500/10 border cursor-target border-green-500/30 flex items-center justify-center" title="Elite Captaincy">
                      <Shield size={14} className="text-green-500" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-end">
                  <div>
                    <p className="text-[9px] text-slate-500 uppercase font-black">Base Valuation</p>
                    <p className="text-2xl font-black italic text-green-500 leading-none">₹15.00 CR</p>
                  </div>
                  <button className="bg-green-600 cursor-target hover:bg-green-500 text-black p-2 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      <section id="about" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        {/* Background Tech Decals */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex justify-center items-center">
          <Fingerprint size={600} className="text-green-500" strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center cursor-target gap-2 text-green-500 font-black text-xs tracking-widest bg-green-500/10 px-3 py-1 border border-green-500/20">
                <ShieldAlert size={14} /> DECLASSIFIED DOCUMENT // 2025
              </div>

              <h2 className="text-5xl font-black uppercase italic leading-tight">
                THE ULTIMATE <br />
                <span className="text-green-500">SIMULATION.</span>
              </h2>

              <p className="text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-6 italic">
                "This isn't just about picking players; it's about resource management under extreme pressure. Every bid is a bullet. Every squad is a strike force."
                <br />
                <span className="text-xs font-bold text-slate-600 not-italic">— COMMANDER’S BRIEFING</span>
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 cursor-target p-4 border border-slate-800 group hover:border-green-500/50 transition-colors">
                  <Cpu className="text-green-500 mb-3" />
                  <h4 className="font-bold text-sm uppercase">AI Valuation</h4>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">Real-time market price adjustment engine.</p>
                </div>
                <div className="bg-slate-900/50 cursor-target p-4 border border-slate-800 group hover:border-green-500/50 transition-colors">
                  <Network className="text-green-500 mb-3" />
                  <h4 className="font-bold text-sm uppercase">Squad Sync</h4>
                  <p className="text-[10px] text-slate-500 uppercase mt-1">Multi-terminal budget synchronization.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Protocols (The "How-To") */}
            <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="text-green-500" />
                <h3 className="text-2xl font-black uppercase italic">Engagement Protocols</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Strategic Budgeting",
                    desc: "Each faction is deployed with a 100 Crore ammo supply. Over-expenditure results in immediate squad disqualification."
                  },
                  {
                    title: "Target Acquisition",
                    desc: "Players are released in waves. Use your bidding paddles to engage. Speed and timing are critical for cost-efficiency."
                  },
                  {
                    title: "Roster Composition",
                    desc: "A valid strike force must contain 11 operators, satisfying the required balance of specialists (Batsmen, Bowlers, Keepers)."
                  },
                  {
                    title: "Victory Condition",
                    desc: "At the end of the simulation, our proprietary algorithm calculates 'Squad Combat Effectiveness' to crown the champion."
                  }
                ].map((protocol, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-6 pb-6 border-b border-slate-800/50 last:border-0 cursor-target group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                  >
                    <span className="text-green-500 font-black text-xl italic opacity-30 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold uppercase group-hover:text-green-400 transition-colors">{protocol.title}</h4>
                      <p className="text-sm text-slate-500 mt-1 leading-relaxed">{protocol.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-500 text-xs font-black tracking-[0.4em] uppercase">Select Your Arsenal</span>
            <motion.h2
              className="text-5xl font-black uppercase italic mt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              Operator Classes
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { role: "Frontline Batsmen", class: "Assault", icon: <Target />, desc: "High impact scorers for early dominance." },
              { role: "Power Hitters", class: "Heavy", icon: <Zap />, desc: "Finishers designed for maximum collateral damage." },
              { role: "Elite Bowlers", class: "Sniper", icon: <Crosshair />, desc: "Precision units to neutralize opponent targets." },
              { role: "All-Rounders", class: "Tactical", icon: <Shield />, desc: "Versatile operators to maintain squad balance." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border cursor-target border-slate-800 p-8 hover:bg-green-600 group transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={fadeUp}
              >
                <div className="text-green-500 group-hover:text-black mb-6 transition-colors">
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>
                <p className="text-[10px] font-black uppercase text-slate-500 group-hover:text-black/70 mb-1">Class: {item.class}</p>
                <h3 className="text-xl font-black uppercase italic group-hover:text-black transition-colors mb-4">{item.role}</h3>
                <p className="text-sm text-slate-400 group-hover:text-black/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-t border-slate-900 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-green-900/10 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Timeline */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-black uppercase italic mb-12 flex items-center gap-4">
              <Terminal className="text-green-500" /> Operational Timeline
            </h2>

            <div className="space-y-12">
              {[
                { time: "0900 HRS", event: "In-Fill & Briefing", detail: "Squad registration and budget allocation." },
                { time: "1100 HRS", event: "Engagement Phase I", detail: "Marquee player bidding begins." },
                { time: "1400 HRS", event: "Resupply Break", detail: "Tactical analysis and mid-auction regroup." },
                { time: "1800 HRS", event: "Final Extraction", detail: "Squad finalization and victory ceremony." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex gap-8 group cursor-target"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeUp}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-slate-950 group-hover:bg-green-500 transition-colors shrink-0"></div>
                    <div className="w-[1px] h-full bg-slate-800"></div>
                  </div>
                  <div className="pb-8">
                    <span className="text-green-500 font-black text-sm">{step.time}</span>
                    <h4 className="text-xl font-black uppercase italic mt-1">{step.event}</h4>
                    <p className="text-slate-500 text-sm mt-2">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="relative group cursor-target">
            {/* Decorative HUD Elements around the image */}
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-green-500 z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-green-500 z-10"></div>

            <div className="relative aspect-video lg:aspect-square overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              {/* Placeholder for your actual image */}
              <img
                src="/asset1ipl.png"
                alt="Mission Visual"
                className="w-full h-full scale-103 object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700"
              />

              {/* Scanned Overlay Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>

              {/* Tactical Stamp */}
              <div className="absolute top-8 right-8 border-4 border-red-600/40 px-4 py-2 text-red-600/40 font-black text-2xl uppercase italic -rotate-12 select-none pointer-events-none">
                Classified
              </div>

              {/* Bottom Data Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md p-3 border-t border-slate-800">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400">
                  <span>INTEL_REF: 882-04</span>
                  <span className="text-green-500 flex items-center gap-1">
                    <Activity size={10} /> ENHANCED FEED
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="form">
        <RecruitmentForm />
      </section>

      <OrganizingTeamSection />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default IPLAuctionWarzone;