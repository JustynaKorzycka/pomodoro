import React, { useState } from "react";
import { StyledForm, TimeChangerWrapper, ButtonsWrapper } from "./Form.style";
import TimeFormGroup from "./TimeFormGroup";
import TIMER_DATA from "../../data/timerData";
import { UseTimerContext } from "../../context/timerContext";
import Button from "../Button";
import Divider from "../Divider";
import FontButton from "./FontButton";
import { FONT_FAMILY_TYPE } from "../../styles/theme.config";
import ColorButtons from "./ColorButtons";

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
  if (timeFormData.pomodoro) setPomodoro(parseInt(timeFormData.pomodoro) * 60);
  else if (timeFormData.shortBreak)
   setShortBreak(parseInt(timeFormData.shortBreak) * 60);
  else setLongBreak(parseInt(timeFormData.longBreak) * 60);
  if (fontFormData !== fontFamilyType) setFontFamilyType(fontFormData);
  if (colorFormData !== selectedTheme) setSelectedTheme(colorFormData);
  onCloseModal();
 };
 return (
  <StyledForm onSubmit={submitHandler}>
   <h3>Time (minutes)</h3>
   <TimeChangerWrapper>
    {TIMER_DATA.map((timer, index) => (
     <TimeFormGroup
      key={index}
      name={timer.type}
      label={timer.name}
      value={timeFormData[`${timer.type}`]}
      onChange={inputTimeChangeHandler}
     />
    ))}
   </TimeChangerWrapper>
   <Divider />
   <h3>Font</h3>
   <ButtonsWrapper>
    <FontButton
     type={FONT_FAMILY_TYPE.Kumbh}
     isActive={fontFormData === FONT_FAMILY_TYPE.Kumbh && true}
     onSelectFont={fontButtonClickHandler}
    />
    <FontButton
     type={FONT_FAMILY_TYPE.Roboto}
     isActive={fontFormData === FONT_FAMILY_TYPE.Roboto && true}
     onSelectFont={fontButtonClickHandler}
    />
    <FontButton
     type={FONT_FAMILY_TYPE.Space}
     isActive={fontFormData === FONT_FAMILY_TYPE.Space && true}
     onSelectFont={fontButtonClickHandler}
    />
   </ButtonsWrapper>
   <Divider />
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
