"use client"

import { motion } from "framer-motion"

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse-glow">
            JF
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white"
        >
          <h2 className="mb-2 text-2xl font-bold gradient-text">Jehan Fernando</h2>
          <p className="text-gray-300">
            Loading amazing portfolio<span className="loading-dots"></span>
          </p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          className="h-1 max-w-xs mx-auto mt-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
        />
      </div>
    </motion.div>
  )
}
