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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-3/5 space-y-8 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-2 bg-[#1a1a2e]/80 rounded-full text-base sm:text-lg text-purple-200 border border-purple-600/50 shadow-lg glow-border">
              Hey There, I’m
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text">
              Jehan Fernando
            </h1>

            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 glow-text">
              I’m a second-year Computer Science undergraduate at the Informatics Institute of Technology affiliated with the University of Westminster, with a passion for crafting software that solves real-world problems.
              Lately, I’ve been focusing on full-stack development, working with the MERN stack—creating dynamic React front-ends and robust Node.js-MongoDB back-ends. Alongside this, I have a strong background in Java, Object-Oriented Programming, and data structures.
            </p>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 glow-text">
              I’ve worked with Spring Boot, Python, and MySQL to create scalable solutions, sharpened my skills with RESTful APIs using Mongoose and Postman, and recently started exploring Flutter for mobile development. I thrive in teamwork, love tackling challenges, and am always eager to collaborate—reach out, and let’s create something amazing!
            </p>
          </motion.div>

          {/* Image Section - Smaller and Lower */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/5 flex justify-center mt-12 lg:mt-4"
          >
            <div className="relative group max-w-[200px]">
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
                    width={200}
                    height={200}
                    className="rounded-full object-cover border-4 border-purple-600/70 shadow-lg group-hover:border-teal-500/80 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-600/20 via-indigo-600/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    
    </section>
  );
}