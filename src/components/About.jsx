// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { stats } from "../data";

const About = () => {
  return (
    <section className="min-h-screen py-20 bg-black/90 text-gray-200">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold gradient-text mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          I’m a Computer Science and Engineering undergraduate at Chandigarh University, graduating in 2027, with a strong foundation in software development and problem‑solving. I enjoy building full‑stack applications using React.js, Java, Spring Boot, and MySQL. I have experience developing REST APIs, implementing JWT authentication, handling databases, and debugging application workflows. Beyond development, I actively practice Data Structures and Algorithms and participate in competitive programming. I’m also exploring Generative AI, Large Language Models, and Retrieval‑Augmented Generation.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              className="glass-card text-center p-4"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-purple-300">{item.value}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
