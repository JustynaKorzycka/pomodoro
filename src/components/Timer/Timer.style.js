import styled, { keyframes } from "styled-components";

const timerProgress = keyframes`
    0% {
        stroke-dasharray: 0 100;
   
  }
  
`;

export const StyledTimer = styled.div`
 height: 300px;
 width: 300px;
 background-image: linear-gradient(-30deg, #2e325a, #0e112a);
 border-radius: 50%;
 box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
 position: relative;
`;

export const TimerWrapper = styled.div`
 position: relative;
 margin: 16.1px;
 width: calc(100% - 32.2px);
 height: calc(100% - 32.2px);
 border-radius: 100%;

 background-color: ${({ theme }) => theme.colors.primary};

 .circular-chart {
  display: block;
  position: relative;
 }

 .circle-outer {
  fill: none;
  stroke: transparent;
  stroke-width: 1;
 }

 .circle {
  fill: none;
  stroke: ${({ theme }) => theme.themeColors.mainColor};
  stroke-width: 1;
  animation: ${timerProgress} 1s linear forwards;
 }
`;

export const ProgressBar = styled.svg`
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: ${({ theme }) => theme.colors.first};
 border-radius: 50%;
`;

export const InsideTimer = styled.div`
 position: absolute;
 height: calc(100% - 40px);
 width: calc(100% - 40px);
 top: 20px;
 left: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 border-radius: 50%;
 background-color: ${({ theme }) => theme.colors.primary};

 p {
  font-size: 8rem;
  color: ${({ theme }) => theme.colors.textBright};
  font-weight: bold;
 }
`;

export const ToggleButton = styled.button`
 border: none;
 background-color: transparent;
 color: ${({ theme }) => theme.colors.textBright};
 text-transform: uppercase;
 letter-spacing: 1.3rem;
 font-weight: bold;
 cursor: pointer;
`;
