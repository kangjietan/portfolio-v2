import { css } from "styled-components";

const KeyFrames = css`
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
      fill: var(--primary-color);
    }
  }

  @keyframes logo-fill {
    from {
      fill: transparent;
    }
    to {
      fill: var(--secondary-color);
    }
  }
`;

export default KeyFrames;
