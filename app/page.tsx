"use client"

import { motion } from "framer-motion"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"
import ParticleBackground from "./components/particle-background"
import ScrollProgress from "./components/scroll-progress"

export default function Home() {
  return (
    <div className="min-h-screen">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen"
      >
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  )
}
