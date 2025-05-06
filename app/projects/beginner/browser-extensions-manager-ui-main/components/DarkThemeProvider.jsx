"use client";

import { createContext, useContext, useState } from "react";

const DarkThemeContext = createContext(null);
export default function DarkThemeProvider({ children }) {
  //State:
  const [isDark, setIsDark] = useState(false);
  //Handlers:
  const onToggle = () => setIsDark((s) => !s);
  return (
    <DarkThemeContext.Provider value={{ isDark, onToggle }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export function useDarkMode() {
  const value = useContext(DarkThemeContext);
  return value;
}
