import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(!localStorage.isDarkMode){
        localStorage.setItem("darkMode", "true")
    }
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 text-xl">
      {isDarkMode ? <FaSun className="text-white" /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
