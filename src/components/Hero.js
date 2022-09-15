import "animate.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const { text } = useTypewriter({
    words: ["Frontend Developer", "Web Developer", "Web Designer"],
    loop: 0,
    delaySpeed: 1000,
    typeSpeed: 130,
  });

  return (
    <div className="hero" id="home">
      <div className="hero-content container">
        <div className="description">
          <h2>Mucahit Tasan</h2>
          <h3>
            <span className="code">{"<h3>"}</span>
            {text} {<Cursor />}
            <span className="code">{"</h3>"}</span>
          </h3>
         
        </div>

        <div className="hero-image">
          <svg
            className="hero-me"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="imageId"
                patternUnits="userSpaceOnUse"
                width="1000"
                height="1000"
              >
                <image href="https://avatars.githubusercontent.com/u/88967412?v=4" x="0" y="0" width="1000" height="1000" />
              </pattern>
              <clipPath id="shape">
                <path fill="currentColor">
                  <animate
                    attributeName="d"
                    dur="2s"
                    repeatCount="indefinite"
                    values="
                    M880.5,671.5Q774,843,590,876.5Q406,910,258,799Q110,688,90.5,490.5Q71,293,239.5,195.5Q408,98,567,157.5Q726,217,856.5,358.5Q987,500,880.5,671.5Z;
                    M810,645Q731,790,568,852.5Q405,915,230,814.5Q55,714,81.5,512.5Q108,311,265,234Q422,157,614,137Q806,117,847.5,308.5Q889,500,810,645Z;
                    M880.5,671.5Q774,843,590,876.5Q406,910,258,799Q110,688,90.5,490.5Q71,293,239.5,195.5Q408,98,567,157.5Q726,217,856.5,358.5Q987,500,880.5,671.5Z;
                    "
                  />
                </path>
              </clipPath>
            </defs>
            <g clipPath="url(#shape)">
              <path fill="url(#imageId)">
                <animate
                  attributeName="d"
                  dur="2s"
                  repeatCount="indefinite"
                  values="
        M880.5,671.5Q774,843,590,876.5Q406,910,258,799Q110,688,90.5,490.5Q71,293,239.5,195.5Q408,98,567,157.5Q726,217,856.5,358.5Q987,500,880.5,671.5Z;
        M810,645Q731,790,568,852.5Q405,915,230,814.5Q55,714,81.5,512.5Q108,311,265,234Q422,157,614,137Q806,117,847.5,308.5Q889,500,810,645Z;
        M880.5,671.5Q774,843,590,876.5Q406,910,258,799Q110,688,90.5,490.5Q71,293,239.5,195.5Q408,98,567,157.5Q726,217,856.5,358.5Q987,500,880.5,671.5Z;
        
        "
                />
              </path>
            </g>
          </svg>
        </div>

        <div className="social">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://instagram.com/tasanmucahit"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/mucahitt_tasan"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/mucahittasan"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/mucahittasan"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="scroll-down">
        <svg
          width="30px"
          height="100%"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fillRule: "evenodd",
            clipRrule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
          }}
        >
          <path
            id="wheel"
            d="M123.359,79.775l0,72.843"
            style={{ fill: "none", stroke: "#fff", strokeWidth: 20 }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{ fill: "none", stroke: "#fff", strokeWidth: 20 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
