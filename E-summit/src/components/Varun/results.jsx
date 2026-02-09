import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FileText, ChevronRight, Activity } from 'lucide-react';

const ResultsR2 = () => {
  const qualifiers = [
    { team: "Data Slicers", inst: "Woxsen University, Hyderabad" },
    { team: "chaurasiaaditya539", inst: "IIIT Bhopal" },
    { team: "Silverstone", inst: "MANIT" },
    { team: "Team Vincent", inst: "SIT, RGPV, Bhopal" },
    { team: "Solo Strategist", inst: "Alliance School of Business, Bangalore" },
    { team: "ThinkX", inst: "MANIT" },
    { team: "2023uce0055", inst: "IIT, Jammu" },
    { team: "TPM", inst: "NIT, Kurukshetra" },
    { team: "ARTHASHASTRA", inst: "MANIT" },
    { team: "random_team_1", inst: "NIT, Kurukshetra" },
    { team: "Centauri", inst: "MANIT" },
    { team: "vaagireddi", inst: "MANIT" },
    {team: "Cute Little Red Flags", inst: " School of Commerce, DAVV, Indore."},
    { team: "mr.ankitanand.2004", inst: "MANIT" },
    { team: "Lunatic Byte", inst: "BIT Mesra, Ranchi" },
    { team: "TheMogach", inst: "RV University, Bangalore" },
    { team: "Griffin", inst: "MIT Academy of Engineering, Pune" },
    { team: "OG 99", inst: "Amity University, Gwalior" },
    { team: "bhoomigajbhiye7", inst: "NIT Raipur" },
    { team: "rishavprashar72", inst: "MANIT" }
  ];

  // Split data into two columns for the report view
  const midPoint = Math.ceil(qualifiers.length / 2);
  const leftCol = qualifiers.slice(0, midPoint);
  const rightCol = qualifiers.slice(midPoint);

  const ReportColumn = ({ data, startIndex }) => (
    <div className="space-y-1">
      {data.map((op, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: (startIndex + idx) * 0.03 }}
          className="grid grid-cols-12 gap-2 py-2 px-3 border-b border-white/[0.03] hover:bg-[#8E2EBB]/5 transition-colors group"
        >
          <div className="col-span-1 font-mono text-[10px] text-[#8E2EBB]/60 mt-1">
            {(startIndex + idx + 1).toString().padStart(2, '0')}
          </div>
          <div className="col-span-11">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold tracking-tight uppercase group-hover:text-[#a735dc] transition-colors">
                {op.team}
              </span>
              <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-[#8E2EBB]/20 transition-colors"></div>
            </div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter">
              Institute: {op.inst}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="bg-black py-20 px-4 md:px-8 font-mono" id='result'>
      <div className="max-w-6xl mx-auto border border-zinc-800 bg-zinc-950/20 relative">
        
        {/* Header Ribbon */}
        <div className="absolute -top-3 left-6 px-3 py-1 bg-[#8E2EBB] text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(8,145,178,0.4)]">
          Confidential_Report
        </div>

        {/* Report Metadata */}
        <div className="p-6 md:p-10 border-b border-zinc-800 flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-1">
            <h2 className="text-2xl md:text-4xl font-black text-white italic uppercase flex items-center gap-3">
              <FileText className="text-[#8E2EBB]" />
              Round_02.RESULTS
            </h2>
            <p className="text-zinc-500 text-xs">
              Subject: Finalist Extraction // Clearance: Level_03 // Protocol: Case_Study
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[10px] text-zinc-400 border-l border-zinc-800 pl-8">
            <div><span className="text-zinc-600">DATE:</span> 09_FEB_2026</div>
            <div><span className="text-zinc-600">STATUS:</span> VERIFIED</div>
            <div><span className="text-zinc-600">LOCATION:</span> ROLTA</div>
            <div><span className="text-zinc-600">SOURCE:</span> ECELL_MANIT</div>
          </div>
        </div>

        {/* The Two-Column Report Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          <div className="p-4 md:p-6 bg-gradient-to-b from-transparent to-cyan-950/5">
            <ReportColumn data={leftCol} startIndex={0} />
          </div>
          <div className="p-4 md:p-6 bg-gradient-to-b from-transparent to-purple-950/5">
            <ReportColumn data={rightCol} startIndex={midPoint} />
          </div>
        </div>

        {/* Report Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/20 flex justify-between items-center overflow-hidden">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-green-500 animate-pulse" />
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest">System_Nominal</span>
            </div>
            <div className="hidden sm:block h-3 w-[1px] bg-zinc-700"></div>
            <span className="hidden sm:inline text-[9px] text-zinc-600 uppercase">End_of_transmission_0x442</span>
          </div>
          
          <button className="flex items-center gap-2 text-[#8E2EBB] text-[10px] font-black uppercase hover:text-white transition-colors">
            Init_Final_Phase 
          </button>
        </div>

        {/* Visual Glitch Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none overflow-hidden">
          <Terminal size={150} className="-mr-10 -mt-10" />
        </div>
      </div>

      {/* Optional "Print" Line Decor */}
      <div className="max-w-6xl mx-auto mt-4 flex justify-between px-2">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-zinc-800 rounded-full"></div>
        ))}
      </div>
    </section>
  );
};

export default ResultsR2;