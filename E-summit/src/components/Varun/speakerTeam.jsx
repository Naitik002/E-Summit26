
import { motion } from 'framer-motion';

import {
    Twitter,
    Linkedin,
    Github,
    Instagram,
    Globe,
    Zap,
    Shield,
    Cpu,
    Target,
    Mail,
    InstagramIcon
} from 'lucide-react';

const members = [
    {
        id: 1,
        name: "Sannidhya Srivastava",
        style: "Strategic Lead",
        img: "teamCamp/Sannidhya Srivastava.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/sannidhya-srivastava-4976a9277/",
            insta: "https://www.instagram.com/_sann1dh_/",
            mail: "mailto:sannidhya123567@gmail.com"
        },
        icon: <Zap className="h-6 w-6" />,
    },
    {
        id: 2,
        name: "Dev Bansal",
        style: "Events Lead",
        img: "teamCamp/Dev Bansal.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/dev-bansal-22a54a282/",
            insta: "https://www.instagram.com/db_devbansal/",
            mail: "mailto:bansaldev894@gmail.com"
        },
        icon: <Shield className="h-6 w-6" />,
    },
    {
        id: 3,
        name: "Khushi Verma",
        style: "Adminstrative Lead",
        img: "teamCamp/Khushi Verma.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/khushi-verma-966416290",
            insta: "https://www.instagram.com/_khushi_.verma?igsh=ZzJjY25uZ2JrdDI3",
            mail: "mailto:kv6265@gmail.com"
        },
        icon: <Cpu className="h-6 w-6" />,
    },
    {
        id: 4,
        name: "Manu GS Parmar",
        style: "Finance Lead",
        img: "teamCamp/Manu Parmar.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/manugsparmar/",
            insta: "https://www.instagram.com/manuxparmar/",
            mail: "mailto:manugsparmar@gmail.com"
        },
        icon: <Target className="h-6 w-6" />,
    }
];

const FinalTeamSection = () => {
    return (
        <section className=" bg-[#020617] relative overflow-hidden mb-10">
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
                        MEET THE <br /> <span className="text-cyan-400">ORGANIZERS</span>
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
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
                            <div className="bg-white border-4 border-black group p-4 shadow-[10px_10px_0px_0px_rgba(34,211,238,1)] transition-all group-hover:shadow-[15px_15px_0px_0px_rgba(236,72,153,1)]">
                                {/* Photo */}
                                <div className="aspect-[3/4] overflow-hidden border-4 group border-black mb-4 relative bg-slate-200">
                                    <img
                                        src={person.img}
                                        alt={person.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
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
                                        <h3 className="font-black text-lg text-black uppercase leading-none italic">{person.name}</h3>
                                        <div className="text-pink-600 group-hover:rotate-12 transition-transform">
                                            {person.icon}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                                            {person.style}
                                        </span>
                                    </div>

                                    <div className="pt-3 border-t-2 border-slate-100 flex flex-wrap gap-2">
                                        {person.socials.linkedin && (
                                            <a href={person.socials.linkedin} target="_blank" className="p-1.5 bg-slate-100 text-black hover:bg-cyan-400 hover:text-white transition-all border border-black">
                                                <Linkedin size={14} />
                                            </a>
                                        )}
                                        {person.socials.insta && (
                                            <a href={person.socials.twitter} target="_blank" className="p-1.5 bg-slate-100 text-black hover:bg-red-400 hover:text-white transition-all border border-black">
                                                <InstagramIcon size={14} />
                                            </a>
                                        )}
                                        {person.socials.mail && (
                                            <a href={person.socials.github} target="_blank" className="p-1.5 bg-slate-100 text-black hover:bg-pink-500 hover:text-white transition-all border border-black">
                                                <Mail size={14} />
                                            </a>
                                        )}
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

            </div>
        </section>
    );
};

export default FinalTeamSection;