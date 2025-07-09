"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Users, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Clean Code Advocate",
    description: "Writing maintainable, scalable, and efficient code following best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Transforming complex challenges into elegant, user-friendly solutions",
  },
  {
    icon: Users,
    title: "Team Collaborator",
    description: "Thriving in dynamic teams with excellent communication and leadership skills",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks in the ever-evolving tech landscape",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-text">About Me</h2>
          <p className="max-w-3xl mx-auto text-xl text-muted">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 mb-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-8 surface rounded-2xl">
                <h3 className="mb-4 text-2xl font-bold text-primary">My Journey</h3>
                <p className="mb-4 leading-relaxed text-secondary">
                  As a second-year Computer Science undergraduate at the Informatics Institute of Technology, affiliated
                  with the University of Westminster, I'm deeply passionate about software engineering and full-stack
                  development.
                </p>
                <p className="mb-4 leading-relaxed text-secondary">
                  I excel at crafting seamless, user-friendly interfaces paired with robust, scalable back-end systems,
                  transforming complex challenges into elegant solutions. With expertise in designing efficient APIs and
                  exploring cross-platform mobile development, I'm a natural collaborator with a creative
                  problem-solving mindset.
                </p>
                <p className="leading-relaxed text-secondary">
                  Currently working as a Full Stack Developer Intern at ICIEOS, I'm driven by a commitment to excellence
                  and a hunger to learn in fast-paced, innovative environments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-8 surface rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-primary">What Drives Me</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-indigo-500 rounded-full" />
                    <p className="text-secondary">Building impactful solutions that solve real-world problems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full" />
                    <p className="text-secondary">Continuous learning and staying updated with latest technologies</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-indigo-500 rounded-full" />
                    <p className="text-secondary">Collaborating with talented teams to create exceptional products</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-purple-500 rounded-full" />
                    <p className="text-secondary">Writing clean, maintainable code that stands the test of time</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 text-center transition-all surface rounded-xl group hover:bg-indigo-500/5"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 transition-transform rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:scale-110">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-primary">{highlight.title}</h4>
                <p className="text-sm text-muted">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
