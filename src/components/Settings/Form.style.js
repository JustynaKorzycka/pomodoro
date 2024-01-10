import styled from "styled-components";

export const StyledForm = styled.form`
 padding: 0 24px;
 text-align: center;
 max-width: 100%;
 h3 {
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 4.23px;
  margin-bottom: 15px;
 }
 @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
  h3 {
   font-size: 1.3rem;
  }
 }
`;

export const ButtonsWrapper = styled.div`
 display: flex;
 gap: 21px;
 justify-content: center;
 margin: 5px 0;
`;
