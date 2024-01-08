import React from "react";
import styled from "styled-components";

const Button = ({ isActive, onClick, children }) => {
 return (
  <StyledButton
   $isActive={isActive}
   onClick={onClick}
  >
   {children}
  </StyledButton>
 );
};

export default Button;

const StyledButton = styled.button`
 background-color: ${({ $isActive, theme }) =>
  $isActive ? theme.colors.first : "transparent"};
 font-size: 1.2rem;
 color: ${({ $isActive, theme }) =>
  $isActive ? theme.colors.textDark : theme.colors.textBright};
 opacity: ${({ $isActive }) => ($isActive ? 1 : 0.4)};
 cursor: pointer;
 border-radius: 24px;
 border: none;
 padding: 15px 26px;
 font-weight: bold;

 &:hover {
  background-color: ${({ theme }) => theme.colors.firstHover};
  color: ${({ theme }) => theme.colors.textBright};
  opacity: 1;
 }
`;
