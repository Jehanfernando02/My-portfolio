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
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-text">Let's Work Together</h2>
          <p className="max-w-3xl mx-auto text-xl text-muted">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 surface rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-primary">Get In Touch</h3>
                <p className="mb-8 leading-relaxed text-secondary">
                  I'm always excited to work on new projects and collaborate with talented individuals. Whether you have
                  a project in mind or just want to chat about technology, feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-4 space-x-4 transition-all rounded-xl hover:bg-indigo-500/10 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 transition-transform rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-110">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">{info.label}</p>
                        <p className="font-medium transition-colors text-primary group-hover:text-gradient">
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
              className="p-8 surface rounded-2xl"
            >
              <h3 className="mb-6 text-2xl font-bold text-primary">Send Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-secondary">
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 transition-colors border rounded-lg surface border-indigo-500/30 text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                      className="w-full px-4 py-3 transition-colors border rounded-lg surface border-indigo-500/30 text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                    className="w-full px-4 py-3 transition-colors border rounded-lg surface border-indigo-500/30 text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                    rows={5}
                    required
                    className="w-full px-4 py-3 transition-colors border rounded-lg resize-none surface border-indigo-500/30 text-primary placeholder-muted focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full py-3 space-x-2 font-medium text-white transition-all rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
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
            className="fixed z-50 bottom-6 right-6"
          >
            <div className="flex items-center px-6 py-4 space-x-3 text-white bg-green-500 rounded-lg shadow-lg">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Message sent successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
