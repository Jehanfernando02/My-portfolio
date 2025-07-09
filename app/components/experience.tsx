"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "ICIEOS",
    location: "Remote",
    period: "June 2025 - Present",
    description:
      "Working on innovative full-stack solutions, contributing to both frontend and backend development using modern technologies and frameworks.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Express.js"],
    achievements: [
      "Developed responsive web applications with modern UI/UX principles",
      "Implemented RESTful APIs and database optimization",
      "Collaborated with cross-functional teams in agile environment",
      "Contributed to code reviews and best practices implementation",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Informatics Institute of Technology",
    affiliation: "University of Westminster",
    period: "2023 - Present",
    description:
      "Pursuing comprehensive education in software engineering, algorithms, data structures, and modern development practices.",
    highlights: [
      "Strong foundation in programming fundamentals",
      "Object-oriented programming and design patterns",
      "Database management and system design",
      "Software engineering methodologies",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-text">Experience & Education</h2>
          <p className="max-w-3xl mx-auto text-xl text-muted">My professional journey and academic background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="flex items-center mb-8 text-2xl font-bold text-primary">
              <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 transition-all surface rounded-2xl hover:bg-indigo-500/5 group"
                >
                  <div className="flex flex-col mb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="mb-2 text-xl font-bold transition-colors text-primary group-hover:text-gradient">
                        {exp.title}
                      </h4>
                      <p className="mb-2 text-lg font-semibold text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                    </div>
                    <div className="flex flex-col text-sm md:items-end text-muted">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-secondary">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="mb-3 text-sm font-semibold text-primary">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-indigo-600 border rounded-full bg-indigo-500/20 dark:text-indigo-300 border-indigo-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center mb-8 text-2xl font-bold text-primary">
              <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 transition-all surface rounded-2xl hover:bg-purple-500/5 group"
                >
                  <div className="flex flex-col mb-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="mb-2 text-xl font-bold transition-colors text-primary group-hover:text-gradient">
                        {edu.degree}
                      </h4>
                      <p className="mb-1 text-lg font-semibold text-purple-600 dark:text-purple-400">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted">{edu.affiliation}</p>
                    </div>
                    <div className="flex items-center mt-2 text-sm text-muted md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>

                  <p className="mb-6 leading-relaxed text-secondary">{edu.description}</p>

                  <div>
                    <h5 className="mb-3 text-sm font-semibold text-primary">Key Areas:</h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
