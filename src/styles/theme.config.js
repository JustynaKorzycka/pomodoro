import { createGlobalStyle } from "styled-components";

export const FONT_FAMILY_TYPE = {
 Kumbh: "'Kumbh Sans', sans-serif",
 Roboto: "'Roboto Slab', serif",
 Space: "'Space Mono', monospace",
};

export const theme = {
 widths: {
  sm: 576, //mobilka <575
  md: 992, // tablet 576 - 991
 },
 colors: {
  primary: "#161932",
  textBright: "#D7E0FF",
  textDark: "#1E213F",
  red: "#F87070",
  green: "#70F3F8",
  purple: "#D881F8",
 },
};

export const themeRed = {
 width: theme.widths,
 colors: theme.colors,
 themeColors: {
  mainColor: "rgb(248, 112, 112)",
  mainColorHover: "#f98d8d",
 },
};
export const themeGreen = {
 width: theme.widths,
 colors: theme.colors,
 themeColors: {
  mainColor: "rgb(112, 243, 248)",
  mainColorHover: "#8df5f9",
 },
};

export const themePurple = {
 width: theme.widths,
 colors: theme.colors,
 themeColors: {
  mainColor: "rgb(216, 129, 248)",
  mainColorHover: "#e09bf9",
 },
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
    font-family: ${({ fontFamily }) => fontFamily};
    background-color: #1E213F;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.primary};
   
    
}

h1{
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textBright};

    @media screen and (min-width: ${({ theme }) => theme.width.sm}px) {
        font-size: 3.2rem;
    }

}
.pomodoroBackground{
    background-color:  ${({ theme }) => theme.colors.first};
}
`;
