import { useContext, useState, createContext, useEffect, useMemo } from "react";
import TIMER_DATA from "../data/timerData";

const TimerContext = createContext({});

export const TimerWrapper = ({ children }) => {
 const [pomodoro, setPomodoro] = useState(600);
 const [shortBreak, setShortBreak] = useState(12);
 const [longBreak, setLongBreak] = useState(30);
 const [activeTimer, setActiveTimer] = useState(TIMER_DATA[0]);
 const [isCountDown, setIsCountDown] = useState(false);
 const [counter, setCounter] = useState(pomodoro);

 useEffect(() => {
  if (!isCountDown || counter <= 0) return setIsCountDown(false);
  const timer = setInterval(() => {
   setCounter((prev) => prev - 1);
  }, 1000);
  return () => clearInterval(timer);
 }, [isCountDown, counter]);

 const changeActiveTimerHandler = (newTimer) => {
  setActiveTimer(newTimer);
  setIsCountDown(false);
  if (newTimer.type === "pomodoro") setCounter(pomodoro);
  else if (newTimer.type === "shortBreak") setCounter(shortBreak);
  else setCounter(longBreak);
 };

 const activeCounterTime = useMemo(() => {
  if (activeTimer.type === "pomodoro") return pomodoro;
  else if (activeTimer.type === "shortBreak") return shortBreak;
  else return longBreak;
 }, [activeTimer, pomodoro, shortBreak, longBreak]);

 const toggleIsCountDownHandler = () => {
  if (counter <= 0) {
   changeActiveTimerHandler(activeTimer);
  } else setIsCountDown((prev) => !prev);
 };

 return (
  <TimerContext.Provider
   value={{
    counter,
    activeTimer,
    changeActiveTimerHandler,
    toggleIsCountDownHandler,
    isCountDown,
    activeCounterTime,
   }}
  >
   {children}
  </TimerContext.Provider>
 );
};

export const UseTimerContext = () => useContext(TimerContext);
