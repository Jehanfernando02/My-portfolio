"use client"

import { motion } from "framer-motion"

const frontendSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Sass",
  "jQuery",
  "Vue.js",
  "Angular",
]

const backendSkills = [
  "Node.js",
  "Express.js",
  "Spring Boot",
  "Java",
  "Python",
  "PHP",
  "REST API",
  "GraphQL",
  "Microservices",
  "JWT",
  "OAuth",
  "WebSockets",
]

const databaseSkills = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Redis",
  "SQLite",
  "Mongoose",
  "Prisma",
  "Sequelize",
  "Database Design",
  "Query Optimization",
]

const devToolsSkills = [
  "Git",
  "GitHub",
  "VS Code",
  "Docker",
  "AWS",
  "Vercel",
  "Netlify",
  "Postman",
  "Figma",
  "Slack",
  "Jira",
  "Jenkins",
  "CI/CD",
]

const mobileSkills = [
  "Flutter",
  "React Native",
  "Dart",
  "Android Studio",
  "iOS Development",
  "Cross-platform",
  "Mobile UI/UX",
  "App Store Deployment",
]

const otherSkills = [
  "Agile/Scrum",
  "Test-Driven Development",
  "Unit Testing",
  "Integration Testing",
  "Performance Optimization",
  "Security Best Practices",
  "Code Review",
  "Mentoring",
]

const skillCategories = [
  { title: "Frontend Development", skills: frontendSkills, color: "from-indigo-500 to-purple-500" },
  { title: "Backend Development", skills: backendSkills, color: "from-purple-500 to-indigo-500" },
  { title: "Database & Storage", skills: databaseSkills, color: "from-indigo-600 to-purple-600" },
  { title: "DevOps & Tools", skills: devToolsSkills, color: "from-purple-600 to-indigo-600" },
  { title: "Mobile Development", skills: mobileSkills, color: "from-indigo-500 to-purple-400" },
  { title: "Other Skills", skills: otherSkills, color: "from-purple-400 to-indigo-500" },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold md:text-5xl gradient-text">Skills & Expertise</h2>
          <p className="max-w-3xl mx-auto text-xl text-muted">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 transition-all duration-300 surface rounded-2xl hover:shadow-glow hover:bg-indigo-500/5"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                  <h3 className="text-xl font-bold text-primary">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.02 }}
                      viewport={{ once: true }}
                      className="px-3 py-2 text-sm font-medium transition-all border rounded-lg cursor-default skill-item surface text-secondary hover:text-primary border-indigo-500/20 hover:border-indigo-500/40 hover:bg-indigo-500/10"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="mb-8 text-2xl font-bold text-center text-primary">Core Strengths</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Problem Solving",
                  description: "Analytical thinking and creative solutions to complex challenges",
                  icon: "🧠",
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  title: "Team Collaboration",
                  description: "Effective communication and seamless teamwork in agile environments",
                  icon: "🤝",
                  gradient: "from-purple-500 to-indigo-500",
                },
                {
                  title: "Continuous Learning",
                  description: "Staying updated with latest technologies and industry best practices",
                  icon: "📚",
                  gradient: "from-indigo-600 to-purple-600",
                },
              ].map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 text-center transition-all surface rounded-xl hover:shadow-glow group hover:bg-indigo-500/5"
                >
                  <div className="mb-4 text-4xl">{strength.icon}</div>
                  <h4 className="mb-3 text-lg font-semibold transition-colors text-primary group-hover:text-gradient">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-muted">{strength.description}</p>

                  {/* Subtle gradient accent */}
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${strength.gradient} rounded-full mx-auto mt-4 opacity-60 group-hover:opacity-100 transition-opacity`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { label: "Frontend Technologies", count: frontendSkills.length, color: "indigo" },
                { label: "Backend Technologies", count: backendSkills.length, color: "purple" },
                { label: "Database Systems", count: databaseSkills.length, color: "indigo" },
                { label: "Development Tools", count: devToolsSkills.length, color: "purple" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 text-center transition-all surface rounded-xl hover:bg-indigo-500/5"
                >
                  <div className={`text-3xl font-bold text-${stat.color}-500 mb-2`}>{stat.count}+</div>
                  <p className="text-sm text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
