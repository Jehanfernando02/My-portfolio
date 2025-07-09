"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { projects } from "../../data/projects" // Adjust the import path as necessary
import ParticleBackground from "../../components/particle-background"
import Navbar from "../../components/navbar"

export default function ProjectDetail() {
  const params = useParams()
  const projectId = Number.parseInt(params.id as string)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-primary">Project not found</h1>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container relative z-10 px-6 mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center space-x-2 transition-colors text-muted hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative h-64 mb-8 overflow-hidden rounded-2xl">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full surface text-primary">
                  {project.category}
                </span>
                <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{project.title}</h1>
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {project.teamSize}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-12 mx-auto lg:grid-cols-3 max-w-7xl">
            {/* Main Content */}
            <div className="space-y-12 lg:col-span-2">
              {/* Project Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 surface rounded-2xl"
              >
                <h2 className="flex items-center mb-6 text-2xl font-bold text-primary">
                  <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                  Project Overview
                </h2>
                <p className="text-lg leading-relaxed text-secondary">{project.details}</p>
              </motion.section>

              {/* Key Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 surface rounded-2xl"
              >
                <h2 className="flex items-center mb-6 text-2xl font-bold text-primary">
                  <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                  Key Features
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start p-4 space-x-3 transition-colors rounded-xl hover:bg-indigo-500/5"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                      <span className="text-secondary">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Challenges & Solutions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 surface rounded-2xl"
              >
                <h2 className="flex items-center mb-6 text-2xl font-bold text-primary">
                  <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-start p-4 space-x-3 transition-colors rounded-xl hover:bg-purple-500/5"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      <span className="text-secondary">{challenge}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* What I Learned */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-8 surface rounded-2xl"
              >
                <h2 className="flex items-center mb-6 text-2xl font-bold text-primary">
                  <Lightbulb className="w-8 h-8 mr-3 text-yellow-500" />
                  What I Learned
                </h2>
                <div className="space-y-4">
                  {project.learnings.map((learning, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start p-4 space-x-3 transition-colors rounded-xl hover:bg-yellow-500/5"
                    >
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-500 rounded-full" />
                      <span className="text-secondary">{learning}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 surface rounded-2xl"
              >
                <h3 className="flex items-center mb-4 text-xl font-bold text-primary">
                  <Code className="w-6 h-6 mr-2" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="px-3 py-2 text-sm transition-transform border rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-primary border-indigo-500/30 hover:scale-105"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 surface rounded-2xl"
              >
                <h3 className="mb-4 text-xl font-bold text-primary">Project Links</h3>
                <div className="space-y-3">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center w-full gap-2 py-3 font-medium text-white transition-all bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </motion.a>
                  )}

                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center w-full gap-2 py-3 font-medium transition-all border border-gray-600 text-secondary rounded-xl hover:bg-gray-800/20"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 surface rounded-2xl"
              >
                <h3 className="mb-4 text-xl font-bold text-primary">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Duration</span>
                    <span className="font-medium text-secondary">{project.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Team Size</span>
                    <span className="font-medium text-secondary">{project.teamSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Category</span>
                    <span className="font-medium text-secondary">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
