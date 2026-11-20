// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import { Cpu, Paintbrush, Database, Server, Code, Layers, Zap } from "lucide-react";

const categoryIcons = {
  "Programming Languages": <Code size={24} />,
  "Frontend": <Paintbrush size={24} />,
  "Backend": <Server size={24} />, 
  "Databases": <Database size={24} />, 
  "Core CS": <Cpu size={24} />, 
  "AI Fundamentals": <Zap size={24} />, 
  "Tools": <Layers size={24} />, 
};

const Skills = () => {
  return (
    <section className="min-h-screen py-20 bg-black/80 text-gray-200" id="skills">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold gradient-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="glass-card p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                {categoryIcons[category]}
                <h3 className="ml-2 text-xl font-semibold text-purple-300">{category}</h3>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
