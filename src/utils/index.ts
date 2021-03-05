let lineAnim = (delay: number): string =>
  `line-anim 2s ease forwards ${delay}s`;

let fillAnim = (fill: string, delayIncrement: number, length: number) =>
  `${fill} 0.5s ease forwards ${delayIncrement * (length + 2.5)}s`;

export function animateLogoSVG(id: string, delay = 0, delayIncrement = 0) {
  const logoPaths = document.querySelectorAll(`#${id} path`);
  for (let i = 0; i < logoPaths.length; i++) {
    let path = logoPaths[i] as SVGPathElement;
    path.style.strokeDasharray = `${path.getTotalLength()}px`;
    path.style.strokeDashoffset = `${path.getTotalLength()}px`;
    delay += delayIncrement;
    if (i > 1) {
      path.style.animation = `${lineAnim(delay)}, ${fillAnim(
        "logo-fill",
        delayIncrement,
        logoPaths.length
      )}`;
      continue;
    }
    path.style.animation = `${lineAnim(delay)}`;
  }
}

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
