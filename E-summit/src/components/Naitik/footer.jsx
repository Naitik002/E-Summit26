


import React, { useState } from "react";
import { motion } from "framer-motion";

const FooterSection = () => {
  // --- Form State Management ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle, sending, sent

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // --- TODO: ADD YOUR GOOGLE SHEETS API LOGIC HERE ---
    console.log("Sending Data to Sheets:", formData);

    // Simulate success for UI demo
    setTimeout(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black pt-20 pb-10 px-6 overflow-hidden border-t border-white/10">

      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Giant Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-heading font-bold text-white/5 leading-none pointer-events-none select-none whitespace-nowrap z-0">
        ESUMMIT 26
      </div>

      {/* 2. Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">

        {/* --- TOP ROW: BRAND & CONTACT FORM --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

          {/* Brand Identity */}
          <div className="max-w-sm">
             <h2 className="text-3xl font-heading font-bold text-white mb-2 tracking-wider">
               E-CELL <span className="text-brand-primary">MANIT</span>
             </h2>
             <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6">
               // The central nervous system of entrepreneurship in Central India.
               We build founders, fund dreams, and disrupt the status quo.
             </p>

             {/* Contact Info (Moved here for better balance) */}
             <ul className="space-y-2 text-sm text-gray-500 font-mono">
                <li><span className="text-brand-accent">LOC:</span> MANIT Bhopal, 462003</li>
                <li><span className="text-brand-accent">MAIL:</span> support@ecellnitb.com</li>
             </ul>
          </div>

          {/* --- THE "WRITE TO US" TERMINAL --- */}
          <div className="w-full max-w-md bg-gaming-900/50 p-6 border border-white/10 rounded-lg backdrop-blur-sm relative group">

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-2">
                <div className="w-2 h-2 bg-brand-primary"></div>
            </div>

            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Establish Uplink (Contact Us)
            </h4>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name Input */}
              <div className="relative">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Agent Name / ID"
                    className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-gray-600"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Comms Channel (Email)"
                    className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-gray-600"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder="Transmission Data (Message)..."
                    className="w-full bg-black/40 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full py-3 border border-brand-primary/50 font-bold uppercase text-xs tracking-widest transition-all duration-300 ${
                    status === "sent"
                    ? "bg-green-500/20 text-green-400 border-green-500"
                    : "bg-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white"
                }`}
              >
                {status === "idle" && "SEND TRANSMISSION >"}
                {status === "sending" && "UPLOADING..."}
                {status === "sent" && "DATA RECEIVED ✓"}
              </button>

            </form>
          </div>
        </div>

        {/* --- MIDDLE ROW: LINKS & SOCIALS --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              {['Home', 'Events', 'Speakers', 'Sponsors', 'Schedule'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-accent hover:pl-2 transition-all duration-200 block">
                    [{item}]
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Protocols</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              {['Rulebook', 'Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-secondary hover:pl-2 transition-all duration-200 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (Replaced Contact since it's up top) */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li><a href="#" className="hover:text-white">Startups</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Campus Ambassador</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
            </ul>
          </div>

          {/* Column 4: Social Grid */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-4">Social Network</h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all duration-300 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 00-.013-1.413 1 1 0 00-1.412.013L8 14l-2.5-2.5-2-2L14 8l2.5 2.5 2 2 1.41-1.41-1.41-1.41 2.5 2.5 2 2-2 2-2.5-2.5-2-2z"></path><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300 rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW: STATUS & COPYRIGHT --- */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">

          {/* Status Indicator */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
             <span className="text-[10px] text-green-500 font-mono tracking-widest uppercase">
               System Status: Online
             </span>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-xs font-mono">
             © 2026 E-Cell MANIT
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-accent transition-colors"
          >
            Back to Top
            <span className="p-1 border border-white/20 rounded group-hover:border-brand-accent group-hover:-translate-y-1 transition-all">
                ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;

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

//   return (
//     <footer className="relative w-full bg-black pt-20 pb-10 px-6 overflow-hidden border-t border-white/10">

//       {/* --- BACKGROUND LAYERS --- */}

//       {/* 1. Giant Watermark (UPDATED: Floating Colors Inside Text) */}
//       <motion.div
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-heading font-bold leading-none pointer-events-none select-none whitespace-nowrap z-0"
//         style={{
//             // This creates the gradient inside the text
//             backgroundImage: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 25%, #be185d 50%, #4c1d95 75%, #1e1b4b 100%)", // Deep Indigo -> Violet -> Pink -> Violet -> Indigo
//             backgroundSize: "200% auto",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             opacity: 0.15 // Low opacity to keep the dark theme intact
//         }}
//         animate={{
//             backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
//         }}
//         transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "linear"
//         }}
//       >
//         ESUMMIT 26
//       </motion.div>

//       {/* 2. Grid Overlay (Kept exactly as original) */}
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
//                 <li><span className="text-brand-accent">MAIL:</span> support@ecellnitb.com</li>
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
//                   status === "sent"
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
//               {['Home', 'Events', 'Speakers', 'Sponsors', 'Schedule'].map((item) => (
//                 <li key={item}>
//                   <a href="#" className="hover:text-brand-accent hover:pl-2 transition-all duration-200 block">
//                     [{item}]
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
//             <div className="flex gap-4">
//               {/* Instagram */}
//               <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all duration-300 rounded">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.933 12.8a1 1 0 00-.013-1.413 1 1 0 00-1.412.013L8 14l-2.5-2.5-2-2L14 8l2.5 2.5 2 2 1.41-1.41-1.41-1.41 2.5 2.5 2 2-2 2-2.5-2.5-2-2z"></path><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
//               </a>
//               {/* LinkedIn */}
//               <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 rounded">
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
//               </a>
//               {/* YouTube */}
//               <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 hover:-translate-y-1 transition-all duration-300 rounded">
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
//              © 2026 E-Cell MANIT
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