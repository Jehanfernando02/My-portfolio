"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "We Neighbour",
      description:
        "A digital platform designed to enhance communication, security, and engagement in apartment communities.",
      image: "/assets/neighb.png",
      category: "Ongoing Group Project",
      details:
        "We-Neighbour is a smart community management platform designed to improve communication, security, and engagement in apartment living. Features include real-time safety alerts, QR code visitor management, and a resource-sharing system.",
      technologies: ["Flutter", "Node.js", "MongoDB", "AWS", "Firebase", "QR Code API", "Google Calendar API"],
      liveLink: "https://we-neighbour-demo.example.com",
      githubLink: "https://github.com/yourusername/we-neighbour",
    },
    {
      id: 2,
      title: "Imperial Fit",
      description:
        "A next-generation fitness platform with personalized workout plans, progress tracking, and an interactive shopping experience.",
      image: "/assets/Imperial.png",
      category: "Individual Project",
      details:
        "Imperial Fit is a comprehensive fitness ecosystem offering workout planning, progress tracking, and a seamless shopping experience for gym essentials.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "Firebase", "Stripe API"],
      liveLink: "https://imperial-fit-demo.example.com",
      githubLink: "https://github.com/yourusername/imperial-fit",
    },
    {
      id: 3,
      title: "Dream Space",
      description:
        "A modern property search application with advanced filtering, detailed property pages, and Google Maps integration.",
      image: "/assets/dream.png",
      category: "Individual Project",
      details:
        "Dream Space simplifies property discovery with filterable searches, high-quality images, floor plans, and interactive Google Maps.",
      technologies: ["React", "Google Maps API", "React Router", "CSS (Flexbox, Grid)", "JSON Data Handling", "UI Libraries"],
      liveLink: "https://dream-space-demo.example.com",
      githubLink: "https://github.com/yourusername/dream-space",
    },
    {
      id: 4,
      title: "Trello Clone",
      description:
        "A task management app with draggable task cards, customizable boards, and real-time updates.",
      image: "/assets/task.jpg",
      category: "Individual Project",
      details:
        "This Trello Clone offers an intuitive way to manage tasks using boards, lists, and draggable cards with local storage persistence.",
      technologies: ["React", "React DnD", "Redux", "Tailwind CSS", "Local Storage", "Context API"],
      liveLink: "https://trello-clone-demo.example.com",
      githubLink: "https://github.com/yourusername/trello-clone",
    },
    {
      id: 5,
      title: "Real Time Event Ticketing System",
      description:
        "An AI-powered chatbot for automated customer support with instant responses.",
      image: "/assets/event.png",
      category: "Featured Project",
      details:
        "This AI Chatbot enhances customer support by providing instant, accurate responses to inquiries.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
      liveLink: "https://ai-chatbot-demo.example.com",
      githubLink: "https://github.com/yourusername/ai-chatbot",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 hero-glow opacity-20 scale-150 bg-purple-500/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white glow-text">Projects</h2>

          {/* Grid layout for project cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="bg-[#1a1a2e] p-5 rounded-xl shadow-lg flex flex-col items-center text-center gradient-border"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="flex-1">
                  <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all duration-300 glow-border"
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#0f071a] p-6 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-purple-500/30 glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* More Visible Glowing Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 z-10 text-white bg-purple-700/80 hover:bg-purple-800/80 p-3 rounded-full transition-all duration-300 glow-border shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Slightly Smaller Full Image with Glow */}
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg?height=300&width=400"}
                    alt={selectedProject.title}
                    width={400}
                    height={300}
                    className="w-full h-auto max-h-48 object-contain glow-image rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 text-xl font-bold text-white glow-text">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Details Section */}
                <div className="space-y-5">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 glow-text mb-2">Overview</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">{selectedProject.details}</p>
                  </div>

                  {selectedProject.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 glow-text mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-700/40 text-purple-100 rounded-full text-sm font-medium glow-border shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Buttons Container */}
                  <div className="flex gap-4 pt-3">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full text-white font-semibold transition-all duration-300 glow-border shadow-md"
                      >
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-gray-800/80 hover:bg-gray-700/80 border border-purple-500/70 hover:border-purple-400 rounded-full text-white font-semibold transition-all duration-300 glow-border shadow-md"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}