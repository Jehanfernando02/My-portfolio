"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_r5474wa",
          "template_83g8o88",
          formRef.current,
          "Pjc44CHoEK9xSOuFo"
        )
        .then(
          (result) => {
            console.log(result.text);
            setMessageSent(true);
            formRef.current?.reset();
            setTimeout(() => setMessageSent(false), 3000);
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-indigo-900"
    >
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-50 scale-150 bg-gradient-to-br from-indigo-900/40 via-teal-800/30 to-black/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2)_0%,transparent_70%)] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Professional Header */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text tracking-tight"
          >
            Reach Out
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto glow-text"
          >
            I’m eager to collaborate on innovative projects. Feel free to reach out via the form below or connect with me directly through the details provided.
          </motion.p>

          {/* Contact Info and Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-10 mb-12"
          >
            {/* Phone */}
            <motion.a
              href="tel:+94779970273"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="flex items-center gap-3 text-white glow-text"
            >
              <Image src="/assets/phone.jpg" alt="Phone" width={32} height={32} className="glow-image" />
              <span className="text-base">+94 779970273</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:02jehanfernando@gmail.com"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="flex items-center gap-3 text-white glow-text"
            >
              <Image src="/assets/email.jpeg" alt="Email" width={32} height={32} className="glow-image" />
              <span className="text-base">02jehanfernando@gmail.com</span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/jehan-fernando-/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="flex items-center gap-3 text-white glow-text"
            >
              <Image src="/assets/linkedin.webp" alt="LinkedIn" width={32} height={32} className="glow-image" />
              <span className="text-base">LinkedIn</span>
            </motion.a>

            {/* GitHub */}
            {/* <motion.a
              href="https://github.com/Jehanfernando02/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="flex items-center gap-3 text-white glow-text"
            >
              <Image src="/assets/github.png" alt="GitHub" width={32} height={32} className="glow-image" />
              <span className="text-base">GitHub</span>
            </motion.a> */}
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-[#1a1a2e]/90 p-8 rounded-2xl shadow-xl max-w-lg mx-auto space-y-8 glow-border backdrop-blur-sm"
          >
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-2 glow-text"
              >
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="user_name"
                whileFocus={{ scale: 1.02, borderColor: "#A855F7" }}
                className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white bg-[#0f071a]/90 shadow-md glow-border transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-2 glow-text"
              >
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="user_email"
                whileFocus={{ scale: 1.02, borderColor: "#A855F7" }}
                className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white bg-[#0f071a]/90 shadow-md glow-border transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-2 glow-text"
              >
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={5}
                whileFocus={{ scale: 1.02, borderColor: "#A855F7" }}
                className="w-full px-5 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white bg-[#0f071a]/90 shadow-md glow-border transition-all duration-300"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 hover:from-purple-700 hover:via-indigo-700 hover:to-teal-700 rounded-lg text-white font-semibold text-lg shadow-lg glow-border transition-all duration-500"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Success Popup */}
          <AnimatePresence>
            {messageSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-400 via-green-400 to-purple-500 text-white p-6 rounded-xl shadow-2xl z-50 glow-border"
              >
                <p className="text-lg font-semibold text-center glow-text">
                  Message Sent Successfully!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative Gradient Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 via-teal-500 to-indigo-500 rounded-full max-w-4xl glow-border"
      />
    </section>
  );
}