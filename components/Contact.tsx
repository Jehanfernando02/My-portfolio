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
      className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-purple-950 to-indigo-900"
    >
      {/* Consistent Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-40 scale-150 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-teal-500/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <h1 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text tracking-tight">
            Get in Touch
          </h1>

          <p className="text-center text-gray-200 mb-12 text-lg leading-relaxed glow-text">
            I’m excited to collaborate on projects that drive innovation and impact.
            <br />
            Let’s connect and create something extraordinary!
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-12">
            <motion.a
              href="https://www.linkedin.com/in/jehan-fernando-/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="flex items-center gap-2 text-white glow-text"
            >
              <Image src="/assets/linkedin.webp" alt="LinkedIn" width={32} height={32} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/Jehanfernando02/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
              className="flex items-center gap-2 text-white glow-text"
            >
              <Image src="/assets/github.png" alt="GitHub" width={32} height={32} />
              <span>GitHub</span>
            </motion.a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-[#1a1a2e]/80 p-6 md:p-8 rounded-xl shadow-lg max-w-lg mx-auto space-y-6 glow-border"
          >
            <div>
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
                whileFocus={{ borderColor: "#A855F7" }}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white bg-[#0f071a]/80 shadow-md glow-border"
                required
              />
            </div>

            <div>
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
                whileFocus={{ borderColor: "#A855F7" }}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white bg-[#0f071a]/80 shadow-md glow-border"
                required
              />
            </div>

            <div>
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
                whileFocus={{ borderColor: "#A855F7" }}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white bg-[#0f071a]/80 shadow-md glow-border"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white font-semibold transition-all duration-300 glow-border shadow-lg"
            >
              Send Message
            </motion.button>
          </form>

          {/* Success Popup */}
          <AnimatePresence>
            {messageSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-lg shadow-lg z-50 glow-border"
              >
                <p className="text-base font-medium text-center glow-text">
                  Message Sent Successfully! 🎉
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}