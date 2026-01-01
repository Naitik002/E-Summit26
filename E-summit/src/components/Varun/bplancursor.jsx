import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GTACursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Logic to detect interactive elements
      const target = e.target.closest('button, a, input, .group, img');
      setIsHovering(!!target);
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* HIDE DEFAULT CURSOR */}
      <style jsx global>{`
        * { cursor: none !important; }
        @media (max-width: 1024px) {
          .hud-fragment-cursor { display: none !important; }
          * { cursor: auto !important; }
        }
      `}</style>

      {/* 1:1 TRACKING CONTAINER */}
      <div 
        className="hud-fragment-cursor fixed inset-0 pointer-events-none z-[99999]"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          position: 'fixed',
          transform: 'translate(0, 0)', // Precise 1:1 tracking
        }}
      >
        <div className="relative flex items-start">
          {/* THE DATA BAR (The "Pointer") */}
          <motion.div 
            animate={{ 
                height: isHovering ? 35 : 20,
                backgroundColor: isHovering ? "#FED985" : "#FFF", // Jasmine on hover
                scaleX: isHovering ? 1.5 : 1
            }}
            transition={{ duration: 0.1 }}
            className="w-[3px] shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          />

          {/* SIDEBAR METADATA (Appears on Hover) */}
          <div className="absolute left-3 top-0 flex flex-col gap-0.5 pointer-events-none">
            <AnimatePresence>
              {isHovering && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-white text-black text-[8px] font-black px-1 py-0.5 uppercase italic"
                  >
                    ACCESS_GRANTED
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="text-white text-[6px] font-mono uppercase tracking-widest"
                  >
                    UPLINK_ACTIVE
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* DECORATIVE HUD CORNER (Always visible but subtle) */}
          <div className="absolute top-0 -left-2 flex flex-col gap-1 opacity-20">
             <div className="w-1 h-1 bg-white" />
             <div className="w-[1px] h-4 bg-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GTACursor;