"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { HiExternalLink, HiCode } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark mode, smooth animations with Framer Motion, and glassmorphism UI elements.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      comingSoon: false,
    },
    {
      title: "Data Quality & Model Monitoring Tool",
      description: "Assessing dataset modelability and detecting model drift. Features leakage detection, impact estimation, and LLM-powered diagnostics.",
      technologies: ["Python", "LLMs", "Data Quality"],
      comingSoon: true,
    },
    {
      title: "More Projects",
      description: "Additional data science and machine learning projects currently in development. Check back soon for updates.",
      technologies: ["Python", "Machine Learning", "Data Analytics"],
      comingSoon: true,
    },
  ];

  return (
    <Section id="projects" title="Projects" subtitle="Things I've built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card hover className="h-full flex flex-col">
              <h3 className="text-xl font-bold mb-3">
                {project.comingSoon && <span className="text-sm text-gray-500 mr-2">🚧</span>}
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {!project.comingSoon && (
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <HiCode size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <HiExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
