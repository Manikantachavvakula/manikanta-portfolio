import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Start in 'technical' mode (Purple QA/Testing theme) - CHANGED FROM 'operations'
  const [theme, setTheme] = useState('technical');

  // Apply the theme class to the body when component mounts and when theme changes
  useEffect(() => {
    console.log('Setting theme to:', theme);
    document.body.className = theme;
  }, [theme]);

  // Set initial theme on component mount - CHANGED TO 'technical'
  useEffect(() => {
    console.log('ThemeToggle mounted, setting initial theme to technical');
    document.body.className = 'technical';
    setTheme('technical');
  }, []);

  // Toggle between technical and operations
  const toggleTheme = () => {
    const newTheme = theme === 'technical' ? 'operations' : 'technical';
    console.log('Toggling from', theme, 'to', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000,
        fontSize: '0.9rem',
        padding: '0.5rem 1rem'
      }}
    >
      {theme === 'technical' ? '⚙️ Operations Mode' : '🔧 Technical Mode'}
    </button>
  );
};

export default ThemeToggle;