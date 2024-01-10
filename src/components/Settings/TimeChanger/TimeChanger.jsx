import styled from "styled-components";
import TIMER_DATA from "../../../data/timerData";
import TimeFormGroup from "./TimeFormGroup";
import Divider from "../../Divider";
const TimeChanger = ({ currentTimes, onTimeChange }) => {
 return (
  <StyledTimeChanger>
   <h3>Time (minutes)</h3>
   <TimeChangerWrapper>
    {TIMER_DATA.map((timer, index) => (
     <TimeFormGroup
      key={index}
      name={timer.type}
      label={timer.name}
      value={currentTimes[`${timer.type}`]}
      onChange={onTimeChange}
     />
    ))}
   </TimeChangerWrapper>
   <Divider />
  </StyledTimeChanger>
 );
};

export default TimeChanger;

const StyledTimeChanger = styled.section``;

const TimeChangerWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;

 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
 }
`;
