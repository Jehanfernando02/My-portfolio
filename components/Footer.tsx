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
    <footer className="py-8 relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 border-t border-purple-950/50">
      {/* Darker Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-50 scale-150 bg-gradient-to-br from-purple-950/50 via-teal-900/30 to-indigo-950/40"></div>

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
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text tracking-tight">
              Crafting Digital Masterpieces
            </p>
            <p className="text-xs text-gray-300 glow-text">Jehan Fernando </p>
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
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)",
                  color: "#A855F7",
                }}
                whileTap={{ scale: 0.95 }}
                className="text-xs font-medium text-gray-200 hover:text-white transition-colors glow-text"
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
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-xs font-medium text-white px-4 py-1.5 bg-gradient-to-r from-purple-950 to-indigo-950 hover:from-purple-950 hover:to-indigo-950 rounded-full glow-border shadow-md transition-all duration-300"
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
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(168, 85, 247, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/assets/linkedin.webp"
              alt="LinkedIn"
              width={48}
              height={48}
              className="glow-image rounded-full"
            />
            <span className="text-xs font-medium text-gray-200 glow-text">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/Jehanfernando02/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(168, 85, 247, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/assets/github.png"
              alt="GitHub"
              width={48}
              height={48}
              className="glow-image rounded-full"
            />
            <span className="text-xs font-medium text-gray-200 glow-text">GitHub</span>
          </motion.a>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-xs text-gray-300 glow-text"
        >
          © {new Date().getFullYear()} Jehan Fernando. All rights reserved.
        </motion.div>

        {/* Decorative Gradient Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-6 h-0.5 bg-gradient-to-r from-purple-900 via-teal-900 to-indigo-900 rounded-full mx-auto max-w-xl glow-border"
        />
      </div>
    </footer>
  );
}