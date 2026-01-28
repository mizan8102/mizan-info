import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

export function CleanAchievementsPage() {
  useEffect(() => {
    document.title = 'Achievements | Mizan Rahman - Software Engineer';
  }, []);

  const achievements = [
    {
      title: 'HackerRank Java (Basic) Certificate',
      organization: 'HackerRank',
      date: '2024',
      description: 'Verified skills in Java programming fundamentals'
    },
    {
      title: 'HackerRank SQL (Basic) Certificate',
      organization: 'HackerRank',
      date: '2024',
      description: 'Demonstrated proficiency in SQL queries and database management'
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
            <span className="text-green-400">#</span> Achievements
          </h1>
          <p className="text-gray-400 text-lg">
            Recognitions and accomplishments
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-black/50 border border-green-400/20 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-400/10 rounded-lg">
                  <Trophy className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-green-400 font-mono text-sm mb-2">{achievement.organization}</p>
                  <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-gray-500 font-mono">{achievement.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}