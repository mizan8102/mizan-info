import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import { aboutData } from '../data/aboutData';
import { Globe3D } from './Globe3D';

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const fullName = `${aboutData.name}`;
  
  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [fullName]);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simple animated background without Three.js for now
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated grid background
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 30;
      const offsetX = Math.sin(time) * 10;
      const offsetY = Math.cos(time * 0.7) * 10;
      
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.lineWidth = 1;
      
      // Draw animated grid
      for (let x = offsetX; x < canvas.offsetWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.offsetHeight);
        ctx.stroke();
      }
      
      for (let y = offsetY; y < canvas.offsetHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.offsetWidth, y);
        ctx.stroke();
      }

      // Add some glowing dots
      ctx.fillStyle = 'rgba(34, 197, 94, 0.3)';
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time + i) * 100) + canvas.offsetWidth / 2;
        const y = (Math.cos(time * 0.8 + i) * 50) + canvas.offsetHeight / 2;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-green-400 overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
      />
      
      {/* Scanlines Effect - Hidden on mobile for performance */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none hidden md:block"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)',
          animation: 'scanlines 2s linear infinite'
        }}
      />
      
      {/* Corner Brackets - Responsive sizing */}
      <div className="absolute top-2 left-2 w-4 h-4 md:top-4 md:left-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-green-400"></div>
      <div className="absolute top-2 right-2 w-4 h-4 md:top-4 md:right-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-green-400"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 md:bottom-4 md:left-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-b-2 border-l-2 border-green-400"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 md:bottom-4 md:right-4 md:w-6 md:h-6 lg:w-8 lg:h-8 border-b-2 border-r-2 border-green-400"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Status Bar - Responsive */}
        <motion.div 
          className="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono bg-black/50 backdrop-blur-sm p-2 rounded md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center flex-wrap gap-2 md:space-x-4">
            <span className="text-green-400">SYSTEM ONLINE</span>
            <span className="text-gray-500 hidden sm:inline">//</span>
            <span className="text-green-400 text-[10px] sm:text-xs">SOFTWARE ENGINEER</span>
          </div>
          <div className="flex items-center flex-wrap gap-2 md:space-x-4 text-[10px] sm:text-xs">
            <span className="text-gray-500 hidden md:inline">COORD:</span>
            <span className="text-green-400 hidden lg:inline">23.8103° N, 90.4125° E</span>
            <span className="text-gray-500 hidden sm:inline">//</span>
            <span className="text-green-400">DHAKA</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 items-center lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Name and Title */}
            <div className="space-y-3 md:space-y-4">
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="flex items-center flex-wrap">
                  <span className="text-green-400"># </span>
                  <span className="break-words">{displayText}</span>
                  {isTyping && (
                    <span className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 ml-2 bg-green-400 animate-pulse"></span>
                  )}
                </div>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Building scalable applications with modern technologies.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black text-xs sm:text-sm"
                asChild
              >
                <a href={`https://github.com/${aboutData.github}`} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black text-xs sm:text-sm"
                asChild
              >
                <a href={`https://linkedin.com/in/${aboutData.linkedin}`} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            {/* Location and Status */}
            <motion.div 
              className="space-y-2 text-xs sm:text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="flex items-center space-x-2 flex-wrap">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-gray-400">LOCATION</span>
                <span className="text-white">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">STATUS</span>
                <span className="text-green-400">AVAILABLE FOR HIRE</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Bio Data */}
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Bio Data Terminal */}
            <div className="p-4 sm:p-6 bg-black/50 border border-green-400/30 rounded-lg backdrop-blur-sm">
              <div className="mb-3 sm:mb-4 text-xs sm:text-sm font-mono text-green-400">
                /// BIO_DATA_FILE_01
              </div>
              
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
                <p className="leading-relaxed">
                  {aboutData.summary}
                </p>
                
                <div className="pt-3 sm:pt-4 border-t border-green-400/20">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono">
                    <div>
                      <span className="text-gray-500">LOCATION</span>
                      <div className="text-white text-xs sm:text-sm">Dhaka, Bangladesh</div>
                    </div>
                    <div>
                      <span className="text-gray-500">STATUS</span>
                      <div className="text-green-400 text-xs sm:text-sm">AVAILABLE FOR HIRE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Globe */}
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 mx-auto">
              <Globe3D className="absolute inset-0" />
            </div>

            {/* System Info */}
            <div className="p-3 sm:p-4 bg-black/30 border border-green-400/20 rounded-lg">
              <div className="text-[10px] sm:text-xs font-mono text-green-400 mb-2">SYSTEM_STATUS</div>
              <div className="space-y-1 text-[10px] sm:text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">LOCAL_TIME:</span>
                  <span className="text-white">{formatTime(currentTime)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">DATE:</span>
                  <span className="text-white text-[9px] sm:text-[10px]">{formatDate(currentTime)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">UPTIME:</span>
                  <span className="text-green-400">24/7 OPERATIONAL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div 
          className="mt-12 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="text-xs sm:text-sm font-mono text-green-400 mb-3 sm:mb-4">
            ## Ready to Deploy?
          </div>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md mx-auto leading-relaxed">
            Initiate communication protocol. Available for freelance contracts and full-time directives. Response time: &lt;24h
          </p>
          <Button 
            variant="outline" 
            size="sm"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black neon-text text-xs sm:text-sm"
            asChild
          >
            <a href={`mailto:${aboutData.email}`}>
              Transmit Message
            </a>
          </Button>
          
          <div className="mt-4 sm:mt-8 text-[10px] sm:text-xs font-mono text-gray-500">
            // PROT: SMTP // STATUS: ACTIVE // ENC: TLS 1.3
          </div>
        </motion.div>

        {/* Bottom Status - Hidden on mobile, shown on desktop via layout */}
        <motion.div 
          className="fixed bottom-4 left-4 right-4 z-20 flex-col sm:flex-row justify-between items-center text-xs font-mono bg-black/50 backdrop-blur-sm p-2 rounded md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none gap-2 hidden lg:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <div className="text-gray-500 text-[10px] sm:text-xs">
            System Online // Awaiting Transmission
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-[10px] sm:text-xs">READY TO DEPLOY</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}