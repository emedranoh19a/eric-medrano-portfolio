"use client";

import { createContext, useContext, useState } from "react";

const TimeContext = createContext();

export default function TimeProvider({ children }) {
  const [time, setTime] = useState("monthly");
  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
}

export function useTime() {
  return useContext(TimeContext);
}
