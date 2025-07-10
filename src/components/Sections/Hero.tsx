import React, { useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink, Sparkles, Heart, Star } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import Tilt from 'react-parallax-tilt';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Hero = () => {
  const rotatingSubtitles = [
    'CSE(AI/DS) Student',
    'Researcher',
    'Innovator',
    'Tech Leader',
    'Problem Solver',
    'Dream Builder'
  ];

  const [currentSubtitle, setCurrentSubtitle] = React.useState(0);
  const [xp, setXp] = React.useState(0);
  const progressBarRef = useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % rotatingSubtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Optimized floating decorative elements
  const floatingElements = useMemo(() => [
    { icon: Sparkles, delay: 0, size: 24 },
    { icon: Heart, delay: 1, size: 20 },
    { icon: Star, delay: 2, size: 22 },
  ], []);

  // Optimized click handler
  const handleIconClick = useCallback(() => {
    setXp((prev) => Math.min(prev + 10, 100));
  }, []);

  return (
    <section id="home" className="min-h-screen bg-vintage-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating shapes */}
        <div className="floating-shape w-64 h-64 top-20 left-20 animate-float opacity-30"></div>
        <div className="floating-shape w-96 h-96 bottom-20 right-20 animate-float opacity-20" style={{animationDelay: '1s'}}></div>
        <div className="floating-shape w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float opacity-25" style={{animationDelay: '2s'}}></div>
        
        {/* Animated lines and circles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d6c1b1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f4d03f" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Optimized animated connecting lines */}
          <motion.path
            d="M 100 100 Q 400 200 800 150"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{ willChange: 'stroke-dasharray' }}
          />
          <motion.path
            d="M 200 400 Q 600 300 900 500"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            style={{ willChange: 'stroke-dasharray' }}
          />
          
          {/* Optimized pulsing circles */}
          <motion.circle
            cx="150"
            cy="200"
            r="30"
            stroke="#d6c1b1"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ willChange: 'transform, opacity' }}
          />
          <motion.circle
            cx="700"
            cy="400"
            r="40"
            stroke="#f4d03f"
            strokeWidth="2"
            fill="none"
            opacity="0.2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            style={{ willChange: 'transform, opacity' }}
          />
        </svg>
      </div>
      {/* Interactive Gamified Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Animated sparkles and floating icons */}
        <div className="absolute top-10 left-1/4 animate-pulse text-4xl text-vintage-gold">✨</div>
        <div className="absolute bottom-16 right-1/4 animate-bounce text-3xl text-vintage-coral">⭐</div>
        <div className="absolute top-1/2 left-10 animate-spin-slow text-3xl text-vintage-emerald">💫</div>
        <div className="absolute bottom-10 right-10 animate-float text-5xl text-vintage-gold">🚀</div>
      </div>
      {/* Dynamic subtitle cycling through coder/innovator/leader, etc. */}
      {/* Move the subtitle further down and use a floating badge style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center mt-12 mb-4"
      >
        <span className="px-6 py-2 rounded-full bg-gradient-to-r from-vintage-gold via-vintage-coral to-vintage-emerald text-vintage-dark font-bold text-xl shadow-lg animate-glow animate-gradient-text">
          {rotatingSubtitles[currentSubtitle]}
        </span>
      </motion.div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Animated Logo with sparkles */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                className="mb-8"
              >
                <div className="inline-block relative sparkle">
                  <div className="w-20 h-20 glass-strong rounded-2xl flex items-center justify-center shadow-2xl hover-card border-2 border-vintage-beige">
                    <span className="text-vintage-beige font-bold text-3xl font-serif">HM</span>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-2 border-2 border-vintage-gold/30 rounded-2xl"
                  ></motion.div>
                </div>
              </motion.div>

              {/* Name with playful typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-vintage-text mb-4"
              >
                Hemant
                <span className="block gradient-text font-serif">
                  Modi
                </span>
              </motion.h1>

              {/* Rotating Subtitle with playful animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 h-8"
              >
                <motion.p
                  key={currentSubtitle}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-vintage-gold font-medium"
                >
                  {rotatingSubtitles[currentSubtitle]}
                </motion.p>
              </motion.div>

              {/* Bio with glass card */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-vintage-subtext mb-8 max-w-2xl glass p-6 rounded-xl"
              >
                Passionate developer, national footballer, tech leader, and research contributor in the AI & civic-tech domain. 
                President of CST Club. Shark Tank finalist. Builder of Sheher Connect. Always pushing boundaries with ❤️ and creativity.
              </motion.p>

              {/* Playful Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="playful-btn px-8 py-3 rounded-lg font-semibold flex items-center space-x-2"
                  href="https://drive.google.com/file/d/1nmq0gzdy5agjPzfewE3WwUpWMMYNOfEa/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Resume"
                >
                  <Download size={20} />
                  <span>Resume</span>
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-vintage-coral text-vintage-coral px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-vintage-coral hover:text-vintage-dark transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Explore Projects"
                >
                  <ExternalLink size={20} />
                  <span>Explore Projects</span>
                </motion.button>
              </motion.div>
              {/* Let's Connect Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <button
                  className="bg-vintage-gold text-vintage-dark px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-vintage-coral hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vintage-gold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Let's Connect"
                >
                  Let's Connect
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Flip Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center items-center"
            >
              {/* Flip Card Container with Revolving Rings */}
              <div className="relative">
                {/* Revolving Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-8 border-2 border-vintage-beige/20 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4 border border-vintage-gold/30 rounded-full"
                ></motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-12 border border-vintage-coral/20 rounded-full"
                ></motion.div>
                
                {/* Flip Card */}
                <div className="flip-card group w-80 h-80 cursor-pointer relative perspective">
                  <div className="flip-card-inner w-full h-full transition-transform duration-700 group-hover:rotate-y-180 transform-style-preserve-3d">
                    {/* Front: Circular Image */}
                    <div 
                      className="flip-card-front absolute w-full h-full backface-hidden flex items-center justify-center rounded-full overflow-hidden border-4 border-vintage-gold shadow-2xl bg-vintage-dark"
                    >
                      <img 
                        src="/user-image.jpg" 
                        alt="Hemant Modi" 
                        className="w-full h-full object-cover rounded-full"
                        style={{ minWidth: '100%', minHeight: '100%' }}
                        onLoad={() => console.log('Image loaded successfully')}
                        onError={(e) => {
                          console.error('Image failed to load:', e);
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback initials if image doesn't load */}
                      <div className="w-full h-full flex items-center justify-center text-8xl font-bold text-vintage-gold bg-gradient-to-br from-vintage-dark to-vintage-beige rounded-full" style={{display: 'none'}}>
                        HM
                      </div>
                    </div>
                    
                    {/* Back: Name with gradient */}
                    <div className="flip-card-back absolute w-full h-full backface-hidden flex items-center justify-center rounded-full border-4 border-vintage-gold shadow-2xl bg-gradient-to-br from-vintage-gold via-vintage-coral to-vintage-emerald">
                      <div className="text-center">
                        <h2 className="text-4xl font-bold text-vintage-dark mb-2">Hemant</h2>
                        <h3 className="text-2xl font-semibold text-vintage-dark">Modi</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges around the image with shimmer */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -left-6 glass px-3 py-1 rounded-full border border-vintage-gold/50 shimmer"
                >
                  <span className="text-vintage-gold text-sm font-semibold">🏆 Shark Tank</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -top-6 -right-6 glass px-3 py-1 rounded-full border border-vintage-emerald/50 shimmer"
                >
                  <span className="text-vintage-emerald text-sm font-semibold">⚽ National</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass px-3 py-1 rounded-full border border-vintage-lavender/50 shimmer"
                >
                  <span className="text-vintage-lavender text-sm font-semibold">🔬 Researcher</span>
                </motion.div>
                
                {/* Sparkle effects */}
                <div className="absolute top-4 right-4 text-vintage-gold animate-sparkle">✨</div>
                <div className="absolute bottom-4 left-4 text-vintage-coral animate-sparkle" style={{animationDelay: '1s'}}>⭐</div>
                <div className="absolute top-1/2 left-4 text-vintage-emerald animate-sparkle" style={{animationDelay: '2s'}}>💫</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-vintage-subtext flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown size={24} className="animate-bounce text-vintage-beige" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);