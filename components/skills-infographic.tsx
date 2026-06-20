"use client"

import { motion } from "framer-motion"

interface SkillsInfographicProps {
  category?: string
  showAll?: boolean
}

interface Skill {
  name: string
  level: number
  category: string
}

export default function SkillsInfographic({ category, showAll = false }: SkillsInfographicProps) {
  const skills: Skill[] = [
    // Languages & Technologies
    { name: "Python", level: 95, category: "Languages & Technologies" },
    { name: "SQL", level: 90, category: "Languages & Technologies" },
    { name: "Apache Airflow", level: 85, category: "Languages & Technologies" },
    { name: "Docker", level: 85, category: "Languages & Technologies" },
    { name: "Kubernetes", level: 80, category: "Languages & Technologies" },

    // Cloud & Data Platforms
    { name: "Snowflake", level: 95, category: "Cloud & Data Platforms" },
    { name: "Azure", level: 90, category: "Cloud & Data Platforms" },
    { name: "Databricks", level: 85, category: "Cloud & Data Platforms" },
    { name: "Power BI", level: 85, category: "Cloud & Data Platforms" },
    { name: "Tableau", level: 80, category: "Cloud & Data Platforms" },
    { name: "MS Purview", level: 75, category: "Cloud & Data Platforms" },
    { name: "Pentaho", level: 70, category: "Cloud & Data Platforms" },
    { name: "Mulesoft", level: 70, category: "Cloud & Data Platforms" },

    // AI & ML
    { name: "Generative AI", level: 90, category: "AI & ML" },
    { name: "RAG", level: 95, category: "AI & ML" },
    { name: "Azure OpenAI", level: 85, category: "AI & ML" },
    { name: "Conversational AI", level: 80, category: "AI & ML" },
  ]

  // Filter skills based on category if provided
  const filteredSkills = category ? skills.filter((skill) => skill.category === category) : skills

  // Group skills by category for "All" view
  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  if (showAll) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-6 text-[#6610f2] dark:text-[#a78bfa] font-roboto-slab">{cat}</h4>
            <div className="space-y-5">
              {skills
                .filter((skill) => skill.category === cat)
                .map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-[#e83e8c]">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#6610f2] to-[#e83e8c]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {filteredSkills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-[#e83e8c]">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#6610f2] to-[#e83e8c]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

