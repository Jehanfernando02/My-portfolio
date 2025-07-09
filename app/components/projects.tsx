"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "../data/projects"

export default function Projects() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Individual Project", "Group Project", "Ongoing Individual Project"]
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-text">Featured Projects</h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-muted">
            A showcase of my most impactful work, demonstrating expertise in modern web technologies
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-glow"
                    : "surface text-secondary hover:text-primary"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden project-card surface rounded-2xl group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium text-white rounded-full bg-indigo-500/80">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold transition-colors text-primary group-hover:text-gradient">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-purple-600 border rounded bg-purple-500/20 dark:text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded bg-gray-500/20 text-muted">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/project/${project.id}`}
                      className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-medium text-white transition-all rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:shadow-lg group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 transition-colors rounded-lg surface hover:bg-indigo-500/20"
                      >
                        <ExternalLink className="w-4 h-4 transition-colors text-muted hover:text-primary" />
                      </motion.a>
                    )}

                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 transition-colors rounded-lg surface hover:bg-indigo-500/20"
                      >
                        <Github className="w-4 h-4 transition-colors text-muted hover:text-primary" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
