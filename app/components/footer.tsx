"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Jehanfernando02",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jehan-fernando-",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:02jehanfernando@gmail.com",
      label: "Email",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative py-16 overflow-hidden border-t border-indigo-500/20">
            {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10" />
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 mb-12 md:grid-cols-3">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse-glow">
                  JF
                </div>
                <span className="text-xl font-bold gradient-text">Jehan Fernando</span>
              </div>
              <p className="leading-relaxed text-muted">
                Full Stack Developer passionate about creating exceptional digital experiences with modern technologies
                and innovative solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-lg font-semibold text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="transition-colors text-muted hover:text-primary"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-lg font-semibold text-primary">Let's Connect</h4>
              <p className="mb-4 text-muted">Follow me on social media and let's build something amazing together!</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 transition-all rounded-full surface hover:bg-indigo-500/20 group"
                  >
                    <social.icon className="w-5 h-5 transition-colors text-muted group-hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 text-center border-t border-indigo-500/20"
          >
            <p className="flex items-center justify-center space-x-2 text-muted">
              <span>© {currentYear} Jehan Fernando. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
