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
  " EscherWebSockets",
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
  "Security",]

// Best Practices",
//   "Code Review",
//   "Mentoring",
// ]

const skillCategories = [
  { title: "Frontend Development", skills: frontendSkills, color: "from-indigo-500 to-cyan-500" },
  { title: "Backend Development", skills: backendSkills, color: "from-indigo-500 to-cyan-500" },
  { title: "Database & Storage", skills: databaseSkills, color: "from-indigo-500 to-cyan-500" },
  { title: "DevOps & Tools", skills: devToolsSkills, color: "from-indigo-500 to-cyan-500" },
  { title: "Mobile Development", skills: mobileSkills, color: "from-indigo-500 to-cyan-500" },
  { title: "Other Skills", skills: otherSkills, color: "from-indigo-500 to-cyan-500" },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text">
            Skills & Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Technologies and tools I use to bring ideas to life
          </p>
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
                className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-indigo-500/20 rounded-2xl hover:shadow-2xl hover:shadow-indigo-500/20"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.02 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 text-sm font-medium text-gray-300 transition-all border rounded-lg bg-white/5 hover:text-white border-indigo-500/20 hover:border-indigo-500/40 hover:bg-indigo-500/10"
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
            <h3 className="mb-8 text-2xl font-bold text-center text-white">Core Strengths</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Problem Solving",
                  description: "Analytical thinking and creative solutions to complex challenges",
                  icon: "🧠",
                },
                {
                  title: "Team Collaboration",
                  description: "Effective communication and seamless teamwork in agile environments",
                  icon: "🤝",
                },
                {
                  title: "Continuous Learning",
                  description: "Staying updated with latest technologies and industry best practices",
                  icon: "📚",
                },
              ].map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 text-center transition-all border bg-white/10 backdrop-blur-lg border-indigo-500/20 rounded-xl hover:shadow-2xl hover:shadow-indigo-500/20 group"
                >
                  <div className="mb-4 text-4xl">{strength.icon}</div>
                  <h4 className="mb-3 text-lg font-semibold text-white transition-all group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-gray-300">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}