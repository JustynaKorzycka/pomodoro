import React, { useState } from "react";
import SwitchButtons from "../components/SwitchButtons";
import Timer from "../components/Timer/Timer";

const PomodoroApp = () => {
 return (
  <>
   <h1>pomodoro</h1>
   <SwitchButtons />
   <Timer />
  </>
 );
};

export default PomodoroApp;
