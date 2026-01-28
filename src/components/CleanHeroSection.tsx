import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { aboutData } from '../data/aboutData';

export function CleanHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-green-400 relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="space-y-12">
          {/* Status Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-mono text-green-400 flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>System Online</span>
            <span className="text-gray-600">//</span>
            <span>Software Engineer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              <span className="text-green-400">#</span> {aboutData.name.split(' ')[0]}
              <br />
              <span className="text-green-400">{aboutData.name.split(' ')[1]}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
              {aboutData.summary}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={`https://github.com/${aboutData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-transparent border border-green-400/30 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300 text-sm font-mono"
            >
              <Github className="w-4 h-4" />
              <span>Github</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={`https://linkedin.com/in/${aboutData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-transparent border border-green-400/30 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300 text-sm font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={`mailto:${aboutData.email}`}
              className="group flex items-center gap-2 px-4 py-2 bg-transparent border border-green-400/30 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300 text-sm font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>

          {/* Location & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-gray-500">LOCATION</span>
              <span className="text-white">Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-500">STATUS</span>
              <span className="text-green-400">Available for Hire</span>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl"
          >
            <div className="p-6 bg-black/50 border border-green-400/20 rounded-lg backdrop-blur-sm">
              <div className="text-xs font-mono text-green-400 mb-3">{'//'} About Me</div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Software Engineer with 4+ years of experience designing and developing scalable applications, 
                microservices, and cloud solutions. Passionate about building robust systems and solving complex 
                problems with modern technologies.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black rounded-md hover:bg-green-500 transition-all duration-300 font-mono text-sm font-medium group"
            >
              <span>View My Work</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-400 text-green-400 rounded-md hover:bg-green-400 hover:text-black transition-all duration-300 font-mono text-sm font-medium"
            >
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-green-400/50">
          <span className="text-xs font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-green-400/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}