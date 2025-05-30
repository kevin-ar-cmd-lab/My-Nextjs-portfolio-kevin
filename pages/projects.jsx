import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: "E-commerce Platform",
      tech: "React",
      description: "A full-featured e-commerce platform with payment integration, user accounts, and admin dashboard.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Task Management App",
      tech: "Vue.js",
      description: "A collaborative task management application with real-time updates and team features.",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1169&q=80"
    },
    {
      title: "Health Tracker",
      tech: "React Native",
      description: "Mobile application for tracking fitness activities, nutrition, and health metrics.",
      img: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div>
      <section
        className={`py-8 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        } transition-colors duration-300`}
        id="projects"
      >
        <div className="container mx-auto text-center">
          <h2
            className={`py-8 ${
              darkMode ? "text-white" : "text-gray-800"
            } text-4xl font-extrabold mb-12`}
          >
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
