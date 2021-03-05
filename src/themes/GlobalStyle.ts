import { createGlobalStyle } from "styled-components";
import Sanitize from "./sanitize";

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
  }

  body {
    background-color: var(--bg-color);
  }

  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill: transparent;
    }
    to {
      fill: #BB86FC;
    }
  }

  @keyframes logo-fill {
    from {
      fill: transparent;
    }
    to {
      fill: white;
    }
  }
`;

export default GlobalStyle;
