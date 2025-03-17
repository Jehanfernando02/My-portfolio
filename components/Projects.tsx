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
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Featured Project",
    },
    {
      id: 2,
      title: "Example Project",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Featured Project",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="hero-glow absolute top-1/2 left-1/4"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedId(project.id)}
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

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative overflow-hidden rounded-lg gradient-border">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#0a0118] p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Project Details</h3>
                <button onClick={() => setSelectedId(null)} className="text-gray-400 hover:text-white">
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
                  src="/placeholder.svg?height=400&width=800"
                  alt="Project Detail"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Example Project</h4>
                <p className="text-gray-300">
                  This is a detailed description of the project. It includes information about the technologies used,
                  challenges faced, and solutions implemented. You can replace this text with your own project details.
                </p>

                <div>
                  <h5 className="text-lg font-semibold mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

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

