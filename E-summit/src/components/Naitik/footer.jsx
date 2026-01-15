
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const FooterSection = () => {
//   // --- Form State Management ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [status, setStatus] = useState("idle"); // idle, sending, sent

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     // --- TODO: ADD YOUR GOOGLE SHEETS API LOGIC HERE ---
//     console.log("Sending Data to Sheets:", formData);

//     // Simulate success for UI demo
//     setTimeout(() => {
//         setStatus("sent");
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setStatus("idle"), 3000);
//     }, 1500);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // --- DATA FROM SOURCE ---
//   const navLinks = [
//     { name: "HOME", path: "/" },
//     { name: "EVENTS", path: "/events" },
//     { name: "E-SUMMIT", path: "/esummit" },
//     { name: "GALLERY", path: "/gallery" },
//     { name: "TEAM", path: "/team" },
//     { name: "SPONSOR US", path: "/sponsors" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   return (
//     <footer className="relative w-full bg-black pt-20 pb-10 px-6 overflow-hidden border-t border-white/10">

//       {/* --- BACKGROUND LAYERS --- */}
//       {/* 1. Giant Watermark */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-heading font-bold text-white/5 leading-none pointer-events-none select-none whitespace-nowrap z-0">
//         ESUMMIT 26
//       </div>

//       {/* 2. Grid Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0" />

//       <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">

//         {/* --- TOP ROW: BRAND & CONTACT FORM --- */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

//           {/* Brand Identity */}
//           <div className="max-w-sm">
//              <h2 className="text-3xl font-heading font-bold text-white mb-2 tracking-wider">
//                E-CELL <span className="text-brand-primary">MANIT</span>
//              </h2>
//              <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6">
//                // The central nervous system of entrepreneurship in Central India.
//                We build founders, fund dreams, and disrupt the status quo.
//              </p>

//              {/* Contact Info */}
//              <ul className="space-y-2 text-sm text-gray-500 font-mono">
//                 <li><span className="text-brand-accent">LOC:</span> MANIT Bhopal, 462003</li>
//                 <li><span className="text-brand-accent">MAIL:</span> contact@ecell.com</li>
//                 <li><span className="text-brand-accent">PH:</span> +91 7000616813</li>
//              </ul>
//           </div>

//           {/* --- THE "WRITE TO US" TERMINAL --- */}
//           <div className="w-full max-w-md bg-gaming-900/50 p-6 border border-white/10 rounded-lg backdrop-blur-sm relative group">

//             {/* Decorative Corner */}
//             <div className="absolute top-0 right-0 p-2">
//                 <div className="w-2 h-2 bg-brand-primary"></div>
//             </div>

//             <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
//                 Establish Uplink (Contact Us)
//             </h4>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               {/* Name Input */}
//               <div className="relative">
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Agent Name / ID"
//                     className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-gray-600"
//                 />
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="Comms Channel (Email)"
//                     className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-gray-600"
//                 />
//               </div>

//               {/* Message Input */}
//               <div className="relative">
//                 <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="3"
//                     placeholder="Transmission Data (Message)..."
//                     className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-gray-600 resize-none"
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={status === "sending" || status === "sent"}
//                 className={`w-full py-3 border border-brand-primary/50 font-bold uppercase text-xs tracking-widest transition-all duration-300 ${
//                     status === "sent"
//                     ? "bg-green-500/20 text-green-400 border-green-500"
//                     : "bg-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white"
//                 }`}
//               >
//                 {status === "idle" && "SEND TRANSMISSION >"}
//                 {status === "sending" && "UPLOADING..."}
//                 {status === "sent" && "DATA RECEIVED ✓"}
//               </button>

//             </form>
//           </div>
//         </div>

//         {/* --- MIDDLE ROW: LINKS & SOCIALS --- */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

