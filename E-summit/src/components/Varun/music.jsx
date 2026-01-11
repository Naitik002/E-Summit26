import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, VolumeX } from 'lucide-react';

const MusicPlayer = ({ musicUrl, stationName, accentColor }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const audioRef = useRef(null);

    // Reset when the page or track changes
    useEffect(() => {
        setIsPlaying(false);
        setHasError(false);
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [musicUrl]);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setHasError(false);
                })
                .catch((error) => {
                    console.error("Playback blocked:", error);
                    setHasError(true);
                });
        }
    };

    return (
        <div className="fixed bottom-10 left-10 z-[10000] flex items-center gap-4">
            <audio 
                ref={audioRef} 
                loop 
                preload="auto"
                onError={() => setHasError(true)}
            >
                <source src={musicUrl} type="audio/mpeg" />
            </audio>

            <div className="relative group">
                {/* Radar Ripple */}
                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute inset-0 rounded-full border-2 pointer-events-none"
                            style={{ borderColor: accentColor }}
                        />
                    )}
                </AnimatePresence>

                <button
                    onClick={toggleMusic}
                    className="relative w-14 h-14 bg-black border-4 flex items-center justify-center transition-all active:scale-95 shadow-[5px_5px_0px_rgba(0,0,0,1)]"
                    style={{ borderColor: isPlaying ? accentColor : (hasError ? "#ef4444" : "#FFF") }}
                >
                    {isPlaying ? (
                        <Radio style={{ color: accentColor }} size={24} className="animate-pulse" />
                    ) : (
                        <VolumeX className={hasError ? "text-red-500" : "text-white opacity-50"} size={24} />
                    )}
                    
                    {/* GTA Style Label */}
                    <div className="absolute left-full ml-4 px-3 py-1  text-black text-[10px] font-black uppercase italic tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap -skew-x-12"
                        style={{ backgroundColor: hasError ? "#ef4444" : accentColor }}>
                        
                        {hasError ? "Signal Lost" : (isPlaying ? `Station: ${stationName}` : "Radio Off")}
                    </div>
                </button>
            </div>

            {/* Bars Visualizer */}
            {isPlaying && (
                <div className="flex gap-1 h-4 items-end mb-1">
                    {[0.6, 0.4, 0.8, 0.5].map((delay, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [4, 16, 6, 14, 4] }}
                            transition={{ repeat: Infinity, duration: delay, ease: "easeInOut" }}
                            className="w-1"
                            style={{ backgroundColor: accentColor }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MusicPlayer;