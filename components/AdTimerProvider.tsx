'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AdTimerContext = createContext<{ ready: boolean; secondsLeft: number }>({
  ready: false,
  secondsLeft: 15,
});

export function useAdTimer() {
  return useContext(AdTimerContext);
}

export default function AdTimerProvider({
  children,
  seconds = 15,
}: {
  children: React.ReactNode;
  seconds?: number;
}) {
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft]);

  return (
    <AdTimerContext.Provider value={{ ready: secondsLeft <= 0, secondsLeft }}>
      {children}
    </AdTimerContext.Provider>
  );
}
