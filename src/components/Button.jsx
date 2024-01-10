import React from "react";
import styled from "styled-components";

const Button = ({ isActive, onClick, formBtn, children, type = "button" }) => {
 return (
  <StyledButton
   $isActive={isActive}
   onClick={onClick}
   $formBtn={formBtn}
   type={type}
  >
   {children}
  </StyledButton>
 );
};

export default Button;

const StyledButton = styled.button`
 background-color: ${({ $isActive, theme }) =>
  $isActive ? theme.themeColors.mainColor : "transparent"};
 font-size: ${({ $formBtn }) => ($formBtn ? "1.6rem" : "1.2rem")};
 color: ${({ $isActive, $formBtn, theme }) =>
  $isActive && !$formBtn
   ? theme.colors.textDark
   : $formBtn
   ? "#fff"
   : theme.colors.textBright};
 opacity: ${({ $isActive, $formBtn }) => ($isActive || $formBtn ? 1 : 0.4)};
 cursor: pointer;
 border-radius: ${({ $formBtn }) => ($formBtn ? "27px" : "24px")};
 border: none;
 padding: ${({ $formBtn }) => ($formBtn ? "20px 47px" : "15px 22px")};
 font-weight: bold;
 margin-bottom: ${({ $formBtn }) => ($formBtn ? "-100px" : "0")};

 &:hover {
  background-color: ${({ theme }) => theme.themeColors.mainColorHover};
  color: ${({ theme, $formBtn }) =>
   $formBtn ? "#fff" : theme.colors.textDark};
  opacity: 1;
 }

 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  font-size: ${({ $formBtn }) => ($formBtn ? "1.6rem" : "1.4rem")};
 }
`;
