import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight,
  Code2,
  Database,
  Container,
  GitBranch,
  Server,
  Layout,
  Send
} from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { TechStackItem } from './components/TechStackItem';
import { SectionHeading } from './components/SectionHeading';

export default function App() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics platform built with React and Spring Boot, featuring real-time data visualization and user insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczMzcxNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Spring Boot', 'MySQL', 'Docker'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Mobile Task Manager',
      description: 'Cross-platform mobile application for task management with offline sync capabilities and collaborative features.',
      image: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NzMzMjcwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'Java', 'PostgreSQL'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and advanced search capabilities.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzczMjkwOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Spring Boot', 'MySQL', 'Redis'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const techStack = [
    { name: 'Java', icon: Code2, color: 'from-orange-500 to-red-500', delay: 0 },
    { name: 'Spring Boot', icon: Server, color: 'from-green-500 to-emerald-500', delay: 0.1 },
    { name: 'React', icon: Layout, color: 'from-cyan-500 to-blue-500', delay: 0.2 },
    { name: 'MySQL', icon: Database, color: 'from-blue-500 to-indigo-500', delay: 0.3 },
    { name: 'Docker', icon: Container, color: 'from-blue-400 to-sky-500', delay: 0.4 },
    { name: 'Git', icon: GitBranch, color: 'from-orange-500 to-amber-500', delay: 0.5 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Dev.Portfolio
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8"
          >
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#tech" className="text-gray-300 hover:text-white transition-colors">Tech Stack</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full-Stack Developer
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Building Modern Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting scalable web applications with Java, Spring Boot, and React.
              Passionate about clean code and innovative solutions.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#projects"
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-gray-700 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="About Me" 
            subtitle="Passionate developer with expertise in building enterprise-level applications"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a full-stack developer specializing in building exceptional digital experiences. 
                With a strong foundation in Java and Spring Boot for backend development, and React 
                for creating dynamic user interfaces, I bring ideas to life through code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My approach combines technical excellence with creative problem-solving, ensuring 
                that every project is not only functional but also scalable and maintainable. 
                I'm committed to staying current with industry best practices and emerging technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-24 px-6 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Tech Stack" 
            subtitle="Technologies and tools I work with to build robust applications"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <TechStackItem
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                delay={tech.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Some of my recent work showcasing modern web development"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Let's Connect" 
            subtitle="Have a project in mind? Let's work together to bring your ideas to life"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 border border-gray-800">
              <div className="flex flex-col gap-6">
                <a 
                  href="mailto:contact@example.com"
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white">contact@example.com</div>
                  </div>
                </a>

                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">GitHub</div>
                    <div className="text-white">github.com/username</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-white">linkedin.com/in/username</div>
                  </div>
                </a>

                <button className="group w-full mt-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send a Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 Full-Stack Developer Portfolio. Built with React & Spring Boot.</p>
        </div>
      </footer>
    </div>
  );
}
