import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-gaming-gold to-gaming-neon-blue',
      level: 85
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Python', 'Java', 'Node.js', 'Flask', 'Streamlit'],
      color: 'from-gaming-neon-blue to-gaming-neon-green',
      level: 90
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-gaming-neon-green to-gaming-neon-purple',
      level: 80
    },
    {
      icon: Star,
      title: 'AI & ML',
      skills: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'NLP'],
      color: 'from-gaming-gold to-gaming-neon-blue',
      level: 88
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gaming-dark relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated, playful background */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-gaming-gold/30 to-gaming-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-gaming-neon-blue/30 to-gaming-neon-green/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 retro-grid opacity-10"></div>
        <motion.div
          className="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="100%" height="100%" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" stroke="#00ffe7" strokeWidth="2" fill="none" opacity="0.08" />
            <circle cx="200" cy="200" r="120" stroke="#ffe600" strokeWidth="2" fill="none" opacity="0.08" />
            <circle cx="200" cy="200" r="60" stroke="#ff00c8" strokeWidth="2" fill="none" opacity="0.08" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-4 font-gaming">
            SKILL <span className="neon-text glitch" data-text="TREE">TREE</span>
          </h2>
          <p className="text-xl text-gaming-subtext max-w-3xl mx-auto font-gaming">
            &gt; Analyzing player abilities and tech stack mastery...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group gaming-card"
            >
              <div className="glass h-full rounded-2xl p-6 border border-gaming-gold/30 hover:border-gaming-gold/60 transition-all duration-300">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon size={24} className="text-gaming-dark" />
                  </div>
                  <div className="text-right">
                    <div className="text-gaming-gold font-gaming text-sm">LVL</div>
                    <div className="text-gaming-text font-bold text-xl font-gaming">{category.level}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gaming-text mb-4 font-gaming">[{category.title.toUpperCase()}]</h3>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gaming-black/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 bg-gradient-to-r ${category.color} rounded-full relative`}
                    >
                      <div className="absolute right-0 top-0 w-2 h-2 bg-gaming-gold rounded-full animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center space-x-3 group/skill"
                    >
                      <div className="w-2 h-2 bg-gaming-gold rounded-full animate-pulse"></div>
                      <span className="text-gaming-subtext group-hover/skill:text-gaming-gold transition-colors font-gaming text-sm">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Gaming Badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="glass px-2 py-1 rounded-lg border border-gaming-gold/50">
                    <span className="text-gaming-gold text-xs font-gaming">MASTERED</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gaming Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl border border-gaming-gold/30 gaming-card">
            <h3 className="text-2xl font-bold text-gaming-text mb-6 font-gaming">[CODER STATS]</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-gold mb-2 font-gaming neon-text">85%</div>
                <div className="text-gaming-subtext text-sm font-gaming">AVG SKILL</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-neon-blue mb-2 font-gaming">6</div>
                <div className="text-gaming-subtext text-sm font-gaming">CATEGORIES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-neon-green mb-2 font-gaming">25+</div>
                <div className="text-gaming-subtext text-sm font-gaming">TECHNOLOGIES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gaming-neon-purple mb-2 font-gaming">∞</div>
                <div className="text-gaming-subtext text-sm font-gaming">LEARNING</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
