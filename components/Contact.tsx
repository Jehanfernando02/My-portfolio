"use client"

import type React from "react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [messageSent, setMessageSent] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (formRef.current) {
      emailjs.sendForm("service_r5474wa", "template_83g8o88", formRef.current, "Pjc44CHoEK9xSOuFo").then(
        (result) => {
          console.log(result.text)
          setMessageSent(true)
          formRef.current?.reset()
          setTimeout(() => setMessageSent(false), 3000)
        },
        (error) => {
          console.log(error.text)
          alert("Failed to send message. Please try again.")
        },
      )
    }
  }

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      {/* Light Background Glow - Reduced opacity */}
      <div className="absolute inset-0 hero-glow opacity-20 scale-150 bg-gradient-to-br from-blue-300/20 via-blue-400/10 to-blue-500/20"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Get In Touch</h2>
                <p className="text-blue-900 mb-8">
                  I&apos;m eager to collaborate on innovative projects. Feel free to reach out via the form or connect
                  with me directly.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href="tel:+94779970273"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Image src="/assets/phone.jpg" alt="Phone" width={24} height={24} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Phone</h3>
                    <p className="text-blue-600">+94 779970273</p>
                  </div>
                </a>

                <a
                  href="mailto:02jehanfernando@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Image src="/assets/email.jpeg" alt="Email" width={24} height={24} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">Email</h3>
                    <p className="text-blue-600">02jehanfernando@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/jehan-fernando-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Image src="/assets/linkedin.webp" alt="LinkedIn" width={24} height={24} className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800">LinkedIn</h3>
                    <p className="text-blue-600">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900 bg-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-lg shadow-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {messageSent && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

