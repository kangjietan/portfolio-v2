import { createGlobalStyle } from "styled-components";
import Sanitize from './sanitize';

const GlobalStyle = createGlobalStyle`
  ${Sanitize}

  body {
    background-color: #121212;
  }
`;

export default GlobalStyle;
