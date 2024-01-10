import React, { useState } from "react";
import { StyledForm } from "./Form.style";
import { UseTimerContext } from "../../context/timerContext";
import Button from "../Button";
import ColorButtons from "./ColorButtons/ColorButtons";
import FontButtons from "./FontButtons/FontButtons";
import TimeChanger from "./TimeChanger/TimeChanger";

const Form = ({
 fontFamilyType,
 setFontFamilyType,
 selectedTheme,
 setSelectedTheme,
 onCloseModal,
}) => {
 const {
  pomodoro,
  setPomodoro,
  shortBreak,
  setShortBreak,
  longBreak,
  setLongBreak,
 } = UseTimerContext();

 const [timeFormData, setTimeFormData] = useState({
  pomodoro: pomodoro / 60,
  shortBreak: shortBreak / 60,
  longBreak: longBreak / 60,
 });

 const [fontFormData, setFontFormData] = useState(fontFamilyType);
 const [colorFormData, setColorFormData] = useState(selectedTheme);

 const fontButtonClickHandler = (selectedFont) => {
  setFontFormData(selectedFont);
 };

 const inputTimeChangeHandler = (e) => {
  const newTime = e.target.value;
  const valueName = e.target.name;
  setTimeFormData((prevState) => ({ ...prevState, [valueName]: newTime }));
 };

 const submitHandler = (e) => {
  e.preventDefault();
  if (timeFormData.pomodoro !== pomodoro)
   setPomodoro(parseInt(timeFormData.pomodoro) * 60);
  if (timeFormData.shortBreak !== shortBreak)
   setShortBreak(parseInt(timeFormData.shortBreak) * 60);
  if (timeFormData.longBreak !== longBreak)
   setLongBreak(parseInt(timeFormData.longBreak) * 60);
  if (fontFormData !== fontFamilyType) setFontFamilyType(fontFormData);
  if (colorFormData !== selectedTheme) setSelectedTheme(colorFormData);
  onCloseModal();
 };
 return (
  <StyledForm onSubmit={submitHandler}>
   <TimeChanger
    currentTimes={timeFormData}
    onTimeChange={inputTimeChangeHandler}
   />
   <FontButtons
    selectedFont={fontFormData}
    onSelectFont={fontButtonClickHandler}
   />
   <ColorButtons
    currentColor={colorFormData}
    onSelectColor={setColorFormData}
   />
   <Button
    isActive={true}
    formBtn={true}
    type="submit"
   >
    Apply
   </Button>
  </StyledForm>
 );
};

export default Form;
