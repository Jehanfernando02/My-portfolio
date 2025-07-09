"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10" />

      {/* Floating Elements */}
      <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-indigo-500/5 blur-3xl animate-float" />
      <div
        className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-medium border rounded-full surface text-primary border-indigo-500/30">
                  👋 Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-primary"
              >
                I'm <span className="gradient-text">Jehan Fernando</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="mb-4 text-xl md:text-2xl text-secondary">Full Stack Developer</h2>
                <p className="max-w-2xl text-lg text-muted">
                  Passionate about crafting exceptional digital experiences with modern technologies. Currently building
                  innovative solutions as a Full Stack Developer Intern at ICIEOS.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8 lg:justify-start">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 btn-primary"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch</span>
                </motion.a>

                <motion.a
                  href="/assets/JehanFernando-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 space-x-2 transition-all border rounded-lg surface text-primary hover:bg-indigo-500/10 border-indigo-500/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex justify-center space-x-6 lg:justify-start">
                {[
                  { icon: Github, href: "https://github.com/Jehanfernando02", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/jehan-fernando-", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:02jehanfernando@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 transition-all rounded-full surface hover:bg-indigo-500/20 group"
                  >
                    <Icon className="w-5 h-5 transition-colors text-muted group-hover:text-primary" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Profile Image - Oval shape for better fit */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-20 animate-pulse-glow rounded-[50%]" />
                <div className="relative w-64 h-80 p-1 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[50%]">
                  <div className="w-full h-full overflow-hidden rounded-[50%]">
                    <Image
                      src="/assets/jehan.jpg"
                      alt="Jehan Fernando"
                      width={256}
                      height={320}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div variants={itemVariants} className="absolute transform -translate-x-1/2 bottom-8 left-1/2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex flex-col items-center text-muted"
            >
              <span className="mb-2 text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
