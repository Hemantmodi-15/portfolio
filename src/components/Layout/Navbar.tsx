import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, FileText, Mail, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Research', href: '#research', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Gaming Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-gaming-gold to-gaming-brown rounded-lg flex items-center justify-center gaming-btn border-2 border-gaming-gold">
                <Gamepad2 size={20} className="text-gaming-dark" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-gaming-gold to-gaming-neon-blue rounded-lg blur opacity-30 animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gaming-text font-bold text-lg font-gaming neon-text">
                HEMANT
              </span>
              <div className="text-gaming-gold text-xs font-retro">MODI.EXE</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-gaming-subtext hover:text-gaming-gold transition-all duration-300 flex items-center space-x-2 font-gaming relative group"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gaming-gold to-gaming-neon-blue group-hover:w-full transition-all duration-300"></div>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gaming-text hover:text-gaming-gold transition-colors gaming-btn p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark border-t border-gaming-gold/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gaming-subtext hover:text-gaming-gold px-3 py-2 rounded-md transition-colors gaming-card"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={16} />
                    <span className="font-gaming">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;