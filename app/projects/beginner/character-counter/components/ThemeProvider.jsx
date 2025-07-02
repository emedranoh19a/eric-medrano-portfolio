"use client";

import { createContext, useContext, useState } from "react"

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  function toggle() {
    setIsDark((s) => !s);
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
