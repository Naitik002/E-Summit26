import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  // --- 1. MOUSE PHYSICS (Smooth Lag) ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
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
        target.classList.contains('glass-card')
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
      {/* 1. CENTER DOT (Made smaller: w-1 h-1) */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 2. THE TARGET BRACKETS (The "Scope") */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          // Made smaller: w-8 h-8 (32px) instead of w-12 h-12 (48px)
          className="relative w-8 h-8 flex items-center justify-center"
          animate={{
            rotate: isHovering ? 0 : 360,
            scale: isClicked ? 0.8 : (isHovering ? 1.4 : 1),
          }}
          transition={{
            rotate: {
                duration: isHovering ? 0.3 : 8,
                repeat: isHovering ? 0 : Infinity,
                ease: isHovering ? "backOut" : "linear"
            },
            scale: { duration: 0.2 }
          }}
        >
          {/* Top Left Bracket - Thinner borders, smaller size, tighter expansion */}
          <motion.div
            className="absolute top-0 left-0 w-2 h-2 border-t border-l"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? -3 : 0, y: isHovering ? -3 : 0 }}
          />

          {/* Top Right Bracket */}
          <motion.div
            className="absolute top-0 right-0 w-2 h-2 border-t border-r"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? 3 : 0, y: isHovering ? -3 : 0 }}
          />

          {/* Bottom Left Bracket */}
          <motion.div
            className="absolute bottom-0 left-0 w-2 h-2 border-b border-l"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? -3 : 0, y: isHovering ? 3 : 0 }}
          />

          {/* Bottom Right Bracket */}
          <motion.div
            className="absolute bottom-0 right-0 w-2 h-2 border-b border-r"
            style={{ borderColor: bracketColor }}
            animate={{ x: isHovering ? 3 : 0, y: isHovering ? 3 : 0 }}
          />

          {/* Center Crosshair lines */}
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