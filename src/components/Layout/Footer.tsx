import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Hemantmodi-15', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hemant-modi-3789a6209', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/hemantmodi_15/', label: 'Instagram' },
    { icon: ExternalLink, href: 'https://hub.docker.com/u/hemant015', label: 'DockerHub' },
    { icon: Mail, href: 'mailto:hemantmodi152003@gmail.com', label: 'Email' },
  ];

  const techIcons = ['⚛️', '🐍', '🐳', '🚀', '💻', '🔧', '📊', '🎯'];

  return (
    <footer className="bg-vintage-dark border-t border-vintage-brown/20 py-12 relative overflow-hidden">
      {/* Animated SVG background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
        <defs>
          <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe600" />
            <stop offset="100%" stopColor="#00ffe7" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="50%" cy="80%" r="120" stroke="url(#footerGradient)" strokeWidth="3" fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50% 80%' }}
          opacity="0.08"
        />
        <motion.path
          d="M 0 60 Q 300 0 1200 60"
          stroke="url(#footerGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
          opacity="0.10"
        />
        <motion.circle
          cx="90%" cy="30%" r="40" stroke="#f4d03f" strokeWidth="2" fill="none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 7, repeat: Infinity }}
          opacity="0.10"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tech Icons Animation */}
          {/* Removed tech icons animation */}

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-vintage-subtext hover:text-vintage-beige transition-colors duration-200"
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-vintage-subtext text-sm"
          >
            Built by Hemant Modi · 2025 · Made with ❤️ and lots of ☕
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;