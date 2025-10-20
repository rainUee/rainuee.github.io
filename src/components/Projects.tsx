"use client"
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  gradient?: string;
}

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg">Some of my favorite work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border border-purple-100/50 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full opacity-20 group-hover:opacity-30 transition blur-2xl`} />

              <h3 className="text-2xl font-bold mb-3 text-gray-900 relative z-10">{project.title}</h3>
              <p className="text-gray-600 mb-4 relative z-10">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <div className="flex gap-4 relative z-10">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition font-medium"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700 transition font-medium"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
