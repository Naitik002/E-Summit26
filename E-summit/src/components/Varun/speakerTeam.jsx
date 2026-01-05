
import { motion } from 'framer-motion';

const FinalTeamSection = ({ members = Creators }) => {
  return (
    <section className=" bg-[#020617] relative overflow-hidden ">
      {/* Background Decor - Fusion of both themes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="bg-yellow-400 text-black font-black px-4 py-1 uppercase text-sm mb-4  -rotate-2"
          >
            The Architects
          </motion.div>
          <h2 className="text-7xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-[6px_6px_0px_rgba(40,179,235,1)]">
            MEET THE <br/> <span className="text-cyan-400">ORGANIZERS</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {members.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* The "Frame" */}
              <div className="bg-white border-4 border-black p-4 shadow-[10px_10px_0px_0px_rgba(34,211,238,1)] transition-all group-hover:shadow-[15px_15px_0px_0px_rgba(236,72,153,1)]">
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden border-4 border-black mb-4 relative bg-slate-200">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 px-2 py-1 rounded-full border border-white/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-widest">Active</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-black text-2xl text-black uppercase leading-none italic">{person.name}</h3>
                    <div className="text-pink-600 group-hover:rotate-12 transition-transform">
                      {person.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="bg-black text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter">
                      Core Team
                    </span>
                    <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                      {person.style || person.power}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-400 border-4 border-black rounded-full flex items-center justify-center z-20 group-hover:bg-pink-500 transition-colors">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-10 border-t-2 border-dashed border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-slate-500 text-sm tracking-widest uppercase">
            // End of line. 2026 Creative Alliance
          </p>
          <div className="flex gap-4">
            {['Discord', 'Twitter', 'Instagram'].map(social => (
              <a 
                key={social}
                href="#" 
                className="text-white font-black text-xs uppercase border-2 border-white px-3 py-1 hover:bg-white hover:text-black transition-all shadow-[3px_3px_0px_0px_rgba(40,179,235,1)]"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalTeamSection;