'use client'
import React, { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, ExternalLink, ArrowRight, Menu, X, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "AI Chat Application",
      description: "Real-time chat powered by GPT API with advanced features",
      tech: ["React", "Node.js", "OpenAI"],
      link: "#",
      github: "#",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack shopping platform with seamless payments",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather forecast with data visualization",
      tech: ["React", "D3.js", "API"],
      link: "#",
      github: "#",
      gradient: "from-pink-400 to-purple-400"
    },
    {
      title: "Task Management",
      description: "Collaborative project tool with real-time sync",
      tech: ["Vue.js", "Firebase"],
      link: "#",
      github: "#",
      gradient: "from-purple-400 to-indigo-400"
    }
  ];

  const skills = ["JavaScript", "React", "Python", "Node.js", "TypeScript", "Next.js", "Vue.js", "TailwindCSS"];

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

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-40 border-b border-purple-100/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SH.
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 transition relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transition transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-purple-100/50">
            <div className="flex flex-col gap-4 px-6 py-4">
              <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
              <a href="#projects" className="text-gray-700 hover:text-purple-600">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Animated avatar */}
            <div className="inline-block relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <Code size={48} className="text-white relative z-10" />
                <Sparkles size={20} className="text-white absolute top-2 right-2 animate-ping" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 animate-fade-in">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Shiyu Huang
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
            </div>
            
            <p className="text-xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-light">
              Full Stack Developer crafting{' '}
              <span className="text-purple-600 font-semibold">beautiful</span> and{' '}
              <span className="text-pink-600 font-semibold">innovative</span> digital experiences
            </p>

            <div className="flex gap-4 justify-center pt-6">
              <a 
                href="https://github.com" 
                className="group p-4 bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Github size={24} className="text-purple-600 group-hover:text-purple-700" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="group p-4 bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Linkedin size={24} className="text-purple-600 group-hover:text-purple-700" />
              </a>
              <a 
                href="mailto:your@email.com"
                className="group p-4 bg-white hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <Mail size={24} className="text-purple-600 group-hover:text-purple-700" />
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="pt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100/50">
            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                I'm a passionate developer who loves building beautiful and functional web applications. 
                With expertise in modern web technologies, I create solutions that make a difference.
              </p>
              
              <p className="text-xl leading-relaxed">
                I specialize in{' '}
                <span className="text-purple-600 font-semibold">JavaScript, React, and Node.js</span>, 
                and I'm always excited to learn new technologies and tackle challenging problems.
              </p>
            </div>

            {/* Skills with fancy design */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Tech Stack</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="group px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-700 rounded-full font-medium shadow-md hover:shadow-xl transition transform hover:scale-110 cursor-pointer relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                  {project.tech.map((tech, i) => (
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

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-purple-100/50">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-8" />
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <a 
              href="mailto:your@email.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              Say Hello
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-purple-100/50 bg-white/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">© 2025 Shiyu Huang. Crafted with 💜</p>
          <div className="flex gap-4">
            <a href="https://github.com" className="text-gray-600 hover:text-purple-600 transition transform hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-purple-600 transition transform hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="mailto:your@email.com" className="text-gray-600 hover:text-purple-600 transition transform hover:scale-110">
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
      `}</style>
    </div>
  );
};

export default Portfolio;