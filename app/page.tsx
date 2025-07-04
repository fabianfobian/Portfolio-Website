'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Server, Database } from 'lucide-react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-300' },
    { name: 'Next.js', icon: Code, color: 'text-gray-300' },
    { name: 'Node.js', icon: Server, color: 'text-green-400' },
    { name: 'Express', icon: Server, color: 'text-gray-400' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-500' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Next.js, TypeScript, and Express API',
      tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features',
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Weather Dashboard',
      description: 'Modern weather app with location-based forecasts and interactive charts',
      tech: ['React', 'TypeScript', 'Chart.js', 'Weather API'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <main className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Your Name</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack
            </span>
            <br />
            Developer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
            Passionate about creating exceptional web experiences with React, TypeScript, and modern technologies
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
              Get In Touch
            </a>
            <a href="#projects" className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-lg transition-colors">
              View Projects
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love building scalable applications that solve real-world problems and provide 
              exceptional user experiences.
            </p>
            <p>
              My journey in software development has led me to specialize in React, TypeScript, 
              and Node.js, with a strong focus on clean code, performance optimization, and 
              user-centered design.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-colors">
                <skill.icon className={`mx-auto mb-3 ${skill.color}`} size={40} />
                <h3 className="text-white font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-slate-700 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">Project Screenshot</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Your Name. Built with Next.js and TypeScript.</p>
        </div>
      </footer>
    </main>
  )
}