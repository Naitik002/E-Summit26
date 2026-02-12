import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, ShieldAlert, CheckCircle, Link as LinkIcon, User, Users, ChevronRight, Loader2, XCircle } from 'lucide-react';
import CustomDropdown from './customDropdown';

const RoundThreeSubmission = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error, denied
    const [formData, setFormData] = useState({
        teamName: '',
        leaderName: '',
        pdfLink: ''
    });

    // The 22 Authorized Operatives
    const authorizedTeams = [
        "Silverstone",
        "Team Vincent",
        "Team Helix",
        "ThinkX",
        "Arthashastra",
        "Random_Team_1",
        "Centauri",
        "Vaagireddi",
        "Cute Little Red Flags",
        "Mr.Ankitanand.2004",
        "Lunatic Byte",
        "Yakuza",
        "Bhoomigajbhiye7",
        "Startedge",
        "Market Mavericks",
        "Mind Over Market",
        "Casophobic"
    ].sort();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1. Client-Side Firewall Check
        const isValid = authorizedTeams.some(
            t => t.toLowerCase() === formData.teamName.trim().toLowerCase()
        );

        if (!isValid) {
            setStatus('denied');
            setTimeout(() => setStatus('idle'), 4000); // Reset after 4s
            return;
        }

        setStatus('loading');

        try {
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxZeFVzEp0WKpUkm1K8thRCzfCi9I7R3C__OMag57buZdJW7EpiIi1b1S-LA_qGJ4uW/exec';

            // Sending to Google Sheet
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            setStatus('success');
        } catch (error) {
            console.error("Transmission Error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="form" className="bg-[#05000a] py-24 px-4 relative overflow-hidden min-h-screen flex items-center">
            {/* Purple Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08),transparent_70%)] pointer-events-none"></div>

            <div className="max-w-3xl mx-auto w-full relative z-10">

                {/* Header Block */}
                <div className="mb-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/30 bg-purple-950/20 mb-4">
                        <ShieldAlert size={14} className="text-purple-400 animate-pulse" />
                        <span className="text-purple-400 font-mono text-[10px] tracking-[0.3em] uppercase">Security_Level_Gamma</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">
                        Final <span className="text-purple-500 underline decoration-2 underline-offset-8">Uplink</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Main Form Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`bg-zinc-950 border-2 ${status === 'denied' ? 'border-red-900' : 'border-purple-900/40'} p-8 md:p-12 transition-colors duration-500 shadow-[0_0_50px_rgba(88,28,135,0.2)]`}
                    >
                        {/* Status Overlays */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-center">
                                    <CheckCircle className="text-purple-500 w-20 h-20 mb-4 animate-bounce" />
                                    <h3 className="text-2xl font-black text-white uppercase italic">Transmission Verified</h3>
                                    <p className="text-purple-400 font-mono text-xs mt-2 uppercase tracking-widest">Your data packet has been successfully merged with the main node.</p>
                                    <button onClick={() => setStatus('idle')} className="mt-8 text-white border-b border-purple-500 font-mono text-[10px] uppercase">Back to Terminal</button>
                                </motion.div>
                            )}

                            {status === 'denied' && (
                                <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="absolute top-4 right-4 z-50 bg-red-950 border border-red-500 p-4 shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-start gap-4 max-w-sm">
                                    <XCircle className="text-red-500 shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-red-500 font-black text-xs uppercase tracking-tighter">Access_Denied</h4>
                                        <p className="text-red-200/70 font-mono text-[10px] leading-tight mt-1">
                                            TEAM_ID NOT RECOGNIZED. UNIDENTIFIED SIGNATURE DETECTED. SUBMISSION BLOCKED.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Team Dropdown - Prevents Typos */}
                            <div className="space-y-3">
                                <div className="relative">
                                    <CustomDropdown
                                        options={authorizedTeams}
                                        value={formData.teamName}
                                        onChange={(val) => setFormData({ ...formData, teamName: val })}
                                    />
                                    
                                </div>
                            </div>

                            {/* Leader Name */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                                    <User size={14} /> Lead_Operative
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="LEADER FULL NAME"
                                    value={formData.leaderName}
                                    onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                                    className="w-full bg-purple-950/10 border border-purple-900/50 p-4 text-white font-mono text-sm focus:border-purple-400 focus:outline-none placeholder:text-zinc-800"
                                />
                            </div>

                            {/* PDF Link */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                                    <LinkIcon size={14} /> Data_Packet_URI
                                </label>
                                <input
                                    required
                                    type="url"
                                    placeholder="LINK TO PDF SUBMISSION"
                                    value={formData.pdfLink}
                                    onChange={(e) => setFormData({ ...formData, pdfLink: e.target.value })}
                                    className="w-full bg-purple-950/10 border border-purple-900/50 p-4 text-white font-mono text-sm focus:border-purple-400 focus:outline-none placeholder:text-zinc-800"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={status === 'loading'}
                                className="w-full bg-purple-600 text-white py-5 font-black uppercase tracking-[0.3em] text-xs hover:bg-purple-500 shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {status === 'loading' ? (
                                    <>Transmitting <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Initiate_Protocol <ChevronRight size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Bottom Terminal Info */}
                    <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                        <p>// NODE: RGPV_SUB_SEC_A // PORT: 443</p>
                        <p>Ready for encrypted handshake...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoundThreeSubmission;