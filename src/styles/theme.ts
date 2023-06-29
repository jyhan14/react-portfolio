import { DefaultTheme, createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing : border-box;
    
  }

  a {
    text-decoration : none;
    color:inherit;
  }
  
  body {
    background-color: #ffb7d8;
  }
`;

const color = {
  black: "#111",
  white: "#fff",
  backgroundColor: "#FFFFFF",
};

export type Color = typeof color;

export const theme: DefaultTheme = {
  color,
};
