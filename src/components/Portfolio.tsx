'use client'
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ExperienceTimeline from './ExperienceTimeline';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { projects, experiences, about, skills, hero } from '../data/siteData';

const Portfolio = () => {
  // menu state moved into Nav component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="fixed w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{
          top: '10%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div
        className="fixed w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{
          top: '50%',
          right: '10%',
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div
        className="fixed w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{
          bottom: '10%',
          left: '30%',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
        }}
      />

      {/* Custom cursor effect */}
      <div
        className="fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-50 transition-all duration-200"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          opacity: 0.5
        }}
      />

      <Nav />

      <Hero name={hero.name} tagline={hero.tagline} links={hero.links} />

      <About about={about} skills={skills} />

      <ExperienceTimeline items={experiences} />

      <Projects projects={projects} />

      <Contact />

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-purple-100/50 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© 2025 {hero.name}. Crafted with 💜</p>
          <div className="flex gap-4">
            <a href={hero.links.github} className="text-gray-600 hover:text-purple-600 transition transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href={hero.links.linkedin} className="text-gray-600 hover:text-purple-600 transition transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href={hero.links.mail} className="text-gray-600 hover:text-purple-600 transition transform hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        /* Smooth scrolling and adjust for fixed nav */
        html {
          scroll-behavior: smooth;
        }
        section {
          scroll-margin-top: 6rem; /* compensate for fixed nav height */
        }
      `}</style>
    </div>
  );
};

export default Portfolio;