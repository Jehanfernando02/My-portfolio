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
      id: 2,
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
      id: 3,
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
      "id": 5,
      "title": "BookStore",
      "description": "A full-stack e-commerce application for managing books, authors, carts, and orders, featuring a RESTful API backend and a responsive React frontend.",
      "image": "/assets/libronest.png",
      "category": "Individual Project",
      "details": "BookStore is an online bookstore platform that allows users to browse, add, and manage books and authors, maintain a shopping cart, and place orders. The backend, built with Java, Jersey, and Jetty, provides a REST API with endpoints for CRUD operations on books, authors, customers, carts, and orders, using an in-memory storage system. The frontend, developed with React and Tailwind CSS, offers an intuitive UI for interacting with the API. Key features include CORS support for cross-origin requests, Swagger documentation for API exploration, and sample data initialization for testing. The backend is deployed on Render, and the frontend is hosted on Vercel, with ongoing efforts to resolve deployment issues related to Docker and CORS configuration.",
      "technologies": ["Java", "Jersey", "Jetty", "Maven", "React", "Tailwind CSS", "Swagger", "Docker", "Render", "Vercel"],
      "liveLink": "https://libro-nest.vercel.app/",
      "githubLink": "https://github.com/Jehanfernando02/Bookstore"
    },

    {
      "id": 6,
      "title": "Sri Lankan Supper Club",
      "description": "A vibrant event planning application tailored for Sri Lankan cultural celebrations, featuring supper plan generation, shopping lists, and a community feast board.",
      "image": "/assets/supper.png",
      "category": "Ongoing Individual Project",
      "details": "Sri Lankan Supper Club offers a delightful way to plan events with culturally rich supper plans, including menus, ambience, and music for occasions like Avurudu, Vesak, and weddings. It includes a dynamic shopping list generator, a feast board for sharing plans, event preparation timelines, and a festival calendar, all enhanced with smooth animations and responsive design.",
      "technologies": [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Axios",
        "Framer Motion",
        "Tailwind CSS",
        "JavaScript (ES6+)"
      ],
      "liveLink": "/",
      "githubLink": "https://github.com/Jehanfernando02/Supper-Club"
    },
    {
      id: 7,
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
      id: 8,
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
      className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      {/* Light Background Glow - Reduced opacity */}
      <div className="absolute inset-0 scale-150 hero-glow opacity-10 bg-gradient-to-br from-blue-300/10 via-blue-400/5 to-blue-500/10"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="mb-4 text-4xl font-bold text-center text-blue-800">
            Featured Projects
          </h2>
          
          <p className="max-w-2xl mx-auto mb-12 text-center text-blue-700">
            A collection of my most significant work, showcasing my skills in web development, 
            mobile applications, and software engineering.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col h-full overflow-hidden bg-white border border-blue-100 shadow-md rounded-xl"
              >
                {/* Project Image with Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="w-full p-4">
                      <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-blue-600 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow p-5">
                  <p className="flex-grow p-3 mb-4 text-sm text-blue-800 border border-blue-100 rounded-lg line-clamp-3 bg-blue-50/50">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags - Limited to 3 with count */}
                  {project.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium text-blue-600 rounded bg-blue-50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium text-blue-600 rounded bg-blue-50">
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
                      className="flex-1 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      View Details
                    </button>
                    
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-sm font-medium text-blue-600 transition-colors bg-white border border-blue-200 rounded-md hover:bg-blue-50"
                        title="Live Demo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-sm font-medium text-blue-600 transition-colors bg-white border border-blue-200 rounded-md hover:bg-blue-50"
                        title="Source Code"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
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
              <div className="relative overflow-hidden h-72 sm:h-96">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <div className="max-w-3xl">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white bg-blue-600 rounded-full">
                      {selectedProject.category}
                    </span>
                    <h3 className="mb-2 text-3xl font-bold text-white sm:text-4xl">{selectedProject.title}</h3>
                    <p className="text-sm text-white/80 sm:text-base line-clamp-2">{selectedProject.description}</p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute p-2 text-white transition-colors rounded-full top-4 right-4 bg-black/50 hover:bg-black/70"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 transition-colors bg-white border border-blue-200 rounded-lg hover:bg-blue-50"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                  
                  <div className="p-6 mb-8 border border-blue-100 bg-blue-50 rounded-xl">
                    <h4 className="mb-4 text-xl font-semibold text-blue-800">Project Overview</h4>
                    <p className="text-blue-900">{selectedProject.details}</p>
                  </div>
                  
                  {selectedProject.technologies && (
                    <div>
                      <h4 className="mb-4 text-xl font-semibold text-blue-800">Technologies Used</h4>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {selectedProject.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center px-4 py-3 text-sm font-medium text-blue-700 bg-white border border-blue-100 rounded-lg shadow-sm"
                          >
                            <div className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></div>
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
