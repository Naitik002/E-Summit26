import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // --- 1. MOUSE PHYSICS (Smooth Lag) ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }; // Snappy but smooth
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Detect interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('glass-card') // Added your specific class
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // --- 2. ANIMATION VARIANTS ---
  const bracketColor = isClicked ? "#ef4444" : (isHovering ? "#22d3ee" : "#d946ef"); // Red -> Cyan -> Pink

  return (
    <>
      {/* 1. CENTER DOT (Always stays centered) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 2. THE TARGET BRACKETS (The "Scope") */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="relative w-12 h-12 flex items-center justify-center"
          animate={{
            rotate: isHovering ? 0 : 360, // Spin when idle, Lock (0deg) when hovering
            scale: isClicked ? 0.8 : (isHovering ? 1.4 : 1), // Expand on hover, shrink on click
          }}
          transition={{
            rotate: {
                duration: isHovering ? 0.3 : 8, // Snap to 0 quickly on hover, spin slowly otherwise
                repeat: isHovering ? 0 : Infinity,
                ease: isHovering ? "backOut" : "linear"
            },
            scale: { duration: 0.2 }
          }}
        >
          {/* Top Left Bracket */}
          <motion.div
            className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? -4 : 0, y: isHovering ? -4 : 0 }} // Expand outwards on hover
          />

          {/* Top Right Bracket */}
          <motion.div
            className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? 4 : 0, y: isHovering ? -4 : 0 }}
          />

          {/* Bottom Left Bracket */}
          <motion.div
            className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? -4 : 0, y: isHovering ? 4 : 0 }}
          />

          {/* Bottom Right Bracket */}
          <motion.div
            className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? 4 : 0, y: isHovering ? 4 : 0 }}
          />

          {/* Optional: Center Crosshair lines that appear only on hover */}
          <motion.div
            className="absolute w-full h-[1px] bg-cyan-400/50"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: isHovering ? 1 : 0, scaleX: isHovering ? 1 : 0 }}
          />
          <motion.div
            className="absolute h-full w-[1px] bg-cyan-400/50"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: isHovering ? 1 : 0, scaleY: isHovering ? 1 : 0 }}
          />

        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;