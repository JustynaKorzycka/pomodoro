import styled from "styled-components";
import { ButtonsWrapper } from "../Form.style";
import FontButton from "./FontButton";
import { StyledColorButtons } from "../ColorButtons/ColorButtons";
import { FONT_FAMILY_TYPE } from "../../../styles/theme.config";
import Divider from "../../Divider";

const FONT_TYPES = [
 FONT_FAMILY_TYPE.Kumbh,
 FONT_FAMILY_TYPE.Roboto,
 FONT_FAMILY_TYPE.Space,
];

const FontButtons = ({ selectedFont, onSelectFont }) => {
 return (
  <>
   <StyledFontButtons>
    <h3>Font</h3>
    <ButtonsWrapper>
     {FONT_TYPES.map((font, index) => (
      <FontButton
       key={index}
       type={font}
       isActive={selectedFont === font && true}
       onSelectFont={onSelectFont}
      />
     ))}
    </ButtonsWrapper>
   </StyledFontButtons>
   <Divider />
  </>
 );
};

export default FontButtons;

const StyledFontButtons = styled(StyledColorButtons)``;
