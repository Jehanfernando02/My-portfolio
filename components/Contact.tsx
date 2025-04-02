"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("Pjc44CHoEK9xSOuFo");
      console.log("EmailJS initialized successfully with public key: Pjc44CHoEK9xSOuFo");
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) {
      console.error("Form reference is null");
      setIsSubmitting(false);
      return;
    }

    // Log form data before sending
    const formData = new FormData(formRef.current);
    const dataToSend = Object.fromEntries(formData);
    console.log("Form data to send:", dataToSend);

    // Verify EmailJS credentials (for debugging)
    const serviceId = "service_r5474wa";
    const templateId = "template_83g8o88";
    const publicKey = "Pjc44CHoEK9xSOuFo";
    console.log("EmailJS credentials:", { serviceId, templateId, publicKey });

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setMessageSent(true);
        formRef.current?.reset();
        setIsSubmitting(false);
        setTimeout(() => setMessageSent(false), 3000);
      },
      (error) => {
        console.error("EmailJS send failed:", {
          message: error.message || "Unknown error",
          status: error.status || "N/A",
          text: error.text || "No response text",
          fullError: error,
        });
        alert("Failed to send message. Please check the console for details and try again.");
        setIsSubmitting(false);
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      <div className="absolute inset-0 hero-glow opacity-20 scale-150 bg-gradient-to-br from-blue-300/20 via-blue-400/10 to-blue-500/20"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">Get In Touch</h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            I'm eager to collaborate on innovative projects. Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10 border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Contact Information</h3>
                <p className="text-blue-700 mb-6">
                  Have a question or want to work together? Here's how you can reach me directly.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+94779970273"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors border border-blue-50"
                >
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 text-sm">Phone</h4>
                    <p className="text-blue-600 text-sm">+94 779970273</p>
                  </div>
                </a>

                <a
                  href="mailto:02jehanfernando@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors border border-blue-50"
                >
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-800 text-sm">Email</h4>
                    <p className="text-blue-600 text-sm">02jehanfernando@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-5">Send a Message</h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="w-full pl-9 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-blue-900 bg-white text-sm"
                      required
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="w-full pl-9 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-blue-900 bg-white text-sm"
                      required
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-2 left-3 flex items-start pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full pl-9 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-blue-900 bg-white text-sm"
                      required
                      placeholder="Your message"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 ${isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"} rounded-md text-white font-medium text-sm shadow-sm transition-colors flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {messageSent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setMessageSent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}