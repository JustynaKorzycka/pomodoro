import styled from "styled-components";

const FontButton = ({ type, isActive, onSelectFont }) => {
 return (
  <StyledFontButton
   $fontType={type}
   $isActive={isActive}
   onClick={() => onSelectFont(type)}
   type="button"
  >
   Aa
  </StyledFontButton>
 );
};

export default FontButton;

const StyledFontButton = styled.button`
 border-radius: 50%;
 background-color: ${({ $isActive, theme }) =>
  $isActive ? theme.colors.primary : "#eff1fa"};
 border: none;
 padding: 10px;
 font-size: 1.5rem;
 font-weight: bold;
 color: ${({ $isActive, theme }) =>
  $isActive ? "#fff" : theme.colors.textDark};
 font-family: ${({ $fontType }) => $fontType};
 cursor: pointer;
 position: relative;

 &::before {
  content: "";
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  position: absolute;
  top: -5px;
  left: -5px;
  border: 1px solid transparent;
  border-radius: 50%;
  z-index: -1;
 }

 &:hover {
  &::before {
   border: 1px solid #eff1fa;
  }
 }
`;
