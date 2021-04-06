import { createGlobalStyle } from "styled-components";
import Sanitize from "./sanitize";
import KeyFrames from "./keyframes";

import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
  ${Sanitize}

  :root {
    --primary-color: #BB86FC;
    --primary-variant-color: #3700B3;
    --secondary-color: #03DAC6;
    --bg-color: #121212;
    --surface-color: #121212;
    --error-color: #CF6679;
    --on-primary-color: #000000;
    --on-secondary-color: #000000;
    --on-bg: #FFFFFF;
    --on-surface: #FFFFFF;
    --on-error: #000000;
    --high-text-emphasis: 80%;
    --medium-text-emphasis: 60%;
    --primary-font: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--bg-color);
    font-family: var(--primary-font);
  }

  a {
    text-decoration: none;
    color: var(--on-bg);
  }

  a:hover {
    color: var(--secondary-color);
  }

  ${KeyFrames}
`;

export default GlobalStyle;
