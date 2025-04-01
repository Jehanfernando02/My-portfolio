"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  color: string;
}

export default function Skills() {
  const skills: Skill[] = [
    { name: "Java", color: "#2563eb" },         // Rich Blue
    { name: "JavaScript", color: "#facc15" },   // Bright Yellow
    { name: "React", color: "#60a5fa" },        // Sky Blue
    { name: "Tailwind CSS", color: "#38bdf8" }, // Cyan
    { name: "MySQL", color: "#f97316" },        // Orange
    { name: "MongoDB", color: "#10b981" },      // Emerald Green
    { name: "Python", color: "#8b5cf6" },       // Vibrant Purple
    { name: "Spring Boot", color: "#22c55e" },  // Lime Green
    { name: "Node.js", color: "#2563eb" },      // Rich Blue
    { name: "Flutter", color: "#60a5fa" },      // Sky Blue
    { name: "REST API", color: "#ec4899" },     // Hot Pink
    { name: "Mongoose", color: "#10b981" },     // Emerald Green
  ];

  const toolsAndTechnologies: Skill[] = [
    { name: "GitHub", color: "#2563eb" },       // Rich Blue
    { name: "VS Code", color: "#3b82f6" },      // Medium Blue
    { name: "Postman", color: "#f97316" },      // Orange
    { name: "Bootstrap", color: "#8b5cf6" },    // Vibrant Purple
    { name: "Figma", color: "#ec4899" },        // Hot Pink
    { name: "Vercel", color: "#60a5fa" },       // Sky Blue
    { name: "Firebase", color: "#facc15" },     // Bright Yellow
    { name: "Thunder Client", color: "#22c55e" }, // Lime Green
    { name: "Slack", color: "#3b82f6" },        // Medium Blue
    { name: "Android Studio", color: "#10b981" }, // Emerald Green
    { name: "IntelliJ IDEA", color: "#f97316" },  // Orange
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="py-20 relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300/40 via-transparent to-transparent opacity-70 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 tracking-tight drop-shadow-lg"
        >
          My Expertise
        </motion.h2>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 drop-shadow-sm">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 30px ${skill.color}90`,
                  background: `linear-gradient(135deg, ${skill.color}30, #ffffffee)`,
                }}
                className="p-5 bg-white/95 rounded-xl border border-gray-200/50 shadow-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}60, transparent)`,
                  }}
                />
                <span
                  className="relative z-10 font-bold text-base text-gray-900"
                  style={{ textShadow: `0 0 8px ${skill.color}80` }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 drop-shadow-sm">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {toolsAndTechnologies.map((tool) => (
              <motion.div
                key={tool.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 25px ${tool.color}90`,
                  background: `linear-gradient(135deg, ${tool.color}30, #ffffffee)`,
                }}
                className="p-3 bg-white/95 rounded-full border border-gray-200/50 shadow-md flex items-center justify-center transition-all duration-300 relative overflow-hidden w-36"
              >
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-30 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${tool.color}60, transparent)`,
                  }}
                />
                <span
                  className="relative z-10 font-semibold text-sm text-gray-900"
                  style={{ textShadow: `0 0 8px ${tool.color}80` }}
                >
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}