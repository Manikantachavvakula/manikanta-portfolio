import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // Start in 'operations' mode (Amazon-inspired theme)
  const [theme, setTheme] = useState('operations');

  // Apply the theme class to the body when component mounts and when theme changes
  useEffect(() => {
    console.log('Setting theme to:', theme);
    document.body.className = theme;
  }, [theme]);

  // Set initial theme on component mount
  useEffect(() => {
    console.log('ThemeToggle mounted, setting initial theme');
    document.body.className = 'operations';
    setTheme('operations');
  }, []);

  // Toggle between operations and technical
  const toggleTheme = () => {
    const newTheme = theme === 'operations' ? 'technical' : 'operations';
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
      {theme === 'operations' ? '🔧 Technical Mode' : '⚙️ Operations Mode'}
    </button>
  );
};

export default ThemeToggle;