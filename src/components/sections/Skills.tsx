"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { SiPython, SiJavascript, SiReact, SiNextdotjs, SiPostgresql, SiGit, SiDocker, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: SiPython, level: 95 },
        { name: "SQL", icon: SiPostgresql, level: 90 },
        { name: "R", level: 80 },
        { name: "MATLAB", level: 80 },
      ],
    },
    {
      category: "Machine Learning & Data Science",
      skills: [
        { name: "LightGBM / XGBoost", level: 90 },
        { name: "PyTorch / TensorFlow", level: 85 },
        { name: "Scikit-Learn", level: 90 },
        { name: "SHAP / Model Explainability", level: 85 },
      ],
    },
    {
      category: "Cloud Platforms",
      skills: [
        { name: "Google Cloud Platform", level: 80 },
        { name: "Vertex AI / HEX", level: 80 },
        { name: "Snowflake", level: 75 },
        { name: "Dataiku", level: 80 },
      ],
    },
    {
      category: "Development & Analytics Platforms",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "SSMS", level: 85 },
        { name: "SSRS", level: 80 },
        { name: "Git / Azure DevOps", icon: SiGit, level: 90 },
      ],
    },
    {
      category: "AI & NLP Tools",
      skills: [
        { name: "LlamaIndex", level: 80 },
        { name: "LangChain", level: 70 },
        { name: "OpenAI / Claude APIs", level: 75 },
        { name: "Prompt Engineering", level: 75 },
      ],
    },
  ];

  return (
    <Section id="skills" title="Skills" subtitle="Technologies I specialise in">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon && <skill.icon size={20} className="text-blue-600 dark:text-blue-400" />}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
