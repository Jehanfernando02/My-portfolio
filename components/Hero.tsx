"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  }

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-16 overflow-hidden md:pt-20 bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      {/* Light Background Glow - Reduced opacity */}
      <div className="absolute inset-0 scale-150 hero-glow opacity-20 bg-gradient-to-br from-blue-300/20 via-blue-400/10 to-blue-500/20"></div>

      <div className="container relative z-10 max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full space-y-8 text-center lg:w-3/5 lg:text-left"
          >
            <div className="inline-block px-4 py-2 text-base text-blue-600 border border-blue-200 rounded-full shadow-lg bg-white/80 sm:text-lg">
              Hey There, I&apos;m
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              Jehan Fernando
            </h1>

            {/* Mobile Profile Image - Only visible on mobile */}
            <div className="flex flex-col items-center lg:hidden">
              <div className="relative max-w-[180px]">
                <div className="absolute rounded-full -inset-2 bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 blur-lg"></div>
                <div className="relative">
                  <div className="absolute border border-blue-200 rounded-full shadow-md -inset-1 bg-white/80"></div>
                  <div className="relative">
                    <Image
                      src="/assets/jehan.jpg"
                      alt="Jehan Fernando"
                      width={180}
                      height={180}
                      className="object-cover border-4 border-blue-300 rounded-full shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Social Icons */}
              <div className="flex gap-4 mt-4">
                <motion.a
                  href="https://linkedin.com/in/jehan-fernando-"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-shadow bg-white border rounded-full shadow-md border-blue-200/50 hover:shadow-lg"
                >
                  <Image src="/assets/linkedin.webp" alt="LinkedIn" width={32} height={32} className="rounded-full" />
                </motion.a>
                <motion.a
                  href="https://github.com/Jehanfernando02"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-shadow bg-white border rounded-full shadow-md border-blue-200/50 hover:shadow-lg"
                >
                  <Image src="/assets/github.png" alt="GitHub" width={32} height={32} className="rounded-full" />
                </motion.a>
              </div>

              {/* Mobile View Resume Button */}
              <motion.a
                href="/assets/JehanFernando-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 mt-4 font-medium text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              >
                View Resume
              </motion.a>
            </div>

            <p className="max-w-xl mx-auto text-base leading-relaxed text-blue-900 sm:text-lg lg:mx-0">
              As a second-year Computer Science undergraduate at the Informatics Institute of Technology, affiliated with the University of Westminster,
              I&apos;m deeply passionate about software engineering and full-stack development,
              driven to create software that solves real-world problems.
              I excel at crafting seamless, user-friendly interfaces paired with robust,
              scalable back-end systems, transforming complex challenges into elegant solutions.
              With expertise in designing efficient APIs and exploring cross-platform mobile development,
              I&apos;m a natural collaborator with a creative problem-solving mindset.
            </p>
            <p className="max-w-xl mx-auto text-base leading-relaxed text-blue-900 sm:text-lg lg:mx-0">
              I&apos;m driven by a commitment to excellence and a hunger to learn in fast-paced, innovative environments.
              Eager to contribute my skills and enthusiasm to innovative software engineering teams,
              I&apos;m ready to build impactful solutions and grow as a developer.
              With adaptability and a passion for collaboration, I thrive in dynamic teams,
              contributing to impactful projects that push boundaries. Let&apos;s connect and create something remarkable together!
            </p>
          </motion.div>

          {/* Desktop Image Section - Only visible on desktop */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-col items-center hidden w-full mt-12 lg:w-2/5 lg:flex lg:mt-4"
          >
            <div className="flex items-center gap-8">
              <div className="relative max-w-[200px] flex flex-col items-center">
                <div className="relative">
                  <div className="absolute rounded-full -inset-2 bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 blur-lg"></div>
                  <div className="relative">
                    <div className="absolute border border-blue-200 rounded-full shadow-md -inset-1 bg-white/80"></div>
                    <div className="relative">
                      <Image
                        src="/assets/jehan.jpg"
                        alt="Jehan Fernando"
                        width={200}
                        height={200}
                        className="object-cover border-4 border-blue-300 rounded-full shadow-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop View Resume Button */}
                <motion.a
                  href="/assets/JehanFernando-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 mt-6 font-medium text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
                >
                  View Resume
                </motion.a>
              </div>

              {/* Social Icons - Bigger and Positioned Right */}
              <div className="flex flex-col gap-4">
                <motion.a
                  href="https://linkedin.com/in/jehan-fernando-"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-shadow bg-white border rounded-full shadow-md border-blue-200/50 hover:shadow-lg"
                >
                  <Image src="/assets/linkedin.webp" alt="LinkedIn" width={40} height={40} className="rounded-full" />
                </motion.a>
                <motion.a
                  href="https://github.com/Jehanfernando02"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 transition-shadow bg-white border rounded-full shadow-md border-blue-200/50 hover:shadow-lg"
                >
                  <Image src="/assets/github.png" alt="GitHub" width={40} height={40} className="rounded-full" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}