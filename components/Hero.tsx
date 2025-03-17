"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="hero-glow left-1/4 top-1/4"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="mb-4 text-sm text-gray-400">
              Hello! I am <span className="text-purple-400">Creative Person</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">A Designer who</h1>

            <div className="text-4xl md:text-5xl font-bold mb-6">
              Judges a book by its <span className="text-purple-500 glow-text">cover...</span>
            </div>

            <p className="text-gray-300 mb-8">
              Because that's literally what covers are for. A good design communicates the essence.
            </p>

            <div className="text-2xl md:text-3xl font-bold mb-2">
              I'm a Software Engineer
              <span className="inline-block ml-1 animate-pulse">|</span>
            </div>

            <div className="text-sm text-gray-400 mb-8">
              Currently, I'm a Software Engineer at{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Facebook
              </a>
            </div>

            <p className="text-gray-300 mb-8 max-w-lg">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. I make meaningful and
              delightful digital products that create an equilibrium between user needs and business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="hero-glow absolute -z-10"></div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="3D Avatar"
                  width={300}
                  height={300}
                  className="rounded-full glow-image"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

