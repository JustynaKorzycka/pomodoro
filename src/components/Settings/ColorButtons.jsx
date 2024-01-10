import styled from "styled-components";
import { ButtonsWrapper } from "./Form.style";
import { themeRed, themeGreen, themePurple } from "../../styles/theme.config";

const ColorButtons = ({ currentColor, onSelectColor }) => {
 return (
  <>
   <h3>Color</h3>
   <ColorsWrapper>
    <ColorButton
     type="button"
     $colorType="red"
     $isActive={currentColor === themeRed && true}
     onClick={() => onSelectColor(themeRed)}
    >
     &#10004;
    </ColorButton>
    <ColorButton
     type="button"
     $colorType="green"
     $isActive={currentColor === themeGreen && true}
     onClick={() => onSelectColor(themeGreen)}
    >
     &#10004;
    </ColorButton>
    <ColorButton
     type="button"
     $colorType="purple"
     $isActive={currentColor === themePurple && true}
     onClick={() => onSelectColor(themePurple)}
    >
     &#10004;
    </ColorButton>
   </ColorsWrapper>
  </>
 );
};

export default ColorButtons;

const ColorsWrapper = styled(ButtonsWrapper)`
 margin-bottom: 20px;
`;

const ColorButton = styled.button`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: ${({ theme, $colorType }) =>
  `${theme.colors[`${$colorType}`]}`};
 border: none;
 cursor: pointer;
 font-size: ${({ $isActive }) => ($isActive ? "1.2rem" : "0")};
`;
