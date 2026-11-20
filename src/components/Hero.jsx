// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { socialLinks } from "../data";
import { Github, Linkedin, Code } from "lucide-react";

const titles = [
  "Full Stack Developer",
  "Software Engineer",
  "Problem Solver",
  "Competitive Programmer",
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-black via-[#0a0a2a] to-[#0a0a0a]">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between py-20">
        {/* Left Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Mishika Goyal.
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Aspiring Software Engineer | Full Stack Developer
          </motion.p>
          <motion.p
            className="text-md text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I’m passionate about building scalable applications, solving complex problems, and exploring emerging technologies.
          </motion.p>
          {/* Typing effect */}
          <motion.div
            className="text-2xl font-medium text-purple-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typewriter
              words={titles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-500 transition"
            >
              Explore My Work
            </a>
            {/* <a
              href="/resume.pdf"
              className="px-6 py-3 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition"
              download
            >
              Download Resume
            </a> */}
          </motion.div>
          {/* Social Icons */}
          <motion.div
            className="flex space-x-4 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <Github size={28} className="text-gray-400 hover:text-white" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={28} className="text-gray-400 hover:text-white" />
            </a>
            <a href={socialLinks.leetcode} target="_blank" rel="noreferrer">
              <Code size={28} className="text-gray-400 hover:text-white" />
            </a>
          </motion.div>
        </div>
        {/* Right Illustration Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          <div className="w-72 h-72 bg-purple-500/20 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
