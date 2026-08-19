import { useState, useEffect } from "react";

export function useTimer() {
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds !== null && timerSeconds > 0) {
      interval = setInterval(
        () => setTimerSeconds((prev) => (prev !== null ? prev - 1 : 0)),
        1000,
      );
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      alert("⏱️ Hết giờ rồi mấy má ơi! Thao tác lẹ giùm tui cái!");
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const startTimer = (secs: number) => {
    setTimerSeconds(secs);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(null);
  };

  return { timerSeconds, isTimerRunning, startTimer, stopTimer };
}