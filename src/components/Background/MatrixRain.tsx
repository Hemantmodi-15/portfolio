import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    const createChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 10 + 10) + 's';
      char.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      container.appendChild(char);

      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      }, 20000);
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        createChar();
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
};

export default MatrixRain;