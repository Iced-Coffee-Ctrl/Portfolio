"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { HiBriefcase } from "react-icons/hi";

export default function Experience() {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Sedgwick",
      duration: "Sep 2024 - Present",
      location: "Brisbane, Australia",
      responsibilities: [
        "Designed geospatial prediction systems using ensemble methods for regional-level forecasting",
        "Engineered automated weather-driven affected area detection achieving 95%+ recall across multiple event types",
        "Implemented spatial interpolation methods aggregating point-based observations to areal predictions",
        "Built comprehensive feature engineering pipeline integrating meteorological, demographic, and terrain data",
        "Developed real-time dashboards and reports for stakeholder decision-making",
      ],
      technologies: ["Python", "SQL", "Snowflake", "Power BI", "Azure DevOps", "HEX", "Dataiku", "Git", "VS Code"],
    },
    {
      title: "Pricing Analyst",
      company: "Auto & General Insurance",
      duration: "Feb 2022 - Sep 2024",
      location: "Brisbane, Australia",
      responsibilities: [
        "Developed and maintained GLMs for motor insurance pricing with geospatial variables and driving behaviour metrics",
        "Performed exploratory data analysis using LightGBM and SHAP values to inform feature engineering",
        "Designed and analysed A/B tests measuring impact on conversion rates and portfolio profitability",
        "Built automated data pipelines using Python and SQL for large-scale insurance data processing",
        "Conducted rate change analysis and financial forecasting to support business planning",
      ],
      technologies: ["Python", "R", "SQL", "GCP", "Vertex AI", "SAS", "MapInfo", "Git", "Jupyter Notebook"],
    },
  ];

  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                <Card hover className="relative">
                  {/* Timeline Node */}
                  <div className="hidden md:block absolute top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" style={{
                    [index % 2 === 0 ? "right" : "left"]: "-2.5rem",
                  }}></div>

                  <div className="flex items-center gap-2 mb-2">
                    <HiBriefcase className="text-blue-600 dark:text-blue-400" size={24} />
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                  </div>

                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-1">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.duration} • {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
