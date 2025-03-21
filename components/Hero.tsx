"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 md:pt-20 bg-gradient-to-br from-black via-purple-950 to-indigo-900 overflow-hidden"
    >
      {/* Consistent Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-40 scale-150 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-teal-500/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 space-y-8 text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="inline-block px-4 py-2 bg-[#1a1a2e]/80 rounded-full text-base sm:text-lg text-purple-200 border border-purple-600/50 shadow-lg glow-border"
            >
              Hey There, I’m
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text">
              Jehan Fernando
            </h1>

            {/* Enhanced, Human-Written Description */}
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 glow-text">
              I’m a second-year Computer Science undergraduate at the Informatics Institute of Technology, partnered with the University of Westminster, UK, with a passion for turning ideas into impactful digital solutions. As a full-stack developer, I specialize in the MERN stack—crafting dynamic React front-ends, robust Node.js back-ends, and efficient MongoDB databases—while also wielding Java, Python, MySQL, and Spring Boot to tackle diverse challenges.
            </p>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 glow-text">
              I thrive on solving real-world problems with a strong foundation in data structures, algorithms, and Object-Oriented Programming (OOP). From building RESTful APIs with Mongoose and Postman to exploring cross-platform mobile development with Flutter, I’m always eager to learn and adapt. With solid communication, leadership, and teamwork skills, I’m excited to collaborate on innovative projects that make a difference. Let’s connect and create something extraordinary!
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/5 flex justify-center mt-10 lg:mt-0"
          >
            <div className="relative group max-w-[240px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 via-indigo-600/40 to-teal-600/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative">
                <div className="absolute -inset-2 bg-[#1a1a2e]/80 rounded-full shadow-xl border border-purple-700/50 glow-border"></div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="relative"
                >
                  <Image
                    src="/assets/jehan.jpg"
                    alt="Jehan Fernando"
                    width={240}
                    height={240}
                    className="rounded-full object-cover border-4 border-purple-600/70 shadow-lg group-hover:border-teal-500/80 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 via-indigo-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/80 rounded-full flex justify-center glow-border">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-teal-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}