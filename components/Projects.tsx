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
        "We-Neighbour is a smart community management platform designed to improve the daily lives of apartment residents by addressing common challenges such as poor communication, security risks, and lack of engagement. The platform offers real-time safety alerts, allowing residents to report emergencies or maintenance issues instantly. It includes a QR code-based visitor management system to enhance security and streamline guest entry. The resource-sharing system enables residents to lend and borrow items within the community, promoting cost savings and sustainability. Additionally, We-Neighbour features an integrated event calendar, a verified services directory, and a community forum for open discussions, fostering a more connected and informed neighborhood. The user-friendly mobile application ensures that all these features are easily accessible, providing a seamless and efficient way for residents and building managers to stay connected and manage daily operations effectively.",
      technologies: [
        "Flutter",
        "Node.js",
        "MongoDB",
        "AWS",
        "Firebase",
        "QR Code API",
        "Google Calendar API",
      ],
      liveLink: "https://www.weneighbour.live/",
      githubLink: "https://github.com/alwaysPasindu/we_neighbour_project",
    },
    {
      id: 2,
      title: "Imperial Fit",
      description:
      "Imperial Fit is a modern fitness platform that offers personalized workout plans, progress tracking, and an integrated e-commerce section for gym essentials, providing a complete solution for fitness enthusiasts.",
      image: "/assets/Imperial.png",
      category: "Individual Project",
      details:
      "Imperial Fit is a comprehensive fitness platform designed to help users achieve their health and wellness goals. It offers personalized workout plans tailored to different fitness levels, progress tracking, and an integrated e-commerce section for gym products such as apparel, accessories, and supplements. The platform also focuses on building a supportive community with motivational content, making it easier for users to stay on track and motivated. With a user-friendly interface, Imperial Fit provides everything needed to improve fitness and purchase essential gym gear in one convenient place.",
      technologies: [
        "ReactJS",
        "Vite",
        "JSX",
        "CSS",
        "React Router v6",
        "React Context API",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JSON Web Tokens (JWT)",
        "Clerk",
        "CORS",
        "Middleware",
        "RESTful API",
        "CRUD operations",
        "JWT Authentication",
      ],
      liveLink: "https://imperial-fit.vercel.app/",
      githubLink: "https://github.com/Jehanfernando02/Imperial-Fit",
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
      technologies: [
        "React",
        "Google Maps API",
        "React Router",
        "CSS (Flexbox, Grid)",
        "JSON Data Handling",
        "UI Libraries",
      ],
      liveLink: "https://dream-space-chi.vercel.app/",
      githubLink: "https://github.com/Jehanfernando02/DreamSpace",
    },
    {
      id: 4,
      title: "Trello Clone",
      description:
        "A task management app with draggable task cards, customizable boards, and real-time updates.",
      image: "/assets/task.jpg",
      category: "Ongoing Individual Project",
      details:
        "This Trello Clone provides an efficient way to organize and track tasks using a Kanban-style interface. Users can create multiple boards, add lists to categorize tasks, and use draggable task cards for seamless workflow management. The app leverages React DnD for drag-and-drop interactions, Redux for state management, and local storage for data persistence. With a clean, responsive UI built using Tailwind CSS, it ensures an optimized experience across devices. Future enhancements may include user authentication, real-time collaboration, and backend integration for cloud storage.",
      technologies: [
        "React",
        "React DnD",
        "Redux",
        "Tailwind CSS",
        "Local Storage",
        "Context API",
      ],
      liveLink: "https://trello-clone-ex.vercel.app/",
      githubLink: "https://github.com/Jehanfernando02/Task-Manager",
    },
    {
      id: 5,
      title: "Real-Time Event Ticketing System",
      description:
        "A concurrent ticketing system that allows vendors to release tickets and customers to purchase them in real-time.",
      image: "/assets/event.png",
      category: "Individual Project",
      details:
        "This system implements the Producer-Consumer pattern using multi-threading to handle concurrent ticket releases and purchases efficiently. Built with React for a dynamic front-end and Spring Boot for a robust backend, it ensures data integrity and real-time updates. The system supports configurable ticket release and retrieval rates, logging, and error handling. Users can monitor available tickets through a user-friendly dashboard, and the backend periodically updates the front-end using polling mechanisms. The database stores transaction history, providing insights into ticket sales and purchase trends.",
      technologies: ["React", "Spring Boot", "OOP", "Java", "REST API", "Periodic Polling"],
      liveLink: "https://event-ticketing-realtime.vercel.app/",
      githubLink: "https://github.com/Jehanfernando02/RealTime-Event-Ticketing-Platform",
    },
    {
      id: 6,
      title: "Aqua Life",
      description:
        "A website designed to raise awareness about Sustainable Development Goal 14 (Life Below Water), promoting the conservation and sustainable use of oceans, seas, and marine resources.",
      image: "/assets/aqua.png",
      category: "Group Project",
      details:
        "Aqua Life is a collaborative group project aimed at highlighting SDG 14. It features a splash screen introducing the mission to protect marine life, a home page with a navigation bar and oceanic theme, an interactive gallery showcasing marine ecosystems, a shop offering eco-friendly products to support ocean conservation, a progressive user profile for environmental enthusiasts, a feedback form for visitor input, an SVG sitemap, and a team page detailing our contributions. Each member created a content page exploring topics like marine pollution and sustainable fishing, enhanced with a custom page editor.",
      technologies: ["HTML, CSS, JavaScript"],
      liveLink: "http://aqualife.kesug.com/",
      githubLink: "https://github.com/nethsuka/WDGP_coursework",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-purple-950 to-indigo-900">
      {/* Enhanced Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-40 scale-150 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-teal-500/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text tracking-tight">
            My Projects
          </h2>

          {/* Stunning Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: project.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)",
                  transition: { duration: 0.3 },
                }}
                className="bg-[#1a1a2e]/80 p-6 rounded-xl shadow-lg flex flex-col items-center text-center gradient-border overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-lg mb-5 group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="text-sm text-purple-300 glow-text">{project.category}</div>
                  <h3 className="text-xl font-bold text-white glow-text">{project.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{project.description}</p>
                </div>

                <motion.button
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full text-white font-semibold transition-all duration-300 glow-border shadow-md"
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0f071a]/90 p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-purple-500/40 glow-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Stunning Close Button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1, rotate: 90, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 text-white bg-gradient-to-r from-purple-700 to-indigo-700 p-3 rounded-full transition-all duration-300 glow-border shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg?height=300&width=400"}
                    alt={selectedProject.title}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover rounded-xl shadow-lg glow-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white glow-text">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 glow-text mb-2">Overview</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">{selectedProject.details}</p>
                  </div>

                  {selectedProject.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 glow-text mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-1 bg-purple-700/50 text-purple-100 rounded-full text-sm font-medium glow-border shadow-sm"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    {selectedProject.liveLink && (
                      <motion.a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full text-white font-semibold transition-all duration-300 glow-border shadow-md"
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(168, 85, 247, 0.8)" }}
                        className="px-6 py-2 bg-gray-800/80 hover:bg-gray-700/80 border border-purple-500/70 hover:border-purple-400 rounded-full text-white font-semibold transition-all duration-300 glow-border shadow-md"
                      >
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}