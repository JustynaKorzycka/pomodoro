import styled from "styled-components";

const ColorButton = ({ colorType, isActive, onSelectColor }) => {
 return (
  <StyledColorButton
   type="button"
   $isActive={isActive}
   onClick={() => onSelectColor(colorType)}
   $colorType={colorType}
  >
   &#10004;
  </StyledColorButton>
 );
};

export default ColorButton;

const StyledColorButton = styled.button`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: ${({ $colorType }) => $colorType.themeColors.mainColor};
 border: none;
 cursor: pointer;
 font-size: ${({ $isActive }) => ($isActive ? "1.2rem" : "0")};
`;
