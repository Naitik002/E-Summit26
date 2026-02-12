import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Search } from 'lucide-react';

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(team => 
    team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="flex items-center gap-2 text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-3">
        <Users size={14} /> Identity_Verification
      </label>
      
      {/* Trigger Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-purple-950/10 border ${isOpen ? 'border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]' : 'border-purple-900/50'} p-4 text-white font-mono text-sm transition-all cursor-pointer flex justify-between items-center group`}
      >
        <span className={value ? "text-white" : "text-zinc-600"}>
          {value || "SELECT_AUTHORIZED_TEAM.EXE"}
        </span>
        <ChevronDown 
          size={18} 
          className={`text-purple-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-[100] w-full mt-2 bg-zinc-950 border border-purple-500 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Search Bar inside Dropdown */}
            <div className="p-2 border-b border-purple-900/50 bg-purple-950/20 flex items-center gap-2">
              <Search size={14} className="text-purple-500" />
              <input 
                type="text"
                placeholder="Filter_Database..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none text-[10px] font-mono text-purple-300 focus:outline-none w-full uppercase"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Options List */}
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((team, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onChange(team);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                    className="p-3 font-mono text-xs text-zinc-400 hover:bg-purple-600 hover:text-white cursor-pointer border-b border-white/5 transition-colors flex justify-between group"
                  >
                    <span>{team}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-[8px] self-center">AUTHENTICATE &gt;&gt;</span>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center font-mono text-[10px] text-red-500 italic">
                  NO_MATCHING_OPERATIVE_FOUND
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #09090b;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #7e22ce;
        }
      `}</style>
    </div>
  );
};

export default CustomDropdown;