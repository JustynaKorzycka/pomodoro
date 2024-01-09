import { useContext, useState, createContext, useEffect } from "react";
import TIMER_DATA from "../data/timerData";

const TimerContext = createContext({});

export const TimerWrapper = ({ children }) => {
 const [pomodoro, setPomodoro] = useState(600);
 const [shortBreak, setShortBreak] = useState(60);
 const [longBreak, setLongBreak] = useState(120);
 const [activeTimer, setActiveTimer] = useState(TIMER_DATA[0]);
 const [activeCounterTime, setActiveCounterTime] = useState(pomodoro);
 const [isCountDown, setIsCountDown] = useState(false);
 const [counter, setCounter] = useState(pomodoro);

 useEffect(() => {
  if (!isCountDown || counter <= 0) return setIsCountDown(false);
  const timer = setInterval(() => {
   setCounter((prev) => prev - 1);
  }, 200);
  return () => clearInterval(timer);
 }, [isCountDown, counter]);

 const changeCounterHandler = () => {
  if (activeTimer.type === "pomodoro") {
   setCounter(pomodoro);
   setActiveCounterTime(pomodoro);
  } else if (activeTimer.type === "shortBreak") {
   setCounter(shortBreak);
   setActiveCounterTime(shortBreak);
  } else {
   setCounter(longBreak);
   setActiveCounterTime(longBreak);
  }
 };

 useEffect(() => {
  changeCounterHandler();
 }, [activeTimer, pomodoro, shortBreak, longBreak]);

 const changeActiveTimerHandler = (newTimer) => {
  setActiveTimer(newTimer);
  setIsCountDown(false);
  changeCounterHandler();
 };

 const toggleIsCountDownHandler = () => {
  if (counter <= 0) {
   changeActiveTimerHandler(activeTimer);
  } else setIsCountDown((prev) => !prev);
 };

 const stopCountingDownHandler = () => setIsCountDown(false);

 return (
  <TimerContext.Provider
   value={{
    counter,
    activeTimer,
    changeActiveTimerHandler,
    toggleIsCountDownHandler,
    isCountDown,
    activeCounterTime,
    pomodoro,
    setPomodoro,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    stopCountingDownHandler,
   }}
  >
   {children}
  </TimerContext.Provider>
 );
};

export const UseTimerContext = () => useContext(TimerContext);
