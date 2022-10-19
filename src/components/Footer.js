import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="social">
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
      </div> */}
      <div className="copy">
        &copy; Copyright 2022 -{" "}
        <a
          href="https://github.com/mucahittasan"
          target="_blank"
          rel="noreferrer"
        >
          Mucahit Tasan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
