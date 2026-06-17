import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img
            src={`${import.meta.env.BASE_URL}Logo.png`}
            alt="logo"
            className="company-logo"
          />
        </div>

        <ul className="nav-links">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about">
              About Us
            </Link>
          </li>

          <li>
            <a href="#team">
              Team
            </a>
          </li>

          <li>
            <a href="#testimonial">
              Testimonial
            </a>
          </li>

          <li className="dropdown">
            <a href="#services">
              Services <span>▼</span>
            </a>
          </li>

          <li>
            <a href="#magazine">
              Magazine
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

          <li>
            <a href="#partners">
              Partners
            </a>
          </li>

          <li>
            <a href="#property">
              Property Enquiry
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">
            <span>➜</span> Login
          </button>

          <button className="theme-btn">
            ☀
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;