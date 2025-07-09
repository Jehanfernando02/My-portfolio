"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)

    try {
      await emailjs.sendForm("service_ctswhji", "template_83g8o88", formRef.current, "V9uWBvoNl3lM34Nsk")

      setShowSuccess(true)
      formRef.current.reset()
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      console.error("Failed to send email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "02jehanfernando@gmail.com",
      href: "mailto:02jehanfernando@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 779970273",
      href: "tel:+94779970273",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="relative py-16 overflow-hidden sm:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-purple-900/10" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-6 gradient-text">Let's Work Together</h2>
          <p className="max-w-3xl px-4 mx-auto text-lg sm:text-xl text-muted">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="p-6 surface rounded-2xl sm:p-8">
                <h3 className="mb-4 text-xl font-bold sm:text-2xl text-primary sm:mb-6">Get In Touch</h3>
                <p className="mb-6 text-sm leading-relaxed text-secondary sm:mb-8 sm:text-base">
                  I'm always excited to work on new projects and collaborate with talented individuals. Whether you have
                  a project in mind or just want to chat about technology, feel free to reach out!
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-3 space-x-3 transition-all sm:space-x-4 sm:p-4 rounded-xl hover:bg-indigo-500/10 group"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-transform rounded-full sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-110">
                        <info.icon className="w-4 h-4 text-white sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted">{info.label}</p>
                        <p className="text-sm font-medium break-all transition-colors sm:text-base text-primary group-hover:text-gradient sm:break-normal">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 surface rounded-2xl sm:p-8"
            >
              <h3 className="mb-4 text-xl font-bold sm:text-2xl text-primary sm:mb-6">Send Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-secondary">
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 surface border border-indigo-500/30 rounded-lg text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-secondary">
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 surface border border-indigo-500/30 rounded-lg text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 surface border border-indigo-500/30 rounded-lg text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-sm sm:text-base"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 surface border border-indigo-500/30 rounded-lg text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white rounded-full sm:w-5 sm:h-5 border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed z-50 max-w-xs bottom-4 right-4 sm:bottom-6 sm:right-6 sm:max-w-sm"
          >
            <div className="flex items-center px-4 py-3 space-x-2 text-white bg-green-500 rounded-lg shadow-lg sm:px-6 sm:py-4 sm:space-x-3">
              <CheckCircle className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm font-medium sm:text-base">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
