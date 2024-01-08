import styled from "styled-components";
import TIMER_DATA from "../data/timerData";
import Button from "./Button";
import { useMemo } from "react";
import { UseTimerContext } from "../context/timerContext";

const SwitchButtons = () => {
 const { activeTimer, changeActiveTimerHandler } = UseTimerContext();
 const timerButtons = useMemo(() => {
  return TIMER_DATA.map((timer, index) => (
   <Button
    key={index}
    isActive={activeTimer?.type === timer.type && true}
    onClick={() => changeActiveTimerHandler(timer)}
   >
    {timer.name}
   </Button>
  ));
 }, [activeTimer, changeActiveTimerHandler]);
 return <StyledSwitchButtons>{timerButtons}</StyledSwitchButtons>;
};

export default SwitchButtons;

const StyledSwitchButtons = styled.div`
 margin: 43px 0;
 background-color: ${({ theme }) => theme.colors.text};
 border-radius: 31.5px;
 padding: 8px 11px;
`;
