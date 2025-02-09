"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

// Create a Dark Mode Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeKey, setThemeKey] = useState(0); // Force remount ClerkProvider

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const darkModeEnabled = storedTheme === "dark";
    setIsDarkMode(darkModeEnabled);
    document.documentElement.classList.toggle("dark", darkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);

    // Force ClerkProvider to remount by changing themeKey
    setThemeKey((prevKey) => prevKey + 1);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {/* ClerkProvider will reinitialize when themeKey changes */}
      <ClerkProvider
        key={themeKey}
        appearance={{ baseTheme: isDarkMode ? dark : undefined }}
      >
        {children}
      </ClerkProvider>
    </ThemeContext.Provider>
  );
}

// Custom Hook to use Dark Mode
export function useTheme() {
  return useContext(ThemeContext);
}
