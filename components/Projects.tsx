"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  details?: string
  technologies?: string[]
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "We Neighbour",
      description:
        "A digital platform designed to enhance communication, security, and engagement in apartment communities. Residents can share resources, receive real-time safety alerts, manage visitor access with QR codes, book amenities, and stay updated with community announcements—all in one seamless app.",
      image: "/assets/neighbour.webp",
      category: "Ongoing Group Project",
      details:
        "We-Neighbour is a smart community management platform designed to improve communication, security, and engagement in apartment living. It provides features such as real-time safety alerts, QR code visitor management, a community forum, and a resource-sharing system to enhance daily interactions.",
      technologies: ["Flutter", "Node.js", "MongoDB", "AWS", "Firebase", "QR Code API", "Google Calendar API"],
    },  
    
    {
      id: 2,
      title: "Imperial Fit",
      description:
        "A next-generation fitness platform designed to provide users with personalized workout plans, progress tracking, and an interactive shopping experience for fitness gear. With Imperial Fit, users can access expert fitness programs, book training sessions, and manage their fitness journey seamlessly.",
      image: "/assets/Imperial.png",
      category: "Individual Project",
      details:
        "Imperial Fit is a comprehensive fitness ecosystem that brings together workout planning, progress tracking, and a seamless shopping experience. Users can explore tailored fitness programs, receive expert guidance, track their progress in real-time, and purchase gym essentials—all within a single platform.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Firebase", "Stripe API"],
    },
  
    {
      "id": 3,
      "title": "Dream Space",
      "description": 
        "A modern property search application designed to help users find their ideal homes with ease. Dream Space offers advanced search filtering, detailed property pages, Google Maps integration for location insights, and a user-friendly favorites list to save properties.",
      "image": "/assets/dream.png",
      "category": "Individual Project",
      "details": 
        "Dream Space is a feature-rich real estate platform that simplifies property discovery. Users can filter properties by type, price, bedrooms, date added, and postcode area, view high-quality images, check floor plans, and explore locations using interactive Google Maps. With a sleek, responsive UI, it ensures a smooth browsing experience across all devices.",
      "technologies": ["React", "Google Maps API", "React Router", "CSS (Flexbox, Grid)", "JSON Data Handling", "UI Libraries"]
    },
    {
      "id": 4,
      "title": "Trello Clone",
      "description": 
        "A task management application inspired by Trello, allowing users to organize and track their work efficiently. It features draggable task cards, customizable boards, real-time updates, and a collaborative workflow.",
      "image": "/assets/trello-clone.png",
      "category": "Individual Project",
      "details": 
        "This Trello Clone provides an intuitive way to manage tasks using boards, lists, and draggable cards. Users can create new boards, add task lists, move tasks between lists via drag-and-drop, and track their progress visually. The app supports local storage for persistence and ensures a responsive user experience across devices.",
      "technologies": ["React", "React DnD", "Redux", "Tailwind CSS", "Local Storage", "Context API"]
    },
    
    {
      id: 5,
      title: "Example Project 4",
      description:
        "An AI chatbot for automated customer support, designed to handle inquiries and provide instant responses.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Featured Project",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          {/* Grid layout for 3 projects per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#1a1a2e] p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <div className="relative overflow-hidden rounded-lg gradient-border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-md"
                  />
                </div>

                <div className="mt-4">
                  <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-md transition-colors text-white"
                    >
                      View Details
                    </button>
                    <a
                      href="#"
                      className="px-4 py-2 border border-purple-500/30 hover:border-purple-500/50 rounded-md transition-colors text-white"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#0a0118] p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <Image
                  src={selectedProject.image || "/placeholder.svg?height=400&width=800"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">{selectedProject.title}</h4>
                <p className="text-gray-300">{selectedProject.details}</p>

                {selectedProject.technologies && (
                  <div>
                    <h5 className="text-lg font-semibold mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 flex gap-4">
                  <a
                    href="#"
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md transition-colors text-white"
                  >
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-purple-500 hover:border-purple-400 rounded-md transition-colors text-white"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
