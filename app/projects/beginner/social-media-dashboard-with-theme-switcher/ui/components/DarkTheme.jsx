"use client";
import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

export default function DarkTheme({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkContext);
}
