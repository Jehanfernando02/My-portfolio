"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  // const containerRef = useRef<HTMLDivElement>(null)

  // Animation variants for smoother transitions
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20 bg-gradient-to-br from-black via-purple-950 to-black"
    >
      {/* Enhanced background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-glow left-1/4 top-1/4 opacity-30 scale-150 bg-purple-500/20"></div>
        <div className="hero-glow right-1/4 bottom-1/4 opacity-20 scale-125 bg-purple-600/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
           <div className="inline-block px-3 py-1 bg-purple-800/20 rounded-full text-base sm:text-lg text-purple-200 border border-purple-600/30 shadow-sm">
  Hello, I'm
</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
              Jehan Fernando
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I’m a second-year undergraduate at the Informatics Institute of Technology, affiliated with the University of Westminster, UK. Passionate about Full Stack Development, I’m constantly expanding my knowledge in modern programming languages and frameworks, turning ideas into powerful digital solutions with the MERN stack (React, Node.js, MongoDB) and beyond—think Java, Python, MySQL, and Spring Boot.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Armed with a knack for data structures, algorithms, and OOP, I craft seamless RESTful APIs using Mongoose and Postman, while diving into Flutter for cross-platform mobile magic. But it’s not just code—I bring leadership, adaptability, and a collaborative spirit to every project. Ready to innovate and inspire? Let’s build something extraordinary together!
            </p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/5 flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative group max-w-[200px]">
              {/* Decorative elements around image */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/25 to-indigo-600/25 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gray-900 rounded-full shadow-md border border-purple-700/30"></div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="relative"
                >
                  <Image
                    src="/assets/jehan.jpg"
                    alt="Jehan Fernando"
                    width={200}
                    height={200}
                    className="rounded-full object-cover border-2 border-purple-600/50 shadow-md group-hover:border-purple-500/70 transition-all duration-300"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-5 h-8 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}