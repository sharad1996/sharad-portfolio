/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../assets/hero.jpg";

function Header({ ProfileDetails }) {
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
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
