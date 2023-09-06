/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Logo from "../assets/hero.jpg";

const SIDEBAR = [
  { name: "Home", icon: "bx bx-home", url: "#hero" },
  { name: "About", icon: "bx bx-user", url: "#about" },
  { name: "Resume", icon: "bx bx-file-blank", url: "#resume" },
  { name: "Portfolio", icon: "bx bx-book-content", url: "#portfolio" },
  { name: "Services", icon: "bx bx-server", url: "#services" },
  { name: "Contact", icon: "bx bx-envelope", url: "#contact" },
];
function Header({ ProfileDetails }) {
  const [selected, setSelected] = useState("Home");
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img src={Logo} alt="" className="img-fluid rounded-circle" />
          <h1 className="text-light">
            <a href="index.html">{ProfileDetails.name}</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href={ProfileDetails.twitter} className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href={ProfileDetails.skype} className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href={ProfileDetails.linkedIn} className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            {SIDEBAR.map((item, i) => (
              <li key={`${item}${i}-key`}>
                <a
                  href={item.url}
                  className={`nav-link scrollto ${
                    item.name === selected ? "active" : ""
                  }`}
                  onClick={() => setSelected(item.name)}
                >
                  <i className={item.icon}></i> <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
