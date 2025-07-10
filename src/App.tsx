import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Experience from './components/Sections/Experience';
import Research from './components/Sections/Research';
import Testimonials from './components/Sections/Testimonials';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import FloatingParticles from './components/Background/FloatingParticles';
import MatrixRain from './components/Background/MatrixRain';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrails, setCursorTrails] = useState<Array<{id: number, x: number, y: number, type: 'dot' | 'star'}>>([]);
  const [trailId, setTrailId] = useState(0);

  // Custom cursor and trail effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail element
      const newTrail = {
        id: trailId,
        x: e.clientX,
        y: e.clientY,
        type: Math.random() > 0.7 ? 'star' : 'dot' as 'dot' | 'star'
      };
      
      setCursorTrails(prev => [...prev, newTrail]);
      setTrailId(prev => prev + 1);
      
      // Remove old trails after animation
      setTimeout(() => {
        setCursorTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [trailId]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      
      {/* Cursor Trails */}
      {cursorTrails.map(trail => (
        <div
          key={trail.id}
          className={`cursor-trail ${trail.type === 'star' ? 'star' : ''}`}
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
          }}
        >
          {trail.type === 'star' ? '⭐' : ''}
        </div>
      ))}

      {/* Vintage Gaming Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="vintage-loader"
          >
            <div className="vintage-loader-content">
              <div className="vintage-loader-text">
                &gt; INITIALIZING CODER PROFILE...
              </div>
              <div className="vintage-loader-progress">
                <div className="vintage-loader-bar"></div>
              </div>
              <div className="vintage-loader-status">
                <div className="status-line">&gt; Loading modules...</div>
                <div className="status-line">&gt; Initializing graphics...</div>
                <div className="status-line">&gt; Loading projects...</div>
                <div className="status-line">&gt; Ready to launch!</div>
              </div>
              <div className="vintage-loader-logo">
                <div className="logo-circle">
                  <span className="logo-text">HM</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
              <Experience />
      <Research />
      <Testimonials />
      <Contact />
      <Footer />
              <FloatingParticles />
              <MatrixRain />
    </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;