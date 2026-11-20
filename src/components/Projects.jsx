
import React from "react";
import { motion } from "framer-motion";
import { Code2, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "MediLink 360",
    description:
      "A full-stack healthcare management platform designed to connect doctors and patients through a centralized digital system. It simplifies appointment booking, doctor and patient management, emergency communication, and secure access to healthcare services.",

    details: [
      "Developed 15+ RESTful APIs using Spring Boot for appointment booking, doctor management, and patient-related operations.",
      "Implemented JWT-based authentication for secure access to application functionalities.",
      "Built appointment management workflows with request validation and exception handling to improve backend reliability.",
      "Integrated Gmail SMTP notifications for appointment confirmations and emergency alerts.",
      "Used MySQL, SQL joins, and indexing to manage healthcare data and improve query performance.",
      "Tested API endpoints using Postman and debugged issues across frontend, backend, and database layers."
    ],

    tech: [
      "React.js",
      "Java",
      "Spring Boot",
      "MySQL",
      "JWT",
      "REST APIs",
      "Git"
    ]
  },

  {
    title: "GoalForge",
    description:
      "A full-stack goal-tracking application that helps users organize personal goals, monitor progress, and gain insights through analytics dashboards and AI-powered recommendations.",

    details: [
      "Developed a full-stack application using React.js and Spring Boot for managing personal goals and tracking progress.",
      "Implemented secure JWT authentication and user-specific data access.",
      "Designed RESTful APIs for goal management, progress tracking, and reporting functionalities.",
      "Explored Generative AI and Large Language Models to generate personalized goal recommendations and actionable insights.",
      "Designed MySQL database schemas and reporting utilities to analyze user goals and generate structured progress summaries."
    ],

    tech: [
      "React.js",
      "Java",
      "Spring Boot",
      "MySQL",
      "JWT",
      "REST APIs",
      "Generative AI"
    ]
  }
];

const Projects = () => {
  return (
    <section
      className="min-h-screen py-20 bg-black/90 text-gray-200"
      id="projects"
    >
      <div className="container mx-auto px-4">

        <motion.h2
          className="text-4xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <p className="text-gray-400 mb-12 max-w-2xl leading-relaxed">
          A selection of projects showcasing my experience in full-stack
          development, backend engineering, database management, and
          problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="glass-card p-7 flex flex-col rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
            >

              <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                {proj.title}
              </h3>

              {/* Project Overview */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Project Details */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 text-purple-300">
                  <Lightbulb size={19} />
                  <h4 className="font-semibold text-lg">
                    What I Built
                  </h4>
                </div>

                <ul className="space-y-3">
                  {proj.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="text-purple-400 font-bold">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-auto pt-5 border-t border-gray-800">
                <div className="flex items-center gap-2 mb-3 text-purple-300">
                  <Code2 size={19} />
                  <h4 className="font-semibold">
                    Technologies Used
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-800 text-xs rounded-full text-gray-200 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
