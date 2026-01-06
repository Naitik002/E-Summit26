import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CyberpunkCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Mouse position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics for the outer ring (The "Lag" effect)
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      // improved detection for clickable elements
      const isClickable = (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('a') ||
        target.closest('button') ||
        getComputedStyle(target).cursor === 'pointer'
      );

      setIsHovered(isClickable);
    };

    const mouseDown = () => setIsClicked(true);
    const mouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* --- GLOBAL CSS OVERRIDE --- */}
      {/* This uses !important on * selector to force hide cursor everywhere */}
      <style>{`
        html, body, *, *::before, *::after {
          cursor: none !important;
        }

        /* Restore normal behavior for touch devices */
        @media (hover: none) {
          html, body, *, *::before, *::after {
            cursor: auto !important;
          }
          .custom-cursor {
            display: none !important;
          }
        }
      `}</style>

      {/* --- LAYER 1: The Center Target (Precise) --- */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: 45, // Diamond shape
        }}
      />

      {/* --- LAYER 2: The Tactical Ring (Laggy) --- */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* The Rotating Ring */}
        <motion.div
            className="rounded-full border border-purple-500/50"
            animate={{
                width: isHovered ? 50 : 20,
                height: isHovered ? 50 : 20,
                rotate: isHovered ? 180 : 0,
                borderColor: isHovered ? '#22d3ee' : 'rgba(168, 85, 247, 0.5)',
                scale: isClicked ? 0.9 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />

        {/* --- LAYER 3: The Lock-On Brackets (Appear on Hover) --- */}
        {/* Top Left Bracket */}
        <motion.div
            className="absolute w-2 h-2 border-t-2 border-l-2 border-cyan-400"
            animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? -15 : 0,
                y: isHovered ? -15 : 0
            }}
        />
        {/* Top Right Bracket */}
        <motion.div
            className="absolute w-2 h-2 border-t-2 border-r-2 border-cyan-400"
            animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 15 : 0,
                y: isHovered ? -15 : 0
            }}
        />
        {/* Bottom Left Bracket */}
        <motion.div
            className="absolute w-2 h-2 border-b-2 border-l-2 border-cyan-400"
            animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? -15 : 0,
                y: isHovered ? 15 : 0
            }}
        />
        {/* Bottom Right Bracket */}
        <motion.div
            className="absolute w-2 h-2 border-b-2 border-r-2 border-cyan-400"
            animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 15 : 0,
                y: isHovered ? 15 : 0
            }}
        />

        {/* --- LAYER 4: Text Label --- */}
        <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap overflow-hidden"
            animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? 'auto' : 0
            }}
        >
            <div className="flex flex-col items-center">
                <span className="text-[8px] font-mono text-cyan-400 bg-black/90 px-2 py-0.5 border border-cyan-500/30 tracking-widest">
                    TARGET_LOCKED
                </span>
                {/* Tiny line connecting text to cursor */}
                <div className="w-[1px] h-2 bg-cyan-500/50"></div>
            </div>
        </motion.div>

      </motion.div>
    </>
  );
};

export default CyberpunkCursor;