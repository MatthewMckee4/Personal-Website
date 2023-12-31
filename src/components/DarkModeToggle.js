import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("theme"))
  );

  useEffect(() => {
    const className = "dark";
    const element = document.documentElement;

    element.classList.toggle(className, darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="p-2">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-4 py-2 rounded-md ${
          darkMode ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-gray-200"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
