import React from "react";
import styled from "styled-components";

const TimeFormGroup = ({ name, label, onChange, value }) => {
 return (
  <StyledTimeFormGroup>
   <label htmlFor={name}>{label}</label>
   <input
    name={name}
    type="number"
    min="0"
    step="1"
    onChange={onChange}
    value={value}
    required
   />
  </StyledTimeFormGroup>
 );
};

export default TimeFormGroup;

const StyledTimeFormGroup = styled.div`
 display: grid;
 grid-template-columns: repeat(2, minmax(0, 1fr));
 align-items: center;
 input {
  border-radius: 10px;
  background-color: #eff1fa;
  font-size: 1.4rem;
  padding: 12px 16px;
  border: none;
  font-weight: bold;
 }

 label {
  color: ${({ theme }) => theme.colors.textDark};
  opacity: 0.4;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
 }

 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: flex-start;

  input {
   width: 100%;
  }
 }
`;