//           {/* Column 1: Navigation */}
//           <div>
//             <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Navigation</h4>
//             <ul className="space-y-2 text-sm text-gray-400 font-mono">
//               {navLinks.map((item) => (
//                 <li key={item.name}>
//                   <a href={item.path} className="hover:text-brand-accent hover:pl-2 transition-all duration-200 block">
//                     [{item.name}]
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: Legal */}
//           <div>
//             <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Protocols</h4>
//             <ul className="space-y-2 text-sm text-gray-400 font-mono">
//               {['Rulebook', 'Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="hover:text-brand-secondary hover:pl-2 transition-all duration-200 block">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Quick Links */}
//           <div>
//             <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm text-gray-400 font-mono">
//               <li><a href="#" className="hover:text-white">Startups</a></li>
//               <li><a href="#" className="hover:text-white">Investors</a></li>
//               <li><a href="#" className="hover:text-white">Campus Ambassador</a></li>
//               <li><a href="#" className="hover:text-white">Team</a></li>
//             </ul>
//           </div>

//           {/* Column 4: Social Grid */}
//           <div>
//             <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Social Network</h4>
//             <div className="flex gap-4 flex-wrap">

//               {/* Instagram */}
//               <a href="https://www.instagram.com/ecell_nitb/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all duration-300 rounded">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                 </svg>
//               </a>

//               {/* LinkedIn */}
//               <a href="https://www.linkedin.com/company/ecell-manit/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 rounded">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
//               </a>

//               {/* Twitter / X */}
//               <a href="https://x.com/ecell_nitb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gray-800 hover:border-gray-800 hover:-translate-y-1 transition-all duration-300 rounded">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//               </a>

//               {/* YouTube */}
//               <a href="https://www.youtube.com/@EntrepreneurshipCellNITBhopal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300 rounded">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
//               </a>

//             </div>
//           </div>
//         </div>

//         {/* --- BOTTOM ROW: STATUS & COPYRIGHT --- */}
//         <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">

//           {/* Status Indicator */}
//           <div className="flex items-center gap-2 mb-4 md:mb-0">
//              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
//              <span className="text-[10px] text-green-500 font-mono tracking-widest uppercase">
//                System Status: Online
//              </span>
//           </div>

//           {/* Copyright */}
//           <div className="text-gray-500 text-xs font-mono">
//               © {new Date().getFullYear()} E-Cell MANIT
//           </div>

//           {/* Scroll to Top */}
//           <button
//             onClick={scrollToTop}
//             className="group flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-accent transition-colors"
//           >
//             Back to Top
//             <span className="p-1 border border-white/20 rounded group-hover:border-brand-accent group-hover:-translate-y-1 transition-all">
//                 ↑
//             </span>
//           </button>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default FooterSection;

import React, { useState } from "react";
// import { motion } from "framer-motion"; // Make sure to uncomment if you use framer-motion elsewhere

