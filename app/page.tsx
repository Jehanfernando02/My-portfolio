"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"


import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import LogoAnimation from "../components/LogoAnimation"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  // Parallax effect for background elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainRef.current) return

      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      const glowElements = document.querySelectorAll(".hero-glow")
      glowElements.forEach((el) => {
        const element = el as HTMLElement
        const speed = 30
        const xPos = (x - 0.5) * speed
        const yPos = (y - 0.5) * speed
        element.style.transform = `translate(${xPos}px, ${yPos}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen overflow-hidden">
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Hero />
        <About />
        <div className="py-20 relative">
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

