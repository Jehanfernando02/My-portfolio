"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="hero-glow absolute bottom-1/3 left-1/3"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>

          <p className="text-center text-gray-300 mb-12">
            I&apos;m currently looking to join a more cross-functional team that values improving people&apos;s lives
            <br /> through accessible design. Let&apos;s talk if you&apos;re hiring!
          </p>

          <div className="text-center mb-8">
            <a href="mailto:thisisanemail@example.com" className="text-purple-400 hover:underline">
              thisisanemail@example.com
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {["github", "twitter", "linkedin"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ y: -3 }}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">{platform}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                </svg>
              </motion.a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
