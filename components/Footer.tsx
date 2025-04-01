"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-8 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 border-t border-blue-600/30">
      {/* Enhanced Background Glow with Subtle Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent opacity-70 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPjxwYXR0ZXJuIGlkPSJwIiB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48Y2lyY2xlIGN4PSIuNSIgY3k9Ii41IiByPSIuNSIgZmlsbD0iIzAwZGVmZiIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3ApIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Personal Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-2 md:mb-0"
          >
            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 tracking-tight drop-shadow-md">
              Crafting Digital Masterpieces
            </p>
            <p className="text-sm text-blue-200 opacity-80">Jehan Fernando</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  scale: 1.1,
                  color: "#bfdbfe",
                  textShadow: "0 0 8px rgba(191, 219, 254, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium text-blue-200 hover:text-blue-100 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#home"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium text-white px-4 py-1.5 bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 rounded-full shadow-lg transition-all duration-300 border border-blue-300/50"
            >
              Back to Top
            </motion.a>
          </motion.div>
        </div>

        {/* Social Links Section - Stacked Vertically */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 mt-6"
        >
          <motion.a
            href="https://www.linkedin.com/in/jehan-fernando-/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-800/50 p-2 rounded-full border border-blue-600/50"
          >
            <Image
              src="/assets/linkedin.webp"
              alt="LinkedIn"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
            <span className="text-sm font-medium text-blue-100">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/Jehanfernando02/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-800/50 p-2 rounded-full border border-blue-600/50"
          >
            <Image
              src="/assets/github.png"
              alt="GitHub"
              width={48}
              height={48}
              className="rounded-full shadow-md"
            />
            <span className="text-sm font-medium text-blue-100">GitHub</span>
          </motion.a>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-sm text-blue-200 opacity-80"
        >
          © {new Date().getFullYear()} Jehan Fernando. All rights reserved.
        </motion.div>

        {/* Enhanced Decorative Gradient Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full mx-auto max-w-xl shadow-[0_0_10px_rgba(59,130,246,0.7)]"
        />
      </div>
    </footer>
  );
}