"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="py-10 relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 border-t border-indigo-500/50">
      {/* Cosmic Background with Animated Nebula and Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.5),_transparent_60%)] opacity-90 animate-[nebula_10s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+PHBhdHRlcm4gaWQ9InAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNhNWZmZmYiIG9wYWNpdHk9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3ApIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] animate-[twinkle_3s_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-purple-900/70 mix-blend-soft-light"></div>

      {/* Enhanced Glowing Orbs */}
      <div className="absolute top-6 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-50 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-3 right-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full blur-2xl opacity-60 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-40 animate-[float_7s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Top Section with Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-indigo-500/30">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <Link href="#home" className="inline-block mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(99,102,241,0.8)]">
                  JF
                </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 tracking-wide animate-[cosmicGlow_4s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(99,102,241,0.9)]">
                  Jehan Fernando
                </span>
              </div>
            </Link>
            <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 tracking-wide animate-[cosmicGlow_4s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(99,102,241,0.9)]">
              Crafting code, building dreams.
            </p>
          </motion.div>

          {/* Social Links - Horizontal Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/jehan-fernando-/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 30px rgba(99, 102, 241, 1), 0 0 60px rgba(147, 197, 253, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-800/80 to-blue-800/80 p-2 rounded-xl border border-indigo-500/60 backdrop-blur-md relative overflow-hidden"
            >
              <Image
                src="/assets/linkedin.webp"
                alt="LinkedIn"
                width={30}
                height={30}
                className="rounded-full shadow-[0_0_15px_rgba(99,102,241,0.7)]"
              />
              <span className="text-sm font-semibold text-indigo-100 drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]">
                LinkedIn
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 hover:opacity-100 animate-[shine_2s_infinite] transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="https://github.com/Jehanfernando02/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 30px rgba(99, 102, 241, 1), 0 0 60px rgba(147, 197, 253, 0.6)",
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-800/80 to-blue-800/80 p-2 rounded-xl border border-indigo-500/60 backdrop-blur-md relative overflow-hidden"
            >
              <Image
                src="/assets/github.png"
                alt="GitHub"
                width={30}
                height={30}
                className="rounded-full shadow-[0_0_15px_rgba(99,102,241,0.7)]"
              />
              <span className="text-sm font-semibold text-indigo-100 drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]">
                GitHub
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent opacity-0 hover:opacity-100 animate-[shine_2s_infinite] transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </div>

        {/* Middle Section with Navigation and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Navigation Links with Orbiting Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  scale: 1.2,
                  color: "#e0e7ff",
                  textShadow: "0 0 15px rgba(99, 102, 241, 1), 0 0 25px rgba(147, 197, 253, 0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                className="text-sm font-semibold text-indigo-100 relative group transition-all duration-300"
              >
                {link.name}
                <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 animate-[orbit_5s_infinite]"></span>
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button with Galactic Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#home"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 30px rgba(99, 102, 241, 1), 0 0 60px rgba(147, 197, 253, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
              className="text-sm font-semibold text-white px-5 py-2 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)] border border-indigo-400/70 relative overflow-hidden animate-[pulseGlow_2s_ease-in-out_infinite]"
            >
              <span className="relative z-10">Back to Top</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent animate-[shine_1.5s_infinite]"></div>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section with Copyright and Divider */}
        <div className="text-center">
          {/* Galactic Divider with Energy Flow */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full mx-auto max-w-xl shadow-[0_0_20px_rgba(99,102,241,1)] animate-[energyFlow_3s_ease-in-out_infinite] mb-6"
          />

          {/* Copyright with Ethereal Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-indigo-100 font-medium drop-shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-[fadeGlow_3s_ease-in-out_infinite]"
          >
            © {currentYear} Jehan Fernando. All rights reserved.
            <p className="text-xs text-indigo-200/80 mt-2">Designed and developed with passion and precision.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

