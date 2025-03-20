"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 relative overflow-hidden border-t border-gray-800/50">
      {/* Stunning Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-40 scale-150 bg-gradient-to-t from-purple-600/30 via-indigo-500/20 to-teal-500/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Personal Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text">
              Crafting Digital Experiences
            </p>
            <p className="text-sm text-gray-300 glow-text">Jehan Fernando </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)",
                  color: "#A855F7",
                }}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors glow-text"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <motion.a
              href="#home"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)",
                color: "#A855F7",
              }}
              className="text-sm font-medium text-gray-400 rounded-full px-4 py-2 bg-gray-900/70 glow-border shadow-md transition-colors"
            >
              Back to Top
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-gray-200 glow-text"
        >
          © {new Date().getFullYear()} Jehan Fernando. All rights reserved.
        </motion.div>

        {/* Decorative Gradient Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 rounded-full mx-auto max-w-2xl glow-border"
        />
      </div>
    </footer>
  );
}