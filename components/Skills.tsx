"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "Java", color: "#F89820" },         // Vibrant orange
    { name: "JavaScript", color: "#F0DB4F" },   // Bright yellow
    { name: "React", color: "#61DAFB" },        // Cyan (already nice)
    { name: "Tailwind CSS", color: "#38BDF8" }, // Light teal
    { name: "MySQL", color: "#00A8E8" },        // Bright blue
    { name: "MongoDB", color: "#4DB33D" },      // Fresh green
    { name: "Python", color: "#306998" },       // Cool blue
    { name: "Spring Boot", color: "#6DB33F" },  // Green (already nice)
    { name: "Node.js", color: "#68A063" },      // Soft green
    { name: "Flutter", color: "#027DFD" },      // Vivid blue
    { name: "REST API", color: "#FF6F61" },     // Coral (already nice)
    { name: "Mongoose", color: "#A52A2A" },     // Rich brown-red
  ];

  const toolsAndTechnologies: Skill[] = [
    { name: "GitHub", color: "#F05032" },       // Orange-red (already nice)
    { name: "VS Code", color: "#007ACC" },      // Blue (already nice)
    { name: "Postman", color: "#FF6C37" },      // Orange (already nice)
    { name: "Bootstrap", color: "#7952B3" },    // Purple (already nice)
    { name: "Figma", color: "#F24E1E" },        // Orange-red (already nice)
    { name: "Vercel", color: "#00D4B4" },       // Bright teal (replaced black)
    { name: "Firebase", color: "#FFCA28" },     // Yellow (already nice)
    { name: "Thunder Client", color: "#4CAF50" }, // Green (already nice)
    { name: "Slack", color: "#E01E5A" },        // Vibrant pink (replaced dark purple)
    { name: "Android Studio", color: "#3DDC84" }, // Fresh green
    { name: "IntelliJ IDEA", color: "#FE3159" },  // Bold red-pink
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-purple-950 to-indigo-900"
    >
      {/* Consistent Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-40 scale-150 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-teal-500/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 glow-text tracking-tight">
            My Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 20px ${skill.color}80`,
                  transition: { duration: 0.3 },
                }}
                className="relative p-5 rounded-xl shadow-lg overflow-hidden bg-[#1a1a2e]/80 glow-border"
                style={{ border: `2px solid ${skill.color}50` }}
              >
                <div
                  className="absolute inset-0 opacity-20 hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}60, transparent)`,
                  }}
                />
                <span
                  className="relative z-10 font-semibold text-base glow-text"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 glow-text tracking-tight">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-5">
              {toolsAndTechnologies.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 20px ${tool.color}80`,
                    transition: { duration: 0.3 },
                  }}
                  className="px-6 py-3 rounded-full shadow-lg bg-[#1a1a2e]/80 glow-border"
                  style={{ border: `2px solid ${tool.color}70` }}
                >
                  <span
                    className="font-medium glow-text"
                    style={{ color: tool.color }}
                  >
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}