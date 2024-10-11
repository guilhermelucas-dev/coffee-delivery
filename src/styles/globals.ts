import { createGlobalStyle } from "styled-components";

export const GlobleStyle = createGlobalStyle`

  :root {
      font-size: 62.5%;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    height: 100vh;
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;