import styled from "styled-components";
import { ButtonsWrapper } from "../Form.style";
import {
 themeRed,
 themeGreen,
 themePurple,
} from "../../../styles/theme.config";
import ColorButton from "./ColorButton";

const THEME_TYPES = [themeRed, themeGreen, themePurple];

const ColorButtons = ({ currentColor, onSelectColor }) => {
 return (
  <StyledColorButtons>
   <h3>Color</h3>
   <ColorsWrapper>
    {THEME_TYPES.map((theme, index) => (
     <ColorButton
      key={index}
      colorType={theme}
      isActive={currentColor === theme && true}
      onSelectColor={onSelectColor}
     />
    ))}
   </ColorsWrapper>
  </StyledColorButtons>
 );
};

export default ColorButtons;

export const StyledColorButtons = styled.section`
 display: flex;
 flex-direction: column;
 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
   margin-bottom: 0;
  }
 }
`;

const ColorsWrapper = styled(ButtonsWrapper)`
 margin-bottom: 20px;
 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  margin-bottom: 0;
 }
`;
