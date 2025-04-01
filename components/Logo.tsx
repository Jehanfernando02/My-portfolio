"use client"

import { motion } from "framer-motion"

interface LogoProps {
  size?: number
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center">
        <div className="relative">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg flex items-center justify-center overflow-hidden"
            style={{ width: size, height: size }}
          >
            <span className="text-lg">JF</span>

            {/* Subtle animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-blue-300 rounded-bl-lg"></div>
          </div>

          {/* Subtle glow effect */}
          <div
            className="absolute -inset-1 bg-blue-500/20 blur-md rounded-lg -z-10"
            style={{ transform: "scale(0.8)" }}
          ></div>
        </div>

        <div className="ml-2 font-bold text-blue-800">
          <span className="text-lg">Jehan</span>
        </div>
      </div>
    </motion.div>
  )
}

