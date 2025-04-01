"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import LogoAnimation from "../components/LogoAnimation"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  // Removed mouse move effect to reduce lag

  return (
    <main ref={mainRef} className="min-h-screen overflow-hidden">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Hero />
        <div className="py-16 relative">
          <LogoAnimation />
        </div>
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  )
}

