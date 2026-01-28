import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { aboutData } from '../data/aboutData';

export function CleanContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact | Mizan Rahman - Software Engineer';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Message from ${formState.name}`;
    const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;
    window.location.href = `mailto:${aboutData.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-green-400">#</span> Ready to Deploy?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Initiate communication protocol. Available for freelance contracts and full-time directives. Response time: {'<'}24h
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-green-400">{'//'}</span> Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-black/50 border border-green-400/20 rounded-lg hover:border-green-400/40 transition-all duration-300">
                  <div className="p-3 bg-green-400/10 rounded-lg">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-mono mb-1">EMAIL</div>
                    <a
                      href={`mailto:${aboutData.email}`}
                      className="text-white hover:text-green-400 transition-colors font-mono"
                    >
                      {aboutData.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-black/50 border border-green-400/20 rounded-lg">
                  <div className="p-3 bg-green-400/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-mono mb-1">LOCATION</div>
                    <div className="text-white font-mono">Dhaka, Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="p-6 bg-black/50 border border-green-400/20 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-mono text-sm">SYSTEM STATUS</span>
              </div>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-gray-500">AVAILABILITY:</span>
                  <span className="text-green-400">AVAILABLE FOR HIRE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">RESPONSE TIME:</span>
                  <span className="text-white">{'<'}24 HOURS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">PROTOCOL:</span>
                  <span className="text-white">SMTP / TLS 1.3</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-green-400 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-green-400/20 rounded-lg text-white font-mono focus:outline-none focus:border-green-400/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-green-400 mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-green-400/20 rounded-lg text-white font-mono focus:outline-none focus:border-green-400/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-green-400 mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-green-400/20 rounded-lg text-white font-mono focus:outline-none focus:border-green-400/50 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-green-400 text-black font-mono font-bold rounded-lg hover:bg-green-500 transition-all duration-300 group"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>MESSAGE SENT</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>TRANSMIT MESSAGE</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 font-mono text-center">
                {'//'} PROT: SMTP {'//'} STATUS: ACTIVE {'//'} ENC: TLS 1.3
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}