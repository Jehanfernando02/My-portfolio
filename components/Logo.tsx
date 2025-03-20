"use client"

import { motion } from "framer-motion"

interface LogoProps {
  size?: number
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="text-white font-bold text-2xl relative z-10">
        <span className="text-purple-500 glow-text">JF</span>
      </div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 opacity-30 blur-md"
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

