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

 const changeActiveCounterTimeHandler = () => {
  if (activeTimer.type === "pomodoro") {
   setActiveCounterTime(pomodoro);
  } else if (activeTimer.type === "shortBreak") {
   setActiveCounterTime(shortBreak);
  } else {
   setActiveCounterTime(longBreak);
  }
 };

 useEffect(() => {
  changeActiveCounterTimeHandler();
 }, [activeTimer, pomodoro, shortBreak, longBreak]);

 const changeActiveTimerHandler = (newTimer) => {
  setActiveTimer(newTimer);
  setIsCountDown(false);
  changeActiveCounterTimeHandler();
 };

 const stopCountingDownHandler = () => setIsCountDown(false);

 const toggleIsCountDownHandler = () => {
  setIsCountDown((prev) => !prev);
 };

 return (
  <TimerContext.Provider
   value={{
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
