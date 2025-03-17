"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
  color: string
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "TypeScript", level: 85, color: "#3178C6" },
    { name: "Next.js", level: 80, color: "#000000" },
    { name: "Tailwind CSS", level: 95, color: "#06B6D4" },
    { name: "UI/UX Design", level: 85, color: "#FF61F6" },
    { name: "Node.js", level: 75, color: "#339933" },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="hero-glow absolute bottom-1/4 right-1/4"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>

            <div className="flex flex-wrap justify-center gap-4">
              {["Figma", "Adobe XD", "Photoshop", "VS Code", "Git", "GitHub", "Docker", "AWS"].map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="px-4 py-2 bg-gray-800/50 rounded-md"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

