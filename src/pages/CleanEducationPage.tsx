import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export function CleanEducationPage() {
  useEffect(() => {
    document.title = 'Education | Mizan Rahman - Software Engineer';
  }, []);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'Dhaka, Bangladesh',
      period: '2018 - 2022',
      gpa: '3.75/4.00',
      achievements: [
        'Dean\'s List for 6 semesters',
        'Computer Science Department Award',
        'Published research paper on Machine Learning'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-green-400">#</span> Education
          </h1>
          <p className="text-gray-400 text-lg">
            Academic background and qualifications
          </p>
        </motion.div>

        {/* Education */}
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-black/50 border border-green-400/20 rounded-lg"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-400/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-green-400 font-mono mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="font-mono">{edu.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">GPA:</span>
                <span className="text-green-400 font-mono">{edu.gpa}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-white font-semibold">Achievements</span>
              </div>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-green-400 mt-1">{'>'}</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}