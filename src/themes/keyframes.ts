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
      fill: #bb86fc;
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

export default KeyFrames;
