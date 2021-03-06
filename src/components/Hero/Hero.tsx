import React, { useEffect } from "react";
import { HeroSection } from "./styles";
import { animateSVG } from "../../utils";

// @ts-ignore
import Fade from "react-reveal/Fade";

const Hero: React.FunctionComponent = () => {
  useEffect(() => {
    animateSVG("kang", 1, 0.6);
  }, []);
  return (
    <HeroSection>
      <Fade bottom duration={2000}>
        <div style={{ color: "#3700B3", fontSize: "5rem" }}>
          Hi there, my name is
        </div>
        <div>
          <svg
            id="kang"
            width="312"
            height="133"
            viewBox="0 0 312 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.7969 58.7734L18.1953 71.0781V103H0.40625V0.625H18.1953V48.6484L28.0391 36.4844L57.9922 0.625H79.5078L41.4688 45.9766L81.6875 103H60.5938L29.7969 58.7734Z"
              stroke="#BB86FC"
              stroke-width="1"
            />
            <path
              d="M135.055 103C134.305 101.547 133.648 99.1797 133.086 95.8984C127.648 101.57 120.992 104.406 113.117 104.406C105.477 104.406 99.2422 102.227 94.4141 97.8672C89.5859 93.5078 87.1719 88.1172 87.1719 81.6953C87.1719 73.5859 90.1719 67.375 96.1719 63.0625C102.219 58.7031 110.844 56.5234 122.047 56.5234H132.523V51.5312C132.523 47.5938 131.422 44.4531 129.219 42.1094C127.016 39.7188 123.664 38.5234 119.164 38.5234C115.273 38.5234 112.086 39.5078 109.602 41.4766C107.117 43.3984 105.875 45.8594 105.875 48.8594H88.7891C88.7891 44.6875 90.1719 40.7969 92.9375 37.1875C95.7031 33.5312 99.4531 30.6719 104.188 28.6094C108.969 26.5469 114.289 25.5156 120.148 25.5156C129.055 25.5156 136.156 27.7656 141.453 32.2656C146.75 36.7188 149.469 43 149.609 51.1094V85.4219C149.609 92.2656 150.57 97.7266 152.492 101.805V103H135.055ZM116.281 90.6953C119.656 90.6953 122.82 89.875 125.773 88.2344C128.773 86.5938 131.023 84.3906 132.523 81.625V67.2812H123.312C116.984 67.2812 112.227 68.3828 109.039 70.5859C105.852 72.7891 104.258 75.9062 104.258 79.9375C104.258 83.2188 105.336 85.8438 107.492 87.8125C109.695 89.7344 112.625 90.6953 116.281 90.6953Z"
              stroke="#BB86FC"
              stroke-width="1"
            />
            <path
              d="M183.359 26.9219L183.852 35.7109C189.477 28.9141 196.859 25.5156 206 25.5156C221.844 25.5156 229.906 34.5859 230.188 52.7266V103H213.102V53.7109C213.102 48.8828 212.047 45.3203 209.938 43.0234C207.875 40.6797 204.477 39.5078 199.742 39.5078C192.852 39.5078 187.719 42.625 184.344 48.8594V103H167.258V26.9219H183.359Z"
              stroke="#BB86FC"
              stroke-width="1"
            />
            <path
              d="M244.672 64.3984C244.672 52.5859 247.438 43.1641 252.969 36.1328C258.547 29.0547 265.93 25.5156 275.117 25.5156C283.789 25.5156 290.609 28.5391 295.578 34.5859L296.352 26.9219H311.75V100.68C311.75 110.664 308.633 118.539 302.398 124.305C296.211 130.07 287.844 132.953 277.297 132.953C271.719 132.953 266.258 131.781 260.914 129.438C255.617 127.141 251.586 124.117 248.82 120.367L256.906 110.102C262.156 116.336 268.625 119.453 276.312 119.453C281.984 119.453 286.461 117.906 289.742 114.812C293.023 111.766 294.664 107.266 294.664 101.312V96.1797C289.742 101.664 283.18 104.406 274.977 104.406C266.07 104.406 258.781 100.867 253.109 93.7891C247.484 86.7109 244.672 76.9141 244.672 64.3984ZM261.688 65.875C261.688 73.5156 263.234 79.5391 266.328 83.9453C269.469 88.3047 273.805 90.4844 279.336 90.4844C286.227 90.4844 291.336 87.5312 294.664 81.625V48.1562C291.43 42.3906 286.367 39.5078 279.477 39.5078C273.852 39.5078 269.469 41.7344 266.328 46.1875C263.234 50.6406 261.688 57.2031 261.688 65.875Z"
              stroke="#BB86FC"
              stroke-width="1"
            />
          </svg>
        </div>
        <div style={{ color: "#03DAC6", fontSize: "5rem" }}>
          I'm a software engineer based in San Francisco.
        </div>
      </Fade>
    </HeroSection>
  );
};

export default Hero;
