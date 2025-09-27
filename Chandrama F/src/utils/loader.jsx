// ChandraaRealconLoader.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ChandraaRealconLoader() {
  const text = "Chandraa Realcon";

  const letterVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.35,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="relative"
        initial={{ scale: 0.95 }}
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glowing Aura */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            filter: "blur(40px)",
            background:
              "radial-gradient(circle, rgba(245,220,115,0.6), rgba(203,168,126,0.1))",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Typing Text */}
        <h1 className="relative text-4xl md:text-6xl font-extrabold tracking-wide flex bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-lg">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariant}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* Blinking Cursor */}
          <motion.span
            className="ml-1 w-1 bg-yellow-400"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
          />
        </h1>
      </motion.div>
    </div>
  );
}
