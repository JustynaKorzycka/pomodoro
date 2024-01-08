import { createGlobalStyle } from "styled-components";

export const theme = {
 widths: {
  sm: 576, //mobilka <575
  md: 992, // tablet 576 - 991
 },
 colors: {
  primary: "#161932",
  textBright: "#D7E0FF",
  textDark: "#1E213F",
  first: "rgb(248, 112, 112)",
  firstHover: "rgba(248, 112, 112, 0.203)",
  second: "#70F3F8",
  third: "#D881F8",
 },
 padding: {
  sm: 25,
  md: 50,
  content: {
   md: 35,
   sm: 22,
  },
 },
 maxWidth: 1600,
};

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}
html{
    font-size: 10px;
}
body{
    font-family: 'Kumbh Sans', sans-serif;
    background-color: #1E213F;
   
    
}

h1{
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textBright}
}
`;