const FooterSection = () => {
  // --- Form State Management ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    console.log("Sending Data to Sheets:", formData);
    setTimeout(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "E-SUMMIT", path: "/esummit" },
    { name: "GALLERY", path: "/gallery" },
    { name: "TEAM", path: "/team" },
    { name: "SPONSOR US", path: "/sponsors" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="relative w-full bg-black pt-24 pb-12 px-6 overflow-hidden border-t border-white/10 font-sans">

      {/* --- BACKGROUND LAYERS --- */}

      {/* 1. CRT Scanline Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.07]"
           style={{
             backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
             backgroundSize: "100% 2px, 3px 100%"
           }}
      />

      {/* 2. Tech Grid Overlay (Moved BEFORE watermark or kept at z-0) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none z-0" />

      {/* --- FIXED WATERMARK SECTION ---
         Changes made:
         1. Added 'z-[1]' to sit ON TOP of the Tech Grid (z-0) but below content (z-10).
         2. Changed 'bottom-10' to 'bottom-24' for mobile so it rises above the bottom bar.
         3. Increased mobile text size to 'text-[22vw]'.
         4. Increased stroke opacity on mobile to '0.3' (was 0.15).
         5. Added 'whitespace-nowrap' to prevent wrapping on narrow screens.
      */}
      <div className="absolute bottom-24 sm:bottom-[8%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-50">
        <h1
          className="
            font-black tracking-tight leading-none
            text-[22vw] sm:text-[16vw] xl:text-[14vw]
            whitespace-nowrap
            [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]
            md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)]
          "
          style={{
            // 1. Text Fill
            color: "rgba(255, 255, 255, 0.03)",
            // 2. Fade out
            maskImage: "linear-gradient(to top, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 50%, transparent 100%)",
          }}
        >
          ESUMMIT'26
        </h1>
      </div>

      {/* --- CONTENT CONTAINER (z-10 ensures it stays clickable) --- */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20">

        {/* --- TOP ROW --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

          {/* Brand Identity */}
          <div className="max-w-sm relative">
             <div className="absolute -left-5 top-2 w-1.5 h-1.5 bg-brand-primary animate-ping" />

             <h2 className="text-4xl font-heading font-bold text-white mb-4 tracking-wider">
               E-CELL <span className="text-brand-primary">MANIT</span>
             </h2>
             <p className="text-gray-300 text-sm font-mono leading-relaxed mb-8 border-l-2 border-brand-primary/50 pl-4">
               // The central nervous system of entrepreneurship in Central India.
               We build founders, fund dreams, and disrupt the status quo.
             </p>

             <ul className="space-y-3 text-sm text-gray-300 font-mono">
                <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">LOC:</span> MANIT Bhopal, 462003</li>
                <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">MAIL:</span> contact@ecell.com</li>
                <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">PH:</span> +91 7000616813</li>
             </ul>
          </div>

          {/* --- TERMINAL FORM --- */}
          <div className="w-full max-w-md bg-zinc-900/80 p-1 border border-white/20 rounded backdrop-blur-md relative group shadow-2xl">
             {/* Inner Border Container */}
             <div className="bg-black/80 p-8 border border-white/5 rounded-sm relative overflow-hidden">

                {/* Scanning Light Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-[shimmer_2s_infinite]"></div>

                <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                    SECURE TRANSMISSION
                </h4>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="ID / Name"
                        className="w-full bg-white/10 border border-white/20 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary focus:bg-white/20 transition-all rounded-sm placeholder:text-gray-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Signal (Email)"
                        className="w-full bg-white/10 border border-white/20 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary focus:bg-white/20 transition-all rounded-sm placeholder:text-gray-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="3"
                        placeholder="Data Packet..."
                        className="w-full bg-white/10 border border-white/20 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary focus:bg-white/20 transition-all rounded-sm placeholder:text-gray-500 resize-none"
                    ></textarea>

                  <button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    className={`w-full py-4 border font-bold uppercase text-sm tracking-[0.2em] transition-all duration-300 relative overflow-hidden group ${
                        status === "sent" ? "border-green-500 text-green-500 bg-green-500/10" : "border-white/30 text-white hover:border-brand-primary hover:text-brand-primary hover:bg-white/5"
                    }`}
                  >
                    <span className="relative z-10">
                        {status === "idle" && "INITIATE UPLINK"}
                        {status === "sending" && "TRANSMITTING..."}
                        {status === "sent" && "SUCCESS"}
                    </span>
                  </button>
                </form>
             </div>
          </div>
        </div>

        {/* --- MIDDLE ROW --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/20 pt-10">
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-xs text-brand-primary">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              {navLinks.map((item) => (
                <li key={item.name} className="group">
                  <a href={item.path} className="group-hover:text-white transition-colors duration-200 flex items-center">
                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-primary mr-2">›</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-xs text-brand-primary">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              {['Rulebook', 'Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((item) => (
                <li key={item} className="group">
                  <a href="#" className="group-hover:text-white transition-colors duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-xs text-brand-primary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              <li><a href="#" className="hover:text-white transition-colors">Startups</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ambassadors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 text-xs text-brand-primary">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              {/* Instagram */}
              <a href="https://www.instagram.com/ecell_nitb/?hl=en" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-brand-primary hover:bg-brand-primary transition-all duration-300 rounded-sm">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/ecell-manit/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5] transition-all duration-300 rounded-sm">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* X */}
              <a href="https://x.com/ecell_nitb" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-black hover:bg-black transition-all duration-300 rounded-sm">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@EntrepreneurshipCellNITBhopal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300 rounded-sm">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW --- */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-8 pb-4 backdrop-blur-sm relative z-20">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
             <span className="text-xs text-gray-400 font-mono tracking-widest uppercase">
               System Online
             </span>
          </div>

          <div className="text-gray-500 text-xs font-mono uppercase tracking-widest">
              © 2026 E-Cell MANIT • All Rights Reserved
          </div>

          <button onClick={scrollToTop} className="group flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-primary transition-colors">
            Back to Top
            <span className="p-1 border border-white/20 rounded-sm group-hover:border-brand-primary group-hover:-translate-y-0.5 transition-all">
                ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;