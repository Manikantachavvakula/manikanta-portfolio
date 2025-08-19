import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Different symbols for different themes
    const hackerLetters = '01';
    const kaliSymbols = '🐉⚡🔱⚔️💀🖤'; // Kali-inspired symbols
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    // Get current theme
    const getCurrentTheme = () => document.body.className || 'kali';
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const theme = getCurrentTheme();
      let letters = hackerLetters;
      
      // Set colors and symbols based on theme
      if (theme === 'hacker') {
        ctx.fillStyle = '#00FF88';
        letters = hackerLetters;
      } else if (theme === 'kali') {
        // Alternating purple and cyan for Kali theme
        letters = kaliSymbols;
      }
      
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        
        // For Kali theme, alternate colors per column
        if (theme === 'kali') {
          ctx.fillStyle = i % 2 === 0 ? '#8b5cf6' : '#06b6d4';
        } else {
          ctx.fillStyle = '#00FF88';
        }
        
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 33);
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        opacity: 0.15,
        pointerEvents: 'none'
      }}
    />
  );
};

export default MatrixBackground;