import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, GitBranch, Trophy, Users, Gamepad2, Zap } from 'lucide-react';

const About = () => {
  const techIcons = [
    { icon: Code, name: 'Frontend', color: 'text-gaming-gold' },
    { icon: Server, name: 'Backend', color: 'text-gaming-neon-blue' },
    { icon: Database, name: 'Database', color: 'text-gaming-neon-green' },
    { icon: GitBranch, name: 'DevOps', color: 'text-gaming-neon-purple' },
    { icon: Trophy, name: 'Leadership', color: 'text-gaming-gold' },
    { icon: Users, name: 'Research', color: 'text-gaming-neon-blue' },
    { icon: Gamepad2, name: 'Gaming', color: 'text-gaming-neon-green' },
    { icon: Zap, name: 'Innovation', color: 'text-gaming-neon-purple' },
  ];

  return (
    <section id="about" className="py-20 bg-vintage-dark relative overflow-hidden">
      {/* Animated, playful background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-vintage-gold/30 to-vintage-coral/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-vintage-coral/30 to-vintage-emerald/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <svg className="absolute left-1/2 top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="160" stroke="#ffe600" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="200" cy="200" r="100" stroke="#00ffe7" strokeWidth="2" fill="none" opacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gaming-text mb-4 font-gaming animate-glow">
            ABOUT <span className="neon-text glitch" data-text="CODER">CODER</span>
          </h2>
          <p className="text-xl text-gaming-subtext max-w-3xl mx-auto font-gaming">
            &gt; Loading coder profile and skill tree...
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl border border-gaming-gold/30 gaming-card animate-glow border-animated">
              <h3 className="text-2xl font-bold text-gaming-gold mb-4 font-gaming">[ORIGIN STORY]</h3>
              <div className="space-y-4 text-gaming-subtext">
                <p>
                  <span className="text-gaming-neon-green font-bold">&gt; INITIALIZING...</span><br />
                  Coder: Hemant Modi | Level: 21 | Class: Full-Stack Developer<br />
                  Location: Vivekananda Global University | Specialization: AI & Data Science
                </p>
                <p>
                  <span className="text-gaming-neon-blue font-bold">&gt; CURRENT QUEST:</span><br />
                  Leading CST Club initiatives while building next-gen civic-tech solutions. 
                  Combining academic excellence with real-world problem solving through code.
                </p>
                <p>
                  <span className="text-gaming-gold font-bold">&gt; SPECIAL ABILITIES:</span><br />
                  When not coding, you'll find this coder dominating football fields at national level competitions. 
                  Unique combination of athletic prowess and technical mastery.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-4 rounded-xl text-center border border-gaming-gold/30 gaming-card">
                <div className="text-3xl font-bold text-gaming-gold mb-2 font-gaming neon-text">15+</div>
                <div className="text-gaming-subtext text-sm font-gaming">PROJECTS</div>
              </div>
              <div className="glass p-4 rounded-xl text-center border border-gaming-neon-blue/30 gaming-card">
                <div className="text-3xl font-bold text-gaming-neon-blue mb-2 font-gaming">2</div>
                <div className="text-gaming-subtext text-sm font-gaming">RESEARCH</div>
              </div>
              <div className="glass p-4 rounded-xl text-center border border-gaming-neon-green/30 gaming-card">
                <div className="text-3xl font-bold text-gaming-neon-green mb-2 font-gaming">5+</div>
                <div className="text-gaming-subtext text-sm font-gaming">CERTS</div>
              </div>
            </div>
          </motion.div>

          {/* Gaming Tech Orbit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Replace the HM circle and orbit with more gamified, interactive version: */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Center HM Circle with enhanced gamified effects */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  x: [0, 20, -20, 0],
                  y: [0, -20, 20, 0]
                }}
                whileHover={{ scale: 1.2 }}
                transition={{ 
                  duration: 1, 
                  type: 'spring', 
                  stiffness: 100,
                  x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-1/2 left-1/2 w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-vintage-gold via-vintage-coral to-vintage-emerald border-8 border-vintage-gold shadow-2xl flex items-center justify-center cursor-pointer gaming-hub"
                style={{ zIndex: 2 }}
                drag
                dragConstraints={{
                  left: -60,
                  right: 60,
                  top: -60,
                  bottom: 60
                }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.3 }}
              >
                <motion.span 
                  className="text-4xl font-extrabold text-vintage-dark font-gaming animate-glow"
                >
                  HM
                </motion.span>
                {/* Enhanced sparkles and effects */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-vintage-gold animate-pulse">✨</span>
                <span className="absolute -bottom-3 right-1/2 translate-x-1/2 text-vintage-coral animate-bounce">⭐</span>
                <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-vintage-emerald animate-spin">💫</span>
                <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-vintage-gold animate-pulse">🚀</span>
              </motion.div>

              {/* Enhanced orbiting tech icons with continuous revolution */}
              {techIcons.map((tech, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{
                      rotate: 360,
                      x: [x, x + 10, x - 10, x],
                      y: [y, y + 10, y - 10, y]
                    }}
                    transition={{
                        duration: 20,
                      delay: index * 0.1, 
                        repeat: Infinity,
                      repeatType: 'loop', 
                      ease: 'linear' 
                    }}
                    whileHover={{ scale: 1.5, rotate: 720 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      className="w-16 h-16 glass rounded-full flex items-center justify-center group hover:border-2 hover:border-gaming-gold transition-all duration-300 gaming-card pixel-border"
                    >
                      <tech.icon size={24} className={`${tech.color} group-hover:animate-pulse`} />
                    </motion.div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gaming-subtext font-gaming whitespace-nowrap">
                      {tech.name}
                    </div>
                  </motion.div>
                );
              })}
              {/* Animated pixel/arcade rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-4 border-dashed border-vintage-gold/40 rounded-full pixel-border animate-glow"
                style={{ zIndex: 1 }}
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 border-4 border-dotted border-vintage-neon-blue/40 rounded-full pixel-border animate-glow"
                style={{ zIndex: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Certificates Section (upgraded) */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 relative">
          {/* Decorative lines and icons */}
          <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-24 opacity-30 pointer-events-none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#ffe600" strokeWidth="3" fill="none" />
            <path d="M10,50 Q50,10 90,50 Q50,90 10,50" stroke="#00ffe7" strokeWidth="2" fill="none" />
          </svg>
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 opacity-30 pointer-events-none" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" rx="15" stroke="#a38b73" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="10" stroke="#f4d03f" strokeWidth="2" fill="none" />
          </svg>
          {/* Certificates */}
          {["Coursera Certificate [AI Essentials]","Shark Tank 3.0, 4.0 Winner","Exin Cloud & BCS AI","AIU Football Tournament","ACIC Desert Bloom, Triathlon","National Project Expo"].map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-gaming-gold/80 to-gaming-neon-blue/60 p-6 rounded-2xl shadow-2xl border-2 border-gaming-gold/40 min-w-[260px] max-w-xs flex flex-col items-center hover:scale-105 hover:shadow-gaming-gold/40 transition-transform duration-300 animate-float-glow animate-glow border-animated"
            >
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gaming-dark px-3 py-1 rounded-full border border-gaming-gold text-gaming-gold font-bold text-xs shadow-md animate-pulse flex items-center gap-1">
                <Trophy size={16} className="text-gaming-gold" /> CERTIFICATE
              </span>
              <span className="text-lg font-bold text-gaming-dark text-center font-gaming mb-2 animate-glow">{cert}</span>
              <span className="block w-12 h-1 bg-gaming-gold rounded-full mb-2 animate-pulse"></span>
              <span className="text-xs text-gaming-dark/80 text-center">Awarded for outstanding achievement</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;