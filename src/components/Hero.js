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
