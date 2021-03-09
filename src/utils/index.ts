/** Animate the outlines */
let lineAnim = (delay: number): string =>
  `line-anim 2s ease forwards ${delay}s`;

/** Animate the filling of lines */
let fillAnim = (fill: string, delayIncrement: number, length: number) =>
  `${fill} 0.5s ease forwards ${delayIncrement * (length + 2.5)}s`;

/** Only animate lines. No fill in. */
export function animateLogoSVG(id: string, delay = 0, delayIncrement = 0) {
  const logoPaths = document.querySelectorAll(`#${id} path`);
  for (let i = 0; i < logoPaths.length; i++) {
    let path = logoPaths[i] as SVGPathElement;
    path.style.strokeDasharray = `${path.getTotalLength()}px`;
    path.style.strokeDashoffset = `${path.getTotalLength()}px`;
    delay += delayIncrement;
    /** Fill the letters and not rectangle */
    // if (i > 1) {
    //   path.style.animation = `${lineAnim(delay)}, ${fillAnim(
    //     "logo-fill",
    //     delayIncrement,
    //     logoPaths.length
    //   )}`;
    // } else {
    //   path.style.animation = `${lineAnim(delay)}`;
    // }
    path.style.animation = `${lineAnim(delay)}`;
  }
}

/** Animate SVG. Animation for all paths. */
export function animateSVG(id: string, delay = 0, delayIncrement = 0) {
  const logo = document.getElementById(id)!;
  const logoPaths = document.querySelectorAll(`#${id} path`);
  logo.style.animation = fillAnim("fill", delayIncrement, logoPaths.length);
  for (let i = 0; i < logoPaths.length; i++) {
    let path = logoPaths[i] as SVGPathElement;
    path.style.strokeDasharray = `${path.getTotalLength()}px`;
    path.style.strokeDashoffset = `${path.getTotalLength()}px`;
    path.style.animation = `line-anim 2s ease forwards ${delay}s`;
    delay += delayIncrement;
  }
}
