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
      category: "Group Project",
      details:
        "We-Neighbour is a smart community management platform designed to improve the daily lives of apartment residents by addressing common challenges such as poor communication, security risks, and lack of engagement. The platform offers real-time safety alerts, allowing residents to report emergencies or maintenance issues instantly. It includes a QR code-based visitor management system to enhance security and streamline guest entry. The resource-sharing system enables residents to lend and borrow items within the community, promoting cost savings and sustainability. Additionally, We-Neighbour features an integrated event calendar, a verified services directory, and a community forum for open discussions, fostering a more connected and informed neighborhood. The user-friendly mobile application ensures that all these features are easily accessible, providing a seamless and efficient way for residents and building managers to stay connected and manage daily operations effectively.",
      technologies: ["Flutter", "Node.js", "MongoDB", "AWS", "Firebase", "QR Code API", "Google Calendar API"],
      liveLink: "https://www.weneighbour.live/",
      githubLink: "https://github.com/alwaysPasindu/we_neighbour_project",
    },
    {
      id: 2,
      title: "Imperial Fit",
      description:
        "Imperial Fit is a modern fitness platform that offers personalized workout plans, progress tracking, and an integrated e-commerce section for gym essentials, providing a complete solution for fitness enthusiasts.",
      image: "/assets/imperialFit.png",
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
      id: 5,
      title: "Aqua Life",
      description:
        "A website raising awareness about SDG 14, promoting ocean conservation and sustainable use of marine resources.",
      image: "/assets/aqua.png",
      category: "Group Project",
      details:
        "Aqua Life is a collaborative group project aimed at highlighting SDG 14. It features a splash screen introducing the mission to protect marine life, a home page with a navigation bar and oceanic theme, an interactive gallery showcasing marine ecosystems, a shop offering eco-friendly products to support ocean conservation, a progressive user profile for environmental enthusiasts, a feedback form for visitor input, an SVG sitemap, and a team page detailing our contributions. Each member created a content page exploring topics like marine pollution and sustainable fishing, enhanced with a custom page editor.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "http://aqualife.kesug.com/",
      githubLink: "https://github.com/nethsuka/WDGP_coursework",
    },
    {
      id: 6,
      title: "Trello Clone",
      description: "A task management app with draggable task cards, customizable boards, and real-time updates.",
      image: "/assets/task.jpg",
      category: "Ongoing Individual Project",
      details:
        "This Trello Clone provides an efficient way to organize and track tasks using a Kanban-style interface. Users can create multiple boards, add lists to categorize tasks, and use draggable task cards for seamless workflow management. The app leverages React DnD for drag-and-drop interactions, Redux for state management, and local storage for data persistence. With a clean, responsive UI built using Tailwind CSS, it ensures an optimized experience across devices. Future enhancements may include user authentication, real-time collaboration, and backend integration for cloud storage.",
      technologies: ["React", "React DnD", "Redux", "Tailwind CSS", "Local Storage", "Context API"],
      liveLink: "https://trello-clone-ex.vercel.app/",
      githubLink: "https://github.com/Jehanfernando02/Task-Manager",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      {/* Light Background Glow - Reduced opacity */}
      <div className="absolute inset-0 hero-glow opacity-10 scale-150 bg-gradient-to-br from-blue-300/10 via-blue-400/5 to-blue-500/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-800">
            Featured Projects
          </h2>
          
          <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">
            A collection of my most significant work, showcasing my skills in web development, 
            mobile applications, and software engineering.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-blue-100 flex flex-col h-full"
              >
                {/* Project Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <p className="text-blue-800 text-sm mb-4 line-clamp-3 flex-grow bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags - Limited to 3 with count */}
                  {project.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                      View Details
                    </button>
                    
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-white border border-blue-200 hover:bg-blue-50 text-blue-600 text-sm font-medium rounded-md transition-colors"
                        title="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 bg-white border border-blue-200 hover:bg-blue-50 text-blue-600 text-sm font-medium rounded-md transition-colors"
                        title="Source Code"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                  <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-600 text-white rounded-full mb-3">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-white/80 text-sm sm:text-base line-clamp-2">{selectedProject.description}</p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-24rem)]">
                <div className="prose prose-blue max-w-none">
                  <div className="flex items-center gap-4 mb-6">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-blue-200 hover:bg-blue-50 text-blue-700 text-sm font-medium rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">Project Overview</h4>
                    <p className="text-blue-900">{selectedProject.details}</p>
                  </div>
                  
                  {selectedProject.technologies && (
                    <div>
                      <h4 className="text-xl font-semibold text-blue-800 mb-4">Technologies Used</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="px-4 py-3 bg-white border border-blue-100 shadow-sm text-blue-700 rounded-lg text-sm font-medium flex items-center"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
