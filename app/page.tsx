"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"
import ParticleBackground from "../components/particle-background"
import LoadingScreen from "../components/loading-screen"
import ScrollProgress from "../components/scroll-progress"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">{loading && <LoadingScreen key="loading" />}</AnimatePresence>

      {!loading && (
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
      )}
    </>
  )
}
