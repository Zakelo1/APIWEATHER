import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);


  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 rounded-md dark:bg-gray-700 dark:text-white"
    >
      {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
    </button>
  );
};

export default DarkModeToggle;
