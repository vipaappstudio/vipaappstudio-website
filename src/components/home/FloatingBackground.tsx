"use client";

import { motion } from "framer-motion";

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50" />

      {/* Top Left Blob */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      {/* Top Right Blob */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-[-50px] h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-[140px]"
      />

      {/* Bottom Blob */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] left-1/3 h-[550px] w-[550px] rounded-full bg-cyan-400/20 blur-[120px]"
      />

      {/* Small Floating Orb 1 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[12%] top-[25%] h-16 w-16 rounded-full bg-blue-400/30 blur-2xl"
      />

      {/* Small Floating Orb 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[18%] top-[35%] h-20 w-20 rounded-full bg-purple-400/30 blur-2xl"
      />

      {/* Small Floating Orb 3 */}
      <motion.div
        animate={{
          y: [0, -35, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] left-[22%] h-14 w-14 rounded-full bg-cyan-300/40 blur-xl"
      />

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #64748b 1px, transparent 1px),
            linear-gradient(to bottom, #64748b 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
    </div>
  );
}