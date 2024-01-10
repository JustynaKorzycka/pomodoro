import { useMemo, useEffect, useState } from "react";
import { UseTimerContext } from "../../context/timerContext";
import {
 StyledTimer,
 TimerWrapper,
 InsideTimer,
 ToggleButton,
} from "./Timer.style";

const Timer = () => {
 const {
  toggleIsCountDownHandler,
  isCountDown,
  activeCounterTime,
  stopCountingDownHandler,
 } = UseTimerContext();

 const [counter, setCounter] = useState(activeCounterTime);

 useEffect(() => {
  setCounter(activeCounterTime);
 }, [activeCounterTime]);

 useEffect(() => {
  if (!isCountDown || counter <= 0) return stopCountingDownHandler();
  const timer = setInterval(() => {
   setCounter((prev) => prev - 1);
  }, 100);
  return () => clearInterval(timer);
 }, [isCountDown, counter, stopCountingDownHandler]);

 const counterToDisplay = useMemo(() => {
  let minutes = Math.floor(counter / 60);
  let extraSeconds = counter % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
  return `${minutes}:${extraSeconds}`;
 }, [counter]);

 const toggleButtonText = useMemo(() => {
  if (isCountDown) return "pause";
  else if (counter <= 0) return "restart";
  return "start";
 }, [isCountDown, counter]);

 const progressPercent = useMemo(() => {
  let percent = 100 - (counter * 100) / activeCounterTime;
  return percent;
 }, [counter, activeCounterTime]);

 return (
  <>
   <StyledTimer>
    <TimerWrapper>
     <svg
      viewBox="0 0 36 36"
      className="circular-chart"
     >
      <path
       className="circle-outer"
       d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
       className="circle"
       strokeDasharray={`${progressPercent}, 100`}
       d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
      />
     </svg>
     <InsideTimer>
      <p>{counterToDisplay}</p>
      <ToggleButton
       onClick={() => {
        if (counter <= 0) setCounter(activeCounterTime);
        else toggleIsCountDownHandler();
       }}
      >
       {toggleButtonText}
      </ToggleButton>
     </InsideTimer>
    </TimerWrapper>
   </StyledTimer>
  </>
 );
};

export default Timer;
