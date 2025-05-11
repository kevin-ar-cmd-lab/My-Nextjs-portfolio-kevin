import React, { useEffect } from "react";                       import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { darkMode, toggleDarkMode, setDarkModeValue } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkModeValue(true);
    } else if (savedTheme === "light") {
      setDarkModeValue(false);                                      } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkModeValue(systemPrefersDark);
    }
  }, [setDarkModeValue]);
                                                                  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
   <div>
    <section
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300`}
      id="projects"
    >
      <div className="container mx-auto text-center">
        <h2 className={`py-16 ${darkMode ? "text-white" : "text-gray-800"} text-4xl font-extrabold mb-12`}>
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards */}
          {/* Project 1 */}
          <div
            className={`project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg ${darkMode ? "bg-gray-800" : ""}`}
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className={`${darkMode ? "text-white" : "text-gray-800"} text-xl font-semibold`}>
                  E-commerce Platform
                </h3>
                <span
                  className={`${
                    darkMode ? "bg-indigo-700 text-indigo-100" : "bg-indigo-100 text-indigo-800"
                  } text-xs px-2 py-1 rounded`}
                >
                  React
                </span>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                A full-featured e-commerce platform with payment integration, user accounts, and admin dashboard.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} hover:text-indigo-800 font-medium`}
                >
                  View Project
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className={`${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-indigo-600`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className={`${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-indigo-600`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className={`project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg ${darkMode ? "bg-gray-800" : ""}`}
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1169&q=80"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className={`${darkMode ? "text-white" : "text-gray-800"} text-xl font-semibold`}>
                  Task Management App
                </h3>
                <span
                  className={`${
                    darkMode ? "bg-indigo-700 text-indigo-100" : "bg-indigo-100 text-indigo-800"
                  } text-xs px-2 py-1 rounded`}
                >
                  Vue.js
                </span>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                A collaborative task management application with real-time updates and team features.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} hover:text-indigo-800 font-medium`}
                >
                  View Project
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className={`${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-indigo-600`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className={`${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-indigo-600`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className={`project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg ${darkMode ? "bg-gray-800" : ""}`}
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=1170&q=80"
                alt="Project 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className={`${darkMode ? "text-white" : "text-gray-800"} text-xl font-semibold`}>
                  Health Tracker
                </h3>
                <span
                  className={`${
                    darkMode ? "bg-indigo-700 text-indigo-100" : "bg-indigo-100 text-indigo-800"
                  } text-xs px-2 py-1 rounded`}
                >
                  React Native
                </span>
              </div>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                Mobile application for tracking fitness activities, nutrition, and health metrics.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className={`${darkMode ? "text-indigo-400" : "text-indigo-600"} hover:text-indigo-800 font-medium`}
                >
                  View Project
                </a>
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className={`${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-indigo-600`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="#"
                    className={`${darkMode ? "text-gray-400" : "text-gray-500"} hover:text-indigo-600`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
   </div>
  );
};

export default Projects;
