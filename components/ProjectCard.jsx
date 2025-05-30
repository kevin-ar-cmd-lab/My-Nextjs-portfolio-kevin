import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`project-card rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded ${
              darkMode
                ? "bg-indigo-700 text-indigo-100"
                : "bg-indigo-100 text-indigo-800"
            }`}
          >
            {project.tech}
          </span>
        </div>
        <p
          className={`mb-4 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <a
            href="#"
            className={`font-medium ${
              darkMode
                ? "text-indigo-400 hover:text-indigo-300"
                : "text-indigo-600 hover:text-indigo-800"
            }`}
          >
            View Project
          </a>
          <div className="flex space-x-2">
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-indigo-300"
                  : "text-gray-500 hover:text-indigo-600"
              }`}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-indigo-300"
                  : "text-gray-500 hover:text-indigo-600"
              }`}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
