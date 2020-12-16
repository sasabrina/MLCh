import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>
          Hecho con <i class="devicon-react-original colored"></i> por Sabrina
          Alvarez
        </p>

        <div className="footer-links">
          <a href="https://github.com/sasabrina">
            <i class="devicon-github-original colored"></i>
          </a>
          <a href="https://www.linkedin.com/in/sabrina-alvarez">
            <i class="devicon-linkedin-plain colored"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
