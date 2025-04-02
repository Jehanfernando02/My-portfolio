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
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Light Background Glow - Reduced opacity */}
      <div className="absolute inset-0 hero-glow opacity-20 scale-150 bg-gradient-to-br from-blue-300/20 via-blue-400/10 to-blue-500/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 space-y-8 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 bg-white/80 rounded-full text-base sm:text-lg text-blue-600 border border-blue-200 shadow-lg">
              Hey There, I&apos;m
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
              Jehan Fernando
            </h1>

            {/* Mobile Profile Image - Only visible on mobile */}
            <div className="flex flex-col items-center lg:hidden">
              <div className="relative max-w-[180px]">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 rounded-full blur-lg"></div>
                <div className="relative">
                  <div className="absolute -inset-1 bg-white/80 rounded-full shadow-md border border-blue-200"></div>
                  <div className="relative">
                    <Image
                      src="/assets/jehan.jpg"
                      alt="Jehan Fernando"
                      width={180}
                      height={180}
                      className="rounded-full object-cover border-4 border-blue-300 shadow-md"
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
                  className="bg-white p-2 rounded-full shadow-md border border-blue-200/50 hover:shadow-lg transition-shadow"
                >
                  <Image src="/assets/linkedin.webp" alt="LinkedIn" width={32} height={32} className="rounded-full" />
                </motion.a>
                <motion.a
                  href="https://github.com/Jehanfernando02"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-2 rounded-full shadow-md border border-blue-200/50 hover:shadow-lg transition-shadow"
                >
                  <Image src="/assets/github.png" alt="GitHub" width={32} height={32} className="rounded-full" />
                </motion.a>
              </div>

              {/* Mobile Download Resume Button */}
              <motion.a
                href="/assets/jehan_fernando_resume.pdf"
                download="Jehan_Fernando_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
              >
                Download Resume
              </motion.a>
            </div>

            <p className="text-blue-900 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I&apos;m a second-year Computer Science undergraduate at the Informatics Institute of Technology,
              affiliated with the University of Westminster. I&apos;m passionate about building software that solves
              real-world problems, with a focus on full-stack development using the MERN stack—crafting dynamic React
              front-ends and solid Node.js-MongoDB back-ends. I also have a strong foundation in Java, Object-Oriented
              Programming, and data structures.
            </p>
            <p className="text-blue-900 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I&apos;ve worked with Spring Boot, Python, and MySQL for scalable solutions, enhanced my ability to design
              and integrate RESTful APIs using Mongoose and Postman, and recently started exploring Flutter for mobile
              development. I enjoy teamwork, tackling challenges, and collaborating on exciting projects—reach out, and
              let&apos;s create something great!
            </p>
          </motion.div>

          {/* Desktop Image Section - Only visible on desktop */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/5 hidden lg:flex flex-col items-center mt-12 lg:mt-4"
          >
            <div className="flex items-center gap-8">
              <div className="relative max-w-[200px] flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 via-blue-500/30 to-blue-600/30 rounded-full blur-lg"></div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-white/80 rounded-full shadow-md border border-blue-200"></div>
                    <div className="relative">
                      <Image
                        src="/assets/jehan.jpg"
                        alt="Jehan Fernando"
                        width={200}
                        height={200}
                        className="rounded-full object-cover border-4 border-blue-300 shadow-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Download Portfolio Button - One Line */}
                <motion.a
                  href="/assets/jehan_fernando_resume.pdf"
                  download="Jehan_Fernando_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors"
                >
                  Download Resume
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
                  className="bg-white p-2 rounded-full shadow-md border border-blue-200/50 hover:shadow-lg transition-shadow"
                >
                  <Image src="/assets/linkedin.webp" alt="LinkedIn" width={40} height={40} className="rounded-full" />
                </motion.a>
                <motion.a
                  href="https://github.com/Jehanfernando02"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-2 rounded-full shadow-md border border-blue-200/50 hover:shadow-lg transition-shadow"
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

