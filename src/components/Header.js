import { useState } from "react";
import 'animate.css';

const Header = () => {
  const [button, setButton] = useState("");
  const [menu, setMenu] = useState("");
  const [navbar, setNavbar] = useState('');

  const handleClick = () => {

    if (button === "") {
      setButton("opened");
      setMenu("active");
    } else {
      setButton("");
      setMenu("");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbar('scroll');
    } else {
      setNavbar('');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className={`header ${navbar}`}>
      <nav className="header__nav container">
        <a href="!#" className="logo">
          <h1 className="animate__animated animate__swing">
            STEAL<span>IM</span>
          </h1>
        </a>
        <ul className={`header__nav-list ${menu}`}>
          <li>
            <a href="#home">Home</a>
            <span></span>
          </li>
          <li>
            <a href="#about">About</a>
            <span></span>
          </li>
          <li>
            <a href="#projects">Projects</a>
            <span></span>
          </li>
          <li>
            <a href="#contact">Contact</a>
            <span></span>
          </li>
        </ul>
        <button
          className={`menu ${button}`}
          onClick={() => handleClick()}
          aria-label="Main Menu"
        >
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Header;
